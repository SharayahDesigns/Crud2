const User = (props) => {
  
  
  return (
    <div className="boxes">
      <h1>{props.first_name}  {props.last_name}</h1>
      <p><b>Email:</b> {props.email}</p>
      <p><b>Id: </b>{props.id}</p>
      <p><b>Avatar:</b> <i> {props.avatar}</i></p>
      <button onClick={()=> props.deleteUser(props.id)}>Delete</button>
      
      
    </div>
    
)
}

export default User
