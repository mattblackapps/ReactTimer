var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) { // value is valid
      this.refs.seconds.value = ''; // Clear the form

      var seconds = parseInt(strSeconds, 10);
      seconds = Math.min(seconds, 5999); // Limit the input to 99 minutes and 59 seconds

      this.props.onSetCountdown(seconds); // Call to parent
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
