import React, { Component } from "react";

class CustomerEdit extends Component {
  // /api/customer/7
  editCustomer(id) {
    const url = "api/customers/" + id;
    fetch(url, {
      method: "PUT",
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      <button
        onClick={(e) => {
          this.editCustomer(this.props.id);
        }}
      >
        수정
      </button>
    );
  }
}

export default CustomerEdit;
