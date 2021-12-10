const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const rgb128 = 'rgb(128, 128, 128)';
let itemSelected = '';

function verifyItem(item) {
  if (itemSelected && itemSelected !== item) {
    itemSelected.style.backgroundColor = 'white';
    itemSelected = '';
  }

  itemSelected = item;
  itemSelected.style.backgroundColor = rgb128;
}
function addTodo() {
  const li = document.createElement('li');
  li.addEventListener('click', (e) => verifyItem(e.target));

  console.log(itemSelected);
  li.innerText = textoTarefa.value;
  listaTarefas.appendChild(li);
  textoTarefa.value = '';
}

window.onload = () => {
  criarTarefa.addEventListener('click', () => addTodo());
};
