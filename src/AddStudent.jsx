import React, { useState } from 'react';

function AddStudent({students,setStudents}){
  const [newStudent,setNewStudent]=useState({
    id:"",
    name:"",
    score:""
  })
  const handleNameChange=(value,index)=>{
    setNewStudent(s=>({
      ...s,
      id:index+1,
      name:value
    }))
  }
    const handleScoreChange=(value,index)=>{
    setNewStudent(s=>({
      ...s,
      score:value
    }))
  }

  const submitStudents=()=>{
    setStudents((prev)=>[...prev,newStudent])
    setNewStudent({
      ...s,
      id:index+1,
      name:value
    })
  }
  return(
    <div>
       <div className='w-200 flex flex-col'>
        <div className='flex justify-between items-center text-[#256594] border-1 
        border-[#256594] border-b-0 py-3 px-4'></div>


       </div>
       <div className='text-[#256594] flex border-0'>
        <input type ="text" name="" placeholder="Student Name" id="" 
        className='flex-1 p-5 border-1 outline-0' value={newStudent.name}
        onChange={(e)=>handleNameChange(e.target.value)}/>
        <input type ="text" name="" placeholder="Score(0-100)" id="" 
        className='flex-1 p-5 border-1 outline-0' value={newStudent.score}
         onChange={(e)=>handleScoreChange(e.target.value)}/>
        <button className='w-30 p-5 border-1 cursor-pointer border-t-[#256594] hover:bg-[#00FFE0]'
        onClick={submitStudents }>+ADD</button>

       </div>
    </div>
   
  )
}
export default AddStudent;