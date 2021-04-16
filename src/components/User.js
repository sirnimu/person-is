import React from "react";
import InputField from "./Input";
import DateInput from "./DateInput";
import ClearButton from "./ClearButton";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";

const defaultState = {
  name: "",
  lastname: "",
  email: "",
  gender: null,
  dob: null,
};

export default class User extends React.Component {
  state = { ...defaultState };

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    fetch("https://api.jsonbin.io/b/6076e9db0ed6f819beac2062/latest", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...data,
        });
      });
  }

  updateUserData(identifier, value) {
    fetch("https://api.jsonbin.io/b/6076e9db0ed6f819beac2062", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...this.state,
        [identifier]: value,
      }),
    }).then(function (response) {
      return response.json();
    });

    this.setState({ [identifier]: value });
  }

  deleteUserData() {
    fetch("https://api.jsonbin.io/b/6076e9db0ed6f819beac2062", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(defaultState),
    }).then(function (response) {
      return response.json();
    });

    this.setState({ ...defaultState });
  }

  render() {
    return (
      <Container maxWidth="sm">
        <InputField
          type="text"
          name="name"
          label="Name"
          value={this.state.name}
          updateUserData={this.updateUserData.bind(this)}
        />

        <InputField
          type="text"
          name="lastname"
          label="Lastname"
          value={this.state.lastname}
          updateUserData={this.updateUserData.bind(this)}
        />

        <InputField
          type="text"
          name="email"
          label="Email"
          value={this.state.email}
          updateUserData={this.updateUserData.bind(this)}
        />

        <InputField
          type="select"
          name="gender"
          label="Gender"
          value={this.state.gender}
          updateUserData={this.updateUserData.bind(this)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </InputField>

        <DateInput
          value={this.state.dob}
          label="Date of birth"
          onChange={(date) => {
            this.updateUserData("dob", date);
          }}
        />

        <ClearButton deleteUserData={this.deleteUserData.bind(this)} />
      </Container>
    );
  }
}
