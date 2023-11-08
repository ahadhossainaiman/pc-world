import React from 'react';
import Navber from '../Ui/Navber';
import Footer from '../Ui/Footer';
import FooterPage from '../Ui/Footer';

const RootLayouts = ({children}) => {
    return (
        <>
            <Navber/>
            <main className='min-h-screen'>
                {children}
            </main>
          <FooterPage/>
        </>
    );
};

export default RootLayouts;