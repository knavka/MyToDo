import styles from "./NewTask.css";
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTask extends Component {
    constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);

  }
  static propTypes = {
    open: PropTypes.func.isRequired,
    clearEditor: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.clearEditor();

    this.props.open()
  }



  render() {
    return (
      <div className='flex-col appmap-NewTask-block'>
      <div className='appmap-NewTask-container'>
      <div className='flex-col appmap-NewTask-button' id='NewTask' onClick={() => this.handleClick()}>
      + New Task        
      </div>
      </div>
      </div>)
  }

  }
    

    

