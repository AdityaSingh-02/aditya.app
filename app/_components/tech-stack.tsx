import React from 'react'
import { techStack } from '../utils/tech'

const TechStack = () => {
    return (
        <>
            <div className=''>
                <h1 className='text-xl md:text-3xl font-semibold'>TechStack</h1>
                <div className='space-y-4'>
                    {techStack.map(({ id, name, tech }) => (
                        <div key={id} className='flex flex-col bg-gray-100 p-5 rounded-xl w-full'>
                            <h1 className='text-xl font-semibold'>{name}</h1>
                            <div className='grid grid-cols-2'>
                                {tech.map((t, index) => (
                                    <p key={index} className='font-semibold'>{t}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechStack