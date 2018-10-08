$(document).on('click', '#msg_send', function (eve) {

    console.log('msg button clicked');

    let userEmail = $('#userEmail').val();
    let userMessage = $('#userMessage').val();

    if (userEmail && userMessage) {
        $('#userEmail').val('');
        $('#userMessage').val('');

        let userDataObject = { userEmail: userEmail, userMessage: userMessage };
        console.log('User Data: ' + JSON.stringify(userDataObject));

        $.ajax({
            url: 'http://localhost:3000/adduserMessage',
            dataType: 'json',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: userDataObject,
            success: function (data) {
                console.log('Data Successfully Posted. Returned from server : ' + data);
                alert('Your Query has been successfully Posted.');
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
    else{
        alert('User Email or Message is blank.');
    }
});

