import React, { Component } from 'react';
import NameCardForm from './NameCardForm';
import AuthCard from './AuthCard';
import Card from './Card';

const Authenticated = props => {
  const { name, logout } = props;

  return (
    <>
      <AuthCard name={name} logout={logout} />
      <Card />
    </>
  );
};

class NameCard extends Component {
  state = {
    name: '',
    hasName: false
  };

  setName = (e, userName) => {
    e.preventDefault();
    console.log('clicked', userName);
    if (!userName) return;

    this.setState({
      name: userName,
      hasName: true
    });
  };

  logout = e => {
    e.preventDefault();

    this.setState({
      name: '',
      hasName: false
    });
  };

  render() {
    const { name, hasName } = this.state;

    const cardShown = hasName ? (
      <Authenticated name={name} />
    ) : (
      <NameCardForm setName={this.setName} />
    );
    return <section className='namecard'>{cardShown}</section>;
  }
}

export default NameCard;
