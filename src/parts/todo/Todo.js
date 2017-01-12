import React from 'react';
import MainBar from 'src/parts/main-bar/MainBar';
import ProgressBar from 'src/parts/progress/ProgressBar';
import AddNew from 'src/parts/add-new/AddNew';
import Categories from 'src/parts/todo/categories/Categories';
import Tasks from 'src/parts/todo/tasks/Tasks';
import './Todo.css';


function Todo(props) {

    function onAddTaskClick(text) {
        props.onAddNewTaskClick({
            'text': text,
            'categoryId': props.categoryId
        })
    }

    return (
      <section className="Todo">
        <MainBar taskFilter={props.taskFilter}
            onShowDoneTaskFilter={props.onShowDoneTaskFilter}
            onSearchTaskFilter={props.onSearchTaskFilter} />
        <ProgressBar value="10" max="50" />
        <div className="container is-fluid">
            <div className="columns todo-layout">
              <div className="column is-one-third">
                <AddNew placeholder="Enter new category" onAddClick={props.onAddCategoryClick} />
                <Categories categoryList={props.categories} categoryLevel={null} selectedId={props.categoryId}
                    onDeleteCategoryClick={props.onDeleteCategoryClick} />
              </div>
              <div className="column">
                {
                    props.categoryId  &&
                    <AddNew placeholder="Enter new task" onAddClick={onAddTaskClick} />
                }
                <Tasks taskList={props.tasks} onTaskDoneClick={props.onTaskDoneClick} />
              </div>
            </div>
        </div>
      </section>
    );
}


export default Todo;
