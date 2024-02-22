import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500
        justify-center items-center rounded-tl-3xl rounded-br-3xl text-center"
    >
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className="text-2xl">
                Want to learn more about Jesus?
            </h2>
            <p className='text-gray-500 my-2'> 
                Checkout these resources with 100 Jesus stories
            </p>
            <Button gradientDuoTone="purpleToPink" className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.cmficanada.org/" target="_blank" rel='noopener noreferrer'>
                100 Jesus stories
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img className="h-96 w-96" src="https://www.cmficanada.org/wp-content/uploads/2024/02/image_6483441.jpg" 
                alt="conference: GERE ET JOUIS DE TON HÉRITAGE" 
            />
        </div>
    </div>
  )
}
