import React from 'react';


class ModalTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.placeholder = props.placeholder || '';
        this.state = { text: props.text };
        this.onCloseClick = this.onCloseClick.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmitClick(e) {
        this.props.onSubmitClick(this.state.text);
    }

    onCloseClick(e) {
        this.props.onCloseClick();
    }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    render () {
        return (
            <div className="modal is-active">
              <div className="modal-background" onClick={this.onCloseClick}></div>
              <div className="modal-content">
                <div className="box">
                { this.props.label && <label className="label">{this.props.label}</label> }
                  <p className="control">
                    <input className="input" type="text" placeholder={this.placeholder}
                        value={this.state.text} onChange={this.onChange} />
                  </p>
                  <div className="control is-grouped">
                    <p className="control">
                      <button className="button is-primary" onClick={this.onSubmitClick}>Submit</button>
                    </p>
                    <p className="control">
                      <button className="button is-warning" onClick={this.onCloseClick}>Cancel</button>
                    </p>
                  </div>
                </div>
              </div>
              <button className="modal-close" onClick={this.onCloseClick}></button>
            </div>
        );
    }
}


export default ModalTextBox;
