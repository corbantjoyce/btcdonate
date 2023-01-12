function copyString() {
  // Get the hexadecimal string
  const hexString = document.getElementById("hex-string").innerText;
  const button = document.getElementById("copy-button");

  // Copy the hexadecimal string to the clipboard
  navigator.clipboard.writeText(hexString).then(function() {
    button.innerText = "Copied!"
    console.log("Text copied to clipboard");
  }, function(err) {
    console.error("Could not copy text: ", err);
  });
}