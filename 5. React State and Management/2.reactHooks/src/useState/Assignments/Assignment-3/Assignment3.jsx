//Assignment-3 Create a Valiadation Form using React Hooks.

import React, { useState } from 'react';

function Assignment3() {
  // Step-2: Create State Object to store and set all Input Values and also create a State Object to store and set Errors.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  //Step-3: The First Event which is triggered is onChange, update the formData.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  //Step-4: After Submitting the form, validateForm() is called.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid', formData);
    } else {
      console.log('Form is invalid');
    }
  };

  /* Step-5: Create a Object that will passed to setError(). Each input is Validated adding errors(if) in newError Object. 
     Finally length of Object is returned. */
  const validateForm = () => {
    let newErrors = {};

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name cannot be empty';
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name cannot be empty';
    }

    // Phone Number Validation
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number should be 10 digits';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  return (

  /* Step-1 Create Form Element with 4 Divs. Div should have Label, Input and a Span(Conditionally Rendered). Label should
     have attribute htmlFor. Input should have attribute as type, id, name, value, onChange. These all are followed by a
     Submit Button. */
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Assignment3;