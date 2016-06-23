const TONES = require('../constants/tones.js');
const Note = require('./note.js');
const KeyActions = require('../actions/key_actions.js');

const KEYNOTES = {
  65: "C5",
  83: "D5",
  68: "E5",
  70: "F5",
  74: "G5",
  75: "A5",
  76: "C6"
};

module.exports = function () {
  $(document).on("keydown", function (event) {
    const key = event.keyCode;
    KeyActions.keyPressed(KEYNOTES[key]);
  });

  $(document).on("keyup", function (event) {
    const key = event.keyCode;
    KeyActions.keyReleased(KEYNOTES[key]);
  });

};
