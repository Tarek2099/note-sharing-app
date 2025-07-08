import { useContext } from "react";
import { Link } from "react-router";
import { MyContext } from "../context/MyContext";

const MyNotes = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleDelete = (id) => {
    // Dispatch delete action
    dispatch({
      type: "DELETE_NOTE",
      payload: {
        id: id,
      },
    });
  };
  const handleUpdate = (note) => {
    // Dispatch update action
    dispatch({
      type: "ACTIVE_NOTE",
      payload: note,
    });
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {state.notes.map((note) => (
            <div
              className="note p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              key={note.id}
            >
              <div className="content h-50">
                <h2 className="text-md md:text-xl lg:text-xl font-bold mb-2">
                  {note.title}
                </h2>
                <p>{note.content}</p>
              </div>
              <div className="events flex justify-between ">
                <button
                  className="bg-blue-500 text-white mx-4 px-2 rounded"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
                <Link
                  className="bg-blue-500 text-white mx-4 px-2 rounded"
                  onClick={() => handleUpdate(note)}
                  to="/addnote"
                >
                  Update
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyNotes;
