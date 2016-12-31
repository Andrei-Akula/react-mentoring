import React from 'react';


function FilterActive(props) {
    return (
        <p className="control">
            <label className="checkbox">
                <input type="checkbox" value={props.showDone} onChange={props.onShowDoneTaskFilter} /> Show Done
            </label>
        </p>
    );
}



export default FilterActive;
