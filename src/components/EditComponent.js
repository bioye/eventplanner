import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

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
            venue:'',};
    }

    componentDidMount() {
        axios.get('eventplan/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ eventName: response.data.eventName, date: response.data.date, 
                                meal: response.data.meal, venue: response.data.venue });
            })
            .catch(function (error){
                console.log(error);
            })
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
        axios.post('http://localhost:4200/eventplan/update/'+this.props.match.params.id, eventPlan)
        .then(res => console.log(res.data));
        this.setState({
            eventName:'',
            date: '',
            meal:'',
            venue:'',
        })
        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Edit Event Name:  </label>
                        <input type="text" value={this.state.eventName} className="form-control" onChange={this.onChangeEventName}/>
                    </div>
                    <div className="form-group">
                        <label>Edit Date: </label>
                        <input type="text" value={this.state.date} className="form-control" onChange={this.onChangeDate}/>
                    </div>
                    <div className="form-group">
                        <label>Edit Meals: </label>
                        <input type="text" value={this.state.meal} className="form-control" onChange={this.onChangeMeal}/>
                    </div>
                    <div className="form-group">
                        <label>Edit Venue: </label>
                        <input type="text" value={this.state.venue} className="form-control" onChange={this.onChangeVenue}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Event" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}