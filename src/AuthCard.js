import React from 'react';

const AuthCard = props => {
  const { name, logout } = props;
  return (
    <div className='namecard-login'>
      <p className='namecard-greeting'>Welcome, {name}!</p>
      <form
        className='namecard-exit'
        onSubmit={e => {
          logout(e);
        }}
      >
        <button type='submit'>
          <img src='/img/close.svg' />
        </button>
      </form>
    </div>
  );
};

export default AuthCard;
