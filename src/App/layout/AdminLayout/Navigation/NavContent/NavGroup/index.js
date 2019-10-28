import React from 'react';
import Aux from "../../../../../../hoc/_Aux";
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';
import { connect } from 'react-redux';
const navGroup = (props) => {
    let navItems = '';
    if (props.group.children) {
        var groups = props.group.children;
        var userType = props.userType;
        groups = groups.filter(item =>  (item.userType == userType || item.userType == 'general'));
        navItems = Object.keys(groups).map(item => {
            item = groups[item];
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} collapse={item} type="main" />;
                case 'item':
                    return <NavItem layout={props.layout} key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }

    return (
        <Aux>
            <li key={props.group.id} className="nav-item pcoded-menu-caption"><label>{props.group.title}</label></li>
            {navItems}
        </Aux>
    );
};
function mapStateToProps(state) {
    return { 
        role: state.role 
    };
  }
export default connect(
    mapStateToProps 
  )(navGroup);