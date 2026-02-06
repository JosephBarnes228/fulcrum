var form = document.getElementById("contactForm");
async function handleForm(event) {
    event.preventDefault();
    let name = event.target[0].value;
    let email = event.target[1].value;
    let message = event.target[2].value;

    document.querySelector('.connect.incomplete').style.display = 'none';
    document.querySelector('.connect.complete').style.display = 'flex';

    const formData = new FormData(form);
    formData.append("access_key", "4f82826f-33fc-4158-8e89-065a8163c543");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Success! Your message has been sent.");
            form.reset();
        } else {
            console.log("Error: " + data.message);
        }

    } catch (error) {
        console.log("Something went wrong. Please try again.");
    }
} 
form.addEventListener('submit', handleForm);