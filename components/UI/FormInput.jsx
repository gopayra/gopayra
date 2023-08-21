import React from 'react';

const FormInput = ({text, name}) => {
  return (
    <div>
      <label className='font-medium block mb-4'>{text} *</label>
      <input
        type="text"
        name={name}
        id="name"
        placeholder="Enter your name"
        className="w-full pl-8 py-[1.375em] rounded-md border border-liteBorder focus:outline-blue-600 hover:border-blue-400 mb-8"
      />
    </div>
  );
};

export default FormInput;