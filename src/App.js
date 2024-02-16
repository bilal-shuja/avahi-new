import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import Dashboard from './components/Routes/Dashboard';
import {ReactQueryDevtools} from 'react-query/devtools';
import {QueryClientProvider , QueryClient} from 'react-query';
import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";


const queryClient = new QueryClient();
function App() {
  const[login , setLogin] = useState(true)
  const SetLocalLogin= async ()=>{
    try{
      let userLogin = await localStorage.getItem('Count_me-in');
      let parsed = JSON.parse(userLogin);
      if(parsed !== null){
        setLogin(parsed);
      }
    }catch{
        return null;
    }
  }



  useEffect(() => {
    SetLocalLogin()
  }, [])

  return (
    <QueryClientProvider client = {queryClient}>
    <div>
    {
        login === false?
            <Router>
            <Routes>
            <Route path="/" element={<Login/>}/>
          </Routes>
      </Router>
      :
  <Dashboard/>
  }
    </div>
    <ReactQueryDevtools initialIsOpen = {false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
