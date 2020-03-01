$(document).ready(function(){
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('#last_name').css('border','none');
    $('#first_name').css('border','none');
    $('#user_name').css('border','none');
    $('#email-user').css('border','none');
    $('#address-user').css('border','none');
    $('#Tell-user').css('border','none');
    $('#save').hide();
    $("#edit").click(function(){
        $('#form-user').removeClass(['uk-disabled','blue-grey lighten-5']);
        $('#first_name').css('border','dashed #eee');
        $('#last_name').css('border','dashed #eee');
        $('#user_name').css('border','dashed #eee');
        $('#email-user').css('border','dashed #eee');
        $('#address-user').css('border','dashed #eee');
        $('#Tell-user').css('border','dashed #eee');
        $('#save').show();
        $('#edit').hide();
    });
    $("#save").click(function(){
        $('#form-user').addClass(['uk-disabled','blue-grey lighten-5']);
        $('#last_name').css('border','none');
        $('#first_name').css('border','none');
        $('#user_name').css('border','none');
        $('#email-user').css('border','none');
        $('#address-user').css('border','none');
        $('#Tell-user').css('border','none');
        $('#edit').show();
        $('#save').hide();
        $('#form-user').submit();
    });


});


