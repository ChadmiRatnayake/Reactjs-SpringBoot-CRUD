import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const [errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const navigator = useNavigate();

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors}

    if(firstName.trim()){
      errorsCopy.firstName = '';
    }else{
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if (lastName.trim()){
      errorsCopy.lastName = ''
    }else{
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if (email.trim()){
      errorsCopy.email = ''
    }else{
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function saveEmployee(event){
    event.preventDefault();

    if (validateForm){
      const employee = {firstName, lastName, email}
      console.log()

      createEmployee(employee).then((response) => {
        console.log(response.data);    
        navigator('/employees') 
      })
    }
    
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb=2'>
                <label className='form-label'>First Name: </label>
                <input
                  type='text'
                  placeholder='Enter first name of employee'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={(event) => setFirstName(event.target.value)}
                >
                </input>
              </div>
 
              <div className='form-group mb=2'>
                <label className='form-label'>Last Name: </label>
                <input
                  type='text'
                  placeholder='Enter last name of employee'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={(event) => setLastName(event.target.value)}
                >
                </input>
              </div>

              <div className='form-group mb=2'>
                <label className='form-label'>Email:</label>
                <input
                  type='text'
                  placeholder='Enter email of employee'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={(event) => setEmail(event.target.value)}
                >
                </input>
              </div>

              <div className='text-center'>
              <button className='btn btn-success text-center mt-4' onClick={saveEmployee}>Submit</button>
              </div>
            </form>

          </div>

        </div>
      </div>

    </div>
  )
}

export default EmployeeComponent