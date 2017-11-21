
import React, { Component } from 'react'


export default class Location extends Component {
  constructor() {
    super();
    this.handleOnChange=this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.props.setProp('location', e.target.value);
  }

  render() {
    return (       
     <div className='flex-col appmap-props-block'>
     <div className='appmap-block-title'>
     LOCATION     
     </div>
     <input className='appmap-input' type='text' name='location' value={this.props.location} onChange={this.handleOnChange}/>


     </div>
     )
   }
 }


