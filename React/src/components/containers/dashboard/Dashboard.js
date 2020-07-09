import React, {Component} from 'react';
import {connect} from "react-redux";
import {renderData, renderItems} from "../../../store/actions/mainActions";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Dashboard extends Component {

    componentDidMount() {
        this.props.renderItems();
        this.props.renderData();
    };

    render() {
        return (
            <div className={'Dashboard'}>
                <h1>Dashboard</h1>
                <br/>
                <h3>Total items: {this.props.items.length}</h3>
                <h3>Total persons: 3</h3>
                <h3>Total orders: {this.props.orders.length}</h3>

                <NavLink to={'/catalog'}><Button variant={'secondary'}>Catalog</Button></NavLink>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.mainReducer.items,
        orders: state.mainReducer.orders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renderItems: () => dispatch(renderItems()),
        renderData: () => dispatch(renderData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);