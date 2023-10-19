function clicked () {
    let error_message = document.getElementById("error-message");
    let button = document.getElementById("button")

    let nom = document.getElementById("last-name").value;
    let prenom = document.getElementById("first-name").value;
    let message = document.getElementById("message").value;

    let commentaires = document.getElementById("comment-list");
    

    if (nom === "" || prenom === "" || message === "") {
        error_message.style.display = "block";
        return false; // Empêche l'envoi du formulaire
    } else {
    
        let section = document.getElementById("nameTitle");
        let section1 = document.getElementById("comment-message")
        
        let name = document.createElement("h3")
        let nameT = document.createTextNode(nom + " " + prenom)

        let messages = document.createElement("p")
        let messagep = document.createTextNode(message)

        messages.appendChild(messagep)
        name.appendChild(nameT)

        
        section.appendChild(name)
        section1.appendChild(messages)


        document.getElementById('last-name').value="";
        document.getElementById('first-name').value="";
        document.getElementById('message').value="";

        return true;

    }


}

