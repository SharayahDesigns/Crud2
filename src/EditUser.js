import {useState} from "react"

const EditUser = (props) => {
  const [email,setEmail] = useState(props.email)
  const [first_name, set_First_Name] = useState(props.first_name)
  const [lastName,setLastName] = useState(props.last_name)
  const [foo, bar] = useState(props.avatar )
  const handleSubmit = (e) => {
    
    //this prevents a refresh of page
    
    e.preventDefault()
    console.log('email input value',email)
    console.log('first name value',foo)
    //     if key and value you can short hand id email:email => email
    let updatedUser = {id:props.id ,first_name, last_Name: lastName,avatar:foo, email}
    
    
    // add to users state
    // this clears the values
    // addUserCB(newUser)
    props.updateUser(updatedUser)
    setEmail('')
    set_First_Name('')
    setLastName('')
    bar('')
  }
    // preventDefault is a form handle submit and .target is button submission
    return (
      <div style={{border: '2px solid green',margin: '40px',padding: '20px'}}>
        <h1>Edit User Form</h1>
        <form onSubmit={handleSubmit}>
          <p>Email:</p>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
          <p>First Name:</p>
          <input value={first_name} onChange={(e) => {set_First_Name(e.target.value)}}></input>
          <p>Last Name:</p>
          <input value={lastName} onChange={(e) => {setLastName(e.target.value)}}></input>
          <p>Avatar</p>
          <input value={foo} onChange={(e) => {bar(e.target.value)}}></input>
          <br></br>
          <button>Edit User</button>
        </form>
      </div>
    )
  }
  
export default EditUser
