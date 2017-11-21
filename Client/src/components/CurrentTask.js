
import React, { Component } from 'react'


export default class CurrentTask extends Component {
  constructor(){
    super();
    this.handleSave=this.handleSave.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }


  handleSave = () => {
    if (this.props.location&&(this.props.serviceType||this.props.serviceTask||this.props.description)){
      this.props.save(this.props.id,
       {location:this.props.location, 
        serviceType:this.props.serviceType, 
        serviceTask:this.props.serviceTask, 
        description:this.props.description,
        date:this.props.date
      }
      );
      this.handleClose();
    }
    else {
      let fields=[];
      if (!this.props.location) fields.push('location');
      if (!this.props.serviceType) fields.push('serviceType');
      this.props.setError(fields);
    }
  }



  handleClose = () => {
    this.props.setProp('location', '');
    this.props.setProp('serviceType', '');
    this.props.setProp('serviceTask', '');
    this.props.setProp('description', '');
    this.props.setProp('date', '');
    this.props.close()
  }


  render() {
    function  Error(data) {
      if (data.errorFields) return <div className='appmap-block-error'>Please, fill {data.errorFields.join(' and ')}</div>
        else return null
      }


    return (       
    <div className='flex-col appmap-CurrentTask-block'>

    <div className='flex-row appmap-container-between'>
    <div className='appmap-block-title'>
    NEW TASK      
    </div>
    <div className='appmap-button appmap-strokeBut' onClick={() => this.handleClose()}>
    CLOSE      
    </div>
    </div>
    <div className='appmap-CurrentTask-descr'>
    {(this.props.serviceType)?'I need a ':''} 
    <b>{(this.props.serviceType)?this.props.serviceType:''}</b> 
    {(this.props.serviceType&&this.props.serviceTask)?' to ':''} 
    <b>{(this.props.serviceType&&this.props.serviceTask)?this.props.serviceTask.toLowerCase():this.props.serviceTask.toLowerCase()}</b> 
    {this.props.description?', ':''} 
    <b>{this.props.description}</b>
    

    </div>
    <div className='appmap-CurrentTask-location'>
    {this.props.location?'My address is ':''} <b>{this.props.location}</b>
    </div>

    <div className='flex-row appmap-container-left'>

    <div className='appmap-button appmap-fillBut' onClick={() => this.handleSave()}>
    {this.props.id?'SAVE TASK':'ADD TASK'}        
    </div>
    <Error errorFields={this.props.errorFields}/>  
    
    </div>

    </div>
    
    )
  }
}

