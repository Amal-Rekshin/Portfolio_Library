function downloadResume() {
    const link = document.createElement("a");
    link.href = "./Antony Amal Rekshin.pdf"; // Update with your file path
    link.download = "Antony Amal Rekshin A.pdf";
    link.click();
    alert("Downloading Resume...");
}
