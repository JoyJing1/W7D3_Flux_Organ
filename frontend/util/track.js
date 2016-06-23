const KeyActions = require('../actions/key_actions.js');

function Track(options){
  options = options || {name: "", roll: []};
  this.name = options.name;
  this.roll = options.roll;
}

Track.prototype.startRecording = function(){
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function(notes){
  const timeSlice = Date.now() - this.startTime;

  this.roll.push({
    timeSlice: timeSlice,
    notes: notes
  });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.stopPlaying = function() {
  if (this.interval) {
    clearInterval(this.interval);
    this.interval = undefined;
  }
};

Track.prototype.play = function(){
  if (!this.interval) {
    let playbackStartTime = Date.now();
    let currentNote = 0;
    this.interval = setInterval( () => {
      if (currentNote < this.roll.length) {
        let timeElapsed = Date.now() - playbackStartTime;

        if (this.roll[currentNote].timeSlice < timeElapsed ) {
          KeyActions.keysPressed(this.roll[currentNote].notes);
          currentNote++;
        }
        // console.log(currentNote);

      } else {
        this.stopPlaying();
      }

    }, 1);
  }
};

module.exports = Track;
