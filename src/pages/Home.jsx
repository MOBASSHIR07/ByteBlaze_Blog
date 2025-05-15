import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import wave from '../assets/wave.svg';

const Home = () => {
    return (
        <div className="relative ">
  <Header />
  <img
  src={wave}
  alt="wave divider"
  className="absolute   md:-bottom-24 w-full h-auto "
/>

</div>

    );
};

export default Home;