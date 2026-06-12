function sendEmail() {
    const name = document.getElementById("name").value;
    const last = document.getElementById("last").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + last + "\n\nMessage: " + message)}`;

    window.location.href = mailtoLink;
    return false;
}