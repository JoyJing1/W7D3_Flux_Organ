const Dispatcher = require("../dispatcher/dispatcher");

const KeyActions = {
  keyPressed(note){
    Dispatcher.dispatch({
      actionType: "START_NOTE",
      note: note
    });
  },

  keyReleased(note){
    Dispatcher.dispatch({
      actionType: "END_NOTE",
      note: note
    });
  },

  keysPressed(notes){
    Dispatcher.dispatch({
      actionType: "UPDATE_NOTES",
      notes: notes
    });
  }

};


module.exports = KeyActions;
