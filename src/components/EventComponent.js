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
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                    <Link to={"/edit/"+this.props.match.params.id}>Click to View and Edit Your Event Plan</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}