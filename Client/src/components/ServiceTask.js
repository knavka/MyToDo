
import React, { Component } from 'react'
import {SERVICES} from '../constants/Services'

export default class ServiceTask extends Component {
  constructor() {
    super();
    this.services=SERVICES;

    for (let keyServ in this.services) {
      for (let key in this.services[keyServ].tasks){
        let handleOnClick=()=>this.props.setProp('serviceTask', key);
        handleOnClick=handleOnClick.bind(this);
        this.services[keyServ].tasks[key].handleOnClick=handleOnClick;
      }
    }
  }


  render() {
    function serviceTaskBlocks (services, currentType, currentTask) {
      let blocks=[];
      if (currentType) {

        for (let key in services[currentType].tasks) {

          let conteinerClassName='flex-col appmap-task-container '+(currentTask===key?'choosen':'');

          let el=
          <div key={key} className={conteinerClassName}  onClick={services[currentType].tasks[key].handleOnClick}>
          <div className='appmap-task-title'>{key}</div>
          </div>
          blocks.push(el);
        }
      }
      return blocks;
    }

    let ServiceTypesJSX=<div className='flex-col appmap-props-block'>
    <div className='appmap-block-title'>
    {this.props.serviceType.toUpperCase()} TYPE     
    </div>
    <div className='flex-row appmap-tasks-container ' >
    {serviceTaskBlocks(this.services, this.props.serviceType, this.props.serviceTask)}
    </div>
    </div>;

    return ServiceTypesJSX

  }
}

