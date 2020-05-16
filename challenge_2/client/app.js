$("form").on('submit', (e) => {
  e.preventDefault()
  var file = $(":file")[0].files[0];
  
  console.log('file', file);
  var form = new FormData();
  form.append('sales', file);

  $.ajax({
    method: "POST",
    url: "/upload_json",
    enctype: 'multipart/form-data',
    cache: false,
    data: form,
    contentType: false,
    processData: false,
    success: (data) => {
      
    }
  })
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
})