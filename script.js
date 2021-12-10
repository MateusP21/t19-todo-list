const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
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
function addTodo() {
  const li = document.createElement('li');
  li.addEventListener('click', (e) => verifyItem(e.target));
  li.addEventListener('dblclick', (e) => completeItem(e.target));
  console.log(itemSelected);
  li.innerText = textoTarefa.value;
  listaTarefas.appendChild(li);
  textoTarefa.value = '';
}
function removeAll() {
  listaTarefas.innerHTML = '';
}

function removeCompleted() {
  for (let i = 0; i < listaTarefas.children.length; i += 1) {
    if (listaTarefas.children[i].classList.contains('completed')) {
      console.log(listaTarefas.children[i].remove());
    }
  }
}
window.onload = () => {
  criarTarefa.addEventListener('click', () => addTodo());
  apagaTudo.addEventListener('click', () => removeAll());
  removerFinalizados.addEventListener('click', () => removeCompleted());
};
