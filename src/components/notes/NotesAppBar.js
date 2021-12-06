import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'
import { startUpload } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePicture = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if ( file ) {
            dispatch( startUpload(file) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>8 de Agosto 2021</span>

            <input
                id="fileSelector" 
                type="file" 
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <div>
                <button className="btn" onClick={handlePicture}>
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
