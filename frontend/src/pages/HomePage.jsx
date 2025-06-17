import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import RateLimiterUi from '../components/RateLimiterUi.jsx'; // Capital "L"
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard.jsx';




function HomePage() {
  const [isRateLimited , setIsRateLimited] = useState(false); 
  const [notes , setNotes] = useState([])
  const [loading , setLoading] = useState(true) ; 

  useEffect(() => {
  async function fetchNotes() {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setNotes(res.data);
      setIsRateLimited(false);
    } catch (error) {
      if (error.response?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  }

  fetchNotes();
}, []); // Run only once on mount


  return (
    <div>
      <Navbar />

      {isRateLimited && <RateLimiterUi />}
      
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading...</div>}
        
        { notes.length  > 0 && !isRateLimited && 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) =>(
              <NoteCard  key ={note._id} note={note}/>
            ))}
          </div>

        }
      </div> 
    </div>
  )
}

export default HomePage