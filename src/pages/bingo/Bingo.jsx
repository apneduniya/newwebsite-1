import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Bingo = () => {

    const navigate=useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/bingo') {
            setTimeout(() => {
                window.location.href = 'https://hack4bengals2.notion.site/Hack4Bengal-2-0-Hacker-s-Guide-3a4e84ca957746f29a5ac22990c3db74';
            }, 0);
        }
    }, []);

    return (
        <>            
        
        <div className="hack4bengal__navbar-container">
        <Navbar />
    </div>


            <div className='externalpage' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                <p> Loading Bingo 🚀 </p>
            </div>

        </>
    );
}

export default Bingo

