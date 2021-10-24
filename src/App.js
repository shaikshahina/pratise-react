import './App.css';
import React, {useRef,useState,useEffect,useContext,createContext,useReducer} from 'react';
import InputState from './InputState';
import { productReducer } from './Reducer';
import ChildComponent from './ChildComponent';


export const userContext = createContext();
function App() {
  const [parentState,setParent] = useState({
    username : '',
    clgname : ''
    })
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  // const [dummyMsg,setDummyMsg] = useState([])
  const inputRef = useRef()
  const clgRef = useRef() 

  const putValues = (header) => {
    console.log(header)
    setParent(prevState => ({
      ...prevState,
    'username' : header
    })
    )
  }
  const validateInput = () => {
    const fields = [
      {
        name: 'username',
        value: parentState.username,
        message: 'User Name should not be blank.'
      },
      {
        name: 'clgname',
        value: parentState.clgname,
        message: 'Clgname should not be blank.'
      }
    ];
    const isNotFilled = fields.some(field => {
      if(field.value.trim() === ''){
        setErrorMsg(field.message);
        field.name === "username" ? inputRef.current.focus() : clgRef.current.focus()
        return true;
      }
      setErrorMsg('');
      return false;
    })
    return isNotFilled
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    const isInValid = validateInput();
    if (!isInValid) {
      setSuccessMsg("You're good to go!");
    } else {
      setSuccessMsg('');
    }
    let {email,password,username,clgname} = e.target.elements
    // console.log(e.target.elements)
    // console.log(password.value)
    
    // console.log(clgRef.current.value);
    // email.value = ''
    // password.value = ''
    // username.value = ''
    // clgname.value = ''
    console.log(parentState)

  }
  const inputChange = (e) => {
    const {name,value } = e.target;
    setParent(prevState => ({
      ...parentState,
      [name]: value
    })
    )
  }

  const [dummyMsg,dummyDispatch] = useReducer(productReducer,[])

  return (
    // <userContext.Provider value = {{value1: [dummyMsg,setDummyMsg]}} >
      //  <userContext.Provider value = {{dummyMsg,setDummyMsg}} >
      // above code is for usestate
      <userContext.Provider value = {{dummyMsg,dummyDispatch}} >
    <>
    
    {successMsg}
    {errorMsg}
    {/* {console.log("shahina")}
       {    console.log(dummyMsg)}  */}
    <form onSubmit = {submitHandler}>
      {/* <input type = "email" name= "email" placeholder= "email" defaultValue = "shah" /> */}
      {/* <input type= "password" name = "password" placeholder = "password" /> */}
      <input type = "text" name="username" ref = {inputRef} placeholder = "username" vlaue = {parentState.username} onChange = {inputChange} />
      <input type = "text" name="clgname" ref = {clgRef} placeholder = "clgname"  vlaue = {parentState.clgname} onChange = {inputChange}/>
      <button type = "submit">Submit Here</button>
    </form>
    <InputState 
    name = "Welcome here"
    putValues = {putValues}
    />
    {
      dummyMsg.map(node => (
        <ChildComponent prod = {node} key = {node}/>
      ))
    }
    {/* above code is for usestate */}
  
    
    </>
    </userContext.Provider>
  );
}

export default App;
