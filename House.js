import React from "react";
import { NewRoomForm } from './NewRoomForm';
import Card from './ui/Card';
import styles from './House.module.css'


//the house component will be a stateless or functional component.
export const House = (props) => {
    //the house is all the data of this house and the 
    //updateHouse is the method we passed in so we can call updateHouse from this child class or component.
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            //every time we delete a room we're really updating a house, we are going to set the updated 
            //house to results that come back when we filter out the room with the matching id. If we're 
            //removing a room we want to remove that room from the array. so we need to bind that room, 
            //we'll assign it to updated house and to bind that house we're going to use the filter method on the array.
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);//going to pass this updatedHouse into the updateHouse method that was passed down
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

    const rooms = () => (//this component is ROOMS plural, this is all of the rooms
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <div className={styles.actions}>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
    return (
        <Card>
            <div>
            <h1>{house.name}</h1>
            {
                rooms ({rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
        </Card>
        
    );

};