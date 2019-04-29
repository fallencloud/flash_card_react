import React, { Component } from 'react';

const Question = props => {
  const { question, hint, handleCardFlip, getCard } = props;
  return (
    <div className='card card-question'>
      <div className='card-header' />
      <h1 className='card-title'>question</h1>
      <div id='content'>
        <h2>{question}</h2>
        <p className='hint'>
          <i>{hint}</i>
        </p>
      </div>
      <div className='card-flip-wrap' onClick={() => handleCardFlip()}>
        <img className='card-flip' src='/img/flip.svg' />
      </div>
      <div className='card-next' onClick={() => getCard()}>
        <img src='/img/next.svg' />
      </div>
    </div>
  );
};

export default Question;
