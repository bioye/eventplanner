import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {
    constructor(props){
        super(props);
        this.state = {eventPlans: []};
    }
    componentDidMount(){
        axios.get('eventplan')
        .then(response =>{
            this.setState({ eventPlans: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    tabRow(){
        return this.state.eventPlans.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }
    
    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Event Name</td>
                            <td>Date</td>
                            <td>Meal</td>
                            <td>Venue</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}