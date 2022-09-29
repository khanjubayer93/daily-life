import React from 'react';
import './User.css';
import user from '../../image/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const User = () => {
    return (
        <div>
            <div className='user-info'>
                <div>
                    <img className='img' src={user} alt="" />
                </div>
                <div>
                    <h3 className='user-name'>Saleh Ahmad</h3>
                    <p className='location'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Doha, Qatar</p>
                </div>
            </div>
            <div className='user-about'>
                <div>
                    <p><span className='weight'>70</span>kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><span className='weight'>6.2</span>f</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='weight'>22</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <h3 className='add-break'>Add A Break</h3>
            <div className='break-time'>
                <div><button className='break-btn'>5m</button></div>
                <div><button className='break-btn'>10m</button></div>
                <div><button className='break-btn'>15m</button></div>
                <div><button className='break-btn'>20m</button></div>
                <div><button className='break-btn'>25m</button></div>
            </div>
            <h3 className='add-break'>Activity Details</h3>
            <div>
                <div className='activity-time'>
                    <h3>Activity Time: { 20}minute</h3>
                </div>
                <div className='activity-time'>
                    <h3>Break Time: { 20}minute</h3>
                </div>

            </div>
        </div>
    );
};

export default User;