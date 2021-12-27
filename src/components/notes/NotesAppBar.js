import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();

    }

    const handleFileChange = (e) => {
        console.log(e.target);
    }

    return (
        <div className="notes__appbar">
            <span> 15 Diciembre 2021 </span>

            <input 
            type="file"
            id="fileSelector"
            name="file"
            style={{display: 'none'}}
            onChange={ handleFileChange }
            />

            <div>
                <button 
                className="btn"
                onClick={handlePictureClick}
                >
                    Picture
                </button>

                <button 
                className="btn"
                onClick={handleSave}
                >
                    Save
                </button>
            </div>

        </div>
    )
}
