const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');

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

function completeItem(item) {
  item.classList.toggle('completed');
}

const createTodo = (data) => {
  const li = document.createElement('li');
  li.addEventListener('click', (e) => verifyItem(e.target));
  li.addEventListener('dblclick', (e) => completeItem(e.target));
  if (data.classList[0]) li.classList.add(data.classList[0]);
  li.innerText = data.value;
  return li;
};
function addTodo(item) {
  if (!item && !textoTarefa.value) return;

  if (item) {
    listaTarefas.appendChild(createTodo(item));
  } else {
    listaTarefas.appendChild(createTodo(textoTarefa));
  }

  textoTarefa.value = '';
}

function removeAll() {
  listaTarefas.innerHTML = '';
}

function removeCompleted() {
  const itemsCompleted = document.getElementsByClassName('completed');

  while (itemsCompleted.length) {
    itemsCompleted[itemsCompleted.length - 1].remove();
  }
}

function saveTodo() {
  const array = [...listaTarefas.children];
  const listaTarefasArray = array.map((item) =>
    ({ value: item.innerText, classList: item.classList }));
  localStorage.setItem('data', JSON.stringify(listaTarefasArray));
}

function loadTodo() {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data === null) return;
  data.forEach((element) => addTodo(element));
}
window.onload = () => {
  loadTodo();
  criarTarefa.addEventListener('click', () => addTodo());
  apagaTudo.addEventListener('click', () => removeAll());
  removerFinalizados.addEventListener('click', () => removeCompleted());
  salvarTarefas.addEventListener('click', () => saveTodo());
};
