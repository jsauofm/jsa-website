// Set available to true/false to enable/disable the merch order form
// Set order_form to the link of the order form (regardless of whether available is true or false)

// To add new stickers, copy and paste the following under stickers:
/*
        {
            name: "NAME",
            designer: "DESIGNER_NAME",
            photo: "../Data/merches/PHOTO_FILENAME",
        },
*/
// To add new apparels, copy and paste the following under apparels:
/*
        {
            name: "NAME",
            designer: "DESIGNER_NAME",
            photo_front: "../Data/merches/FRONT_PHOTO_FILENAME",
            photo_back: "../Data/merches/BACK_PHOTO_FILENAME",
        },
*/
// NOTE: Make sure to upload the photos in Data/merches/
// NOTE: Please delete old, unused photos

merch = {
    available: false,
    order_form: "https://forms.gle/XSpc6WTZj6Nbvf2t8",

    stickers: [
        // new stickers go here
        {
            name: "Japan Map",
            designer: "Karen Nomura",
            photo: "../Data/merches/japan-map.png"
        },
    ],
    
    apparels: [
        // new apparels go here
        {
            name: "JSA Hoodie (White)",
            designer: "Sarah Seto",
            photo_front: "../Data/merches/white-hoodie-front.png",
            photo_back: "../Data/merches/white-hoodie-back.png",
        },
    ]
}