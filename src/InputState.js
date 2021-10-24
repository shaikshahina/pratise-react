import React, {useContext,useState,useRef} from 'react';
import {userContext} from './App';

function InputState(props) {
    const {name,putValues} = props
    // const {value1} = useContext(userContext)
    // const [dummystate,setdummyState] = value1
    // const {dummyMsg,setdummyState} = useContext(userContext)
    // above line of code is for using context 
    const {dummyMsg,dummyDispatch} = useContext(userContext)
    const inputTodo = useRef()
    const [fieldState,changeState] = useState('')
    const Handleclick = () =>{
        putValues("children componet is clicked")
    }
    const changHandle = (e) => {
        changeState(e.target.value)

    }
    const submit = (e) => {
        e.preventDefault();
       dummyDispatch({
            type: "ADD_TO_TODO",
            payload: fieldState

        })
        e.target.elements.addtodo.value = ''
    }

    return (
        <form onSubmit = {submit}
    >
            {/* {dummyMsg} */}
            <input type = "text" name = "addtodo" placeholder = "Add Todo" ref = {inputTodo} onChange = {changHandle}/>
            {/* <button onClick = {Handleclick}>Click Here To Print prop in console</button> */}
            {/* above button for calling parent function */}
            <button>Add To TodoList</button>
        </form>
    );
}

export default InputState;