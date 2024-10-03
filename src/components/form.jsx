import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formValues.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (formValues.email.indexOf('@') === -1 || formValues.email.indexOf('.') === -1) {
      errors.email = 'Email is invalid';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    }
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', formValues);
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="custom-background container-fluid d-flex align-items-center justify-content-center">
      <div className="row justify-content-center">
        {/* Adjusted grid classes for responsiveness */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="custom-card card shadow-lg p-4">
            <h2 className="custom-heading text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label custom-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control custom-input ${formErrors.firstName ? 'is-invalid' : ''}`}
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label custom-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control custom-input ${formErrors.lastName ? 'is-invalid' : ''}`}
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label custom-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control custom-input ${formErrors.email ? 'is-invalid' : ''}`}
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label custom-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className={`form-control custom-input ${formErrors.password ? 'is-invalid' : ''}`}
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label custom-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={`form-control custom-input ${formErrors.confirmPassword ? 'is-invalid' : ''}`}
                  value={formValues.confirmPassword}
                  onChange={handleInputChange}
                />
                {formErrors.confirmPassword && <div className="invalid-feedback">{formErrors.confirmPassword}</div>}
              </div>

              <button type="submit" className="btn custom-button w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
