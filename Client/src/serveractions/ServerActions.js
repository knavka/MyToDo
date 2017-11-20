import { SERVER } from '../constants/Server';
import _axios from 'axios';


export function getTasksFromServer(loadFunc) {
       _axios.get(SERVER+'/').then((response)=>{      
         return response.data;
      })
       .then((data)=>{
        loadFunc(data);
      })
   }

export function postTaskToServer(id, props) {
var req_data = {
    id: id,
    props: props
}
    _axios.post(SERVER+'/', req_data)
    	  .then(function (response) {
    	  })
    	  .catch(function (err) {
    	  })
   }


export function deleteTaskFromServer(id) {
    _axios.delete(SERVER+'/'+id)
    	  .then(function (response) {
    	  })
    	  .catch(function (err) {
    	  })
   }