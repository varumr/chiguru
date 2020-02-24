import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class AdminTopbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
      
        <Nav>
          <NavItem eventKey={1} href="#">
            Dashboard
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Financials"
            id="basic-nav-dropdown-right">
            <MenuItem href='/admin/financial/expenses' eventKey={2.1}>Expenses</MenuItem>
            <MenuItem href='/admin/financial/revenue' eventKey={2.2}>Revenue</MenuItem>
            <MenuItem href='/admin/financial/fundview' eventKey={2.3}>Fund View</MenuItem>
            <MenuItem href='/admin/financial/payouttopartner' eventKey={2.4}>Payout to Partner</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={3}
            title="Schedule"
            id="basic-nav-dropdown-right" >
            <MenuItem eventKey={3.1} href='/admin/schedule/list'>Project List Schedule</MenuItem>
            <MenuItem eventKey={3.2} href='/admin/schedule/new'>Add new Schedule</MenuItem>
            <MenuItem eventKey={3.3} href='/admin/schedule/monthview'>Calendar View</MenuItem>
          </NavDropdown>     
          <NavDropdown
            eventKey={4}
            title="Attendence"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={4.1} href='/admin/attendence/monthwise'>Monthwise</MenuItem>
            <MenuItem eventKey={4.2} href='/admin/attendence/addemployee'>Add Employee</MenuItem>
            <MenuItem eventKey={4.2} href='/admin/attendence/payment'>Payment</MenuItem>
          </NavDropdown> 
          <NavDropdown
            eventKey={5}
            title="Output"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={5.1} href='/admin/output/summary'>Summary</MenuItem>
            <MenuItem eventKey={5.2} href='/admin/output/bydate'>By project date</MenuItem>
            <MenuItem eventKey={5.2} href='/admin/output/shipped'>Shipped</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={6}
            title="Admin"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={6.1}  href='/admin/admin/manageproject'>Manage Projects</MenuItem>
            <MenuItem eventKey={6.2}  href='/admin/admin/manageemployees'>Manage Employees</MenuItem>
            <MenuItem eventKey={6.2}  href='/admin/admin/manageroles'>Manage Roles</MenuItem>
          </NavDropdown>
        </Nav>

        {/* <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>

          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>


          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav> */}
        <Nav pullRight>
           <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminTopbarLinks;
