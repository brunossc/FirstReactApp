import React from 'react';
import UnsplashService from '../api/UnsplashAPI';
import SearchBar from './SearchBar';
import ImagesList from './ImageList';


class App extends React.Component {

    state = { picsList: [] };

    onSubmitForm = async (term) => {
        const picsList = await UnsplashService.get('/search/photos', { params: { query: term } });
        this.setState({ picsList: picsList.data.results });
    }

    render() {
        return (
            <div className="ui container">
                <p />
                <SearchBar submitFunction={this.onSubmitForm} totalImages={this.state.picsList.length}/>
                <p />
                <ImagesList images={this.state.picsList}/>
            </div>
        );
    }
}

export default App;