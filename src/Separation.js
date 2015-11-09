var Separator = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.runningTime / 100);
        var second = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message = 'React has been running for ' + second + ' seconds';

        return <p>{message}</p>
    }
});

var startTime = new Date().getTime();
setInterval(function() {
    React.render(<Separator runningTime={new Date() - startTime}></Separator>,
        document.getElementById("container"));
}, 50);

React.render(<Separator runningTime="1000"></Separator>,
    document.getElementById("fakeContainer"));