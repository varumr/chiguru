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
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
// import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

import Financial from "views/Financial/Financial.jsx";
import Expenses from "views/Financial/Expenses.jsx";
import FundView from "views/Financial/FundView.jsx";
import PayoutToPartner from "views/Financial/PayoutToPartner.jsx";
import Revenue from "views/Financial/Revenue.jsx";

import ListSchedule from "views/Schedule/ListSchedule.jsx";
import NewSchedule from "views/Schedule/NewSchedule.jsx";

import AddEmployee from "views/Attendence/AddEmployee.jsx";
import Monthwise from "views/Attendence/Monthwise.jsx";
import Payment from "views/Attendence/Payment.jsx";

import ByDate from "views/Output/ByDate.jsx";
import Shipped from "views/Output/Shipped.jsx";
import Summary from "views/Output/Summary.jsx";

import ManageEmployees from "views/Admin/ManageEmployees.jsx";
import ManageProjects from "views/Admin/ManageProjects.jsx";
import ManageRoles from "views/Admin/ManageRoles.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/financial",
    name: "Financial",
    icon: "pe-7s-cash",
    component: Financial,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/schedule/list",
    name: "Schedule",
    icon: "pe-7s-news-paper",
    component: ListSchedule,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/attendence/monthwise",
    name: "Attendence",
    icon: "pe-7s-users",
    component: Monthwise,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/output/summary",
    name: "Output Summary",
    icon: "pe-7s-next-2",
    component: Summary,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/admin/manageemployee",
    name: "Admin",
    icon: "pe-7s-user-female",
    component: ManageEmployees,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin",
    showInSideBar: true
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin",
    showInSideBar: false
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin",
  //   showInSideBar: true
  // },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin",
    showInSideBar: false
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin",
    showInSideBar: false
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin",
    showInSideBar: false
  },
  {
    path: "/financial/expenses",
    name: "Expenses",
    icon: "pe-7s-graph",
    component: Expenses,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/financial/fundview",
    name: "Fund View",
    icon: "pe-7s-graph",
    component: FundView,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/financial/expenses",
    name: "Expenses",
    icon: "pe-7s-graph",
    component: Expenses,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/financial/payoutToPartner",
    name: "Payout To Partner",
    icon: "pe-7s-graph",
    component: PayoutToPartner,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/financial/revenue",
    name: "Revenue",
    icon: "pe-7s-graph",
    component: Revenue,
    layout: "/admin",
    showInSideBar: false
  },
   {
    path: "/schedule/list",
    name: "Project List Schedule",
    icon: "pe-7s-graph",
    component: ListSchedule,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/schedule/new",
    name: "Add New Schedule",
    icon: "pe-7s-graph",
    component: NewSchedule,
    layout: "/admin",
    showInSideBar: false
  },
      {
    path: "/attendence/addemployee",
    name: "Add Employee",
    icon: "pe-7s-graph",
    component: AddEmployee,
    layout: "/admin",
    showInSideBar: false
  },
  {
    path: "/attendence/monthwise",
    name: "Monthwise Atendence",
    icon: "pe-7s-graph",
    component: Monthwise,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/output/bydate",
    name: "By Date",
    icon: "pe-7s-graph",
    component: ByDate,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/output/Shipped",
    name: "Shipped",
    icon: "pe-7s-graph",
    component: Shipped,
    layout: "/admin",
    showInSideBar: false
  },
    {
    path: "/output/summary",
    name: "Summary",
    icon: "pe-7s-graph",
    component: Summary,
    layout: "/admin",
    showInSideBar: false
  },
      {
    path: "/admin/manageemployee",
    name: "Manage Employee",
    icon: "pe-7s-graph",
    component: ManageEmployees,
    layout: "/admin",
    showInSideBar: false
  },
      {
    path: "/admin/manageproject",
    name: "Manage Project",
    icon: "pe-7s-graph",
    component: ManageProjects,
    layout: "/admin",
    showInSideBar: false
  },
      {
    path: "/output/manageRoles",
    name: "Manage Roles",
    icon: "pe-7s-graph",
    component: ManageRoles,
    layout: "/admin",
    showInSideBar: false
  },
  //     {
  //   path: "/attendence/payment",
  //   name: "Payment",
  //   icon: "pe-7s-graph",
  //   component: Payment,
  //   layout: "/admin",
  //   showInSideBar: false
  // },





  // {
  //   upgrade: false,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
