
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CurrentTask extends Component {
  constructor(){
    super();
    this.handleSave=this.handleSave.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }
  static propTypes = {
    save: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }





  handleSave = () => {
  if (this.props.location&&(this.props.serviceType||this.props.serviceTask||this.props.description)){
    this.props.save(this.props.id, {location:this.props.location, serviceType:this.props.serviceType, serviceTask:this.props.serviceTask, description:this.props.description});
    this.handleClose();
  }

  }

  handleClose = () => {
    this.props.setProp('location', '');
    this.props.setProp('serviceType', '');
    this.props.setProp('serviceTask', '');
    this.props.setProp('description', '');
    this.props.close()
  }


  render() {
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
          {
            (this.props.serviceType&&this.props.serviceTask)
            ?'I need a '+this.props.serviceType+' to '+this.props.serviceTask.toLowerCase()+ (this.props.description?', '+this.props.description:'') 
            :(this.props.serviceType
            ?'I need a '+this.props.serviceType+(this.props.description
            ?', '+this.props.description
            :'')
            :this.props.serviceTask+
            (this.props.description
            ?this.props.description
            :'')) 
          }

          </div>
          <div className='appmap-CurrentTask-location'>
          {this.props.location}
          </div>

          <div className='flex-row appmap-container-between'>

              <div className='appmap-button appmap-fillBut' onClick={() => this.handleSave()}>
              {this.props.id?'SAVE TASK':'ADD TASK'}        
              </div>
              
          </div>

        </div>
      
)
  }
}
