import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const QuestionaireTab = () => {

    return (
        <>
            <Container>
                <Row className="mt-3">
                    <Col>
                       <h3>Questionaire Tab</h3>
                    </Col>
                </Row>
                <hr />
                <Row className="mt-3">
                    <Col className="d-flex justify-content-between">
                        <div />
                        <NavLink to="/confirmation-tab" className="btn-active" style={{ width: 'max-content' }}> Continue </NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default QuestionaireTab;