
import React, { Component } from 'react'


export default class Description extends Component {
  constructor() {
    super();
    this.handleOnChange=this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.props.setProp('description', e.target.value);
  }

  render() {
    return (       
     <div className='flex-col appmap-props-block'>
     <div className='appmap-block-title'>
     DESCRIPTION     
     </div>
     <input className='appmap-input' type='text' name='description' value={this.props.description} onChange={this.handleOnChange}/>


     </div>
     )
   }
 }


