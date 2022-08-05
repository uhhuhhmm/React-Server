import React, { Component } from "react";
import { post } from "axios";

class CustomerAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      birthday: "",
      gender: "",
      job: "",
    };
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    // this.setState({'userName':'park})
    this.setState(nextState);
  };

  handleFormSubmit = (e) => {
    this.addCustomer().then((res) => {
      console.log(res.data);
      this.props.stateRefresh();
    });
    this.setState = {
      userName: "",
      birthday: "",
      gender: "",
      job: "",
    };
  };

  addCustomer = () => {
    const url = "/api/customers";
    const formData = new URLSearchParams();
    formData.append("name", this.state.userName);
    formData.append("birthday", this.state.birthday);
    formData.append("gender", this.state.gender);
    formData.append("job", this.state.job);

    return post(url, formData);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>고객 추가</h1>
        이 름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} />
        <br />
        생 일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} />
        <br />
        성 별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} />
        <br />
        직 업 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default CustomerAdd;
