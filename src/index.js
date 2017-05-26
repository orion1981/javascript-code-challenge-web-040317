$(document).ready(function(){
  // your code here!

  $("#note-form").on('submit', function(e){
    e.preventDefault()
    const newComment = $('#newComment').val()
    $('#comment-list').append(`<li>${newComment}<li>`)
  })
  $('#newComment').val('')

})
