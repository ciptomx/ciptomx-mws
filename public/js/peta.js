var token = 'pk.eyJ1IjoiY2lwdG9teCIsImEiOiJjam5jeHk5N24yNHQxM3BtbDVubm04ejM2In0.pC6vgnTTQJGuX-_pt2KkLA';
var koorarea = [-0.059537,109.352052];
var koorpontianak = koorarea;
var koorkul1 = [-0.059197,109.352202];
var koorkul2 = [-0.059571,109.354817];
var koorkul3 = [-0.059697,109.350948];
var koorkul4 = [-0.060460,109.350484];
var koorkul5 = [-0.059174,109.352160];

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
        document.getElementById('photoid').innerHTML = '<img src=\"https://lh3.ggpht.com/p/AF1QipMMJXCe17iPriNyMIRTsUek7NstKahYC7fpIhdL=s1536\" width=\"100%\" height=\"auto\">';
        document.getElementById('reviewid').innerHTML = '<div><h3>Review UM Pontianak</h3>Universitas Muhammadiyah Pontianak atau disingkat UM. Pontianak merupakan universitas swasta di kota Pontianak, Indonesia. Lokasi kampus UM.Pontianak berada di kota Jalan Jenderal Ahmad Yani No. 111 kota Pontianak Provinsi Kalimantan Barat..</div>';
    });

    var kuliner1 = L.marker(koorkul1).addTo(pontianakmap);
    kuliner1.bindPopup("Toko Kue/Roti <b>Lamington</b><br><img src='https://lh3.ggpht.com/p/AF1QipOkIGIw8nSh6gLT8Dxin3MHiV4jV3DqAmPqJ9Mo=s512' width='300px'>").closePopup();
    kuliner1.on('click', function (e) {
        console.log('Klik Lamington Pontianak '+e.latlng);
        document.getElementById('photoid').innerHTML =
            '<img src=\"https://lh3.ggpht.com/p/AF1QipOkIGIw8nSh6gLT8Dxin3MHiV4jV3DqAmPqJ9Mo=s512\" width=\"100%\" height=\"auto\">';
        document.getElementById('reviewid').innerHTML = '<div><h3>Review Toko Lamington</h3>Merupakan Toko Roti Kekinian Populer yang terletak di Alamat: Jalan Jenderal Ahmad Yani No.116, Bangka Belitung Laut, Pontianak Tenggara, Bansir Darat, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78112.</div>';
    });

    var kuliner2 = L.marker(koorkul2).addTo(pontianakmap);
    kuliner2.bindPopup("Sop <b>Pak Min Klaten</b><br><img src='https://lh3.ggpht.com/p/AF1QipO-dTzgfq4ZeutD84yEt7VWMACMWevf-gh5pQat=s1536' width='300px'>").closePopup();
    kuliner2.on('click', function (e) {
        console.log('Klik Lamington Pontianak '+e.latlng);
        document.getElementById('photoid').innerHTML =
            '<img src=\"https://lh3.ggpht.com/p/AF1QipO-dTzgfq4ZeutD84yEt7VWMACMWevf-gh5pQat=s1536\"width=\"100%\" height=\"auto\">';
        document.getElementById('reviewid').innerHTML = '<div><h3>Review Sop Pak Min Klaten</h3>Merupakan Sop Populer Yang mempunyai cabang di berbagai kota di Indonesia yang terletak di Alamat: Jalan BLKI, Bangka Belitung Laut, Pontianak Tenggara, Bansir Darat, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78112.</div>';
    });

    var kuliner3 = L.marker(koorkul3).addTo(pontianakmap);
    kuliner3.bindPopup("Kedai <b>Cemilan Pontianak</b> <img src='https://lh3.ggpht.com/p/AF1QipMjX-yFUJoZJuaQD0ib6jM_61Z2nT5bNeAC-CtO=s512' width='300px'>").closePopup();
    kuliner3.on('click', function (e) {
        console.log('Klik Lamington Pontianak '+e.latlng);
        document.getElementById('photoid').innerHTML =
            '<img src=\"https://lh3.ggpht.com/p/AF1QipMjX-yFUJoZJuaQD0ib6jM_61Z2nT5bNeAC-CtO=s512\" width=\"100%\" height=\"auto\">';
        document.getElementById('reviewid').innerHTML = '<div><h3>Review Kedai Cemilan Pontianak</h3>Merupakan Toko Cemilan yang terletak di Alamat: Jalan Sepakat 2, Bangka Belitung Laut, Pontianak Tenggara, Bansir Darat, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78112.</div>';
    });

    var kuliner4 = L.marker(koorkul4).addTo(pontianakmap);
    kuliner4.bindPopup("Kuliner <b>Pisang Gemesh Pontianak</b> <img src='https://lh3.ggpht.com/p/AF1QipNMLdUPQuXtDi5Eo_2njsrlTzYwkOp0oHeWK-V-=s1536' width='300px'>").closePopup();
    kuliner4.on('click', function (e) {
        console.log('Klik Lamington Pontianak '+e.latlng);
        document.getElementById('photoid').innerHTML =
            '<img src=\"https://lh3.ggpht.com/p/AF1QipNMLdUPQuXtDi5Eo_2njsrlTzYwkOp0oHeWK-V-=s1536\" width=\"100%\" height=\"auto\">';
        document.getElementById('reviewid').innerHTML = '<div><h3>Review Kuliner Pisang Gemesh Pontianak</h3>Merupakan Kedai Aneka Olahan Pisang Populer yang terletak di Alamat: Jalan Sepakat 2, Bangka Belitung Laut, Pontianak Tenggara, Bansir Darat, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78112.</div>';
    });

    var kuliner5 = L.marker(koorkul5).addTo(pontianakmap);
    kuliner5.bindPopup("Kuliner <b>NasiDap</b> <img src='https://lh3.ggpht.com/p/AF1QipMAH3djq_JSqvTus33C43i6cTw4_27HxV5m3IjX=s1536' width='300px'>").closePopup();
    kuliner5.on('click', function (e) {
        console.log('Klik Lamington Pontianak '+e.latlng);
        document.getElementById('photoid').innerHTML = '<img src=\"https://lh3.ggpht.com/p/AF1QipMAH3djq_JSqvTus33C43i6cTw4_27HxV5m3IjX=s1536\" width=\"100%\" height=\"auto\">';
        document.getElementById('reviewid').innerHTML = '<div><h3>Review NasiDap</h3>Merupakan Kuliner Semi Berat Populer yang terletak di Depan Indomaret Alamat: Jalan Jenderal Ahmad Yani No.116, Bangka Belitung Laut, Pontianak Tenggara, Bansir Darat, Pontianak Tenggara, Kota Pontianak, Kalimantan Barat 78112.</div>';
    });
