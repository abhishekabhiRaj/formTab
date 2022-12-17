import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const DetailsTab = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col className="vaccine-tab">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" placeholder="Last Name" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Row className="mt-3">
                    <Col className="d-flex justify-content-between">
                        <div />
                        <NavLink to="/assessment-tab" className="btn-active" style={{ width: 'max-content' }}> Continue </NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default DetailsTab;