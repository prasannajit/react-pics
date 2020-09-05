import React from 'react';

class SearchBar extends React.Component {
    state = { searchText: '' };

    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({ searchText: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label htmlFor="searchbar">Image Search</label>
                    <input id="searchbar" value={this.state.searchText} type="text" onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>
        );
    }
};

export default SearchBar;