var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');

      setTimeout( () => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');

      setTimeout( () => {
        timer.handleStatusChange('paused');
      }, 1001);

      setTimeout( () => {

        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(1);
        done();
      }, 2001);

    });

    it('should reset timer (stopped status, count = 0) on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');

      setTimeout( () => {
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);

    });
  });

});
