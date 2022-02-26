import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import User from './User';
import NewUser from './NewUserForm';


function App() {
  //the usestate needs to be at the top, these are hooks
  const [users,setUsers] = useState([])
  // const [state, setStat]= useState(initialState)
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState (null)
  
  const getUsers = () => {
    setLoading(true)
    setError(null)
    //generall syntax
    // axios.get('url').then((response)=>){}
    axios
      .get("https://reqres.in/api/users?delay=1")
      .then((res) => {
        console.log(res)
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Sorry Fuker')
        setLoading(false)
      });
  };
  
  const addUser = (user) => {
    let newUsers = [user, ...users]
    setUsers(newUsers)
  }
  
  const deleteUser = (id) => {
    console.log(id)
    
    let newUsers = users.filter(u => u.id !== id)
    setUsers(newUsers)
    // remove from users
  }
  
  const renderUsers = ()=>{
    return users.map((user) => {
      return <User key={user.id}{...user} deleteUser={() => deleteUser(user.id)} />
      
    })
  }
  

  //             if loading THEN show loading Or get users
  //             {loading   ?    'loading'   : 'get users'}
  
  return (
    <div className="App">
      <h1 className='title'>User Sign In</h1>
      
       
      {/* hr is a space  */}
      <hr/>
      
    
      <button className='getusers' disabled={loading} onClick={getUsers}>{loading ? 'loading' : 'Get Users'}</button>
      <NewUser addUserCB={addUser}/>
     
      {/* <div>{users.map((u) => <User email={u.email} first_name={u.first_name}/>)} </div> */}
      
      {/* this is the cleaner version */}
                         {/* the KEY uses are to keep track behind the scenes  */}
      <div>{users.map((u) => <User key={u.id} {...u} deleteUser={deleteUser}/>)} </div>
      
      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
};

export default App;
