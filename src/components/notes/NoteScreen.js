import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const {active: note} = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const {body, title, id} = formValues;

// use ref almacena una variable mutable que no va a redibujar todo el componente si algo cambia a lo que apuntara es al note.id
  const activeId = useRef(note.id)

  useEffect(() => {
    if(note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id
    }
  }, [note, reset]);

  useEffect(() => {
   dispatch(activeNote(formValues.id, {...formValues}))
    
  }, [formValues, dispatch])

  const handleDelete =()=>{
    // console.log(id)
    dispatch(startDeleting(id));
  }

  return (
    <div className="note__main-contet">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome Tittle"
          className="notes__tittle-input"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happend today?"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {
          note.url &&
          <div className="notes__image">
          <img
            src={note.url}
            alt="image2"
          />
        </div>
        }
      </div>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
        >Delete</button>
    </div>
  );
};
