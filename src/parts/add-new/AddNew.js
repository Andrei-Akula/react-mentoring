import React from 'react';


class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: props.text || '' };
        this.onAdd = this.onAdd.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    render() {
        return (
            <p className="AddNew control has-addons">
              <input className="input" type="text" value={this.state.text} onChange={this.onTextChange}
                placeholder={this.props.placeholder} />
              <button className="button is-primary" onClick={this.onAdd}>
                Add
              </button>
            </p>
        );
    }

    onAdd(e) {
        if (this.props.onAddClick) {
            this.props.onAddClick(this.state.text);
            this.setState({text: ''});
        }
    }
    onTextChange(e) {
        this.setState({text: e.target.value});
    }
}

export default AddNew;
