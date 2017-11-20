let express=require('express');
let bodyParser=require('body-parser');
let cors = require('cors');

let app=express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
const fs = require('fs');

class TasksStore{
constructor(storeFile) {
this.storeFile=storeFile||"tasks_store.json";
this.getTasks=this.getTasks.bind(this);
this.getTask=this.getTask.bind(this);
this.addTask=this.addTask.bind(this);
this.editTask=this.editTask.bind(this);
this.deleteTask=this.deleteTask.bind(this);

this.getTasks();


}
getTasks() {
try {
   this.tasks=JSON.parse(fs.readFileSync(this.storeFile,"utf8"));

}
catch(e) {
   this.tasks={};
}
finally {
	return this.tasks;
}
}

getTask(taskId) {
	this.getTasks();
	return this.tasks[taskId];
}

addTask(id,task) {
	console.log('id: ' + id, 'task :'+task);
	this.getTasks();
	this.tasks[id]=task;
	console.log('File: ' + this.storeFile, 'data :'+JSON.stringify(this.tasks));
	fs.writeFile(this.storeFile, JSON.stringify(this.tasks), function(req,res){
		return true;

	});
}
editTask(taskId,task) {
	this.getTasks();
	this.tasks[taskId]=task;
	fs.writeFile(this.storeFile, JSON.stringify(this.tasks), function(req,res){
		return true;
	});
}

deleteTask(taskId) {
	this.getTasks();
	delete this.tasks[taskId];
	fs.writeFile(this.storeFile, JSON.stringify(this.tasks), function(req,res){
		return true;
	});
}
}



let tasks = new TasksStore ("tasks_store.json");

app.get('/', function (req, res) {
  let allTasks=tasks.getTasks();
  let allTasksArr=[];
  for (let key in allTasks) {
  	var item=allTasks[key];
  	item.id=key;
  	allTasksArr.push(item);
  }
  console.log(allTasksArr);
  res.send(allTasksArr);
});

app.get('/:taskId', function (req, res) {
  let taskId=req.params.taskId;	
  let currentTask=tasks.getTask(taskId);
  res.send(currentTask);
});

app.post('/', function (req, res) {
  let body=req.body;
  let newTask=body.props;
  let id=body.id;
  let result=tasks.addTask(id,newTask);
  res.send(result);
});

app.put('/:taskId', function (req, res) {
  let taskId=req.params.taskId;
  let editTask=req.body;
  let result=tasks.editTask(taskId, editTask);
  res.send(result);
});

app.delete('/:taskId', function (req, res) {
  let taskId=req.params.taskId;
  let result=tasks.deleteTask(taskId);
  res.send(result);
});
 
app.listen(3001);