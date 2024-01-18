async function checkUserLoggedIn() {
  const userUid = localStorage.getItem("useruid");
  const userEmail = localStorage.getItem("useremail");

  if (userUid === null || userEmail === "null") {
    alert("Bitte logge dich ein!");
    window.location.href = "index.html";
  } else {
    // Hier kannst du weiteren Code ausführen, der nach dem Einloggen benötigt wird
    console.log("Benutzer eingeloggt:", userUid, userEmail);
  }
}

// Aufruf der asynchronen Funktion
checkUserLoggedIn();


// Funktion zur Verschlüsselung einer E-Mail-Adresse
function encryptEmail(email) {
    var encryptedString = btoa(email);
    return `${encryptedString}`;
  }
  
  // Funktion zur Entschlüsselung eines Base64-kodierten Strings zu einer E-Mail-Adresse
  function decryptEmail(encryptedString) {
    var decryptedEmail = atob(encryptedString)
    return `${decryptedEmail}`;
  }
  
