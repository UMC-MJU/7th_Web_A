let $input = document.querySelector('.input');
let $todoList = document.querySelector('.todoList');
let $finishList = document.querySelector('.finishList');

function addFinish(item) {
    let $button = item.querySelector('button');
    item.removeChild($button);

    $button = document.createElement('button');
    $button.textContent = '삭제';
    $button.addEventListener('click', () => {
        $finishList.removeChild(item);
    });
    item.appendChild($button);
    $finishList.appendChild(item);
}

function addTodo() {
    const todoText = $input.value.trim();
    if (todoText === '') return;

    const $item = document.createElement('div');
    $item.textContent = todoText;
    $item.classList.add('item');

    const $button = document.createElement('button');
    $button.textContent = '완료';
    $button.addEventListener('click', () => {
        $todoList.removeChild($item);
        addFinish($item);
    });

    $item.appendChild($button);
    $todoList.appendChild($item);

    $input.value = '';
}

$input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});
