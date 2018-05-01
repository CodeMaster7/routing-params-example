import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }
    componentDidMount() {
        axios.get('https://joes-autos.herokuapp.com/api/vehicles').then( res => {
            this.setState({
                vehicles: res.data
            })
        })
    }
    render() {
        let vehicles = this.state.vehicles.map( vehicle => {
            return (
                <div key={vehicle.id}>
                    <p>Make: {vehicle.make}</p>
                    <p>Model: {vehicle.model}</p>
                    <Link to={`/vehicle/${vehicle.id}`}>
                        <button> Details for the {vehicle.make}</button>
                    </Link>
                    <hr />
                </div> 
            )
        })
        return (
            <div>
                <h1>Cool Carz (cars with a 'z', cause we're cool)</h1>
                {vehicles}
            </div> 
        )
    }
}