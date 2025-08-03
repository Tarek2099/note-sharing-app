const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            }
        case 'ACTIVE_NOTE':
            return {
                ...state,
                activeNote: action.payload
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.payload.id) {
                        return { ...note, ...action.payload }
                    }
                    return note;
                })
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default reducer;