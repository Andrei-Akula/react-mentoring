import React from 'react';
import FilterActive from 'src/parts/filter/FilterActive';
import Search from 'src/parts/filter/Search';
import './MainBar.css';

function MainBar() {
    return (
        <section className="MainBar">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <h2 className="subtitle is-5">
                            To-Do list
                        </h2>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item is-inline-block">
                        <FilterActive />
                    </div>
                    <div className="level-item is-inline-block">
                        <Search />
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default MainBar;
