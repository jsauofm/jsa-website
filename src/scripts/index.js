function init_mobile_nav() {
    const toggleButton = document.getElementById('toggle-button');
    const naviList = document.getElementById('navi-list');
    toggleButton.addEventListener('click', () => {
        naviList.classList.toggle('active');
    });
}


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
    if (slideshows.length != 4)
        alert("Please make sure there are 4 images in slideshow.js");
    for (let i=0; i<4; i++)
        slideshow.innerHTML += '<img src="' + slideshows[i] + '">';
    slideshow.innerHTML += '<img src="' + slideshows[0] + '">';
}


function generate_newsletters() {
    // embed latest
    let latest = newsletters[0];
    let link = latest.link;
    let newsletter_element = document.getElementById("newsletter-latest");
    newsletter_element.children[0].innerHTML = latest.time.toUpperCase();
    newsletter_element.children[1].children[0].src = link.slice(0,link.search("/view?")) + "/view?embed";

    // put rest in archive
    let newsletter_archive = document.getElementById("newsletter-archive");
    for (let i=1; i<newsletters.length; i++) {
        let time = newsletters[i].time.toUpperCase();

        let archive_element = document.createElement("a");
        archive_element.className = "newsletter";
        archive_element.style = "background-image: url(photos/newsletter_" + time.slice(0,3) + ".png); opacity: 100%;"
        archive_element.href = newsletters[i].link;

        let archive_time = document.createElement("h1");
        archive_time.className = "title";
        archive_time.style = "color: white;"
        archive_time.innerHTML = time;

        archive_element.appendChild(archive_time);
        newsletter_archive.appendChild(archive_element);
    }
}


function generate_business_info() {
    let business_info = document.getElementById("business-info");
    business_info.innerHTML = "Our Business Chair " + business.name + " has put together resources to help students " +
    "interested in a career and internship opportunities in Japan. They manage an email list and a Facebook page to give " +
    "information on the recruitment process as well as company updates. If you're interested, sign up for the email list " +
    "or the facebook page with the link below. Finally, if you have any questions, feel free to reach out to <a href=\"mailto:"
    + business.email + "\">" + business.email + "</a>";
}