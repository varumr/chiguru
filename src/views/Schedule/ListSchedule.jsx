import React, {Component} from 'react';

import { Grid, Row, Col,Table } from "react-bootstrap";

import CustomButton from 'components/CustomButton/CustomButton';


import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";


class ListSchedule extends Component {
    onClickHandler = () => {
        console.log('onclickhandler');
        this.props.history.push('/admin/schedule/new');

        
    };
    render(){
        return (
             <div className="content">
        <Grid fluid>
           <Row>
            <Col md={12}>
                <div  >
                <CustomButton  style={{margin:'10px'}} bsStyle="info" onClick={this.onClickHandler} pullRight fill>
                    Add new Schedule
                </CustomButton>
                
                </div>
              <Card
                title="Today's Schedule"
                category="Overall Project maintenance schedule"
                stats=""
                statsIcon=""
                content={
                  <div className="table-full-width">
                    <Table responsive className="table">
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Task</th>
                          <th>Project</th>
                          <th>Due Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <Tasks />
                    </Table>
                  </div>
                }
              />
            </Col>
          </Row>         
        </Grid>
      </div>
        );
    }
}

export default ListSchedule;