$("form").on('submit', (e) => {
  e.preventDefault()
  var file = $(":file")[0].files[0];
  // console.log('file', file);
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
    console.log(data);
    $("body").append(`<p>${data}</p>`);
    $("body").append('<a href="uploads/report.csv" download>Download File </a>');
    }
  })
  .done(function( msg ) {
    console.log( "Data Saved: " + msg );
  });
  
})