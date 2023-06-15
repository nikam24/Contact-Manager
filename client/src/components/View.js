import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function View() {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/get/${id}`).then((response) => {
            setUser(response.data[0]);
        });
    }, [id]);

    return (
        <div className='h-screen w-full flex flex-col items-center mt-24 space-y-2'>
            <div className='shadow-md shadow-black'>
                <h1 className='text-white font-bold text-3xl bg-slate-600 p-4'>User Contact Details</h1>
                <div className='flex flex-col items-start justify-center space-y-4 m-4'>
                    <span>
                        <strong>ID : </strong>
                        <span>{id}</span>
                    </span>

                    <span>
                        <strong>Name : </strong>
                        <span>{user.NAME}</span>
                    </span>

                    <span>
                        <strong>Email : </strong>
                        <span>{user.EMAIL}</span>
                    </span>


                    <span>
                        <strong>Contact : </strong>
                        <span>{user.CONTACT}</span>
                    </span>
                </div>
            </div>
            <Link to='/'>
                <button className='bg-blue-600 rounded-md text-white  p-2'>Go Back</button>
            </Link>
        </div>
    )
}
