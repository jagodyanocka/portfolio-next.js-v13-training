import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import '../public/aurora.jpg'
import Me from '../components/Me'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jagoda Kosewska - Full-stack developer</title>
      </Head>
    <Navbar/>
    <Me/>
    </div>
  )


}



