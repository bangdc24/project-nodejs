function dang_ky(){
    $.ajax({
        url: '/register',
        type: 'POST',
        data: {
            name: $('#inputname').val(),
            email: $('#inputEmail3').val(),
            password: $('#inputPassword3').val(),
            password: $('#confirmPassword').val()
        }
    }).done(function(ketqua) {
        
    });
}