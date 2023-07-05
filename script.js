let card = document.querySelectorAll(".card");
for (cards of card) {
  cards.addEventListener("mouseover", function (event) {
    if (event.target.id === "film4") {
      event.target.setAttribute("src", "assets/filmcover4.jpg");
      return;
    } else if (event.target.id === "film2") {
      event.target.setAttribute("src", "assets/filmcover2.jpg");
      return;
    }
  });

  cards.addEventListener("mouseout", function (event) {
    if (event.target.id === "film4") {
      event.target.setAttribute("src", "assets/film4.jpg");
      return;
    }
    if (event.target.id === "film2") {
      event.target.setAttribute("src", "assets/film2.jpg");
      return;
    }
  });
}
