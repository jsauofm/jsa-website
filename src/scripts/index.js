function generate_index() {
    // generate boardie info
    console.log(boardie_info);
    let boardies = document.getElementById("boardies");

    for (let i=0; i<boardie_info.length; i++) {
        const boardie = boardie_info[i];

        let boardie_card = document.createElement("div");
        boardie_card.className = "card"

        // photo
        boardie_card.innerHTML += '<img src="' + boardie.photo +
        '" alt=' + boardie.name + ' class="card__image">';

        // info
        boardie_card.innerHTML += '<p class="card__name">' + boardie.name + '<br>' + boardie.position + '</p>';
        boardie_card.innerHTML += '<p><b>Year: </b>' + boardie.year +
        '<br><b>Major: </b>' + boardie.major + '<br><b>Interests: </b>' + boardie.interests + '</p>';

        // contacts
        let boardie_contact = document.createElement("p");
        for (contact in boardie.contacts) {
            let c_span = document.createElement("span");
            c_span.className = "fa-stack fa-lg>";
            let c_bg = document.createElement("i");
            c_bg.className = "fa fa-circle fa-stack-2x icon-background";
            let c_a = document.createElement("a");
            c_a.href = boardie.contacts[contact];
            let c_icon = document.createElement("i");
            c_icon.className = "fa fa-stack-1x";
            if (contact == "email")
                c_icon.classList.add("fa-envelope");
            else if (contact == "facebook")
                c_icon.classList.add("fa-facebook");
            else if (contact == "instagram")
                c_icon.classList.add("fa-instagram");
            else if (contact == "linkedin")
                c_icon.classList.add("fa-linkedin");
            c_a.appendChild(c_icon);
            c_span.appendChild(c_bg);
            c_span.appendChild(c_a);
            boardie_contact.appendChild(c_span);
        }
        boardie_card.appendChild(boardie_contact);
        boardies.appendChild(boardie_card);
    }

    // generate slideshow
    let slideshow = document.getElementById("slideshow");
    for (let i=0; i<slideshows.length; i++)
        slideshow.innerHTML += '<img src="' + slideshows[i] + '">';

}