import React, { useState } from "react";
import Card from '../components/ui/Card';
import styles from './NewRoom.module.css';

export const  NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >=0 ? int : '');
    }
    const onsubmit = (e) => { //this is what happens when we submit this new form.
        e.preventDefault();
        if (name && area) {
            props.addNewRoom ({name, area});
            setName('');
            setArea('');
        } else{
            console.log('invalid input');
        }
    };
    return ( //JSX
            <div className={styles.control}>
            <h4>Add a new room</h4>
            <form className={styles.form} onSubmit={onsubmit}>
                <input className={styles.control}
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)} //when the text in this input changes we are going to 
                //call the setName method and set it to the target value, every time the text changes this 'name' 
                //value in our state is being updated with it. The state and the and the actual user interface are
                //tied together. the value in it is equal to both.
                value={name}
                />
                <input className={styles.control}
                type='text'
                placeholder='area'
                onChange={handleAreaInput}
                value={area}
                />
                <div className={styles.actions}>
                    <button type="submit">Add Room</button>
                </div>
            </form>
        </div>
    )
};