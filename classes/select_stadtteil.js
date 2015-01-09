  document.write('<label>Stadtteil: </label>');
  document.write('<select name="stadtteil">');

  var sstadt="Köln";
  stadt.daten.forEach(function(entry) {
    if (entry.aktiv=="Ja") {
      sstadt = entry.text;
    }      
  });

  stadtteil.daten.forEach(function(entry) {
    sstadtteil=entry.text;
    lstadtteil = liste['stadtteil'];
    if (lstadtteil) { 
      lstadtteil = lstadtteil.replace("Ã¼","ü"); 
      lstadtteil = lstadtteil.replace("Ã¶","ö"); 
    }
    lstadtbezirk = liste['stadtbezirk'];
    if (lstadtbezirk) { 
      lstadtbezirk = lstadtbezirk.replace("Ã¼","ü"); 
      lstadtbezirk = lstadtbezirk.replace("Ã¶","ö"); 
    }
    sbezirk=entry.bezirk;
    if (sbezirk) {
      sbezirk = sbezirk.replace("Ã¼","ü"); 
    }

    if (entry.stadt=="ALL") {
      lweiter=true;
    } else {
      if (entry.stadt==sstadt) {
        if (lstadtbezirk=="(ohne)") {
          lweiter=true;
        } else {
          if (lstadtbezirk==sbezirk) {
            lweiter=true;
          } else {
            lweiter=false;
          } 
        }
      } else {
        lweiter=false;
      } 
    }

    if (lweiter) {
      //document.write(sstadtbezirk+"<br>");

      if (lstadtteil==sstadtteil) {
        document.write('  <option selected>'+sstadtteil+'</option>');
      } else {
        document.write('  <option>'+sstadtteil+'</option>');
      }

    }
  });

  document.write('</select>');
