import React from 'react';

function ProgressBar(props) {
    return (
        <section className="ProgressBar">
            <progress className="progress is-success is-small"
                value={props.value} max={props.max}>{props.value}</progress>
        </section>
    );
}

export default ProgressBar;
