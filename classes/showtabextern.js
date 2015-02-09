    $(function(){
 
     //var url = 'http://geoportal1.stadt-koeln.de/ArcGIS/rest/services/Spielangebote/MapServer/0/query?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=objectid%20is%20not%20null&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=4326&outFields=%2A&f=json';
     //var url = '../data/import/spielplatzextern.json';
	 var sstadt="München";
     var url = '../data/import/spielplatz_'+sstadt+'.json';
     $.getJSON(url,function(mydata){
        console.log('success');

        var ni = document.getElementById('mydiv');
        var newdiv = document.createElement('div');
        var dochtml=''; 

        dochtml = '<table class="table">';
        dochtml = dochtml + '<tr>';
        dochtml = dochtml + '<th>Spielplatz</th>';
        dochtml = dochtml + '<th>Stadtbezirk</th>';
        dochtml = dochtml + '</tr>';

		mydata.features.forEach(function(entry) {
        
  		  lweiter=true;
          if (lweiter) {
  		    dochtml = dochtml + '<tr>';
            dochtml = dochtml + '<td>'+entry.attributes.Spielplatzname+'</td>';
            dochtml = dochtml + '<td>'+entry.attributes.Stadtbezirk+'</td>';
            dochtml = dochtml + '</tr>';
		  }	
		});

        dochtml = dochtml + '</table>';
        newdiv.innerHTML = dochtml;
        ni.appendChild(newdiv);

		}).error(function(){
          console.log('error');

		});
    });
