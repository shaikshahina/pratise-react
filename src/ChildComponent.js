import React, {useContext} from 'react';
import {userContext} from './App'

function ChildComponent(props) {
    const {dummyMsg,dummyDispatch} = useContext(userContext)
    const {prod} = props
    const deleteProd = () => {
        dummyDispatch({
            type: "REMOVE",
            payload: prod
        })
    }
    return (
        <div>
            <span>{prod}</span>
            <button>Edit</button>
        <button onClick = {deleteProd}>Delete</button>
        </div>
    );
}

export default ChildComponent;