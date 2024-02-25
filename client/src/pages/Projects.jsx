import React from 'react'
import { CallToAction } from '../components'

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Harum facilis laborum officia est sequi exercitationem cum molestias quas itaque? 
        Est rerum sapiente voluptas. Enim, voluptas aliquid autem officiis corporis consectetur?</p>
        <CallToAction />
    </div>
  )
}
