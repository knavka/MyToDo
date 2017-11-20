
import React, { Component } from 'react'
import {SERVICES} from '../constants/Services'

 export default class ServiceType extends Component {
  constructor() {
   super();
  this.services=SERVICES;
  for (let key in this.services){
    let handleOnClick=()=>this.props.setProp('serviceType', key);
    handleOnClick=handleOnClick.bind(this);
    this.services[key].handleOnClick=handleOnClick;
   }
  }

  render() {
    function serviceTypeBlocks (services, currentType) {
      let blocks=[];
      for (let key in services) {

                let conteinerClassName='flex-col appmap-icon-container '+(currentType===key?'choosen':'');

                let el=
                <div key={key} className='flex-col appmap-type-container'>
              
                <div className={conteinerClassName}  onClick={services[key].handleOnClick}>
                <img className='appmap-icon' src={services[key].icon} alt={key}/>
                
                </div>
                <div className='appmap-icon-title' >{key}</div>
                </div>
                blocks.push(el);
      }
      return blocks;
      }

    let ServiceTypesJSX=<div className='flex-col appmap-props-block'>
              <div className='appmap-block-title'>
              SERVICE TYPE     
              </div>
              <div className='flex-row appmap-icons-container ' >
              {serviceTypeBlocks(this.services,this.props.serviceType )}
              </div>
        </div>;


  return ServiceTypesJSX

  }
}

