function loadPage(fileName) {
  $.get(fileName, function(data, status){
        document.open();
		document.write(data);
		document.close();
    });
}
