import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class ModeratorEnter extends Component {
    render() {
        return (
            <div className={'ModeratorEnter'}>
                <h2>Moderator Enter</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="email" placeholder="Login" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <NavLink to={'/moderPanel'}>
                        <Button variant={'primary'}>Enter the system</Button>
                    </NavLink>
                </Form>
            </div>
        );
    }
}

export default ModeratorEnter;