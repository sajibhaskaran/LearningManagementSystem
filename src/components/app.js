import React, { Component } from 'react';
// Component imports
import NavigationContainer from '../containers/navigation_container';
import Main from '../containers/main_display_container';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Role: null
        };

        window.location.hash = "#/";
        this.setRole = this.setRole.bind(this);
    }

    setRole(role) {
        this.setState({ Role: role });
    }

    render() {
        return (
            <div>
                <NavigationContainer setRole={role => this.setRole(role)} />
                <Main navigationRole={this.state.Role}/>
            </div>
        );
    }
}