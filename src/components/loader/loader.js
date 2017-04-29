import React, { Component } from 'react';

// Before loaded
const loading = {
    display: "none",
    opacity: '0'
};

const loaded = {
    display: "inherit",
    animation: "spaLoaderFadeIn .5s"
};

export default class Loader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Loaded: this.props.Loaded,
            loaderStyle: {},
            className: "",
            TimeOutId: null
        };
    }

    // Conditional to render loader icon or not
    conditionalLoader() {

        if (this.state.Loaded === true) {
            clearTimeout(this.state.TimeOutId);

            let id = setTimeout(
                () => this.setState({ loaderStyle: loaded, className:"" }),
                500);
            this.setState({ TimeOutId: id });

        } else {
            this.setState({ loaderStyle: loading, className: this.props.className });
        }
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.Loaded != nextProps.Loaded) {
            
            this.setState({ Loaded: nextProps.Loaded });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.Loaded !== prevState.Loaded) {
            this.conditionalLoader();
        }
    }

    componentDidMount() {
        this.setState({ loaderStyle:loading, className: this.props.className });
    }

    render() {
        
        return (
            <div>
                <div className={this.state.className}></div>
                <div style={this.state.loaderStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}