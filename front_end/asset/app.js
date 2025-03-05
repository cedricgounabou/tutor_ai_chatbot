// start: Sidebar
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        document.querySelector('.chat-sidebar-profile').classList.remove('active')
    }
})
// end: Sidebar

document.querySelectorAll('[data-conversation]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active')
        })
        document.querySelector(this.dataset.conversation).classList.add('active')
    })
})

document.querySelectorAll('.conversation-header-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversation').classList.remove('active')
        document.querySelector('.conversation-default').classList.add('active')
    })
})
// end: Conversation

//navigation chat-sidebar-menu
document.querySelectorAll('.chat-sidebar-menu-links').forEach(function(item){
    item.addEventListener("click", () => {
        console.log(item)
    })
})

//******************Envoi de message et affiche du message dans la partie conversation utilisateur 

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé !"); // Vérifie que ce message apparaît dans la console
    const textarea = document.getElementById("conversation-footer-input");
  
    if (textarea) {
      console.log("Textarea trouvé !"); // Vérifie que ce message apparaît dans la console
      const adjustHeight = () => {
        console.log("Ajustement de la hauteur..."); // Vérifie que ce message apparaît lors de la saisie
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 255)}px`;
      };
  
      textarea.addEventListener('input', adjustHeight);
      adjustHeight(); // Applique l'ajustement au chargement
    }
  });

  let send = document.querySelector('.sen-message');
  let input  = document.querySelector('#conversation-footer-input');
  
  send.addEventListener("click", function() {
    document.getElementById("conversation-footer-input").focus();
  });

  document.querySelector('.conversation-footer').addEventListener("click", function() {
    input.focus();
  });

  document.getElementById("conversation-footer-input").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le retour à la ligne
        let input = this.value.trim(); //Supprimer les expaces avant et après un block de texte
        if (input !== "") {
            let messageDiv = document.createElement("div");
            messageDiv.classList.add("conversation-message");
            messageDiv.classList.add("position");
            messageDiv.textContent = input;
            document.getElementById("conversation-body").appendChild(messageDiv);
            this.value = "";
        }
        console.log("Je suis là");
    }
});


send.addEventListener("click", () => {
    let message = input.value.trim();
    if (message !== "") {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("conversation-message");
        messageDiv.classList.add("position");
        messageDiv.textContent = message;
        document.getElementById("conversation-body").appendChild(messageDiv);
    }
    console.log("Je suis là");
    input.value = "";

    input.style.height = "45px";
});

/********************************Fin d'envoi et affichage des messages********************************/


