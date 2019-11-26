import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Meal</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.recipieData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.meal}</td>
                <td><button onClick={() => props.removeRecipie(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { recipieData, removeRecipie } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody recipieData={recipieData} removeRecipie={removeRecipie} />
            </table>
        );
    }
}

export default Table;