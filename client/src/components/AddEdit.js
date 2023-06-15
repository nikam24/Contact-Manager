import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    },
  };

const initialState = {
  name: '',
  email: '',
  contact: '',
};

export default function AddEdit() {
  const [state, setState] = useState(initialState);
  const [modalIsOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const { name, email, contact } = state;

  const { id } = useParams();

  let arrofobj = initialState;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/get/${id}`).then((response) => {
      arrofobj = response.data;
      console.log(arrofobj);
      console.log("Yaha tak thik hai bhai");
      if(arrofobj.length !== 0) setState({name:arrofobj[0].NAME, email:arrofobj[0].EMAIL, contact:arrofobj[0].CONTACT});
      console.log(state);
      // console.log(arrofobj);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I got clicked.");
    if (!name || !email || !contact) {
      return toast.error('Please fill in all fields!');
    }
    else if(id) {
      console.log("Yaha hu.");
        try {
            await axios.put(`http://localhost:8080/api/update/${id}`, state);
            toast.success('Contact updated successfully!');
            setState(initialState);
            navigate('/');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    } 
    else {
      console.log("Nahi niche hu.");
      try {
        await axios.post('http://localhost:8080/api/insert', state);
        toast.success('Contact created successfully!');
        setState(initialState);
        navigate('/');
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='mt-2'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='flex justify-end'>
          <button
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
            onClick={closeModal}
          ></button>
        </div>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter name....'
                value={name}
                onChange={handleInputChange}
                className='block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter email....'
                value={email}
                onChange={handleInputChange}
                className='block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label htmlFor='contact' className='block text-sm font-medium text-gray-700'>
              Contact
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='contact'
                name='contact'
                placeholder='Enter contact....'
                value={contact}
                onChange={handleInputChange}
                className='block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button
                type='submit'
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                onSubmit={handleSubmit}
                >
                {id ? 'Update' : 'Save'}
            </button>
            <Link to="/">
                <button
                type='button'
                onClick={closeModal}
                className='ml-2 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                Cancel
                </button>
            </Link>
          </div>
        </form>
      </Modal>
    </div>
  );
}
