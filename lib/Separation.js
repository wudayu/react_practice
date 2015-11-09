var Separator = React.createClass({displayName: "Separator",
    render: function() {
        var elapsed = Math.round(this.props.runningTime / 100);
        var second = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message = 'React has been running for ' + second + ' seconds';

        return React.createElement("p", null, message)
    }
});

var startTime = new Date().getTime();
setInterval(function() {
    React.render(React.createElement(Separator, {runningTime: new Date() - startTime}),
        document.getElementById("container"));
}, 50);

React.render(React.createElement(Separator, {runningTime: "1000"}),
    document.getElementById("fakeContainer"));