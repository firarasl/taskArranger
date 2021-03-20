import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from './components/TasksPage';
import {connect} from 'react-redux';
import {editTask, createTask,removeTask} from './actions';



function App(props) {
const onStatusChange = (id, status) =>{
  props.dispatch(editTask(id, {status}));
}

const onRemoveTask=(id)=>{
  props.dispatch(removeTask(id));
}
const onCreateTask = ({title, description})=>{
  props.dispatch(createTask({title, description}))
}

  return   <div><TasksPage
   onStatusChange={onStatusChange}
   onCreateTask={onCreateTask}
   onRemoveTask= {onRemoveTask}
    tasks={props.tasks}/></div>

}

const mapStateToProps = state =>{
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App);
