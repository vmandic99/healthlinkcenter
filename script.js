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
  
