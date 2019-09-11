window.onload = function(){
     chartTracks = document.getElementById('chart');
     geoSongs = document.getElementById('geo')
     country = document.getElementById('cName');
     // if(navigator.geolocation){
     //  navigator.geolocation.getCurrentPosition(getLoc);
     // }
     // else{
     //  alert('Please enable your location to see top songs in your country.');
     // }
     getChart();
     getSongsByGeo();
}

// function getLoc(position){
//       // console.log(position);
//       var lat = position.coords.latitude;
//       var lng = position.coords.longitude;
//        console.log(lat);
//        console.log(lng);
//       revGeo(lat,lng);
// }

// function revGeo(lat,lng){
//        $.ajax({
//             type:'GET',
//             dataType:"json",
//             url:'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +lat + ',' +lng +'&key=AIzaSyCZLkadB2ynDyYUyw4c8xGamJfPkIvg-DA',
//             success:function(data){
//                   console.log(data.results[7].formatted_address);
//                   var loc = data.results[7].formatted_address;
//                    getSongsByGeo(loc);
//             }
//       });

// }

function getSongsByGeo(loc){
   //  console.log(loc);
      $.ajax({
            tpye:'GET',
            dataType: "json",
            url:'https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=Canada&api_key=490cd7b39124917b2255f13bc207997d&format=json&limit=25',
            success: function(data){
            // console.log(data.tracks.track);
            var geoChart = data.tracks.track;
            // console.log(tracks);
             processGeoTracks(geoChart,loc);
            // console.log(tracks);
      }
 });
}

function getChart(){
      $.ajax({
            tpye:'GET',
            dataType: "json",
            url:'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=490cd7b39124917b2255f13bc207997d&format=json&limit=25',
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
    console.log(topTracks[1].name);
    // console.log(tracks.length);
     for(i=0; i <= topTracks.length;i++){
          songs.push((topTracks[i].name));
          chartTracks.innerHTML += ('<li class="list-group-item">'+ (i+1) + '. ' + songs[i] + '</li>'+'<br>');
          // var updates = {};
          // updates['/lastfm/'] = songs[i];
          //firebase.database().ref('lastfm/' + i).set(songs[i]);
      };
     // console.log(songs);


}
function processGeoTracks(geoChart,loc){
    var geoTracks=[];
    console.log(geoChart);
    // console.log(tracks.length);
    country.innerHTML = ('Top Songs of Canada' +'<br>');
     for(i=0; i <= geoChart.length;i++){
          geoTracks.push((geoChart[i].name));
          geoSongs.innerHTML += ('<li class="list-group-item">'+(i+1) + '.' + geoTracks[i] +'</li>' +'<br>');
         // firebase.database().ref('lastfmGeo/' + i).set(geoTracks[i]);
          // var updates = {};
          // updates['/lastfmGeo/'] = geoTracks[i];
          // firebase.database().ref().update(updates);

      };
      // console.log(songs);


}
