import React, {Component} from 'react';
import  Input  from "components/FormInputs/Input.jsx";
import CustomButton from 'components/CustomButton/CustomButton';

class NewExpense extends Component {
      state ={
        addExpenseForm:{
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
                transactionType:{
                    elementType: 'select',
                    elementConfig: {
                        placeholder: 'Transaction Type',
                        options:[{value: 'cash', displayValue: 'Cash'},
                                 {value: 'accountTransfer', displayValue: 'Account Transfer'},
                                 {value: 'cheque', displayValue: 'Cheque'},
                                ]
                    },
                    value: 'cash',
                    validation:{},
                    valid:true,
                    touched:false 
                },
                From: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Who gave money?'
                    },
                    validation: {
                        required: true
                    },
                    valid:false,
                    value: '',
                    touched:false ,
                    errorMessage:'please mention who gave money'
                },
                To: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'To whom money was given?'
                    },
                    validation: {
                        required: true,
                    },
                    valid:false,
                    value: '',
                    touched:false ,
                    errorMessage:'please mention to whom money was given'
                },
                date: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'date',
                        placeholder: 'Given on'
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
                description: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'textarea',
                        placeholder: 'Description',
                    },
                    validation: {
                        required: true
                    },
                    valid:false,
                    value: true,
                    touched:false ,
                    errorMessage:'please enter description'
                },                
                Category: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Category'
                    },
                    validation: {
                        required: true,
                    },
                    valid:false,
                    value: '',
                    touched:false ,
                    errorMessage:'category'
                },
                subCategory: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'date',
                        placeholder: 'Given on'
                    },
                    validation: {
                        required: true,
                        minLength:10,
                        maxLength:10
                    },
                    valid:false,
                    value: '',
                    touched:false ,
                    errorMessage:'Please enter a SubCategory'
                },                
        },
        formIsValid:false,
        loading:false,
    }

    render(){
        const formElementsArray = [];        
        for(let key in this.state.addExpenseForm){
            formElementsArray.push({
                id: key,
                config: this.state.addExpenseForm[key]
            })
        }
      //  console.log(formElementsArray);
        
         let form = (<form >
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
                    <CustomButton  bsStyle="info" pullRight fill>
                        Add Expense
                    </CustomButton>
                </form>);

        return(
                  <div className="table-full-width">
                    {form}
                  </div>
        )
    }

}

export default NewExpense;