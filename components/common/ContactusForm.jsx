import React, { useRef, useState } from "react";
import FormInput from "../UI/FormInput";
import Container from "./Container";
import GoPayraButton from "../UI/GoPayraButton";
import emailjs from "@emailjs/browser";

const ContactusForm = () => {
  const form = useRef();
  const [thankyouMsg, setThankyouMsg] = useState(false);
  const sendEmail = (e) => {
    console.log('first')
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xooq3xm",
        "template_yptdxop",
        form.current,
        "ojtsBTMVcEk_UkftL"
      )
      .then(
        (result) => {
          console.log('result.text', result.text);
          setThankyouMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
        {thankyouMsg ? <div className="col-span-2 pr-16">
          <h1 className="text-heading font-semibold mb-10" data-aos="zoom-in">
            Send your message
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <FormInput text="Your Name" name="from_name"/>
            <FormInput text="Email Address" name="from_email"/>
            <FormInput text="Mobile Number" name="from_mobile"/>
            <label className="font-medium block mb-4">Message *</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="w-full pl-8 py-[1.375em] rounded-md border border-liteBorder focus:outline-blue-600 hover:border-blue-400 mb-8"
              placeholder="Write your message"
            ></textarea>

            <p className="text-goDesc mb-8">
              We want your input: questions, bug reports, complaints, praise,
              feature requests — every little bit helps. Let us know what we can
              do to improve gopayra.
            </p>

            <input type="submit" value="Send" className="bg-gopayra py-2 p-4 text-white rounded-lg hover:bg-gopayraLight cursor-pointer hover:text-black transition-all"/>
          </form>
        </div> : <h1 className="h- flex justify-center items-center text-gopayra font-bold text-4xl">Thank you for your message we will get back to you soon</h1>}

        <div>
          <h1 className="text-heading font-semibold mb-10" data-aos="zoom-in">
            Address
          </h1>
          <address>
            House# 10, Road# 10, Nikunja 2,Khilkhet, Dhaka (near Desko Main
            office), Bangladesh
          </address>
          <button className="text-gopayra text-lg font-semibold my-6">
            View in Map
          </button>
          <p className="text-lg">Call: 01533629552</p>
          <p className="text-lg">Email: info.gopayra@gmail.com</p>
        </div>
      </div>
    </Container>
  );
};

export default ContactusForm;
