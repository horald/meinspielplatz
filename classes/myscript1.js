window.onload = function load() {
  var mydata = JSON.parse(spielplatzdaten);
  var ni = document.getElementById('mydiv');
  var newdiv = document.createElement('div');
  var dochtml=''; 

  dochtml = '<table class="table">';
  dochtml = dochtml + '<tr>';
  dochtml = dochtml + '<th>Nr</th>';
  dochtml = dochtml + '<th>Spielplatz</th>';
  dochtml = dochtml + '<th>Stadtbezirk</th>';
  dochtml = dochtml + '<th>Stadtteil</th>';
  dochtml = dochtml + '<th>X-Koor</th>';
  dochtml = dochtml + '<th>Y-Koor</th>';
  if (liste["alledaten"]=="JA") {
    dochtml = dochtml + '<th>Stadtviertel</th>';
    dochtml = dochtml + '<th>Spielplatzpaten</th>';
    dochtml = dochtml + '<th>Besonderheiten</th>';
    dochtml = dochtml + '<th>in Grünanlage/Park</th>';
    dochtml = dochtml + '<th>verkehrsarmer Strasse</th>';
    dochtml = dochtml + '<th>verkehrsreicher Strasse</th>';
    dochtml = dochtml + '<th>in_Wohnanlage</th>';
    dochtml = dochtml + '<th>Geschäfte/Gewerbe</th>';
    dochtml = dochtml + '<th>Wohnviertel</th>';
    dochtml = dochtml + '<th>Ball u. Sportangebot</th>';
    dochtml = dochtml + '<th>Wohnen/Geschäfte</th>';
    dochtml = dochtml + '<th>Basketball</th>';
    dochtml = dochtml + '<th>Bolzplatz</th>';
    dochtml = dochtml + '<th>Bolzwiese</th>';
    dochtml = dochtml + '<th>Boulebahn</th>';
    dochtml = dochtml + '<th>Streetball</th>';
    dochtml = dochtml + '<th>Skaten</th>';
    dochtml = dochtml + '<th>Tischtennis</th>';
    dochtml = dochtml + '<th>Basketballkörbe</th>';
    dochtml = dochtml + '<th>Fussballtore</th>';
    dochtml = dochtml + '<th>Tischtennis Tische</th>';
    dochtml = dochtml + '<th>Torwand</th>';
    dochtml = dochtml + '<th>Sonstiges</th>';
  }
  dochtml = dochtml + '</tr>';

  var nr = 0;
  var index = 0;
  var lweiter = true; 
  mydata[0].features.forEach(function(entry) {
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
    if (lweiter) {
      nr = nr + 1;
      dochtml = dochtml + '<tr>';
      dochtml = dochtml + '<td>'+nr+'</td>';
      dochtml = dochtml + '<td><a href="showdata.html?id='+index+'">'+entry.attributes.Spielplatzname+'</a></td>';
      dochtml = dochtml + '<td>'+entry.attributes.Stadtbezirk+'</td>';
      dochtml = dochtml + '<td>'+entry.attributes.Stadtteil+'</td>';
      dochtml = dochtml + '<td>'+entry.geometry.x+'</td>';
      dochtml = dochtml + '<td>'+entry.geometry.y+'</td>';
      if (liste["alledaten"]=="JA") {
        dochtml = dochtml + '<td>'+entry.attributes.Stadtviertel+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Spielplatzpaten+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Besonderheiten+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.in_Grünanlage_Park+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.verkehrsarmer_Strasse+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.verkehrsreicher_Strasse+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.in_Wohnanlage+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Geschäfte_Gewerbe+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Wohnviertel+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Ball_u_Sportangebot+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Wohnen_Geschäfte+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Basketball+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Bolzplatz+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Bolzwiese+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Boulebahn+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Streetball+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Skaten+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Tischtennis+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Basketballkörbe+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Fussballtore+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Tischtennis_Tische+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Torwand+'</td>';
        dochtml = dochtml + '<td>'+entry.attributes.Sonstiges+'</td>';
      }
      dochtml = dochtml + '</tr>';
    }
});

  dochtml = dochtml + '</table>';
  newdiv.innerHTML = dochtml;
  ni.appendChild(newdiv);

}


function get_value(e) {
 var v = e.options[e.selectedIndex].value;
 //alert("Wert: "+v);
 var t = e.options[e.selectedIndex].text;
 //alert("Text: "+t);
}

