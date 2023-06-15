import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Footer from './Footer';


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/get');
      setData(response.data);
    } catch (error) {
      toast.error('Failed to load contacts.');
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete contact.');
    }
  };

  useEffect(() => {
    loadData();
  }, [data]);

  return (
    <>
    <div className='flex flex-col h-screen'>
        <div className='flex flex-col justify-center items-center mt-24'>
        <Link to="/addContact">
            <button className='bg-purple-600 text-white font-bold rounded-md p-2'>Add Contact</button>
        </Link>
        <div className='mx-auto'>
            <table className='border border-b border-b-green-500 shadow-md my-4'>
            <thead>
                <tr className='bg-green-600 text-white text-center'>
                <th className='py-2'>No.</th>
                <th className='py-2'>Name</th>
                <th className='py-2'>Email</th>
                <th className='py-2'>Contact</th>
                <th className='py-2'>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={item.ID} className='text-center'>
                    <td className='font-bold py-2'>{index+1}</td>
                    <td className='px-4 py-4'>{item.NAME}</td>
                    <td className='px-4 py-4'>{item.EMAIL}</td>
                    <td className='px-4 py-4'>{item.CONTACT}</td>
                    <td className='px-4 py-4'>
                    <Link
                        to={`/update/${item.ID}`}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/view/${item.ID}`}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                    >
                        View
                    </Link>
                    <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => deleteContact(item.ID)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
        <Footer />
    </>
  );
}
