import React, { Component } from "react";
import Container from "./Container.js";
import Row from "./Row.js";
import Col from "./Col.js";
import Header from "./Header.js";
import Search from "./Search.js";
import EmployeeDetail from "./EmployeeDetail.js";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
      search: "",
      results: [],
    };
  

  componentDidMount() {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {

    const employees = this.state.results

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Search handleInputChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeDetail
              employees={employees}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;