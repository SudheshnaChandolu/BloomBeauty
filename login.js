var emailId='';
var pswd='';

function login()
{
    emailId=document.getElementById('email').value;
    pswd=document.getElementById('password').value;

    if(emailId=='sudheshna@gmail.com' && pswd=='12345')
    {
        document.getElementById('result').innerHTML='Yay!!🎉 Successfully loggedIn.';
        document.getElementById('result').style.color='green';
        alert('Yay!!🎉 Successfully loggedIn.');
        window.location.href='Home.html';
    }
    else{
        document.getElementById('result').innerHTML='Invalid email/password';
        document.getElementById('result').style.color='red';
        alert('Invalid email/password')
    }
    return false;
}