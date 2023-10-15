/* eslint-disable no-unused-vars */
import React from "react";

function Contact() {
  return (
    <div id="Contact" className="max-w-[1040PX] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form action="https://getform.io/f/af1b433a-36a8-4f97-b90e-077990843be1" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cold-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-sm py-2">Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 'type="text" placeholder="name" name="name" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-sm py-2">Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 'type="text" name="phone" placeholder="phone number" required />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="" className="uppercase text-sm py-2">Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 'type="email" name="email"  placeholder="example@gmail.com" required/>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="" className="uppercase text-sm py-2">Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name="subject" placeholder="subject" required />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="" className="uppercase text-sm py-2">Message</label>
            <textarea className="border-2 rounded-lg p-3 border-gray-300"  rows={10}  name='message'placeholder="Message..." required/>
          </div>
          <button className="bg-[#0015be] text-gray-100 mt-4 w-full p-4 rounded-lg">send Message </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
