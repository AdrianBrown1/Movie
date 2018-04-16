import React, { Component } from 'react';
import Header from '../../components/header/header'

export default class ErrorPage extends Component {
  
  render() {
    const { history } = this.props;
    return (
      <div className="error__container">
        <Header history={history}/>
        <span className='error__title'> error 404! page not found</span> 
      </div>
    );
  }
}