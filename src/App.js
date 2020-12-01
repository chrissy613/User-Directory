import React from "react";
import EmployeeContainer from "./components/EmployeeContainer.js";
import Row from "./components/Row.js";
import Col from "./components/Col.js";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <Link to="/employee-directory.html">
      <Row>
      <Col size="md-12">
        <Header />
      </Col>
      </Row>
      <EmployeeContainer />
    </Link>
    </div>
    );
}

export default App;