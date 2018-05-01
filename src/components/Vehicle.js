import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: {}
        }
    }
    componentDidMount() {
        let {id} = this.props.match.params;
        axios.get(`https://joes-autos.herokuapp.com/api/vehicles/${id}`).then( res => {
            this.setState({
                vehicle: res.data[0]
            })
        })
    }
    render() {
        let {vehicle} = this.state;
        return (
            <div>
                <h1>Vehicle Details</h1>
                <p>Make: {vehicle.make}</p>
                <p>Model: {vehicle.model}</p>
                <p>Year: {vehicle.year}</p>
                <p>Price: {vehicle.price}</p>
                <p>Color: {vehicle.color}</p>
                <Link to='/'>
                    <button>Back to home page</button>
                </Link>
            </div> 
        )
    }
}