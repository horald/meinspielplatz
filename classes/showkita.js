function cbfunc(mydata) { 
        console.log('success',mydata);

        var ni = document.getElementById('mydiv');
        var newdiv = document.createElement('div');
        var dochtml=''; 

        dochtml = '<table class="table">';
        dochtml = dochtml + '<tr>';
        dochtml = dochtml + '<th>Spielplatz</th>';
        dochtml = dochtml + '</tr>';

        var index = 0;
	mydata.proposals.forEach(function(entry) {
          index = index + 1;
        
          lweiter=true;
          if (lweiter) {
            dochtml = dochtml + '<tr>';
            var myvar='entry.proposal.title';
            //var myvar='entry.attributes.Spielplatzname';
            dochtml = dochtml + '<td>'+eval(myvar)+'</td>';
            dochtml = dochtml + '</tr>';
          }	
	});

        dochtml = dochtml + '</table>';
        newdiv.innerHTML = dochtml;
        ni.appendChild(newdiv);

}

//var url = "http://json2jsonp.com/?url=http://geoportal1.stadt-koeln.de/ArcGIS/rest/services/Spielangebote/MapServer/0/query?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=objectid%20is%20not%20null&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=4326&outFields=*&f=pjson&callback=cbfunc"
var url = "http://json2jsonp.com/?url=http://buergerhaushalt.stadt-koeln.de/2015/json&callback=cbfunc"
//var url="http://json2jsonp.com/?url=http://github.com/horald/meinspielplatz/tree/gh-pages/data/import/spielplatz.json&callback=cbfunc";
$.ajax({
  type: 'GET',
  url: url,
  jsonp:false,
  dataType :"json",
  crossDomain: true,
  processData: true
});
