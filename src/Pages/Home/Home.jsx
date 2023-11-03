import React from 'react';
import TopBox from '../../Components/TopBox/TopBox';
import ChartBox from '../../Components/ChartBox/ChartBox';

const Home = () => {
    return (
        <div className='home'>
            <div className="box box1"><TopBox></TopBox></div>
            <div className="box box2"><ChartBox></ChartBox></div>
            <div className="box box3"><ChartBox></ChartBox></div>
            <div className="box box4">Box 4</div>
            <div className="box box5"><ChartBox></ChartBox></div>
            <div className="box box6"><ChartBox></ChartBox></div>
            <div className="box box7">Box 7</div>
            <div className="box box8">Box 8</div>
            <div className="box box9">Box 9</div>
        </div>
    );
};

export default Home;