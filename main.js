function submitEmail() {
    preventDefault();
    console.log('hi');
    alert('send');
    return false;
}

var form = document.getElementById("contactForm");
function handleForm(event) {
    event.preventDefault();
    let name = event.target[0].value;
    let email = event.target[1].value;
    let message = event.target[2].value;
    console.log(name, email, message);

    document.querySelector('.connect.incomplete').style.display = 'none';
    document.querySelector('.connect.complete').style.display = 'flex';
} 
form.addEventListener('submit', handleForm);