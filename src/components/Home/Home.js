import React from 'react';
import logo from '../../image/logo.png';
import './Home.css';
import Work from '../Work/Work';
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../User/User';

const Home = () => {
    const [works, setWorks] = useState([])
    console.log(works)
    useEffect(() => {
        fetch(`fakedb.json`)
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])
    return (
        <div className='home-container'>
            <div>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h1>Daily Life Goal</h1>
                </div>
                <div>
                    <h2>Select Your Favourite Activity</h2>
                    <div className='card-body'>
                        {
                            works.map(work => <Work
                                key={work.id}
                                work={work}></Work>)
                        }
                    </div>
                </div>

            </div>
            <div className='user-container'>
                <User></User>
            </div>
        </div>
    );
};

export default Home;