// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Exploremenu from '../../Exploremenu/Exploremenu'
import Appdownload from '../../AppDownload/Appdownload'

const Home = () => {

  const [category,setCategory]= useState("All");

  return (
    <div>
       <Header/>
       <Exploremenu category={category} setCategory={setCategory}/>
       <Appdownload/>
    </div>
  )
}

export default Home