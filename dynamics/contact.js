function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sakuracrumbs@gmail.com",
    Password : "944A7B00B03646DDE2CEDE9648A2D7F0BEEF",
    To : 'sakuracrumbs@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}