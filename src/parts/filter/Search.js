import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: props.search };
        this.onSearch = this.onSearch.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    render() {
        return (
            <p className="Search control has-addons">
              <input className="input" type="text" value={this.state.text} onChange={this.onSearchChange} placeholder="Find a to-do" />
              <button className="button is-info" onClick={this.onSearch}>
                Search
              </button>
            </p>
        );
    }

    onSearch(e) {
        this.props.onSearchTaskFilter(this.state.text);
    }
    onSearchChange(e) {
        this.setState({text: e.target.value});
    }
}

export default Search;
