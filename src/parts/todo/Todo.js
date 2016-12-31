import React from 'react';
import MainBar from 'src/parts/main-bar/MainBar';
import ProgressBar from 'src/parts/progress/ProgressBar';
import Categories from 'src/parts/todo/categories/Categories';
import Tasks from 'src/parts/todo/tasks/Tasks';
import './Todo.css';


function Todo(props) {
    return (
      <section className="Todo">
        <MainBar taskFilter={props.taskFilter}
            onShowDoneTaskFilter={props.onShowDoneTaskFilter}
            onSearchTaskFilter={props.onSearchTaskFilter} />
        <ProgressBar value="10" max="50" />
        <div className="container is-fluid">
            <div className="columns todo-layout">
              <div className="column is-one-third">
                <Categories categoryList={props.categories} />
              </div>
              <div className="column">
                <Tasks taskList={props.tasks} onTaskDoneClick={props.onTaskDoneClick} />
              </div>
            </div>
        </div>
      </section>
    );
}


export default Todo;
