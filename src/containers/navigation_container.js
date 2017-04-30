import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import NavigationBarList from '../components/navigation_bar_list';
import UserNav from '../reducers/reducer_student_nav_buttons';

import { fetchRole } from '../actions/navigation_bar_role_action';
//import { navigationBarListItemSelected } from '../actions/navigation_bar_list_item_action';
import { navCallFunctions } from '../actions/nav_call_functions_action';


class NavigationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RolePassed: false
        };

        this.props.fetchRole();
    }

    componentWillReceiveProps(nextProps) {

        if (this.state.RolePassed === false && nextProps.navigationRole != null) {
            this.props.setRole(nextProps.navigationRole);
            this.setState({ RolePassed: true });
        }
    }

    renderList() {

        // Make users think connection is bad if error
        if (this.props.navigationRole === null) {
            return (
                <h1>Loading...</h1>
            );
        }

        return UserNav(this.props.navigationRole).map((button) => {
            if (button.url === null) {
                return (
                    <li key={button.navnumber}
                        onClick={() => this.props.navCallFunctions(button.onclick)}
                        className={"dashboardListAction " + button.customclass} >
                        <i className={button.icon}></i>
                        &nbsp;<span>{button.title}</span>
                    </li>
                );
            }
            return (
                <Link to={button.url} key={button.navnumber}>
                    <li onClick={() => this.props.navCallFunctions(button.onclick)}
                        className={"dashboardListAction " + button.customclass}>
                        <i className={button.icon}></i>
                        &nbsp;<span>{button.title}</span>
                    </li>
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-left spaNavigationBar">
                <a className="navbar-brand text-center" href="#">
                    <img src="/images/favicon.png" />
                </a>
                <ul className="nav navbar-nav">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

//function mapStateToProps(state) {
//    return {
//        navBarButtons: state.navBarButtons
//    };
//}

function mapStateToProps({ navigationRole }) {
    return { navigationRole };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        navCallFunctions: navCallFunctions,

        fetchRole: fetchRole
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);




// ======================================================================================
// AARON'S CODE BENEATH THIS

//    createNavigationList() {

//        // Make sure we have a role before render
//        if (!this.props.navigation_bar_role) {

//            // Initial ajax call
//            this.props.fetchRole();

//            return (
//                <ul key={Math.random()} className="nav navbar-nav text-center">
//                    <li className="dashboardListAction">
//                        ...
//                    </li>
//                </ul>

//            );
//        } else {
//            return (
//                <NavigationBarList
//                    key={Math.random()}
//                    role={this.props.navigation_bar_role}
//                    listItems={this.state.Student}
//                    onSelectNavListItem={(selectedNavItem) => this.props.navigationBarListItemSelected(selectedNavItem)}
//                />
//            );
//        }
//    }

//    render() {

//// Allow our class to access actions
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators(
//        {
//            fetchRole: fetchRole,
//            navigationBarListItemSelected: navigationBarListItemSelected
//        },
//        dispatch);
//}

//// Connect redux and react to using this class
//export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);