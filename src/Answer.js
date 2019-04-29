import React from 'react';

const Answer = props => {
  const { answer, handleCardFlip, getCard } = props;
  return (
    <div className='card card-answer'>
      <div className='card-header' />
      <h1 className='card-title'>answer</h1>
      <div id='content'>
        <h2>{answer}</h2>
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

export default Answer;
