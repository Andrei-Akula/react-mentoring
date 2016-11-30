import React from 'react';
import './Categories.css';

function Category(props) {
    return (
        <li className="Category">
            <div className="category-item box">{props.category.title}</div>
            <Categories categoryList={props.category.subCategories} />
        </li>
    );
}

function Categories(props) {
    if (!props.categoryList || props.categoryList.length === 0) {
        return null;
    }

    const categoryItems = props.categoryList.map( (cat) =>
        <Category key={cat.id} category={cat} />
    );
    return (
        <ul className="Categories">{categoryItems}</ul>
    );
}

export default Categories;
