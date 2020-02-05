import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import Checkbox from 'components/CustomCheckbox/CustomCheckbox';


class NewSchedule extends Component {

    onClickEventhandler = () => {
        console.log('OnClick');
        
    }

    render(){
        return( <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Add New Task"
                content={
                  <form>
                    <Row>
                        <Col md={10}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Project</ControlLabel>
                            <FormControl 
                                inputRef={ el => this.inputEl=el }
                                componentClass="select" placeholder="select">
                                <option value="">select</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </FormControl>
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormInputs
                      ncols={["col-md-10"]}
                      properties={[
                        {
                          label: "Task Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-10"]}
                      properties={[
                        {
                          label: "Date",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "05-02-2020"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-10"]}
                      properties={[
                        {
                          label: "Active",
                          type: "checkbox",
                          bsClass: "form-control pullLeft",
                          placeholder: "City",
                          defaultValue: "checked"
                        }
                      ]}
                    />
                    <Checkbox
                        number="1"
                        isChecked={true}
                        label="Checked"
                    />
                    <Button bsStyle="info" pullRight fill onClick={this.onClickEventhandler}>
                      Add Task
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>);
    }
}

export default NewSchedule;