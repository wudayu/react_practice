var Calculator = React.createClass({
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
            <div>
                <table>
                    <tr>
                        <td>
                            a:<input type="number" value={a} onChange={this.handlerInputChange.bind(null, 'a')} />
                        </td>
                        <td>
                            <select id="selectAlg" onChange={this.handlerInputChange.bind(null, 'c')} >
                                <option value="1">+</option>
                                <option value="2">-</option>
                                <option value="3">x</option>
                                <option value="4">÷</option>
                            </select>
                        </td>
                        <td>
                            b:<input type="number" value={b} onChange={this.handlerInputChange.bind(null, 'b')} />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">x = a {ch} b = {x}</td>
                    </tr>
                </table>
            </div>
        );
    }
});

React.render(<Calculator></Calculator>, document.getElementById("container"));
