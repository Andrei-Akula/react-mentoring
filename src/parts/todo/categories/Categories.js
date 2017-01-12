import React from 'react';
import { Link, browserHistory } from 'react-router';
import './Categories.css';

function doNothing(e) {
    e.preventDefault();
}

function getDeepSubCategoryIds(categories, categoryId) {
    let subCategories = categories.filter(c => c.parentId === categoryId);
    return [categoryId].concat(
        subCategories.reduce((ids, sub) => ids.concat(getDeepSubCategoryIds(categories, sub.id)), []));
}

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
        this.onExpandClick = this.onExpandClick.bind(this);
        this.onAddSubcategory = this.onAddSubcategory.bind(this);
        this.onEditTitleClick = this.onEditTitleClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onExpandClick(e) {
        e.preventDefault();
        this.setState({ isExpanded: !this.state.isExpanded });
    }
    onAddSubcategory(e) {
        e.preventDefault();
    }
    onEditTitleClick(e) {
        e.preventDefault();
    }
    onDeleteClick(e) {
        e.preventDefault();
        const categoriesToDelete = getDeepSubCategoryIds(this.props.categoryList, this.props.category.id);

        this.props.onDeleteCategoryClick({
            categoryIdList: categoriesToDelete,
            categoryId: this.props.category.id
         });
        browserHistory.replace('/category/default');
    }

    render() {
        const activeClsName = this.props.category.id === this.props.selectedId ? 'active' : '';
        const hasSubcategories = this.props.categoryList.filter(c => c.parentId === this.props.category.id).length > 0;
        const expandIcon = this.state.isExpanded ? 'fa-minus-square-o' :
            (hasSubcategories ? 'fa-plus-square-o' : '');

        return (
            <li className="Category">
                <div className={`category-item box level ${activeClsName}`}>
                    <div className="level-left">
                        <div className="level-item is-inline-block">
                            <a href="#"  className="icon is-small"
                                onClick={hasSubcategories ? this.onExpandClick : doNothing }>
                                <i className={`fa ${expandIcon}`}></i>
                            </a>
                        </div>
                        <div className="level-item is-inline-block">
                            <Link to={`/category/${this.props.category.id}`}>{this.props.category.title}</Link>
                        </div>
                    </div>
                    {
                        this.props.category.id !== 'default' &&
                        <div className="level-right">
                            <div className="level-item is-inline-block">
                                <a href="#" className="icon is-small"
                                    title="Add sub category"
                                    onClick={this.onAddSubcategory}>
                                    <i className="fa fa-plus"></i>
                                </a>
                            </div>
                            <div className="level-item is-inline-block">
                                <a href="#"  className="icon is-small"
                                    title="Edit category"
                                    onClick={this.onEditTitleClick}>
                                    <i className="fa fa-pencil-square-o"></i>
                                </a>
                            </div>
                            <div className="level-item is-inline-block">
                                <a href="#"  className="icon is-small"
                                    title="Delete category"
                                    onClick={this.onDeleteClick}>
                                    <i className="fa fa-remove"></i>
                                </a>
                            </div>
                        </div>
                    }
                </div>
                {
                    this.state.isExpanded &&
                    <Categories selectedId={this.props.selectedId} categoryList={this.props.categoryList}
                        categoryLevel={this.props.category.id} onDeleteCategoryClick={this.props.onDeleteCategoryClick} />
                }
            </li>
        );
    }
}

function Categories(props) {
    const levelCategoryList = props.categoryList.filter(c => c.parentId === props.categoryLevel);

    if (!levelCategoryList || levelCategoryList.length === 0) {
        return null;
    }

    const categoryItems = levelCategoryList.map( (cat) =>
        <Category key={cat.id} category={cat} selectedId={props.selectedId}
            categoryList={props.categoryList} categoryLevel={cat.id}
            onDeleteCategoryClick={props.onDeleteCategoryClick} />
    );
    return (
        <ul className="Categories">{categoryItems}</ul>
    );
}

export default Categories;
