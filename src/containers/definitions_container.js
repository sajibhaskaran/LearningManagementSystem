import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class DefinitionsTemplate extends Component {
    constructor(props) {
        super(props);
    }

    renderDefinitions(definition) {
        return (
            <div>
                <dt>{definition.title}</dt>
                <dd>{definition.content}</dd>
                <img src={definition.img} />
            </div>
        );
    }
    
    componentDidMount() {
        axios.get(`/spa/fetchDefinition/`)
            .then(response => {
                const definitions = "";
                this.setState({ definitions });
            });
    }

    render() {
        return (
            <div>
                <dl>
                    {this.props.definitions.map(this.renderDefinitions)}
                </dl>
            </div>
        );
    }
}

mapStateToProps(state) {
    return { definitions: state.definitions };
}

export default connect(mapStateToProps)(DefinitionsTemplate);