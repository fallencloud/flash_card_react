import React, { Component } from 'react';

const NameCardForm = props => {
  const { setName } = props;
  return (
    <>
      <div className='namecard-login'>
        <p className='namecard-greeting'>Hello, student!</p>
      </div>
      <form
        className='namecard-form'
        onSubmit={e => setName(e, document.getElementById('username').value)}
      >
        <label className='namecard-prompt'>
          Please enter your name:
          <input
            className='namecard-name'
            type='text'
            name='username'
            id='username'
          />
        </label>
        <button className='namecard-submit' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default NameCardForm;
