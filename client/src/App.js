import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Customer";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

// const customers = [
//   {
//     id: 1,
//     image: "http://placeimg.com/120/120/1",
//     name: "Kevin",
//     birthday: "931231",
//     gender: "Alien",
//     job: "Villain",
//   },
//   {
//     id: 2,
//     image: "http://placeimg.com/120/120/2",
//     name: "Stuart",
//     birthday: "941231",
//     gender: "Alien",
//     job: "Villain",
//   },
//   {
//     id: 3,
//     image: "http://placeimg.com/120/120/3",
//     name: "Bob",
//     birthday: "971231",
//     gender: "Alien",
//     job: "Villain",
//   },
// ];

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Customer
//           id={customers[0].id}
//           image={customers[0].image}
//           name={customers[0].name}
//           birthday={customers[0].birthday}
//           gender={customers[0].gender}
//           job={customers[0].job}
//         />
//         <Customer
//           id={customers[1].id}
//           image={customers[1].image}
//           name={customers[1].name}
//           birthday={customers[1].birthday}
//           gender={customers[1].gender}
//           job={customers[1].job}
//         />
//         <Customer
//           id={customers[2].id}
//           image={customers[2].image}
//           name={customers[2].name}
//           birthday={customers[2].birthday}
//           gender={customers[2].gender}
//           job={customers[2].job}
//         />
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  // 비동기식 데이터 처리 방식
  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Img</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
