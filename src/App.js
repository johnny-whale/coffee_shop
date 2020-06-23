import React, {Component} from 'react';
import './styles/Styles.scss';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Intro} from "./components/Intro";
import Catalog from "./components/Catalog";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Catalog />
            </div>
        );
    }
}

export default App;