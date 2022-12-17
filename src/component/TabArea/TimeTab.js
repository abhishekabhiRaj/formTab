import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import data from "../../assets/Data.json";
import { plusIcon, checkIcon } from "../../assets/svg.js";

const TimeTab = () => {
  const [active, setActive] = useState([])
  const buttons = data["3"]["field"]
  return (
    <>
      <Container>
        <Row>
          <Col className="vaccine-tab">
            {
              Object.keys(buttons).map((value, key) => {
                console.log(buttons[value]["status"])
                return (
                  <>
                    <button key={key} className={active.includes(key) === true ? "btn-active" : "btn"}
                      onClick={() => active.includes(key) === false ?
                        setActive([...active, key]) :
                        setActive(active.filter((item) => item !== key))}>
                      <span className="m-1">{active.includes(key) === true ? checkIcon : plusIcon}</span>
                      <span className="m-1">{buttons[value]["label"]}</span>
                    </button>
                  </>
                )
              })
            }
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form>
              <Form.Group className="bg-light p-2 rounded font-sm" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" variant="danger" label="I don't know which one I need!" className="pt-1" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="d-flex justify-content-between">
            <div />
            <NavLink
              to={active.length === 0 ? "/time-slot-tab" : "/details-tab"}
              className="btn-active"
              style={{ width: 'max-content' }}
              onClick={() => active.length === 0 ?
                window.alert("You have not selected any option select to move forward...") :
                window.alert("Data Saved...")}>
              Continue
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TimeTab;
