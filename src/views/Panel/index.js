import { useEffect } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { Doctors } from "..";
import { userSelector } from "../../store/selectors/authSelector"
import "./style.css";

export default () => {
    const user = useSelector(userSelector)
    const match = useRouteMatch()
    useEffect(() => {
        const access = localStorage.getItem("access")
        if (!access) {
            window.location = "/login"
        }
    }, [])
    return <div className="wrapper">
        <Container>
            <Row>
                <Col xs={3} >
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Link to={`${match.url}/doctors`} className="doctorsLink">Doctors</Link>
                    </Nav>
                </Col>
                <Col>
                    <Switch>
                        <Route path={`${match.url}/doctors/:id`}>
                            <div>Doctor Details</div>
                        </Route>
                        <Route path={`${match.url}/doctors`}>
                            <Doctors></Doctors>
                        </Route>
                    </Switch>
                </Col>
            </Row>

        </Container>
    </div>
}