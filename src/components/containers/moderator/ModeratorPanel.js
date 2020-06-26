import React, {Component} from 'react';
import {Table} from "react-bootstrap";

class ModeratorPanel extends Component {
    render() {
        return (
            <div className={'ModeratorPanel'}>
                <div className="ModeratorPanel__header">
                    <p>Moderator panel</p>
                </div>
                <div className="ModeratorPanel__content">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Processing</th>
                            <th>Geography</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>dssdf</td>
                            <td>dssdf</td>
                            <td>dssdf</td>
                            <td>dssdf</td>
                            <td>dssdf</td>
                            <td>dssdf</td>
                            <td>dssdf</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ModeratorPanel;