import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="note__main-contet">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome Tittle"
          className="notes__tittle-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happend today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image2"
          />
        </div>
      </div>
    </div>
  );
};
