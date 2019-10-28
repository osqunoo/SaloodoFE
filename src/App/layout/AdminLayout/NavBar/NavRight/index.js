import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import { connect } from 'react-redux'
import ChatList from './ChatList';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../constants/constant";
import { Auth } from '../../../../../services/Auth';
import BikerImg from '../../../../../assets/images/user/Biker.jpg';
import ManagerImg from '../../../../../assets/images/user/Manager.jpg';
 

class NavRight extends Component {
    constructor(props) {
        super(props);
        this.logout =  this.logout.bind(this);
    }
    state = {...this.state,
        listOpen: false
    };
    logout(){
        Auth.logout()
        .then((res) => 
        {
            
        });
         
    }
    render() {

        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    
                    
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-settings"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                                    <img src={this.props.role == '1' ? ManagerImg : BikerImg } className="img-radius" alt="User Profile"/>
                                    <span>{this.props.userName}</span>
                                    <span  onClick={this.logout} className="dud-logout" title="Logout">
                                        <i  className="feather icon-log-out" />
                                    </span>
                                </div>
                                <ul className="pro-body">
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <ChatList listOpen={this.state.listOpen} closed={() => {this.setState({listOpen: false});}} />
            </Aux>
        );
    }
}
function mapStateToProps(state) {
    return { 
        userName: state.userName,
        role: state.role
    };
  }
export default connect(
    mapStateToProps 
  )(NavRight);
