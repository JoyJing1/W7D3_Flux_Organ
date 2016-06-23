const React = require('react');
const TrackActions = require('../actions/track_actions.js');

const TrackPlayer = React.createClass({
  playTrack() {
    this.props.track.play();
  },

  deleteTrack() {
    TrackActions.deleteTrack(this.props.track);
  },

  render() {
    return (
      <li>
        {this.props.track.name}
        <button onClick={this.playTrack} class="track-play">Play</button>
        <button onClick={this.deleteTrack} class="track-delete">Delete</button>
      </li>
    );
  }
});

module.exports = TrackPlayer;
