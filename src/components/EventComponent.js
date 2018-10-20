import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class EventComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventName:'',
            date: '',
            meal:'',
            venue:'',};
    }
    componentDidMount(){
        axios.get('http://localhost:4200/eventplan/event/'+this.props.location.state.identity)
        .then(response =>{
            this.setState({ eventName: response.data.eventName, date: response.data.date, 
                            meal: response.data.meal, venue: response.data.venue });
        })
        .catch(function (error) {
            console.log(error);
        })
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
                        <tr>
                            <td>{this.state.ID}</td>
                            <td>{this.state.eventName}</td>
                            <td>{this.state.date}</td>
                            <td>{this.state.meal}</td>
                            <td>{this.state.venue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}