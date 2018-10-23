import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow';

export default class EventComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            eventName:'' ,
            date: '',
            meal:'',
            venue:'',};
    }
    componentDidMount(){
        axios.get('/eventplan/event/'+this.props.match.params.id)
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
                            <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.match.params.id}</td>
                            <td>{this.state.eventName}</td>
                            <td>{this.state.date}</td>
                            <td>{this.state.meal}</td>
                            <td>{this.state.venue}</td>
                            <td>
                    <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}