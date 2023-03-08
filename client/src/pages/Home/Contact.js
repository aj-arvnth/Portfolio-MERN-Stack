import React, { useRef, useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { vi } from '../../images/vi';
// import { tv } from '../../images/vi';


const Contact = () => {
  const [hover,setHover]=useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oxqqemg', 'template_oiy5pkf', form.current, '6Z4-HH7ABPtRTUNld')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  const notify = () => toast("Message Sent.. I will get back to you soon");

  return (

    <div>
      <SectionTitle title="Say Hello" />

      <div className='flex sm:flex-col justify-center items-center sm:items-start'>
        <div className='h-[400px] sm:h-[300px] sm:w-[100%] flex flex-col justify-center items-center'>
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_isbiybfh.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
        </div>
        <div className="flex flex-col h-[400px]">

          <StyledContactForm className='flex sm:item-center sm:justify-center'>
            <form ref={form} onSubmit={sendEmail}>
              <label className='text-gray-300 text-lg justify-center items-center'>Name</label>
              <input type="text" name="user_name" className='bg-gray-700/10 ring-3 ring-gray-100/10 focus:caret-white text-white border-4 border-red-700' />
              <label className='text-gray-300 text-lg'>Email</label>
              <input type="email" name="user_email" className='bg-gray-700/10 ring-3 ring-gray-100/10 focus:caret-white text-white' />
              <label className='text-gray-300 text-lg'>Message</label>
              <textarea name="message" className='bg-gray-700/10 ring-3 ring-gray-100/10 focus:caret-white text-white' /><br />
              <button onClick={notify} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className=" relative px-7 py-4 bg-gray-700/10 rounded-lg leading-none ">
                <span className='flex items-center space-x-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600 -rotate-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <span className={`text-white ${hover? `flex`:'hidden'}`}>Send</span>
                </span>
              </button>
            </form>
          </StyledContactForm>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Contact

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 85%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgba(42, 39, 39, 0.821);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgba(42, 39, 39, 0.821);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    button{
      margin-top: 0.5rem;
      cursor: pointer;
      background-color: rgb(55 65 81 / 0.1);
      color: white;
      transition: 0.1s;
      width: 80px;
      border: 2px solid rgba(42, 39, 39, 0.821);
      &:hover {
        width: 160px;
        background-color: rgb(255, 0, 0, 0.4);
        transition-delay: 0.1s;
      }
    }
  }
`;
