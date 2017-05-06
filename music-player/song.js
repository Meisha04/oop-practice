class Song {
  constructor(){
    this.title = song.title;
    this.length = song.length;
    this.alblum = song.alblum;
    this.artist = song.artist;
    this.track = song.track;
  }
  Song.prototype.isPlaying = function() {
  return this._Playing;
     }
 Song.prototype.isPausing = function() {
 return this._Playing = false;
 }
 Play(play) {
      this._Playing = true;
      return (this.title + 'song is now playing');
  }
 Pause(pause ){
      this._Playing = false;
       return (this.title + ' song is now paused');
  }
  }
