var token = 'pk.eyJ1IjoiY2lwdG9teCIsImEiOiJjam5jeHk5N24yNHQxM3BtbDVubm04ejM2In0.pC6vgnTTQJGuX-_pt2KkLA';
var koorarea = [-0.059537,109.352052];
var koorpontianak = koorarea;

var pontianakmap = L.map('map').setView(koorarea, 19.25);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+token, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 30,
        id: 'mapbox.streets',
        accessToken: token
    }).addTo(pontianakmap);

    var area = L.marker(koorarea).addTo(pontianakmap);
    area.bindPopup("<b>Universitas Muhammadiyah Pontinak </b><br>Jl. Ahmad Yani No. 111<br><img src='https://lh3.ggpht.com/p/AF1QipMMJXCe17iPriNyMIRTsUek7NstKahYC7fpIhdL=s1536' width='300px'>").openPopup();
    area.on('click', function (e) {
        console.log('Klik Area UM Pontianak '+e.latlng);
    });