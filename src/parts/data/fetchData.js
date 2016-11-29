import { createItem, createCategory  } from './factory';

var data = [
    createCategory('Category #1', [createItem('Item 1 1', ''), createItem('Item 1 2', ''), createItem('Item 1 2', '')],
        createCategory('Category #1.2', [createItem('Item 1.2 1', ''), createItem('Item 1.2 2', ''), createItem('Item 1.2 3', '')]),
        createCategory('Category #1.3', [createItem('Item 1.3 1', ''), createItem('Item 1.3 2', ''), createItem('Item 1.3 3', '')])
    ),
    createCategory('Category #2', [createItem('Item 2 1', ''), createItem('Item 2 2', ''), createItem('Item 2 2', '')],
        createCategory('Category #2.2', [createItem('Item 2.2 1', ''), createItem('Item 2.2 2', ''), createItem('Item 2.2 3', '')]),
        createCategory('Category #2.3', [createItem('Item 2.3 1', ''), createItem('Item 2.3 2', ''), createItem('Item 2.3 3', '')])
    )
];

function fetchTodos() {
    return data;
}

export default fetchTodos;
