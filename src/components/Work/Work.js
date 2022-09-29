import React from 'react';
import './Work.css';

const Work = ({work}) => {
    const{picture, name,time}=work;
    return (
        <div className='card'>
                <img src={picture} alt="" />
                <h4>Name: {name}</h4>
                <h4>Time: {time}m</h4>
                <button>Add To List</button>
        </div>
    );
};

export default Work;