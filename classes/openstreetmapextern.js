 
  function cbfuncmap(mydata) { 
        console.log('success',mydata);
    var Tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '<a href="http://www.openstreetmap.org" target="_blank">Terms &amp; Feedback</a>'
    });

    var latitude = 0, longitude = 0, zoom_level = 11;
    stadt.daten.forEach(function(entry) {
      if (entry.aktiv=="Ja") {
          latitude = parseFloat(entry.latitude);
          longitude = parseFloat(entry.longitude);;
      }      
    });

    var map = L.map('map').addLayer(Tiles).setView([latitude, longitude], zoom_level);

    //Add Points with geoJson:
    var geojsonFeature = [];
    var index = 0;

    mydata.features.forEach(function(entry) {
      index = index + 1;

      selstadtbezirk=document.auswahl.stadtbezirk.options.selectedIndex;
      if (document.auswahl.stadtbezirk.options[selstadtbezirk].text=='(ohne)') {
        lweiter=true;
      } else {
        if (entry.attributes.Stadtbezirk==document.auswahl.stadtbezirk.options[selstadtbezirk].text) {
          lweiter=true;
        } else {
          lweiter=false;
        }
      }
      if (lweiter) {
        selstadtteil=document.auswahl.stadtteil.options.selectedIndex;
        if (document.auswahl.stadtteil.options[selstadtteil].text=='(ohne)') {
          lweiter=true;
        } else {
          if (entry.attributes.Stadtteil==document.auswahl.stadtteil.options[selstadtteil].text) {
            lweiter=true;
          } else {
            lweiter=false;
          }
        }
      }

//      if (lweiter) {
//        lweiter=false;
//        if (entry.attributes.Tischtennis=="x") {
//          lweiter=true;
//        }
//      }

      if (lweiter) {
        
        var arrelem = 
        {
          "type": "Feature",
          "properties": {
            "name": "spielplatz",
            "popupContent": "<a href='showdata.html?id="+index+"'>"+entry.attributes.Spielplatzname+"</a>",
            "Tischtennis":entry.attributes.Tischtennis,
            "Spielplatzpaten":entry.attributes.Spielplatzpaten
          }, 
          "geometry": {
            "type": "Point",
            "coordinates": [entry.geometry.x, entry.geometry.y],
          }
        };
        geojsonFeature.push(arrelem);
      }

    })

    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var geojsonMarkerOptionsBlue = {
        radius: 8,
        fillColor: "#0000ff",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var geojsonMarkerOptionsYellow = {
        radius: 8,
        fillColor: "#ffff00",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
 
    L.geoJson(geojsonFeature, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.popupContent);
        },          
        pointToLayer: function (feature, latlong) {
            if (feature.properties.Spielplatzpaten == "x") {
              return L.circleMarker(latlong, geojsonMarkerOptionsYellow);
            } else {
              if (feature.properties.Tischtennis == "x") {
                return L.circleMarker(latlong, geojsonMarkerOptionsBlue);
              } else {
                return L.circleMarker(latlong, geojsonMarkerOptions);
              }
            }
        }
    }).addTo(map);
}

    var url = "http://geoportal1.stadt-koeln.de/ArcGIS/rest/services/Spielangebote/MapServer/0/query?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=objectid%20is%20not%20null&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=4326&outFields=%2A&f=pjson&callback=cbfuncmap"
   $.ajax({
      type: 'GET',
      url: url,
      jsonp:false,
      dataType :"jsonp",
      crossDomain: true,
      processData: true
  });
