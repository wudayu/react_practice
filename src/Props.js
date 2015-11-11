var testx = {
    a:"1",
    b:"2",
    c:"3"
}
var TestProps = React.createClass({
    render: function() {
        return <div>
            a = {this.props.a}<br/>
            b = {this.props.b}<br/>
            c = {this.props.c}<br/>
        </div>
    }
});
React.render(<TestProps {...testx}></TestProps>, document.getElementById("container"));