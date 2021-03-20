import React,{useState} from 'react'
import TasksStatuses from '../constants/TasksStatuses';
import TasksList from './TasksList';

const TasksPage = (props) => {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitlle] = useState("");
    const [description, setDescription] = useState("");

    const formToggler = () => {
        showCardForm(!cardForm)
    }

    const onCreateTask = (e) =>{
        e.preventDefault();
        props.onCreateTask({
            title,
            description
        })
        resetForm();
    }

const resetForm = () =>{
    setTitlle("");
    setDescription("");
    showCardForm(false);
}

    const onChangeTitle = (e) =>{
        setTitlle(e.target.value);
    }

    const onChangeDescription = (e) =>{
        setDescription(e.target.value);
    }

const renderTaskLists = () =>{
    const {tasks} = props;
    return TasksStatuses.map((status, id) => {
        const statusTasks = tasks.filter(task => task.status === status);
    return(
        <div className="col-md-3 card m-2 p-0"
        key={id}>
<TasksList key={status} status={status} tasks={statusTasks}
onStatusChange={props.onStatusChange}
onRemoveTask={props.onRemoveTask}
/>
</div>
    )
    }
    )
}


    return (

        <div className="container my-5">
                    <div className="jumbotron py-3">
                        <div className="row">
                        <div className="col-md-2">
                        <button className="btn btn-success m-3" onClick={formToggler}>
                            +
                            </button>
    
                        </div>

                        <div className="col-md-10"> 
                            <h2 className="display-4 text-center text-uppercase">
                            Task Manager
                            </h2>
                        </div>
                        </div>

{cardForm && (

                        <form onSubmit={onCreateTask}> 
                            <div className="form-group">
                                <input type="text" className="form-control"
                                placeholder="Task Title"
                                onChange={onChangeTitle}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control"
                                placeholder="Task Description"
                                onChange={onChangeDescription}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                        )}
                        </div>

                        <div className="row d-flex justify-content-center position-relative" style={
                            {background: "#f4c2c2"}}>
                            {renderTaskLists()}
                        </div>
        </div>
    )
}

export default TasksPage
