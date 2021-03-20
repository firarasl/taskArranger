import Reaact from 'react';
import TasksStatuses from '../constants/TasksStatuses';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = (props) =>{

    function onRemoveTask(){
        props.onRemoveTask(props.task.id);
    }
    function onStatusChange(e){
        props.onStatusChange(props.task.id, e.target.value);
    }

    return (
        <div>
            <form onChange={onStatusChange}>
                <select defaultValue={props.task.status}>
                 {TasksStatuses.map(status => (
                     <option value={status} key={status}>
                         {status}
                     </option>
                 ))}
                </select>
            </form>
<h2 className="card-title mt-3 text-uppercase px-2" style={{color: "#3a4"}}>{props.task.title}</h2>
<p className="card-text mb-3 text-muted font-weight-bold px-2">{props.task.description}</p>

<FontAwesomeIcon icon={faTrash} className="float-right m-5"
style={{color: "tomato",
cursor:"pointer"
}}
onClick={() => onRemoveTask(props.task.id)}
/>
        </div>
    )
}

export default Task;