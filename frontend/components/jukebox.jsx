const React = require('react');
const TrackStore = require("../stores/track_store.js");
const TrackPlayer = require("./track_player.jsx");

const Jukebox = React.createClass({
  getInitialState() {
    return {tracks: TrackStore.tracks()};
  },

  componentDidMount() {
    // console.log("added listener for updateJukeboxTracks to TrackStore");
    TrackStore.addListener(this.updateJukeboxTracks);
  },

  updateJukeboxTracks() {
    // console.log("updatedJukeboxTracks in jukebox.js");
    this.setState({tracks: TrackStore.tracks()});
  },

  render() {
    return (
      <div>
        <h3>Jukebox</h3>
        <ul className="jukebox-tracks">
          {
          this.state.tracks.map( (track, i) => {
            return <TrackPlayer track={track} key={i} id={i}/>;
          })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Jukebox;
