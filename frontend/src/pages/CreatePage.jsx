import { ArrowLeftIcon } from 'lucide-react'
import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import {toast} from 'react-hot-toast';
import api from '../lib/axios';

function CreatePage() {
  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();

async function handleSubmit(e){
  e.preventDefault();


  if(!title || !content){
    toast.error("Please fill all fields")
    return;
    
  }

  setLoading(true);
  try {
    await api.post("/notes" , {
      title , 
      content
    })
    toast.success("Note Created Successfully");
    navigate("/");
    setLoading(false);
  } catch (error) {
    if(error.response.status === 429){
      toast.error("Slow down! you're creating notes too fast" , {
        duration:4000,
        icon:"💀"
      })
    }
    toast.error("Something went wrong");
    setLoading(false);
    
  }

}

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='max-w-7xl mx-auto p-4'>
        <Link to={"/"} className='btn btn-ghost mb-6'>
        <ArrowLeftIcon className='size-5' />Back to Notes</Link>

        <div className='card bg-base-100'>
          <div className='card-body'>
            <h2 className='card-title text-2xl'>Create New Note</h2>
            <form onSubmit={handleSubmit}> 
              <div className='form-control mb-10'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <div className='mb-3'></div>
                <input type="text" 
                placeholder='Note Title' 
                className='input input-bordered'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              
              <div className='form-control mb-10'>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <div className='mb-3'></div>
                <input type="text" 
                placeholder='Content' 
                className='input input-bordered'
                value={content}
                onChange={(e)=> setContent(e.target.value)}/>
              </div>

              <div className='card-actions justify-end'>
                <button type='submit' className='btn btn-primary' disabled={loading}>
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}

export default CreatePage