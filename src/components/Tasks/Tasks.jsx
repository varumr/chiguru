import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import axios from '../../axios-connection';


export class Tasks extends Component {
    state = {
        schedules: [],
        loading: true,
    }

    componentWillMount(){
      this.updateTaskList();
    }

    updateTaskList = () => {  
        axios.get('/schedule.json?orderByChild="$project"')
        .then(response => {
            console.log(response.data);
            const schedules =[];
            for(let key in response.data){
             // console.log(key);  
              schedules.push({
                    ...response.data[key],
                    id:key
                })
            }
            schedules.sort(function(a, b) {
                var nameA = a.project.toUpperCase(); // ignore upper and lowercase
                var nameB = b.project.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                // names must be equal
                return 0;
                });

            console.log(schedules);
            
            this.setState({
             // loading:false, 
              schedules:schedules})        
        })
        .catch(error =>{
            //this.setState({loading:false})
            console.log(error);
            
        })
    }

    taskCompletedHandler = (key, number, oldStatus, task) => {
      const newStatus = !oldStatus;
      let updatedTask = {
        ...task,
        completed: newStatus,
        completedBy: newStatus ?'admin' : '',
        completedOn: newStatus ? new Date() : null
      }
      
      axios.put('/schedule/'+ key + '.json', updatedTask)
        .then(response => {
          this.updateTaskList();
        })
        .catch(error => {
            console.log(error);
        });   
    }

taskDeletedHandler = ( key) => {
  console.log('taskDeleteHandler' + key);
        axios.delete('/schedule/'+ key + '.json')
        .then(response => {
          this.updateTaskList();
        })
        .catch(error => {
            console.log(error);
        }); 
}
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const tasksList = this.state.schedules;
    var tasks = [];
    var number;

    for (var i = 0; i < tasksList.length; i++) {
      number = "checkbox" + i;
      const taskKey = tasksList[i].id;
      const taskCompleted = tasksList[i].completed;
      const task = tasksList[i];
      let completedBy = 
          <Tooltip id="completedBy_tooltip">
            Not Complete
          </Tooltip>;
      
      if(taskCompleted){
        completedBy = <Tooltip id="completedBy_tooltip">
          By - {tasksList[i].completedBy}<br />
          On - {new Date(tasksList[i].completedOn).toLocaleDateString("en-US")}
          </Tooltip>;
      } 
      tasks.push(

        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={tasksList[i].completed ? true : false}
              onClick={() => this.taskCompletedHandler(taskKey, i, taskCompleted, task)}
            />
          </td>
          <OverlayTrigger placement="left" overlay={completedBy}>
          <td>
            <span style={{textDecoration:tasksList[i].completed ?'line-through':''}}>
              {tasksList[i].task} 
            </span>
           </td>
          </OverlayTrigger>
          <td>{tasksList[i].project}</td>
          <td>{tasksList[i].date}</td>  
          <td className="td-actions">
            {/* <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger> */}
            <OverlayTrigger placement="top" overlay={completedBy}>
              <Button bsStyle="danger" 
              onClick={() => this.taskDeletedHandler(taskKey)} 
              simple type="button" 
              bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger>
          </td>
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
