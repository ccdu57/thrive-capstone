import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        recipies: []
    };

    removeRecipie = index => {
        const { recipies } = this.state;
    
        this.setState({
            recipies: recipies.filter((recipie, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = recipie => {
        this.setState({recipies: [...this.state.recipies, recipie]});
    }

    render() {
        const { recipies } = this.state;
        
        return (
            <div className="container">
                <h1>Thrive Admin Panel</h1>
                <p>Admins can add recipies here.</p>
                <Table
                    recipieData={recipies}
                    removeRecipie={this.removeRecipie}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;