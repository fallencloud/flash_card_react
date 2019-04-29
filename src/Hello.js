import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div>
        <section className='namecard'>
          <div className='namecard-login'>
            <p className='namecard-greeting'>Hello, student!</p>
          </div>
          <form className='namecard-form' action='/hello' method='post'>
            <label className='namecard-prompt'>
              Please enter your name:
              <input className='namecard-name' type='text' name='username' />
            </label>
            <button className='namecard-submit' type='submit'>
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Hello;
