import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class CatalogItem extends Component {
    render() {
        const item = this.props;
        return (
            <div className="col-xl-3 col-lg-4 CatalogItem">
                <div className="card">
                    <div className="card-header">
                        "{item.name}"
                    </div>
                    <div className="card-body">
                        <Button variant={'success'} onClick={this.props.addItem}><i className="fas fa-plus"/></Button>
                        <h5><span>{item.price}$</span> for 150g</h5>
                        <p>{item.processing} {item.type} from {item.geography}</p>
                        <ul>
                            <li>‧ {item.type}</li>
                            <li>‧ {item.processing}</li>
                            <li>‧ From {item.geography}</li>
                            <li>‧ Count: <b>{item.count}</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogItem;