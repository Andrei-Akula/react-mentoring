
import { createItem, createCategory } from './factory';

describe('factory of Task', () => {

    it('createItem should create a new Task', () => {
        const title = 'new task';
        const desc = 'task description';
        const isDone = true;
        const catID = '010';
        let task = createItem(title, desc, isDone, catID);
        expect(task.title).toBe(title);
        expect(task.description).toBe(desc);
        expect(task.isDone).toBe(isDone);
        expect(task.categoryId).toBe(catID);
    });

    it('createItem should create unique Tasks', () => {
        const title = 'new task';
        const desc = 'task description';
        const isDone = true;
        let task1 = createItem(title, desc, isDone);
        setTimeout(() => {
            let task2 = createItem(title, desc, isDone);
            expect(task1.id).not.toBe(task2.id);
            expect(task1.date).not.toBe(task2.date);
            expect(task1.title).toBe(task2.title);
            expect(task1.description).toBe(task2.description);
            expect(task1.isDone).toBe(task2.isDone);
        }, 100);
    });
});

describe('factory of Category', () => {

    it('createItem should create a new createCategory', () => {
        const title = 'new category';
        let category = createCategory(title);
        expect(category.title).toBe(title);
        expect(category.parentId).toBe(null);
    });

    it('createItem should create a new createCategory with parent', () => {
        const titleParent = 'new category parent';
        const title = 'new category';
        let parent = createCategory(titleParent);
        let category = createCategory(title, parent);
        expect(category.parentId).toBe(parent.id);
    });

});
