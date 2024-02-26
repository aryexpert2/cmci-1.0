import React from 'react'
import { CallToAction } from '../components'

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>
        AIDER PLUSIEURS A DEVENIR DES DISCIPLES SOCIALEMENT ÉPANOUI DU SEIGNEUR JÉSUS.
        Notre fardeau est de voir toute personne engagée à suivre le Seigneur Jésus à mener une vie riche en Christ .
      </p>
        <CallToAction />
    </div>
  )
}
