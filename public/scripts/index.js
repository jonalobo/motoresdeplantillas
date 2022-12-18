const btn = document.getElementById("btnIngresar");
const btnVer = document.getElementById("btnVer");

const entradas = document.querySelectorAll("input");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const nombre = entradas[0].value;
  const precio = entradas[1].value;
  const imagen = entradas[2].value;

  if (nombre != "" && precio != "" && imagen != "") {
    // Ejemplo implementando el metodo POST:
    async function postData(url = "", data = {}) {
      // Opciones por defecto estan marcadas con un *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData("http://localhost:3030/productos", { nombre, precio, imagen }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  } else {
    alert('Todos los espacios deben tener información')
  }
});

btnVer.addEventListener('click',(e)=>{
  e.preventDefault()
  window.location.href = "http://localhost:3030/verproductos"
})
