window.onload = function(){
     chartTracks = document.getElementById('chart');
     getChart();
}


function getChart(){
      $.ajax({
            tpye:'GET',
            dataType: "json",
            url:'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=490cd7b39124917b2255f13bc207997d&format=json&limit=5',
            success: function(data){
            var topTracks= data.tracks.track;
            // console.log(tracks);
            processTracks(topTracks);
            // console.log(tracks);
            }
      });
}
function processTracks(topTracks){
    var songs=[];
    // console.log(tracks.length);
     for(i=0; i <= topTracks.length;i++){
          songs.push((topTracks[i].name));
          chartTracks.innerHTML += ('<li class="list-group-item">'+ (i+1) + '.' + songs[i] +  '</li>'+'<br>');

      };
     // console.log(songs);

     
}