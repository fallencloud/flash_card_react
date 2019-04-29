import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';

class Card extends Component {
  state = {
    showQuestion: true,
    cards: [
      {
        question: 'What language are Express apps written in?',
        hint: 'It starts with a "J"',
        answer: 'JavaScript'
      },
      {
        question:
          "What is one way a website can store data in a user's browser?",
        hint: 'They are delicious with milk',
        answer: 'Cookies'
      },
      {
        question:
          "What is a common way to shorten the response object's name inside middleware?",
        hint: 'It has the same abbreviation as "resolution"',
        answer: 'res'
      },
      {
        question: 'How many different values can booleans have?',
        hint: 'Think: binary',
        answer: '2'
      },
      {
        question: 'Which HTML element can contain JavaScript?',
        hint: 'It starts with an "s"',
        answer: '<script>'
      }
    ],
    currentCard: {}
  };

  componentDidMount() {
    this.getCard();
  }

  getCard = () => {
    const cardsLength = this.state.cards.length;
    const randomIndex = Math.floor(Math.random() * cardsLength);
    this.setState({
      currentCard: this.state.cards[randomIndex],
      showQuestion: true
    });
  };

  handleCardFlip = () => {
    this.setState(prevState => ({
      showQuestion: !prevState.showQuestion
    }));
  };
  render() {
    const { question, hint, answer } = this.state.currentCard;
    const showSide = this.state.showQuestion ? (
      <Question
        question={question}
        hint={hint}
        handleCardFlip={this.handleCardFlip}
        getCard={this.getCard}
      />
    ) : (
      <Answer
        answer={answer}
        handleCardFlip={this.handleCardFlip}
        getCard={this.getCard}
      />
    );

    return <section className='flashcards'>{showSide}</section>;
  }
}

export default Card;
