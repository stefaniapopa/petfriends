import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            pets: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ pets: users }))
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { pets, searchfield } = this.state;
        const filteredPets = pets.filter(pet => {
            return pet.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !pets.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>PetFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList pets={filteredPets} />
                    </Scroll>
                </div>
            );


    }

}

export default App;