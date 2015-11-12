var Lifecycle = React.createClass({displayName: "Lifecycle",
    getDefaultProps: function () {
        console.log("getDefaultProps: 0x001");
    },
    getInitialState: function () {
        console.log("getInitialState: 0x002");
        return {
            variableA: "A",
            variableB: "B"
        }
    },
    componentWillMount: function () {
        console.log("componentWillMount: 0x003");
    },
    handleClick: function (event) {
        console.log("handleClick: 0x000");
        this.setState({
            variableA: (this.state.variableA + "1"),
        });
    },
    render: function () {
        console.log("render: 0x004 & 0x104");

        var str = this.state.variableA + "x" + this.state.variableB;
        return React.createElement("input", {type: "button", onClick: this.handleClick, value: str})
    },
    componentDidMount: function () {
        console.log("componentDidMount: 0x005");
    },

    componentWillReceiveProps: function () {
        console.log("componentWillReceiveProps: 0x101");
    },
    //shouldComponentUpdate: function () {
    //    console.log("shouldComponentUpdate: 0x102");
    //    return true;
    //},
    componentWillUpdate: function () {
        console.log("componentWillUpdate: 0x103");
    },
    componentDidUpdate: function () {
        console.log("componentDidUpdate: 0x105");
    },
});

React.render(React.createElement(Lifecycle, null), document.getElementById("container"));