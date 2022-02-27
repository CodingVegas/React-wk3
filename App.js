import React, { Component } from "react";
import { HousesList } from './components/HousesList';



class App extends Component {
    // TODO: add a form for new house data 
    // form should have button to call POST on houses api
    render () {
        return(
            <div>
                <HousesList />
            </div>
        )
    }
}
export default App;