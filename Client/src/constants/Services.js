

import iconPlumber from '../img/icons/noun_321315_cc.svg'
import iconElectrician from '../img/icons/noun_321339_cc.svg'
import iconGardener from '../img/icons/noun_321363_cc.svg'
import iconHouseKeeper from '../img/icons/noun_321395_cc.svg'
import iconCook from '../img/icons/noun_321399_cc.svg'

export const SERVICES = {
    'Electrician':{
    	'icon':iconElectrician,
    	'tasks':{'Install the outlet':{},'Connect the appliance':{},'Replace wiring':{}}
    
    },
    'Plumber':{
    	'icon':iconPlumber,
    	'tasks':{'Unblock a toilet':{},'Unblock a sinc':{},'Fix a water leak':{},'Install a sins':{}, 'Install a shower':{}, 'Install a toilet':{}}
    },
    'Gardener':{
    	'icon':iconGardener,
    	'tasks':{'Cat lown':{}, 'Сut bush':{}, 'Care of flowers':{}, 'Organization of the landscape':{}}

    },
    'HouseKeeper':{
    	'icon':iconHouseKeeper,
    	'tasks':{'House cleaning':{}, 'Laundry':{}, 'Babysitting':{}}
    },
    'Cook':{
    	'icon':iconCook,
    	'tasks':{'Ready-made lunch':{}, 'Cake':{}, 'Sweets':{}, 'Semifinished products':{}}
    }
  }