class PlayList {

  constructor(name){
     this.playListName = name;
     this.songListArr = [];
     this._listLength = 0
   }

  addSong(Song) {
     this.songListArr.push(song);
     return this.songListArr;
   }
   removeSong(removeSong) {
     this.songListArr.remove(song);
     return this.songListArr = false;
   }
  Play(play) {
       this._Playing = true;
       return (this.title + 'song is now playing');
   }
  Pause ( ){
       this._Playing = false;
        return (this.title + ' song is now paused');
   }
 }
