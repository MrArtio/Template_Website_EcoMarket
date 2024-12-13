// Funzione per gestire il menu a tendina per dispositivi mobili
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// Aggiunge un evento di clic per mostrare/nascondere il menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Opzionale: Nascondi il menu quando si clicca all'esterno (per una migliore UX)
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('show');
    }
});

// Funzione per la validazione del modulo
document.querySelector("form").addEventListener("submit", function(event) {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");

    if (nome.value.trim() === "") {
        alert("Per favore, inserisci il tuo nome.");
        nome.focus();
        event.preventDefault();
        return false;
    }

    if (email.value.trim() === "") {
        alert("Per favore, inserisci una email valida.");
        email.focus();
        event.preventDefault();
        return false;
    }

    // Se il modulo è valido, il messaggio di invio viene visualizzato
    alert("Il tuo messaggio è stato inviato!");
});
