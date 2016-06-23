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
        Song {this.props.id}
        <button onClick={this.playTrack} className="track-play">Play</button>
        <button onClick={this.deleteTrack} className="track-delete">Delete</button>
      </li>
    );
  }
});

module.exports = TrackPlayer;
