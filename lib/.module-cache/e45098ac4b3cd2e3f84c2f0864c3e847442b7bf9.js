var Calculator = React.createClass({displayName: "Calculator",
    getInitialState: function() {
        return {
            a: 1,
            b: 1,
            c: 2
        }
    },
    handlerInputChange: function(key, event) {
        var partState = {};
        partState[key] = parseFloat(event.target.value);
        this.setState(partState);
    },
    render: function() {
        var a = this.state.a;
        var b = this.state.b;
        var c = this.state.c;
        var x = 0;
        var ch = '';
        switch (c) {
            case 1:
                x = a + b;
                ch = '+';
                break;
            case 2:
                x = a - b;
                ch = '-';
                break;
            case 3:
                x = a * b;
                ch = 'x';
                break;
            case 4:
                x = a / b;
                ch = '÷';
                break;
        }

        return (
            React.createElement("div", null, 
                React.createElement("table", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            "a:", React.createElement("input", {type: "number", value: a, onChange: this.handlerInputChange.bind(null, 'a')})
                        ), 
                        React.createElement("td", null, 
                            React.createElement("select", {id: "selectAlg", onChange: this.handlerInputChange.bind(null, 'c')}, 
                                React.createElement("option", {value: "1"}, "+"), 
                                React.createElement("option", {value: "2"}, "-"), 
                                React.createElement("option", {value: "3"}, "x"), 
                                React.createElement("option", {value: "4"}, "÷")
                            )
                        ), 
                        React.createElement("td", null, 
                            "b:", React.createElement("input", {type: "number", value: b, onChange: this.handlerInputChange.bind(null, 'b')})
                        )
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", {colspan: "3"}, "x = a ", ch, " b = ", x)
                    )
                )
            )
        );
    }
});

React.render(React.createElement(Calculator, null), document.getElementById("container"));
