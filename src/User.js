import {useState} from "react"
import EditUser from "./EditUser"

const User = (props) => {
  const [showForm,setShowForm] = useState(false)
  console.log('props', props)
  const renderUser = () => {
    return (
      <>
        <h1>{props.first_name}  {props.last_name}</h1>
        <p><b>Email:</b> {props.email}</p>
        <p><b>Id: </b>{props.id}</p>
        <p><b>Avatar:</b> <i> {props.avatar}</i></p>
        <button onClick={() => props.deleteUser(props.id)}>Delete</button>
      </>
    )
  };
  
  
  return (
    <div className="boxes">
      
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'cancel' : 'edit'}</button>
      {showForm ? <EditUser {...props} /> : renderUser()}
      
      
    </div>
    
  )
};

export default User
