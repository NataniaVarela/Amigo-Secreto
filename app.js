let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (!nombre) {
    alert("Por favor, ingrese un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    const item = document.createElement("li");
    item.textContent = amigo;
    listaAmigos.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agregue al menos un amigo antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  document.getElementById("resultado").textContent = amigos[indiceAleatorio];
}
