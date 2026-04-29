import React, { useState } from 'react';
import Heading from './components/Heading';
import AddStudent from  './components/AddStudent';
import StudentsSummary from  './components/StudentsSummary';
import AllDetails from  './components/AllDetails';

function App(){
  const initialStudents=[
  {id:1,name:"Aman",score:48},
  {id:2,name:"Monika",score:90},
  {id:3,name:"Roshni",score:88}
  ]
  const [students,setStudents]=useState(initialStudents)
  const updateScore=(index,newScore)=>{
    const updated=students.map(s=>s.id===index+1 ? {...s,score:Number
      (newScore)}:s)
      setStudents(updated)
  }
  return (
    <div className='w-full flex flex-col items-center gap-10 p-20 h-screen bg-gray-900'>
      <Heading/>
      <AddStudent students={students} setStudents={setStudents}/>
      <StudentsSummary/>
      <AllDetails students={students}/>
    </div>
  )
}
export default App;