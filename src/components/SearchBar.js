import React from 'react';

class SearchBar extends React.Component {
    
    state = { term: ''};

    onSubmitForm = (e) =>
    {
        e.preventDefault();
        this.props.submitFunction(this.state.term);
    }

    onTextChange = (e) =>
    {
        this.setState({ term: e.target.value});
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm} >
                    <div className="field">
                        <label>Image Search:</label>
                        
                        <input type="text"
                        value={this.state.term}
                        onChange={this.onTextChange}/>

                    </div>
                    <span>Find {this.props.totalImages} image(s).</span>
                </form>
            </div>
        );
    }
}

export default SearchBar;