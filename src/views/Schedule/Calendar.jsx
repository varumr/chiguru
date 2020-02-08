//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment from 'moment';
 
import React, { Component } from 'react'
//import BigCalendar from 'react-big-calendar'
import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from '../../axios-connection';

import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

const localizer = momentLocalizer(moment)
 

export default class CalendarView extends Component {

    state = {
        schedules: [],
        loading: true,
    }


    componentDidMount() {
      
      //   let schedules = [{
      //       start: new Date('02/02/2020'),
      //       end: new Date('02/02/2020'),
      //       title: 'testxczv cvzxcvs',
      //       allDay:true
      //     },
      //     {
      //       start: new Date('02/05/2020'),
      //       end: new Date('02/05/2020'),
      //       title: 'testsadfasf',
      //       allDay:true
      //     },{
      //       start: new Date('02/06/2020'),
      //       end: new Date('02/06/2020'),
      //       title: 'test wer',
      //       allDay:true
      //     },{
      //       start: new Date('02/07/2020'),
      //       end: new Date('02/07/2020'),
      //       title: 'test dfwer',
      //       allDay:true
      //     },{
      //       start: new Date('02/07/2020'),
      //       end: new Date('02/07/2020'),
      //       title: 'test werqwre',
      //       allDay:true
      //     },{
      //       start: new Date('02/02/2020'),
      //       end: new Date('02/02/2020'),
      //       title: 'test',
      //       allDay:true
      //     }];

      //     console.log(schedules);
          
      //  // return schedules;

      let schedules = [];

        axios.get('/schedule.json')
        .then(response => {
            console.log(response.data);
            schedules =[];
            for(let key in response.data){
             // console.log(key);  
              schedules.push({
                    //...response.data[key],
                    id:key,
                  start: new Date(response.data[key].date),
                  end: new Date(response.data[key].date),
                  title: response.data[key].task,
                  allDay:true
          
                })
            }
           // console.log(schedules);
             this.setState({
              schedules:schedules}) 
            })
        .catch(error =>{
            console.log(error);
            return schedules;
        })
           
    }

  render() {
    //this.updateTaskList();
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