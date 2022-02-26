import {useState} from "react"

const NewUser = ({addUserCB}) => {
  const [email,setEmail] = useState('')
  const [first_name, set_First_Name] = useState('')
  const [lastName,setLastName] = useState('')
  const [foo, bar] = useState('')
  const handleSubmit = (e) => {
    //this prevents a refresh of page
    e.preventDefault()
    console.log('email input value',email)
    console.log('first name value',foo)
    //     if key and value you can short hand id email:email => email
    let newUser = {id: Math.random(),first_name: first_name,lastName: lastName,avatar: foo,email: email}
    console.log(newUser)
    
    // add to users state
    addUserCB(newUser)
  }
    // preventDefault is a form handle submit and .target is button submission
    return (
      <div style={{border: '2px solid green',margin: '40px',padding: '20px'}}>
        <h1>New User Form</h1>
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
          <button>Add User</button>
        </form>
      </div>
    )
  }
  
export default NewUser
