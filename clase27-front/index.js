const boton = document.getElementById("boton");

boton.onclick = () => {
  fetch("http://localhost:8080")
    .then((res) => res.json())
    .then((res) => console.log(res));
};
