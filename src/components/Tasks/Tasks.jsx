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

export class Tasks extends Component {
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const tasksList = [
      {title:'Check drip irrigation setup',
      project: 'Polyhouse 1',
      dueDate: '03/02/2020',
      active: true,
      completed:false},
      {title:'Koli gobbara Fertilizer for Top Secret Plants',
      project: 'Polyhouse 2',
      dueDate: '03/02/2020',
      active: true,
      completed:false},
      {title:'Organic Pestiside for 1/2 polyhouse',
      project: 'Polyhouse 3',
      dueDate: '03/02/2020',
      active: true,
      completed:false},
      {title:'Neem solution spray for baby plants',
      project: 'Polyhouse 4',
      dueDate: '03/02/2020',
      active: true,
      completed:false},
      {title:'Cleanup the pressure pumps',
      project: 'Polyhouse 4',
      dueDate: '03/02/2020',
      active: true,
      completed:false},
    ];
    var tasks = [];
    var number;
    for (var i = 0; i < tasksList.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            />
          </td>
          <td>{tasksList[i].project}</td>
          <td>{tasksList[i].title}</td>
          <td>{tasksList[i].dueDate}</td>

          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
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
