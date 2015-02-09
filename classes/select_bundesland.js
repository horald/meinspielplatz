  document.write('<label>Bundesland: </label>');
  document.write('<select name="bundesland">');

  bundesland.daten.forEach(function(entry) {
    sbundesland=entry.text;
    if (sbundesland) { 
      sbundesland = sbundesland.replace("Ã¼","ü"); 
    }
    lbundesland=liste['bundesland'];
    if (lbundesland) { 
      lbundesland = lbundesland.replace("Ã¼","ü"); 
    }

    if (lbundesland==sbundesland) {
      document.write('  <option selected>'+sbundesland+'</option>');
    } else {
      document.write('  <option>'+sbundesland+'</option>');
    } 
  });

  document.write('</select>');
