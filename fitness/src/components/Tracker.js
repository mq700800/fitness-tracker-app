import  React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";


function Tracker(props) {
  //for navigate on new component when the button is clicked 
  const navigate = useNavigate();
  function render()
  {
    // var Selected = document.querySelector('#select');
    // var result = Selected.value;

    // if(result == "walking")
    // {
    // navigate("/walk")
    // }
    // else if(result == "swimming")
    // {
    //   navigate("/swim")
    // }
    // else if(result == "running")
    // {
    //   navigate("/run")
    // }
    // else if(result == "hiking")
    // {
    //   navigate("/hike")
    // }
    // else if(result == "cycling")
    // {
    //   navigate("/cycle")
    // }
    // else
    // {
    //   navigate("/pagenotfound")
    // }
    navigate("/cards")
    // props.getfromtracker(handle);
    createData();
  }

  // to get data from form in tracker component
  const empty = {
    name : "",
    activity:"",
    description:"",
    duration:"",
    date:""
  }
  const [ handle , setHandle ] = useState(empty);

  const handleInput = (event) => {
  const {name , value} = event.target;
  setHandle({...handle, [name]:value})
  console.log(handle);
  }

    // Function to create data and save in mongodb(Database)
    function createData ()
    {
      axios.post('http://localhost:4500/create',{
          name:handle.name,
          activity:handle.activity,
          description:handle.description,
          duration:handle.duration,
          date:handle.date
      }).then(res=>{
          console.log(res.handle)
      })
    }

  return (
    <div>
         {/* Breadcrumb Section Begin */}
         <section className="breadcrumb-section set-bg about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>Fitness Tracker</h2>
                  <div className="breadcrumb-option">
                    <i className="fa fa-home color" /><Link to='/'> Home</Link>
                    <span>Tracker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        <section className='row mt-5 mb-5'>
            <div className='col-4'></div>
            <div className='col-4'>
            <form className='form-group text-center border shadow' style={{borderRadius:"8px"}} 
            onSubmit={(e)=>{
            e.preventDefault();
            setHandle(empty);
            // createData();
            }
            }>
                <label className='mt-5'>Name</label>
                <input type="text" name='name' value={handle.name} onChange={handleInput}
                 className='form-control ml-5'  style={{width:"75%"}}/>
                <label>Description</label>
                <input type="text" name='description' value={handle.description} onChange={handleInput}
                 className='form-control ml-5'  style={{width:"75%"}}/>
                <label>Activity type</label>
                <select className='form-control ml-5' onChange={handleInput} name="activity"
                value={handle.activity} id='select' style={{width:"75%"}} >
                  <option hidden>Select Activity</option>
                  <option value="walking">Walking</option>
                  <option value="swimming">Swiming</option>
                  <option value="running">Running</option>
                  <option value="hiking">Hiking</option>
                  <option value="cycling">Cycling</option>
                </select>
                <label>Duration</label>
                <input type="text" name='duration' value={handle.duration} onChange={handleInput}
                 className='form-control ml-5'  style={{width:"75%"}}/>
                <label>Date</label>
                <input type="date" name='date' value={handle.date} onChange={handleInput}
                 className='form-control ml-5'  style={{width:"75%"}}/>
                <br />
                <button className='btn btn-primary mb-5' onClick={render}>Submit Details</button>
            </form>
            </div>
        </section>
    </div>
  )
}

export default Tracker