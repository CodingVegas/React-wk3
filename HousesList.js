import React from "react";
import { House } from './House';
import{ houseApi, housesApi } from '../rest/HousesApi.js';
import Card from "./ui/Card";

export class HousesList extends React.Component {
    
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updateHouse) => {
        await housesApi.put(updateHouse);
        this.fetchHouses()
    };

    addHouse = async (house) => {
        await housesApi.post(house);
        await this.fetchHouses()
    };

    render() {{/* Anytime there are curly braces inside of our JSX it is going to be JavaScript */}
        // TODO: add a form for new house data 
        return (
            <Card>
                 <div className="house-list"> 
                {this.state.houses.map((house) => (
                <House
                    house={house}
                    key={house._id}
                    updateHouse={this.updateHouse}
                    />
                ))}
            </div>
            </Card>
           
            )
    }
}