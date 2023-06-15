const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const fs = require('fs');
const PORT = process.env.PORT || 8080;

// const conn = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Space@786',
//     database: 'crud_contact'
// });

var conn=mysql.createConnection({host:"contact.mysql.database.azure.com", user:"pratham", password:"Space@786", database:"crud_contact", port:3306, ssl:{ca:fs.readFileSync("./DigiCertGlobalRootG2.crt.pem")}});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server is running on port 8080');
});

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT * FROM  contacts";
    conn.query(sqlGet, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(result);
    });
});


app.post('/api/insert', (req, res) => {
    const [name, email, contact] = [req.body.name, req.body.email, req.body.contact];
    const sqlInsert = "INSERT INTO contacts (name, email, contact) VALUES (?, ?, ?)";
    console.log(res);
    conn.query(sqlInsert, [name, email, contact], (err, result) => {
        console.log("error : ", err);
        console.log("result : ", result);
        res.send('Hello world');
    });
});

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM contacts WHERE id = ?";
    conn.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});

app.get('/api/get/:id', (req, res) => {
    const {id} = req.params;
    const sqlGet = "SELECT * FROM contacts WHERE id = ?";
    conn.query(sqlGet, id, (err, result) => {
        res.send(result);
    });
});

app.put('/api/update/:id', (req, res) => {
    console.log("Msg phoch gaya");
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    console.log(id);
    const sqlUpdate = "UPDATE contacts SET name = ?, email = ?, contact = ? WHERE id = ?";
    conn.query(sqlUpdate, [name, email, contact, id], (err, result) => {
        if (err) console.log(err);
        res.send("Updated the record in database.");
    });
});


app.get('/', (req,res) => {
    // const sqlInsert = "INSERT INTO contacts (name, email, contact) VALUES ('Pratham', '2020bcs028@sggs.ac.in', '8390450882')";
    // conn.query(sqlInsert, (err, result) => {
    //     console.log("error : ", err);
    //     console.log("result : ", result);
    //     res.send('Hello world');
    // });
    res.send('Hello world');
});