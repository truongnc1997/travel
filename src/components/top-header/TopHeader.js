import React, { Component } from 'react';
import './TopHeader.css';
import Menu from '../menu/Menu';
class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };
    }
    onClick = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    render() {
        const { isCollapsed } = this.state;
        return (
            <div className="header">
                <div className="container">
                    <div className="menu-header">
                        <div className="hotline">
                            <i className="fa fa-phone-square" />
                            <strong>call us: (+84)916 952 668</strong>
                        </div>
                        <div className="best-tour">
                            <i className="fas fa-bullhorn" />
                            <span>best tour</span>
                            <em>2019</em>
                        </div>
                        <div className="logo-tour">
                            <img src="https://www.insidevietnamtravel.com/images/inside-travel-logo.png" alt="" />
                        </div>
                        <div className="menu-choise">
                            <i className="fab fa-gratipay" />
                            <span>menu</span>
                            {/* <a href=""> */}
                            <i className="fas fa-align-justify" onClick={this.onClick} />
                            {!isCollapsed && <div><Menu /></div>}
                            {/* </a> */}
                        </div>
                        <div className="help">
                            <img src alt="" />
                            <i className="fas fa-phone" />
                            <span>need help?</span>
                        </div>
                        <div className="clear" />
                    </div>{/*menu-header*/}
                </div> {/*container*/}
            </div>
        );
    }
}

export default TopHeader;