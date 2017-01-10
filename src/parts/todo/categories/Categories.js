import React from 'react';
import { Link } from 'react-router';
import './Categories.css';

function Category(props) {
    const activeClsName = props.category.id === props.selectedId ? 'active' : '';

    return (
        <li className="Category">
            <div className={`category-item box ${activeClsName}`}><Link to={`/category/${props.category.id}`}>{props.category.title}</Link></div>
            <Categories categoryList={props.category.subCategories} selectedId={props.selectedId} />
        </li>
    );
}

function Categories(props) {
    if (!props.categoryList || props.categoryList.length === 0) {
        return null;
    }

    const categoryItems = props.categoryList.map( (cat) =>
        <Category key={cat.id} category={cat} selectedId={props.selectedId} />
    );
    return (
        <ul className="Categories">{categoryItems}</ul>
    );
}

export default Categories;
