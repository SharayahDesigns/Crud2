import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';


function App() {
  //the usestate needs to be at the top, these are hooks
  const [users, setUsers] = useState([])
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
        setLoading(false)
      })
      .catch((err) => {
        setError('some error occurred!!!!')
        setLoading(false)
      });
  };
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App" style={{border: '5px solid black',margin: '10px'}}>
      <h1>User SignIn</h1>
      <button disabled={loading} onClick={getUsers}> {loading ? 'loading' : 'get users'}</button>
     
      <div>{JSON.stringify(users)}</div>
        
      
    </div>
  );
};

export default App;
