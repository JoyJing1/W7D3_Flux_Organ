const React = require("react");
const TONES = require("../constants/tones.js");
const NoteKey = require("./note_key.jsx");
const KeyListeners = require("../util/add_key_listeners.js");
const Recorder = require("./recorder.jsx");
const Jukebox = require("./jukebox.jsx");


const Organ = React.createClass({

  componentDidMount: function() {
    KeyListeners();
  },

  render: function() {
    return(
      <div>
        <ul className="organ">
          {Object.keys(TONES).map( noteName => {
            return <NoteKey noteName={noteName} id={noteName} key={noteName}/>;
          })}
        </ul>

        <Recorder/>
        <Jukebox />
      </div>
    );
  }

});

module.exports = Organ;
