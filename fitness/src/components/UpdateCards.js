import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UpdateCards(props) {
  const [info , setInfo] = useState(props.alldataDb);
  console.log(info)
  const [handle , setHandle] = useState({
    name : "",
    activity:"",
    description:"",
    duration:"",
    date:""
  });
  const handleInput = (event)=>{
    const { name , value } = event.target;
   setHandle({...handle , [name]:value })
  };
  const id = props.id;
  const editData = () => {
    let newuser = info.find(user => {
      return user._id === id;
    });
    setHandle({
      name: newuser.name,
      activity: newuser.activity,
      description:newuser.description,
      duration:newuser.duration,
      date:newuser.date
    });
  };
  const navigate =  useNavigate();

  function edit (){
    // editData();
        axios
          .put(`http://localhost:4500/update/${id}`, handle)
          .then(res => {
            setHandle({
              name: '',
              activity: '',
              description: '',
              duration:'',
              date:''
            });
          });
    navigate("/cards")
  }
  useEffect(() => {
  editData();
  }, [])
  
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
                    <Link to='/cards'>Cards</Link>
                    <span>Update Card</span>
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
              edit();
              }
            }
              >
                <label className='mt-5'>Name</label>
                <input type="text" name='name' value={handle.name} onChange={handleInput} 
                 className='form-control ml-5'  style={{width:"75%"}}/>
                <label>Description</label>
                <input type="text" name='description' value={handle.description} onChange={handleInput}
                 className='form-control ml-5'  style={{width:"75%"}}/>
                <label>Activity type</label>
                <select className='form-control ml-5'  name="activity" onChange={handleInput}
            value={handle.activity}   id='select' style={{width:"75%"}} >
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
                <button className='btn btn-primary mb-5'>Submit Details</button>
            </form>
            </div>
        </section>
    </div>
  )
}

export default UpdateCards