import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import data from "../../assets/Data.json";
import { checkIcon} from "../../assets/svg.js";

const ConfirmationTab = () => {
    const vaccine = data["1"]["field"];
    const pharmacy = data["2"]["field"];
    const buttons = data["1"]["field"];
    const time = data["3"]["field"];
    console.log(buttons["1"]["status"], "b");
    buttons["1"]["status"] = true;
    console.log(buttons["1"]["status"], "a");
    return (
        <>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <h3>Confirm Your Details</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5>Vaccine Details</h5>
                    </Col>
                    <Col className="vaccine-tab">
                        {
                            Object.keys(vaccine).map((value, key) => {
                                console.log(vaccine[value]["status"])
                                return (
                                    <>
                                        <button key={key} className="btn-active">
                                            <span className="m-1">{checkIcon}</span>
                                            <span className="m-1">{vaccine[value]["label"]}</span>
                                        </button>
                                    </>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={12}>
                        <h5>Pharmacy Details</h5>
                    </Col>
                    <Col className="vaccine-tab">
                        {
                            Object.keys(pharmacy).map((value, key) => {
                                console.log(pharmacy[value]["status"])
                                return (
                                    <>
                                        <button key={key} className="btn-active">
                                            <span className="m-1">{checkIcon}</span>
                                            <span className="m-1">{pharmacy[value]["label"]}</span>
                                        </button>
                                    </>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={12}>
                        <h5>Time Slot</h5>
                    </Col>
                    <Col className="vaccine-tab">
                        {
                            Object.keys(time).map((value, key) => {
                                console.log(time[value]["status"])
                                return (
                                    <>
                                        <button key={key} className="btn-active">
                                            <span className="m-1">{checkIcon}</span>
                                            <span className="m-1">{time[value]["label"]}</span>
                                        </button>
                                    </>
                                )
                            })
                        }
                    </Col>
                </Row>
                <hr />
                <Row className="mt-3">
                    <Col className="d-flex justify-content-between">
                        <div />
                        <Button className="btn-active mb-3" style={{ width: 'max-content' }} onClick={() => window.alert("Your data is submitted.")}> Submit </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default ConfirmationTab;