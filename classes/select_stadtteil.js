  document.write('<label>Stadtteil: </label>');
  document.write('<select name="stadtteil">');

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
      if (entry.stadt=="Köln") {
        lweiter=true;
      } else {
        lweiter=false;
      } 
    }
    if (lweiter) {
      if (lstadtbezirk!==sbezirk) {
        lweiter=false;
      }
    }
    if (entry.bezirk=="ALL") {
      lweiter=true;
    }
    if (lstadtbezirk=="(ohne)") {
      lweiter=true;
    }
    if (!lstadtbezirk) {
      lweiter=true;
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
