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
                Checkout these resources of CmCi and Jesus stories
            </p>
            <Button gradientDuoTone="purpleToPink" className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.cmficanada.org/" target="_blank" rel='noopener noreferrer'>
                    Visit CmCi Canada
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img className="h-96 w-full" src="https://img.freepik.com/photos-gratuite/priere-crise-vie-chretienne-dieu_1150-12938.jpg?t=st=1708909841~exp=1708913441~hmac=f2117e19c3ab9b74d8358757fac3808a2f1e9c7c211b6b31fe43a8661713f74b&w=740" 
                alt="conference: GERE ET JOUIS DE TON HÉRITAGE" 
            />
        </div>
    </div>
  )
}
