"use client";
import React from 'react'
import Chart from './Chart'
import Table from './Table'
import { BackgroundBeamsWithCollision } from '../../components/ui/background-beams-with-collision';

function Dashboard() {
  return (
    <div className='relative h-96 md:h-[40rem] from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800  items-center w-full justify-center overflow-hidden'>
        <Table/>
        <Chart/>

    </div>
  )
}

export default Dashboard
