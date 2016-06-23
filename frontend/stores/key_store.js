const Dispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const KeyStore = window.KeyStore = new Store(Dispatcher);
let _notes = [];

KeyStore.__onDispatch = function(action){
  switch(action.actionType){
    case "START_NOTE":
      if( _notes.indexOf(action.note) === -1 ){
        _notes.push(action.note);
        this.__emitChange();
      }
      break;
    case "END_NOTE":
      const idx = _notes.indexOf(action.note);
      if (idx !== -1) {
        _notes.splice(idx, 1);
        this.__emitChange();
      }
      break;
    case "UPDATE_NOTES":
       _notes = action.notes;
       this.__emitChange();
    break;
  }
};

KeyStore.notes = function() {
  return _notes.slice();
};

module.exports = KeyStore;
