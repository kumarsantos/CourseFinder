import './App.css'
import {useEffect, useState} from 'react'
import CourseSelector from './CourseSelector';
import Spinner from './Spinner';
import Output from './Output'
import ResultNotFound from './ResultNotFound'
import Welcome from './Welcome'
import {FakeData} from './FakeData'

function App() {

  const [userData,SetData]=useState({
    course:'',
    Country:''
  }) 

  const [spinner,setspinner]=useState(false)
  const [result,Setresult]=useState([])
  const [Error,SetError]=useState(false)

 
  
  const spiner=()=>{
    setspinner(true)
    setTimeout(clear,2000)
  }

  const  clear=() =>{   
    setspinner(false)
  }

  const Find=()=>{
    spiner()  
    const res=FakeData.filter(ob=>ob.Country==userData.Country|| userData.course===Object.entries(ob.Course).map(val=>val)).map(data=>data)
    if(res.length===0){
      SetError(true)
    }
    Setresult(res)  
  }

  return (
    <div className="App">
      <header><h2>Courser Finder</h2></header>
      <CourseSelector Find={Find}  SetData={SetData} userData={userData}/>
      {spinner ? (<Spinner />):(result.length!==0) ? (result.map((val,i) => <Output result={val}  key={i}/>)): (!Error) ? <Welcome />:<ResultNotFound />}
      {/* <Output result={"hidfgdgfdgdfgdgdfgdfgdfgdfgdfgdgdfg"} /> */}
    </div>
  );
}

export default App;
