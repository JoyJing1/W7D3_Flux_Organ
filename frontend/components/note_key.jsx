const React = require("react");
const TONES = require("../constants/tones.js");
const Note = require("../util/note.js");
const KeyStore = require("../stores/key_store.js");

const NoteKey = React.createClass({
  getInitialState: function() {
      return({playing: false});
  },

  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this._listenKeyStore);
  },

  componentWillUnmount: function() {
    KeyStore.remove(this._listenKeyStore);
  },

  _listenKeyStore: function() {
    const storeNotes = KeyStore.notes();
    if (storeNotes.includes(this.props.noteName)) {
      this.note.start();
      if (!this.state.playing) {
        this.setState({playing: true});
      }
    } else {
      this.note.stop();
      if (this.state.playing) {
        this.setState({playing: false});
      }
    }
  },

  render: function() {
    let play = this.state.playing ? `${this.props.noteName} playing` : `${this.props.noteName}`;
    play += " keynote"
    return(
      <li className={play}
          key={this.props.noteName}>{this.props.noteName}</li>
    );
  }

});
        // className=`{this.props.noteName} {play}`

module.exports = NoteKey;
