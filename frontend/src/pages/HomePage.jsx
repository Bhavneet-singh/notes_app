import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import RateLimiterUi from '../components/RateLimiterUi.jsx'; // Capital "L"
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard.jsx';
import api from '../lib/axios.js';
import NotesNotFound from '../components/NotesNotFouund.jsx';



function HomePage() {
  const [isRateLimited , setIsRateLimited] = useState(false); 
  const [notes , setNotes] = useState([])
  const [loading , setLoading] = useState(true) ; 

  useEffect(() => {
  async function fetchNotes() {
    try {
      const res = await api.get("/notes"); // Use the custom api instance
      if (Array.isArray(res.data)) {
        setNotes(res.data);
      } else {
        setNotes([]); // Default to an empty array to prevent map error
        toast.error("Received unexpected data format for notes.");
        console.warn("API response for /notes was not an array:", res.data); // Optional: for debugging
      }
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
        
        { notes.length === 0 && !isRateLimited && <NotesNotFound />}

        { notes.length  > 0 && !isRateLimited && 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) =>(
              <NoteCard  key ={note._id} note={note} setNotes ={setNotes}/>
            ))}
          </div>

        }
      </div> 
    </div>
  )
}

export default HomePage