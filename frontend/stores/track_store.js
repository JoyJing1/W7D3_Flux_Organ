const Dispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const TrackStore = window.TrackStore = new Store(Dispatcher);

let _tracks = [];

TrackStore.__onDispatch = function(action){
  // console.log("inside track_store.js", action);

  switch(action.actionType){
    case "SAVE_TRACK":
      _tracks.push(action.track);
      this.__emitChange();
      break;
    case "DELETE_TRACK":
      let idx = _tracks.indexOf(action.track);
      if (idx !== -1){
        _tracks.splice(idx, 1);
        this.__emitChange();
      }
      break;
  }
};

TrackStore.tracks = function(){
  return _tracks.slice();
};

module.exports = TrackStore;
