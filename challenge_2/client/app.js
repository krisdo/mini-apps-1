// $("form").on('submit', (e) => {
//   e.preventDefault()
//   var file = $(":file")[0].files[0];
  
//   // console.log('file', file);
//   var form = new FormData();
//   form.append('file', 'file');
//   console.log(form);

//   $.ajax({
//     method: "POST",
//     url: "/upload_json",
//     data: form,
//     contentType: false,
//     processData: false,
//     success: (data) => {
      
//     }
//   })
//   .done(function( msg ) {
//     alert( "Data Saved: " + msg );
//   });
// })