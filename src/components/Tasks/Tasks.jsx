/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
        axios.get('/schedule.json?orderby=project')
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
            this.setState({
             // loading:false, 
              schedules:schedules})        
        })
        .catch(error =>{
            //this.setState({loading:false})
            console.log(error);
            
        })
    }

    taskCompletedHandler = (key, number, completed) => {
      console.log('taskCompletedHandler ->' + completed); 
      const newStatus = !completed
      
      axios.put('/schedule/'+ key + '/completed.json', newStatus)
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
      
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={tasksList[i].completed ? true : false}
              onClick={() => this.taskCompletedHandler(taskKey, i, taskCompleted)}
            />
          </td>
          <td style={{textDecoration:tasksList[i].completed ?'line-through':''}}>
           {tasksList[i].task} </td>
          <td>{tasksList[i].project}</td>
          <td>{tasksList[i].date}</td>  
          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" onClick={() => this.taskDeletedHandler(taskKey)} simple type="button" bsSize="xs">
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
