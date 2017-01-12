import React from 'react';
import './Categories.css';


function Category(props) {
    const activeCategoryId = props.task ? props.task.categoryId : '';
    const activeClsName = activeCategoryId === props.category.id ? 'active' : '';

    return (
        <li className="Category">
            <div className={`category-item box level ${activeClsName}`}>
                <div className="level-left name">
                    {props.category.title}
                </div>
                <div className="level-right">
                    {
                        !activeClsName &&
                        <a href="#" className="icon is-small" onClick={props.onMoveToCategoryClick} data-category-id={props.category.id}>
                            <i className="fa fa-reply"></i>
                        </a>
                    }
                </div>
            </div>
            <Categories categoryList={props.category.subCategories} task={props.task} onMoveToCategoryClick={props.onMoveToCategoryClick} />
        </li>
    );
}

function Categories(props) {
    if (!props.categoryList || props.categoryList.length === 0) {
        return null;
    }

    const categoryItems = props.categoryList.map( (cat) =>
        <Category key={cat.id} category={cat} task={props.task} onMoveToCategoryClick={props.onMoveToCategoryClick} />
    );
    return (
        <ul className="Categories">{categoryItems}</ul>
    );
}

export default Categories;
