import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {message, Input, Select, Popover, Badge} from 'antd';
import {NavLink} from "react-router-dom";

class Catalog extends Component {

    addToCardHandler = (event) => {
        event.preventDefault();
        message.success('Item added to cart');
    };

    render() {
        const { Option } = Select;
        const { Search } = Input;
        return (
            <div className={'Catalog'}>
                <div className="Catalog__main container-fluid">
                    <div className="row">
                        <div className="Catalog__filters col-lg-3">
                            <h3>Filters</h3>
                            <Search
                                placeholder="Search items"
                            />
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Type
                                    </Form.Label>
                                    <Select defaultValue="Arabica">
                                        <Option value="Arabica">Arabica</Option>
                                        <Option value="Robusta">Robusta</Option>
                                        <Option value="Mixed">Mixed</Option>
                                        <Option value="Mixed Arabica">Mixed Arabica</Option>
                                    </Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Processing
                                    </Form.Label>
                                    <Select defaultValue="Dry">
                                        <Option value="Dry">Dry</Option>
                                        <Option value="Washed">Washed</Option>
                                        <Option value="Others">Others</Option>
                                    </Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Geography
                                    </Form.Label>
                                    <Select defaultValue="Africa">
                                        <Option value="Africa">Africa</Option>
                                        <Option value="Yemen">Yemen</Option>
                                        <Option value="Uganda">Uganda</Option>
                                        <Option value="Asia">Asia</Option>
                                        <Option value="North America">North America</Option>
                                        <Option value="South America">South America</Option>
                                    </Select>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="Catalog__content container-fluid col-lg-9">
                            <div className="row">
                                <div className="Catalog__content_header col-lg-12">
                                    <div className="enter">
                                        <NavLink to={'/signIn'}>Sing in</NavLink>
                                        <NavLink to={'/signUp'}>Sing up</NavLink>
                                    </div>
                                    <Popover
                                        placement="rightBottom"
                                        content={
                                            <div className="card">
                                                <div className="card-header">
                                                    <p>My cart</p>
                                                    <p>5 items</p>
                                                </div>
                                                <div className="card-body">
                                                    sdfsdf
                                                </div>
                                                <div className="card-body">
                                                    23423423
                                                </div>
                                            </div>
                                        }
                                        trigger="click"
                                    >
                                        <Badge count={5} className={'cart'}>
                                            <a href="/" className="head-example">
                                                <i className="fas fa-shopping-cart"/>
                                            </a>
                                        </Badge>
                                    </Popover>
                                </div>
                            </div>
                            <div className="Catalog__content_container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4">
                                        <div className="card">
                                            <div className="card-header">
                                                "Thailand Arabica"
                                            </div>
                                            <div className="card-body">
                                                <Button variant={'success'} onClick={this.addToCardHandler}><i className="fas fa-plus"/></Button>
                                                <h5><span>3$</span> for 150g</h5>
                                                <p>Dry arabica from Thailand</p>
                                                <ul>
                                                    <li>‧ Arabica</li>
                                                    <li>‧ Dry type</li>
                                                    <li>‧ From thailand</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4">
                                        <div className="card">
                                            <div className="card-header">
                                                "Thailand Arabica"
                                            </div>
                                            <div className="card-body">
                                                <Button variant={'success'} onClick={this.addToCardHandler}><i className="fas fa-plus"/></Button>
                                                <h5><span>3$</span> for 150g</h5>
                                                <p>Dry arabica from Thailand</p>
                                                <ul>
                                                    <li>‧ Arabica</li>
                                                    <li>‧ Dry type</li>
                                                    <li>‧ From thailand</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4">
                                        <div className="card">
                                            <div className="card-header">
                                                "Thailand Arabica"
                                            </div>
                                            <div className="card-body">
                                                <Button variant={'success'} onClick={this.addToCardHandler}><i className="fas fa-plus"/></Button>
                                                <h5><span>3$</span> for 150g</h5>
                                                <p>Dry arabica from Thailand</p>
                                                <ul>
                                                    <li>‧ Arabica</li>
                                                    <li>‧ Dry type</li>
                                                    <li>‧ From thailand</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4">
                                        <div className="card">
                                            <div className="card-header">
                                                "Thailand Arabica"
                                            </div>
                                            <div className="card-body">
                                                <Button variant={'success'} onClick={this.addToCardHandler}><i className="fas fa-plus"/></Button>
                                                <h5><span>3$</span> for 150g</h5>
                                                <p>Dry arabica from Thailand</p>
                                                <ul>
                                                    <li>‧ Arabica</li>
                                                    <li>‧ Dry type</li>
                                                    <li>‧ From thailand</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;