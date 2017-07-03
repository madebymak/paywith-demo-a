// disables submit button when input empty
$('#code_input, #name_input, #email_input, #pass_input, #birthday_input').bind('keyup', function() {
    if(allFilled()) $('#sign-up').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('form input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}
