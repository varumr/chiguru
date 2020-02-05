import React, {Component} from 'react';

import { Grid, Row, Col } from "react-bootstrap";

import CustomButton from 'components/CustomButton/CustomButton';


import { Card } from "components/Card/Card.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";

class ListSchedule extends Component {
    onClickHandler = () => {
        console.log('onclickhandler');
        
    };
    render(){
        return (
             <div className="content">
        <Grid fluid>
           <Row>
            <Col md={12}>
                <div  >
                <CustomButton  style={{margin:'10px'}} bsStyle="info" onClick={this.onClickHandler} pullRight fill>
                    Add new Task
                </CustomButton>
                
                </div>
              <Card
                title="Today's Tasks"
                category="Project maintenance schedule"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
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