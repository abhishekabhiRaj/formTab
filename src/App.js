import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import VaccineTab from "./component/TabArea/VaccineTab";
import PharmacyTab from "./component/TabArea/PharmacyTab";
import TimeTab from "./component/TabArea/TimeTab";
import DetailsTab from "./component/TabArea/DetailsTab";
import TabTitle from "./component/TabTitle";
import AssessmentTab from "./component/TabArea/AssessmentTab";
import QuestionaireTab from "./component/TabArea/QuestionaireTab";
import ConfirmationTab from "./component/TabArea/ConfirmationTab";
import data from "./assets/Data.json";

function App() {
  const [activeNav, setActiveNav] = useState([0]);
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col>
            <h3 className="roboto-font text-center">Book an Appointment</h3>
          </Col>
        </Row>
        <Row>
          <Col className="__tabs">
            {Object.keys(data).map((value, key) => {
              // console.log(data[value])
              return (
                <NavLink
                  key={key}
                  to={data[value].path}
                  className={activeNav.includes(key) === true ? "__active" : ""}
                  onClick={() => setActiveNav([...activeNav, key])}>
                  <TabTitle title={data[value].name} />
                </NavLink>
              )
            })}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Routes>
              <Route exact path="/" element={<VaccineTab />} />
              <Route path="/pharmacy-tab" element={<PharmacyTab />} />
              <Route path="/time-slot-tab" element={<TimeTab />} />
              <Route path="/details-tab" element={<DetailsTab />} />
              <Route path="/assessment-tab" element={<AssessmentTab />} />
              <Route path="/quationaire-tab" element={<QuestionaireTab />} />
              <Route path="/confirmation-tab" element={<ConfirmationTab />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
