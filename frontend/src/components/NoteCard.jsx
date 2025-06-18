import { PenSquareIcon, TrashIcon } from 'lucide-react'
import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { formatDate } from "../lib/utils"
import api from '../lib/axios'; // Assuming 'api' is your configured Axios instance
import toast from 'react-hot-toast'; // Uncomment if you want to show toast notifications

function NoteCard({ note , setNotes}) {
  const navigate = useNavigate();

  async function handleDelete(e , id){
    e.preventDefault()

    if (!window.confirm("Are you sure you want to delete this note?")) return;
    console.log(id);
    try {
      await api.delete(`/notes/${id}`);
      // Consider adding success feedback (e.g., toast message)
      // or a callback to refresh the notes list in the parent component.
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success('Note deleted successfully!');
      navigate("/");
    } catch (error) {
      console.error("Failed to delete note:", error);
      // Consider showing an error toast to the user
      toast.error('Failed to delete note.');
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-blue-500 p-4"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-2">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-sm btn-ghost bg-red-500" onClick={(e) => handleDelete(e , note._id)}>
              <TrashIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
