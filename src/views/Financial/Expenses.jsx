import React, {Component} from 'react';

import { Grid, Row, Col,Table } from "react-bootstrap";
import CustomButton from 'components/CustomButton/CustomButton';
import { Card } from "components/Card/Card.jsx";

import NewExpense from './NewExpense';

class Expenses extends Component {

    render(){
        return  <div className="content">
        <Grid fluid>
           <Row>
            <Col md={6}>
                <div  >
                {/* <CustomButton  style={{margin:'10px'}} bsStyle="info" onClick={this.onClickHandler} pullRight fill>
                    Add new Expense
                </CustomButton> */}
                
                </div>
              <Card
                title="Expenses Summary"
                category=""
                stats=""
                statsIcon=""
                content={
                  <div className="table-full-width">
                    <Table responsive className="table">
                        <thead>
                            <tr key='1'>
                                <th>Project</th>
                                <th>Recognized expense</th>
                                <th>Unecognized expense</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Polyhouse 1</td>
                                <td>500000</td>
                                <td>555555</td>
                                <td>1000000</td>
                            </tr>
                            <tr>
                                <td>Polyhouse 2</td>
                                <td>500000</td>
                                <td>555555</td>
                                <td>1000000</td>
                            </tr>
                            <tr>
                                <td>Polyhouse 3</td>
                                <td>500000</td>
                                <td>555555</td>
                                <td>1000000</td>
                            </tr>
                            <tr>
                                <td>Polyhouse 4</td>
                                <td>500000</td>
                                <td>555555</td>
                                <td>1000000</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan='3'>Total</td>
                                <td>10000000</td>
                            </tr>
                        </tfoot>
                    </Table>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Add new Expense"
                category=""
                stats=""
                statsIcon=""
                content={
                    <NewExpense />
                }
              />
            </Col>

          </Row>         
        </Grid>
      </div>
    }
}

export default Expenses;