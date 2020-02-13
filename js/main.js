$(document).ready(function() {

$('#submit').on('click', function(evt) {
    var newSkill = `<li>${$('input').val()}<button class="remove">Remove</button></li>`;

    $('#list').append(newSkill);
    $('input').value = '';
    $('.remove').on('click', function() {
        $(this).parent().remove();
    });

 });

});
 

