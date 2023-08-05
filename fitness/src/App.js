import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Tracker from './components/Tracker';
import PageNotFound from './components/PageNotFound';
import React , {useState} from 'react';
import Cards from './components/Cards';
import UpdateCards from './components/UpdateCards';

function App() {
  const [data , setData] = useState([]);
  function getfromtracker (trackdata)
  {
  setData([...data , trackdata]);
  }
  const [userid , setUserId ] = useState("");
  function getId (id)
  {
   setUserId(id);
  }
  const [alldataDb , setAllDataDb] = useState([]);
  function AllDataDb (data)
  {
    setAllDataDb(data)
  }
  // console.log(alldataDb);
  // console.log(userid);
  // console.log(data);
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/track' element={<Tracker getfromtracker={getfromtracker}/>} />
        <Route path='/cards' element={<Cards data={data} getId={getId} AllDataDb={AllDataDb}/>}/>
        <Route path='/updatecard' element={<UpdateCards alldataDb={alldataDb} id={userid}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
