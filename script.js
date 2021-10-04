let contentGridElement = document.getElementById('contentGrid');


let jsonDatabase = [
  {
    "picture_url" : "images/card1.png",  },
  {
    "picture_url" : "images/card2.png",
  },
  {
    "picture_url" : "images/card3.png",
  },
  {
    "picture_url" : "images/card4.png",
  },
  {
    "picture_url" : "images/card5.png",
  },
  {
    "picture_url" : "images/card6.png",
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
  AOS.init();
}

function createElement(incomingJSON) {

  // creates whole content item div and set class
  let newContentElement = document.createElement("DIV");
  // newContentElement.style.backgroundColor = incomingJSON['bg_color'];
  newContentElement.classList.add('contentItem');

  newContentElement.setAttribute('data-aos', 'flip-down');
  newContentElement.setAttribute('data-aos-duration', '2500');


  // creates and adds a footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  // adds the item to the page
  contentGridElement.appendChild(newContentElement);
}
