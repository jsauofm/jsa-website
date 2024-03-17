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
        archive_element.style = "background-image: url(photos/newsletter-" + time.slice(0,3).toLowerCase() + ".png); opacity: 100%;"
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


function generate_merch() {
    let merchorder = document.getElementById("merchorder");

    // order form
    if (merch.available) {
        merchorder.innerHTML = '<a href = \"' + merch.order_form +
        '\" target="_blank" class="button">Merch Order Form</a>';
    } else {
        merchorder.innerHTML = '<p class="descriptions"><b>Sorry, the merch order form is closed as of now. ' +
        'We will re-open the form along with new merches in the future!</b></p>';
    }

    // stickers
    let stickers = merch.stickers;
    let merchstickers = document.getElementById("merchstickers");
    if (stickers.length == 0) {
        merchstickers.className = "block2";
        merchstickers.innerHTML = '<p class="descriptions"><b>We currently do not have any stickers ' +
        'available.</b></p>';
    } else {
        for (let i=0; i<stickers.length; i++) {
            let stickeritem = document.createElement("div");
            stickeritem.className = "sticker-card";

            let stickerimg = document.createElement("img");
            stickerimg.className = "sticker__image";
            stickerimg.src = stickers[i].photo;
            stickerimg.alt = stickers[i].name;
            stickeritem.appendChild(stickerimg);

            let stickername = document.createElement("p");
            stickername.className = "card__name";
            stickername.innerHTML = stickers[i].name;
            stickeritem.appendChild(stickername);

            let stickerdesigner = document.createElement("p");
            stickerdesigner.className = "card__name3";
            stickerdesigner.innerHTML = "<i>Designed by " + stickers[i].designer + "</i>";
            stickeritem.appendChild(stickerdesigner);

            merchstickers.appendChild(stickeritem);
        }
    }

    // apparels
    let apparels = merch.apparels;
    let merchapparels = document.getElementById("merchapparels");
    if (apparels.length == 0) {
        merchapparels.className = "block2";
        merchapparels.innerHTML = '<p class="descriptions"><b>We currently do not have any apparels ' +
        'available.</b></p>';
    } else {
        for (let i=0; i<apparels.length; i++) {
            let apparelitem = document.createElement("div");
            apparelitem.className = "sticker-card";

            let apparelimg = document.createElement("img");
            apparelimg.className = "apparel__image";
            apparelimg.src = apparels[i].photo_front;
            apparelimg.alt = apparels[i].name;
            apparelimg.onmouseover = () => {apparelimg.src=apparels[i].photo_back};
            apparelimg.onmouseleave = () => {apparelimg.src=apparels[i].photo_front};
            apparelitem.appendChild(apparelimg);

            let apparelname = document.createElement("p");
            apparelname.className = "card__name";
            apparelname.innerHTML = apparels[i].name;
            apparelitem.appendChild(apparelname);

            let appareldesigner = document.createElement("p");
            appareldesigner.className = "card__name3";
            appareldesigner.innerHTML = "<i>Designed by " + apparels[i].designer + "</i>";
            apparelitem.appendChild(appareldesigner);

            merchapparels.appendChild(apparelitem);
        }
    }
}