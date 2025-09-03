import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
   if (inputItem.value === "") {
      alert("Por favor, insira um item!");
      return;
   }

   // Criando item da lista
   const itemDaLista = document.createElement("li");

   // Criando container item da lista
   const containerItemDaLista = document.createElement("div");
   containerItemDaLista.classList.add("lista-item-container");

   // Criando input checkbox
   const inputCheckbox = document.createElement("input");
   inputCheckbox.type = "checkbox"; 
   inputCheckbox.id = "checkbox-" + contador++;

   // Criando nome item
   const nomeItem = document.createElement("p");
   nomeItem.innerText = inputItem.value;

   inputCheckbox.addEventListener("click", () => {
      if (inputCheckbox.checked) {
         nomeItem.style.textDecoration = "line-through";
      }
      else {
         nomeItem.style.textDecoration = "none";
      }
   });

   // Anexando elementos no container 
   containerItemDaLista.append(inputCheckbox, nomeItem);

   // Anexando elementos no li
   itemDaLista.appendChild(containerItemDaLista);

   const dataCompleta = gerarDiaDaSemana();

   // Criando texto data
   const textoData = document.createElement("p");
   textoData.classList.add("texto-data");
   textoData.innerText = dataCompleta;

   // Anexando data no item da lista (li)
   itemDaLista.appendChild(textoData);

   inputItem.value = "";

   return itemDaLista;
}