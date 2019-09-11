var pop = [];
var rock = [];
var rap = [];
var rnb = [];
var users = [];
var xPop = [];
var yPop = [];
var xRock = [];
var yRock = [];
var xRap = [];
var yRap = [];
var xRnb = [];
var yRnb = [];
var revPop = [];
var revRock = [];
var revRap = [];
var revRnb = [];
var database = firebase.database();
var refPop = database.ref('soundcloud/user/Pop');
refPop.on('value', function(data){
    var database = data.val();
    var keys = Object.keys(database);
    keys = keys.sort();
    for(var i = 0; i < keys.length; i++){
        var updates = '';
        var k = keys[i];
        updates = username + '<br/>'
        var test = {};
        var playbacks = database[k].Playbacks
        test.followers = database[k].Followers;
        var likes = database[k].Likes;
        test.img = database[k].Picture;
        test.tracks = database[k].Tracks;
        test.username = database[k].User;
        test.cal = playbacks/(test.followers*likes);
        pop.push(test);
        users.push(test);
        bubbleSort(pop);
        function bubbleSort(a){
            var swapped;
            do {
                swapped = false;
                for (var i=0; i < a.length-1; i++) {
                    if (a[i].cal > a[i+1].cal) {
                        var temp = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    }
    PopChart(pop);
    RevPop(revPop);
    function RevPop(array){
        var left = null;
        var right = null;
        var length = array.length;
        for (left = 0; left < length / 2; left += 1)
        {
            right = length - 1 - left;
            [array[left], array[right]] = [array[right], array[left]];
        }
        return array;
    }
    function PopChart(pop){
        revPop = pop;
        var output = document.getElementById('user');
        var count = 1;
        for(var x = 0; x < pop.length; x++){
            if(pop[x].cal > 0.02){
                xPop.push(pop[x].username);
                yPop.push(pop[x].cal);
            }
        }
        var data = {
            labels: xPop,//x-axis 
            datasets:[
            {
                label: "playback Over Followers Times NumOfTracks",
                fillColor:"rgba(220,220,220,0.8)",
                strokeColor: "rgba(220,220,220,0.8)",
                pointColor: "rgba(220,220,220,0.8)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: yPop//Y-Axis we enter the PlayBack/(Followers*TrackCount) values here
            }]
        };
        var option = {};
        var chrt = document.getElementById("mycanvad").getContext('2d');
        var mfc = new Chart(chrt).Line(data,option);

    }
    for(var j=0; j < 10; j++){
        console.log(revPop[j]);
        var x = document.createElement("DIV");
        x.setAttribute("id", "pop");
        x.setAttribute("class","row")
        document.getElementById('popUser').appendChild(x);
        var z = document.createElement("p");
        z.id = 'user';
        z.setAttribute("value", revPop[j].username);
        z.innerHTML = revPop[j].username;
        var a = document.createElement("p");
        a.id = "followers";
        a.innerHTML = revPop[j].followers;
        var b = document.createElement("p");
        b.id = "tracks";
        b.innerHTML = revPop[j].tracks;
        var y = document.createElement("IMG");
        y.id = "UserPic";
        y.src = revPop[j].img;
        y.setAttribute("width", "204");
        y.setAttribute("width", "128");
        x.appendChild(y);
        x.appendChild(z);
        x.appendChild(a);
        x.appendChild(b);
    }
});

var refRock = database.ref('soundcloud/user/Rock');
refRock.on('value', function(data){
    var database = data.val();
    var keys = Object.keys(database);
    keys = keys.sort();
    for(var i = 0; i < keys.length; i++){
        var updates = '';
        var k = keys[i];
        updates = username + '<br/>'
        var test = {};
        var playbacks = database[k].Playbacks
        test.followers = database[k].Followers;
        var likes = database[k].Likes;
        test.img = database[k].Picture;
        test.tracks = database[k].Tracks;
        test.username = database[k].User;
        test.cal = playbacks/(test.followers*likes);
        rock.push(test);
        users.push(test);
        bubbleSort(rock);
        function bubbleSort(a){
            var swapped;
            do {
                swapped = false;
                for (var i=0; i < a.length-1; i++) {
                    if (a[i].cal > a[i+1].cal) {
                        var temp = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    }
    RockChart(rock);
    RevRock(revRock);
    function RevRock(array){
        var left = null;
        var right = null;
        var length = array.length;
        for (left = 0; left < length / 2; left += 1)
        {
            right = length - 1 - left;
            [array[left], array[right]] = [array[right], array[left]];
        }
        return array;
    }
    function RockChart(rock){
        revRock = rock;
        var output = document.getElementById('user');
        var count = 1;
        for(var x = 0; x < rock.length; x++){
            if(rock[x].cal > 0.2){
                xRock.push(rock[x].username);
                yRock.push(rock[x].cal);
            }
        }
        var data = {
            labels: xRock,//x-axis 
            datasets:[
            {
                label: "playback Over Followers Times NumOfTracks",
                fillColor:"rgba(220,220,220,0.8)",
                strokeColor: "rgba(220,220,220,0.8)",
                pointColor: "rgba(220,220,220,0.8)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: yRock,//Y-Axis we enter the PlayBack/(Followers*TrackCount) values here
            }]
        };
        var option = {};
        var chrt = document.getElementById("mycanvad2").getContext('2d');
        var mfc = new Chart(chrt).Line(data,option);

    }
    for(var j=0; j < 10; j++){
        var x = document.createElement("DIV");
        x.setAttribute("id", "rock");
        x.setAttribute("class","row")
        document.getElementById('rockUser').appendChild(x);
        var z = document.createElement("p");
        z.id = 'user';
        z.setAttribute("value", revRock[j].username);
        z.innerHTML = revRock[j].username;
        var a = document.createElement("p");
        a.id = "followers";
        a.innerHTML = revRock[j].followers;
        var b = document.createElement("p");
        b.id = "tracks";
        b.innerHTML = revRock[j].tracks;
        var y = document.createElement("IMG");
        y.id = "UserPic";
        y.src = revRock[j].img;
        y.setAttribute("width", "204");
        y.setAttribute("width", "128");
        x.appendChild(y);
        x.appendChild(z);
        x.appendChild(a);
        x.appendChild(b);
    }
});

var refRap = database.ref('soundcloud/user/Rap');
refRap.on('value', function(data){
    var database = data.val();
    var keys = Object.keys(database);
    keys = keys.sort();
    for(var i = 0; i < keys.length; i++){
        var updates = '';
        var k = keys[i];
        updates = username + '<br/>'
        var test = {};
        var playbacks = database[k].Playbacks
        test.followers = database[k].Followers;
        var likes = database[k].Likes;
        test.img = database[k].Picture;
        test.tracks = database[k].Tracks;
        test.username = database[k].User;
        test.cal = playbacks/(test.followers*likes);
        rap.push(test);
        users.push(test);
        bubbleSort(rap);
        function bubbleSort(a){
            var swapped;
            do {
                swapped = false;
                for (var i=0; i < a.length-1; i++) {
                    if (a[i].cal > a[i+1].cal) {
                        var temp = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    }
    RapChart(rap);
    RevRap(revRap);
    function RevRap(array){
        var left = null;
        var right = null;
        var length = array.length;
        for (left = 0; left < length / 2; left += 1)
        {
            right = length - 1 - left;
            [array[left], array[right]] = [array[right], array[left]];
        }
        return array;
    }
    function RapChart(rap){
        revRap = rap;
        var output = document.getElementById('user');
        var count = 1;
        for(var x = 0; x < rap.length; x++){
            if(rap[x].cal > 0.05){
                xRap.push(rap[x].username);
                yRap.push(rap[x].cal);
            }
        }
        var data = {
            labels: xRap,//x-axis 
            datasets:[
            {
                label: "playback Over Followers Times NumOfTracks",
                fillColor:"rgba(220,220,220,0.8)",
                strokeColor: "rgba(220,220,220,0.8)",
                pointColor: "rgba(220,220,220,0.8)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: yRap,//Y-Axis we enter the PlayBack/(Followers*TrackCount) values here
            }]
        };
        var option = {};
        var chrt = document.getElementById("mycanvad3").getContext('2d');
        var mfc = new Chart(chrt).Line(data,option);

    }
    for(var j=0; j < 10; j++){
        var x = document.createElement("DIV");
        x.setAttribute("id", "rap");
        x.setAttribute("class","row")
        document.getElementById('rapUser').appendChild(x);
        var z = document.createElement("p");
        z.id = 'user';
        z.setAttribute("value", revRap[j].username);
        z.innerHTML = revRap[j].username;
        var a = document.createElement("p");
        a.id = "followers";
        a.innerHTML = revRap[j].followers;
        var b = document.createElement("p");
        b.id = "tracks";
        b.innerHTML = revRap[j].tracks;
        var y = document.createElement("IMG");
        y.id = "UserPic";
        y.src = revRap[j].img;
        y.setAttribute("width", "204");
        y.setAttribute("width", "128");
        x.appendChild(y);
        x.appendChild(z);
        x.appendChild(a);
        x.appendChild(b);
    }
});

var refRnb = database.ref('soundcloud/user/R&B');
refRnb.on('value', function(data){
    var database = data.val();
    var keys = Object.keys(database);
    keys = keys.sort();
    for(var i = 0; i < keys.length; i++){
        var updates = '';
        var k = keys[i];
        updates = username + '<br/>'
        var test = {};
        var playbacks = database[k].Playbacks
        test.followers = database[k].Followers;
        var likes = database[k].Likes;
        test.img = database[k].Picture;
        test.tracks = database[k].Tracks;
        test.username = database[k].User;
        test.cal = playbacks/(test.followers*likes);
        rnb.push(test);
        users.push(test);
        bubbleSort(rnb);
        function bubbleSort(a){
            var swapped;
            do {
                swapped = false;
                for (var i=0; i < a.length-1; i++) {
                    if (a[i].cal > a[i+1].cal) {
                        var temp = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    }
    RnBChart(rnb);
    RevRnb(revRnb);
    function RevRnb(array){
        var left = null;
        var right = null;
        var length = array.length;
        for (left = 0; left < length / 2; left += 1)
        {
            right = length - 1 - left;
            [array[left], array[right]] = [array[right], array[left]];
        }
        return array;
    }
    function RnBChart(rnb){
        console.log(rnb);
        revRnb = rnb;
        var output = document.getElementById('user');
        var count = 1;
        for(var x = 0; x < rnb.length; x++){
            if(rnb[x].cal > 0.02){
                xRnb.push(rnb[x].username);
                yRnb.push(rnb[x].cal);
            }
        }
        var data = {
            labels: xRnb,//x-axis 
            datasets:[
            {
                label: "playback Over Followers Times NumOfTracks",
                fillColor:"rgba(220,220,220,0.8)",
                strokeColor: "rgba(220,220,220,0.8)",
                pointColor: "rgba(220,220,220,0.8)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: yRnb,//Y-Axis we enter the PlayBack/(Followers*TrackCount) values here
            }]
        };
        var option = {};
        var chrt = document.getElementById("mycanvad4").getContext('2d');
        var mfc = new Chart(chrt).Line(data,option);
    }
    for(var j=0; j < 10; j++){
        var x = document.createElement("DIV");
        x.setAttribute("id", "rnb");
        x.setAttribute("class","row")
        document.getElementById('rnbUser').appendChild(x);
        var z = document.createElement("p");
        z.id = 'user';
        z.setAttribute("value", revRnb[j].username);
        z.innerHTML = revRnb[j].username;
        var a = document.createElement("p");
        a.id = "followers";
        a.innerHTML = revRnb[j].followers;
        var b = document.createElement("p");
        b.id = "tracks";
        b.innerHTML = revRnb[j].tracks;
        var y = document.createElement("IMG");
        y.id = "UserPic";
        y.src = revRnb[j].img;
        y.setAttribute("width", "204");
        y.setAttribute("width", "128");
        x.appendChild(y);
        x.appendChild(z);
        x.appendChild(a);
        x.appendChild(b);
    }
});