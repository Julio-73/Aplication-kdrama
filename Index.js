let modo = document.getElementById("modo");

let body = document.body;

modo.addEventListener("click", function () {
  let val = body.classList.toggle("dark");
  localStorage.setItem("modo", val);
});

let valor = localStorage.getItem("modo");

if (valor === "true") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

// scroll

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".reparto-1", { origin: "left" });

ScrollReveal().reveal(".Genero-1", { origin: "left" });

ScrollReveal().reveal(".sound", { origin: "top" });

ScrollReveal().reveal(".capitulo", { origin: "top" });

ScrollReveal().reveal("h1", { origin: "button" });

ScrollReveal().reveal("p", { origin: "left" });


