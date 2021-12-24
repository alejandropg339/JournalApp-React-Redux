import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {firebase} from '../firebase/firebase-config';
import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';

import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid))

            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        })

    }, [ dispatch, setChecking, setIsLoggedIn ])

    if(checking){
        return(
            //At this point i can use a spiner loading while evaluation finisihs
            <h1>Wait ...</h1>
        )
    }


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRouter isLoggedIn={isLoggedIn} />
                    </PublicRoute>
                } />

                <Route path="/" element={
                    <PrivateRoute>
                        <JournalScreen isLoggedIn={isLoggedIn} />
                    </PrivateRoute>
                } />

                <Route path="*" element={<Navigate replace to="/auth/login" />} />
            </Routes>
        </BrowserRouter>
    )
}
