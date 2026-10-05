import React from 'react'
import Banner from '../../Components/Banner/Banner'

import Course from '../../Components/Course/Course'
import Scholarship from '../../Components/Scholarship/Scholarship'
import Why from '../../Components/Why/Why'
import Founder from '../../Components/Founder/Founder'

function Home() {
  return (
    <div>
      <Banner />
      <Course />
      <Why />
      <Scholarship />
      <Founder/>
    </div>
  );
}

export default Home
