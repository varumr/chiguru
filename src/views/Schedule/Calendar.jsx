//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment from 'moment';
 
import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import axios from '../../axios-connection';

import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

const localizer = momentLocalizer(moment)
 

export default class CalendarView extends Component {

    state = {
        schedules: [],
        loading: true,
    };

   formatTitle = (task) =>{
    let formattedTitle = task.task;
    let styleTag = [];

    if(task.completed){
     // formattedTitle = <span style={{textDecoration: 'line-through'}}>{formattedTitle}</span>
     //styleTag.push('textDecoration:'line-through''); 
    formattedTitle = <del>{formattedTitle}</del>
    }
    if(task.project == 'polyhouse1'){
      formattedTitle=<span className="text-danger">{formattedTitle}</span>
   } else if(task.project == 'polyhouse2'){
      formattedTitle=<span className="text-secondary">{formattedTitle}</span>
    } else if(task.project == 'polyhouse3'){
      formattedTitle=<span className="text-warning">{formattedTitle}</span>
    } else if(task.project == 'polyhouse4'){
      formattedTitle=<span className="text-success">{formattedTitle}</span>
    }
  
    return formattedTitle;
   }
     

    componentDidMount() {
      let schedules = [];
      axios.get('/schedule.json')
        .then(response => {
            console.log(response.data);
            schedules =[];
            for(let key in response.data){
              schedules.push({
                  id:key,
                  start: new Date(response.data[key].date),
                  end: new Date(response.data[key].date),
                  title: this.formatTitle(response.data[key]),
                  //title: response.data[key].task,
                  allDay:true
                })
            }
             this.setState({
              schedules:schedules}) 
            })
        .catch(error =>{
            console.log(error);
            return schedules;
        })
           
    }

  render() {
    return(
      <Grid>
        <Row>
          <Col md={12}>
              <Card title="Schedule - Month View"
                category="Overall Project maintenance"
                stats=""
                statsIcon=""
                content={
                  <div className="calendar-container" style={{height:'500px',width:'95%',margin:'auto'}}>
                    <Calendar
                      localizer={localizer}
                      events={this.state.schedules}
                      startAccessor="start"
                      endAccessor="end"
                    />
                  </div>
                }
              />
          </Col>
        </Row>
      </Grid>      
    )
  }
}









// const MyCalendar = props => (
//   <div>
//     <Calendar
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//     />
//   </div>
// )

// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'

// // Setup the localizer by providing the moment (or globalize) Object
// // to the correct localizer.
// const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// const MyCalendar = props => (
//         <Grid>
//             <Row>
//           <Col md={12}>
//                 <Card
//                 title="Calandar View"
//                 category="Overall Project maintenance schedule"
//                 stats=""
//                 statsIcon=""
//                 content={
//                   <BigCalendar
//                     localizer={localizer}
//                     events={myEventsList}
//                     startAccessor="start"
//                     endAccessor="end"
//                     />
//                 }
//               />
//           </Row>  
//         </Grid>
// )

// //export default BigCalendar;