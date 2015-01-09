  document.write('<label>Stadtbezirk: </label>');
  document.write('<select name="stadtbezirk">');

  var sstadt="Köln";
  stadt.daten.forEach(function(entry) {
    if (entry.aktiv=="Ja") {
      sstadt = entry.text;
    }      
  });

  stadtbezirk.daten.forEach(function(entry) {
    sstadtbezirk=entry.text;
    lstadtbezirk=liste['stadtbezirk'];
    if (lstadtbezirk) {
      lstadtbezirk = lstadtbezirk.replace("Ã¼","ü"); 
    }
    if (entry.stadt=="ALL") {
      lweiter=true;
    } else {
      if (entry.stadt==sstadt) {
        lweiter=true;
      } else {
        lweiter=false;
      } 
    }
    if (lweiter) {
      //document.write(sstadtbezirk+"<br>");

      if (lstadtbezirk==sstadtbezirk) {
        document.write('  <option selected>'+sstadtbezirk+'</option>');
      } else {
        document.write('  <option>'+sstadtbezirk+'</option>');
      }

    }
  });

  document.write('</select>');
