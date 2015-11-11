var testx = {
    a:"1",
    b:"2",
    c:"3"
}
var TestProps = React.createClass({displayName: "TestProps",
    render: function() {
        return React.createElement("div", null, 
            "a = ", this.props.a, React.createElement("br", null), 
            "b = ", this.props.b, React.createElement("br", null), 
            "c = ", this.props.c, React.createElement("br", null)
        )
    }
});
React.render(React.createElement(TestProps, React.__spread({},  testx)), document.getElementById("container"));