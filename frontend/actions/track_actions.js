const Dispatcher = require("../dispatcher/dispatcher");

const TrackActions = {
  saveTrack(track){
    // console.log("saving in track_actions.js");
    Dispatcher.dispatch({
      actionType: "SAVE_TRACK",
      track: track
    });
  },

  deleteTrack(track){
    Dispatcher.dispatch({
      actionType: "DELETE_TRACK",
      track: track
    });
  }
};

module.exports = TrackActions;
