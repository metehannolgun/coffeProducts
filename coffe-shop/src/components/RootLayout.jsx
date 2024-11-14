import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';


const RootLayout = () => {
    return (
        <div>
            <Provider store={store}>
                <NavBar />




                <main>
                    <Outlet></Outlet>
                </main>
            </Provider>
        </div>
    )
}

export default RootLayout;