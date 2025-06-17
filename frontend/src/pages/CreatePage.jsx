import { ArrowLeftIcon } from 'lucide-react'
import React, { use } from 'react'
import { Link } from 'react-router'
import { useState } from 'react'


function CreatePage() {
  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")
  const [loading , setLoading] = useState(false)

function handleSubmit(){

}

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='max-w-7xl mx-auto p-4'>
        <Link to={"/"} className='btn btn-ghost mb-6'>
        <ArrowLeftIcon className='size-5' />Back to Notes</Link>
      </div>
      </div>
  )
}

export default CreatePage