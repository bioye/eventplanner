import React, { Component } from 'react';
import axios from 'axios';

export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeMeal = this.onChangeMeal.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            eventName:'',
            date: '',
            meal:'',
            venue:'',
        }
    }
    
    componentWillUnmount() {
        this.isCancelled = true;
    }
    
    onChangeEventName(e) {
        this.setState({
            eventName: e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }
    onChangeMeal(e) {
        this.setState({
            meal: e.target.value
        });
    }
    onChangeVenue(e) {
        this.setState({
            venue: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const eventPlan = {
            eventName: this.state.eventName,
            date: this.state.date,
            meal: this.state.meal,
            venue: this.state.venue,
        }
        axios.post('/eventplan/add', eventPlan)
        .then(res => console.log(res.data));

        console.log(`event name is ${this.state.eventName}, date is ${this.state.date}, meals are ${this.state.meal}, venue is ${this.state.venue}`);
        this.setState({
            eventName:'',
            date: '',
            meal:'',
            venue:'',
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Event Name:  </label>
                        <input type="text" value={this.state.eventName} className="form-control" onChange={this.onChangeEventName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Date: </label>
                        <input type="text" value={this.state.date} className="form-control" onChange={this.onChangeDate}/>
                    </div>
                    <div className="form-group">
                        <label>Add Meals: </label>
                        <input type="text" value={this.state.meal} className="form-control" onChange={this.onChangeMeal}/>
                    </div>
                    <div className="form-group">
                        <label>Add Venue: </label>
                        <input type="text" value={this.state.venue} className="form-control" onChange={this.onChangeVenue}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Event" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}