import React, { useContext, useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopUp = ({ setShowLogin }) => {
  //fetch url and setToken function from Storecontext api
  const { url, setToken } = useContext(StoreContext);

  //current state variable to switch login and register
  const [currState, setCurrState] = useState('Login');

  //api state variable
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  //api onchange handler
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    //set value in state variable
    setData((data) => ({ ...data, [name]: value }));
  };

  //login function
  const onLogin = async (event) => {
    //to fix page not to reloaded
    event.preventDefault();

    // call api and use axios package
    let newUrl = url;
    if (currState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }

    //call the api
    const response = await axios.post(newUrl, data);

    //response alert
    if (response.data.success) {
      setToken(response.data.token);

      //save token to local storage
      localStorage.setItem('token', response.data.token);

      //setShowLogin func
      setShowLogin(false);
    } else {
      //alert of react tostify
      alert(response.data.message);
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=''
          />
        </div>

        <div className='login-popup-inputs'>
          {currState === 'Login' ? (
            <></>
          ) : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Enter Your Name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Enter Your Email'
            required
          />

          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Enter Your Password'
            required
          />
        </div>

        <button type='submit'>
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
