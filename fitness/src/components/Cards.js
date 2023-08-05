import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Cards(props) {
  const [info, setInfo] = useState([]);
     // Function to get data from mongodb(DataBase) and show 

     async function getDataDB(){
      let data = await fetch('http://localhost:4500/show');
      data = await data.json();
      setInfo(data);
  }
    // Function to delete data From mongoDb(Database)
  function deleteData (id)
  {
    fetch(`http://localhost:4500/delete/${id}`,{
    method:"Delete"
    })
    getDataDB()
  }
const navigate = useNavigate();
function setPopUp(id)
{
  navigate("/updatecard")
  props.getId(id)
  props.AllDataDb(info);
}


useEffect(() => {
  getDataDB();
}, [])

    
  return (
    <div>
                 {/* Breadcrumb Section Begin */}
                 <section className="breadcrumb-section set-bg about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>Activity Result</h2>
                  <div className="breadcrumb-option">
                    <i className="fa fa-home color" /><Link to='/'> Home</Link>
                    <Link to='/track'>Tracker</Link>
                    <span>Cards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
      
        <div className='container'>
          <div className='row'>
        {
            info.map((item)=>{
          return(
            <div className='col-sm-4 mb-2 mt-5'>
              <div className="card card-styles shadow">
        <div className="card-body" id='clickable-content'>
          <h5 className="card-title">Name: {item.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Activity: {item.activity}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Duration: {item.duration}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Date: {item.date}</h6>
          <p className="card-text">Description: {item.description}</p>
          <div className='container'>
          <i className="bi bi-trash ml-3 mr-5 btn btn-danger" onClick={()=>deleteData(item._id)}></i>
          <i className="bi bi-pencil ml-5 btn btn-warning" onClick={()=>setPopUp(item._id)}></i>
          </div>
        </div>
      </div>
      </div>
            )
          })
        }
        </div>
        </div>
    </div>
  )
}

export default Cards