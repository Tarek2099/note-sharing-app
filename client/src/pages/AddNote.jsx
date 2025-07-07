import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, dispatch } = useContext(MyContext);
  const navigate = useNavigate();

  // Effect
  useEffect(() => {
    if (state.activeNote) {
      setTitle(state.activeNote.title);
      setContent(state.activeNote.content);
    }
  }, [state.activeNote]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch action to add a new note
    if (state.activeNote) {
      dispatch({
        type: "UPDATE_NOTE",
        payload: {
          id: state.activeNote.id,
          title,
          content,
        },
      });
    } else {
      // Add new
      dispatch({
        type: "ADD_NOTE",
        payload: {
          id: Date.now(),
          title: title,
          content: content,
        },
      });
    }
    // Reset form
    setTitle("");
    setContent("");
  };
  const handleNavigate = () => {
    // Navigate to MyNotes
    navigate("/mynotes");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md p-6 mx-auto w-100 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h1 className="mb-2 font-bold text-center text-xl text">
          Add New Note
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="">Title</label>
          <input
            className="bg-gray-200 px-4 py-1 rounded outline-0"
            placeholder="Title Here...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content</label>
          <textarea
            className="bg-gray-200 px-4 py-1 rounded outline-0 h-38"
            placeholder="Content Here...."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="px-2 py-1 rounded bg-blue-500 text-white text-center cursor-pointer"
            type="submit"
            onClick={handleNavigate}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
