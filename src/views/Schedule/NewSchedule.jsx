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
import  Input  from "components/FormInputs/Input.jsx";
import Checkbox from 'components/CustomCheckbox/CustomCheckbox';
import CustomButton from 'components/CustomButton/CustomButton';

import axios from '../../axios-connection';



class NewSchedule extends Component {
     state ={
        addTaskForm:{
                project:{
                    elementType: 'select',
                    elementConfig: {
                        placeholder: 'Project Name',
                        options:[{value: 'polyhouse1', displayValue: 'Poly House 1'},
                                 {value: 'polyhouse2', displayValue: 'Poly House 2'},
                                 {value: 'polyhouse3', displayValue: 'Poly House 3'},
                                 {value: 'polyhouse4', displayValue: 'Poly House 4'}
                                ]
                    },
                    value: 'polyhouse1',
                    validation:{},
                    valid:true,
                    touched:false 
                },

                task: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Task Name'
                    },
                    validation: {
                        required: true
                    },
                    valid:false,
                    value: '',
                    touched:false ,
                    errorMessage:'Please enter the task'
                },
                date: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'date',
                        placeholder: 'Due date'
                    },
                    validation: {
                        required: true,
                        minLength:10,
                        maxLength:10
                    },
                    valid:false,
                    value: '',
                    touched:false ,
                    errorMessage:'Please enter a valid date'
                },
                active: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'checkbox',
                        placeholder: 'is Active?',
                    },
                    validation: {
                        required: false
                    },
                    valid:true,
                    value: true,
                    touched:false ,
                    errorMessage:''
                },                
        },
        formIsValid:false,
        loading:false,
    }
    onClickEventhandler = () => {
        console.log('OnClick');
        
    }

    checkValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

     inputChangedHandler = (event, inputIdentifier) => {
        const updatedTaskForm = {
            ...this.state.addTaskForm
        }

        const updatedFormElement = {
            ...updatedTaskForm[inputIdentifier]
        }  
        console.log(event.target.value);
        
        event.target.type == 'checkbox' ?
            updatedFormElement.value = event.target.checked
            : updatedFormElement.value = event.target.value;
     
        console.log(updatedFormElement);
        
        updatedFormElement.valid =  this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedTaskForm[inputIdentifier] = updatedFormElement;            

        let formIsValid = true;
        for(let inputIdentifier in updatedTaskForm){
            formIsValid = updatedTaskForm[inputIdentifier].valid && formIsValid;
        }
       // console.log(formIsValid);
        
        this.setState({addTaskForm: updatedTaskForm, formIsValid: formIsValid});      
    }

    addNewTaskHandler = (event) => {
        event.preventDefault();
        console.log('addNewTaskHandler');
        
        const formData = {};
        for(let formElementIdentifier in this.state.addTaskForm){
            formData[formElementIdentifier] = this.state.addTaskForm[formElementIdentifier].value;
        }
        formData['completed'] = false;
        formData['createdOn'] = '06/02/2020';
        console.log(formData);
        this.setState({loading: true});
       
        const schedule = formData;
        axios.post('/schedule.json', schedule)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push('/admin/schedule/list');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });   
    }

    render(){
          const formElementsArray = [];

        for(let key in this.state.addTaskForm){
            formElementsArray.push({
                id: key,
                config: this.state.addTaskForm[key]
            })
        }
      //  console.log(formElementsArray);
        
         let form = (<form onSubmit={this.addNewTaskHandler}>
                    {formElementsArray.map(formElement => (
                        <Input  key={formElement.id}
                                label={formElement.config.elementConfig.placeholder}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                errorMessage={formElement.config.errorMessage}
                                changed={(event) => this.inputChangedHandler(event,formElement.id)}
                        />)
                    )}
                    <CustomButton type='submit' bsStyle="info" fill>
                        Add Schedule
                    </CustomButton>
                </form>);
        return(
            <div className="content">
                <Grid fluid>
                <Row>
                    <Col md={6}>
                    <Card
                        title="Add New Task"
                        content={form}
                    />
                    </Col>
                </Row>
                </Grid>
    </div>
         );
    }
}

export default NewSchedule;



    //     <div className="content">
    //     <Grid fluid>
    //       <Row>
    //         <Col md={8}>
    //           <Card
    //             title="Add New Task"
    //             content={
    //               <form>
    //                 <Row>
    //                     <Col md={10}>
    //                     <FormGroup controlId="formControlsTextarea">
    //                         <ControlLabel>Project</ControlLabel>
    //                         <FormControl 
    //                             inputRef={ el => this.inputEl=el }
    //                             componentClass="select" placeholder="select">
    //                             <option value="">select</option>
    //                             <option value="red">Red</option>
    //                             <option value="green">Green</option>
    //                             <option value="blue">Blue</option>
    //                         </FormControl>
    //                     </FormGroup>
    //                     </Col>
    //                 </Row>
    //                 <FormInputs
    //                   ncols={["col-md-10"]}
    //                   properties={[
    //                     {
    //                       label: "Task Name",
    //                       type: "text",
    //                       bsClass: "form-control",
    //                       placeholder: "",
    //                       defaultValue: "",
    //                     },
    //                   ]}
    //                 />
    //                 <FormInputs
    //                   ncols={["col-md-10"]}
    //                   properties={[
    //                     {
    //                       label: "Date",
    //                       type: "date",
    //                       bsClass: "form-control",
    //                       placeholder: "",
    //                       defaultValue: "05-02-2020"
    //                     }
    //                   ]}
    //                 />
    //                 <FormInputs
    //                   ncols={["col-md-10"]}
    //                   properties={[
    //                     {
    //                       label: "Active",
    //                       type: "checkbox",
    //                       bsClass: "form-control pullLeft",
    //                       placeholder: "City",
    //                       defaultValue: "checked"
    //                     }
    //                   ]}
    //                 />
    //                 <Checkbox
    //                     number="1"
    //                     isChecked={true}
    //                     label="Checked"
    //                 />
    //                 <Button bsStyle="info" pullRight fill onClick={this.onClickEventhandler}>
    //                   Add Task
    //                 </Button>
    //                 <div className="clearfix" />
    //               </form>
    //             }
    //           />
    //         </Col>
    //       </Row>
    //     </Grid>
    //   </div>
//     );
//     }
// }

// export default NewSchedule;