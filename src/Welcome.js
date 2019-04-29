import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <section className='namecard'>
          <div className='namecard-login'>
            <p className='namecard-greeting'>Welcome, fallencloud!</p>
            <form className='namecard-exit' action='/goodbye' method='POST'>
              <button type='submit'>
                <img src='/static/img/close.svg' />
              </button>
            </form>
          </div>
          <h1 className='namecard-prompt'>Let's get started</h1>
          <a className='namecard-submit' href='/cards'>
            Begin!
          </a>
        </section>
      </div>
    );
  }
}

export default Welcome;
