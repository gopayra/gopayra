import React from 'react';
import FormInput from '../UI/FormInput';
import Container from './Container';
import GoPayraButton from '../UI/GoPayraButton';

const ContactusForm = () => {  
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mt-20'>
        <div className='col-span-2 pr-16'>
          <h1 className='text-heading font-semibold mb-10' data-aos="zoom-in">Send your message</h1>
          <FormInput text="Your Name" />
          <FormInput text="Email Address" />
          <FormInput text="Mobile Number" />
          <label className='font-medium block mb-4'>Message *</label>
          <textarea name="message" id="" cols="30" rows="10" className='w-full pl-8 py-[1.375em] rounded-md border border-liteBorder focus:outline-blue-600 hover:border-blue-400 mb-8' placeholder='Write your message'></textarea>

          <p className='text-goDesc mb-8'>We want your input: questions, bug reports, complaints, praise, feature requests — every little bit helps. Let us know what we can do to improve gopayra.</p>

          <GoPayraButton text="Send message" link=""/>
        </div>
        <div>
          <h1 className='text-heading font-semibold mb-10' data-aos="zoom-in">Address</h1>
          <address>
            House# 10, Road# 10, Nikunja 2,Khilkhet, Dhaka (near Desko Main office), Bangladesh
          </address>
          <button className='text-gopayra text-lg font-semibold my-6'>View in Map</button>
          <p className='text-lg'>Call: 01533629552</p>
          <p className='text-lg'>Email: info.gopayra@gmail.com</p>
        </div>
      </div>
    </Container>
  );
};

export default ContactusForm;