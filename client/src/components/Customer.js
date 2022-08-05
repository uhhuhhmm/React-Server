import React, { Component } from "react";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";

class Customer extends Component {
  render() {
    return (
      <>
        {/* <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
        <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} /> */}

        {/* Material UI */}
        <TableRow>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>
            <img src={this.props.image} alt="profile" />
          </TableCell>
          <TableCell>{this.props.name}</TableCell>
          <TableCell>{this.props.birthday}</TableCell>
          <TableCell>{this.props.gender}</TableCell>
          <TableCell>{this.props.job}</TableCell>
          <TableCell>{this.props.createdDate}</TableCell>
          <TableCell>
            <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} />
          </TableCell>
          <TableCell>
            <CustomerEdit stateRefresh={this.props.stateRefresh} id={this.props.id} />
          </TableCell>
        </TableRow>
      </>
    );
  }
}

// class CustomerProfile extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.image} alt="profile" />
//         <h2>
//           {this.props.name}({this.props.id})
//         </h2>
//       </div>
//     );
//   }
// }

// class CustomerInfo extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.birthday}</p>
//         <p>{this.props.gender}</p>
//         <p>{this.props.job}</p>
//       </div>
//     );
//   }
// }
export default Customer;
