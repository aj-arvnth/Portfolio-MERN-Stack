import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import styled from 'styled-components'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    fromEmail: '',
    message: ''
  })
  const [hover, setHover] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(fd => ({ ...fd, [name]: value }))
  }

  const sendEmail = async e => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/api/msg/send-custom-email', {
        toEmail: 'pramod.krish2002@gmail.com',
        name: formData.name,
        fromEmail: formData.fromEmail,
        message: formData.message
      })
      toast.success('Message sent! I will get back to you soon.')
      setFormData({ name: '', fromEmail: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Oops! Something went wrong.')
    }
  }

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col justify-center items-center sm:items-start">
        {/* animation pane */}
        <div className="h-[400px] sm:h-[300px] sm:w-full flex justify-center items-center">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_isbiybfh.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>

        {/* form pane */}
        <div className="flex flex-col h-[400px]">
          <StyledContactForm>
            <form onSubmit={sendEmail}>
              <label className="text-gray-300 text-lg">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700/10 ring-3 ring-gray-100/10 focus:caret-white text-white"
                required
              />

              <label className="text-gray-300 text-lg">Your Email</label>
              <input
                type="email"
                name="fromEmail"
                value={formData.fromEmail}
                onChange={handleChange}
                className="bg-gray-700/10 ring-3 ring-gray-100/10 focus:caret-white text-white"
                required
              />

              <label className="text-gray-300 text-lg">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-700/10 ring-3 ring-gray-100/10 focus:caret-white text-white"
                required
              />

              <button
                type="submit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative px-7 py-4 bg-gray-700/10 rounded-lg leading-none"
              >
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600 -rotate-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <span className={`text-white ${hover ? 'flex' : 'hidden'}`}>Send</span>
                </span>
              </button>
            </form>
          </StyledContactForm>
          <ToastContainer position="bottom-right" />
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
    flex-direction: column;
    width: 85%;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 7px;
      margin-top: 0.5rem;
      border: 2px solid rgba(42, 39, 39, 0.82);
      border-radius: 5px;
      outline: none;
      background-color: rgba(55, 65, 81, 0.1);
      color: white;
      &:focus {
        border-color: rgba(0, 206, 158, 1);
      }
    }

    textarea {
      min-height: 100px;
    }

    button {
      margin-top: 0.75rem;
      cursor: pointer;
      background-color: rgb(55 65 81 / 0.1);
      color: white;
      width: 80px;
      border: 2px solid rgba(42, 39, 39, 0.82);
      transition: 0.1s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        width: 160px;
        background-color: rgba(255, 0, 0, 0.4);
        transition-delay: 0.1s;
      }
    }
  }
`
