const React = require('react');
const Track = require('../util/track.js');
const KeyStore = require("../stores/key_store.js");
const TrackStore = require("../stores/track_store.js");
const TrackActions = require("../actions/track_actions.js");

const Recorder = React.createClass({
  getInitialState(){
    return {track: new Track(), recording: false};
  },

  componentDidMount(){
    KeyStore.addListener(this.updateNotes);
  },

  updateNotes(){
    if (this.state.recording) {
      this.state.track.addNotes(KeyStore.notes());
    }
  },

  _startRecording(){
    this.state.track.stopPlaying();
    this.state.track.startRecording();
    this.setState({recording: true});
  },

  _stopRecording(){
    this.state.track.stopRecording();
    this.setState({recording: false});
  },

  _playRecording(){
    this.state.track.play();
  },

  _saveRecording(){
    // console.log("saving in recorder.jsx");
    TrackActions.saveTrack(this.state.track);
  },

  render(){
    let buttons = [];

    if (this.state.recording){
      buttons.push(<button key="stop" onClick={this._stopRecording}>Stop Recording</button>);
    } else {
      buttons.push(<button key="start" onClick={this._startRecording}>Start Recording</button>);
      if (this.state.track.roll.length > 0) {
        buttons.push(<button key="play" onClick={this._playRecording}>Play</button>);
        buttons.push(<button key="save" onClick={this._saveRecording}>Save</button>);
      }
    }

    return (
      <div className="recorder">
        Recorder: {buttons}
      </div>
    );
  }
});

module.exports = Recorder;
