function countCharacters() {
    let text = document.getElementById("textInput").value;
    document.getElementById("charCount").textContent = text.length + " ký tự";
}