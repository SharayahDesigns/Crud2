import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';


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
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Sorry Fuker')
        setLoading(false)
      });
  };
  

  //      //   if loading THEN show loading Or get users
  //             {loading   ?    'loading'   : 'get users'}
  return (
    <div className="App">
      <h1>User Sign In</h1>
      
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading' : 'get users'}</button>
     
      <div>{JSON.stringify(users)}</div>
      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
};

export default App;
