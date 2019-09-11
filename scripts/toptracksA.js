
window.onload = function(){
var artId;
var img;
var prev = document.getElementById('prev');
};




 function getArtist(){
    artId = document.getElementById('query').value;
    if(!document.getElementById('myFigure')){
       $("myFigure").remove();
        $.ajax(
        {
            type:'GET',
            dataType: "json",
            url:'https://api.spotify.com/v1/search?q=' +artId + '&type=track,artist&market=US',
            success: function(data){
            // console.log(data.artists.items[0].name, data.artists.items[0].id);
            var artist =  data.artists.items[0].id;
            sendArtist(artist);
        }
        });
    }
    else{
      $.ajax(
        {
            type:'GET',
            dataType: "json",
            url:'https://api.spotify.com/v1/search?q=' +artId + '&type=track,artist&market=US',
            success: function(data){
            // console.log(data.artists.items[0].name, data.artists.items[0].id);
            var artist =  data.artists.items[0].id;
            sendArtist(artist);
        }
        });

    }


}

function sendArtist(artist){

      $.ajax(
        {
            type:'GET',
            dataType: "json",
            url:'https://api.spotify.com/v1/artists/'+artist+'/top-tracks?country=US',
            success: function(data){
            // console.log('Success!',data.tracks);
            var tracks= data.tracks;
            // console.log(tracks[0].album.images[0].url);
            // console.log(tracks);
            processTracks(tracks);
        }
        });
}

function processTracks(tracks){
    var songs=[];
    var songImg=[];
    var songPrev=[];
    var songIndex=[];
    songPrev.length = songs.length;

    for(i=0; i < tracks.length;i++){
          songImg.push(tracks[i].album.images[0].url);
          songs.push(tracks[i].name);
          songPrev.push(tracks[i].preview_url);
          //console.log(songPrev);
      };
    aud = document.createElement("AUDIO");
var counter=0;
for(i=0; i < songs.length;i++){

    var x = document.createElement("FIGURE");
    x.setAttribute("id", "myFigure");
    document.body.appendChild(x);
    var z = document.createElement("FIGCAPTION");
    z.id = 'cap';
    z.setAttribute("value",songs[0]);
    z.innerHTML = songs[i];
    var y = document.createElement("IMG");
    y.id = "album";
    y.title =  songs[i];
    y.src = songImg[i];
    y.setAttribute("width", "204");
    y.setAttribute("width", "128");
    aud.src += songPrev[i];
    aud.id = "prev";
    // y.onclick = function () {
    //   if(counter==0){
    //     z.style.color = "blue";
    //     aud.play();
    //     counter = 1;
    //   }
    //   else if(counter==1){
    //     z.style.color = "black";
    //     aud.pause();
    //     aud.currentTime=0;
    //     counter = 0;
    //   }


    // }

      x.appendChild(y);
      x.appendChild(z);
      // x.appendChild(aud);
}
    // console.log(songPrev);


};
