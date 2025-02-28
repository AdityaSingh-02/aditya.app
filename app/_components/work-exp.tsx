import React from 'react'
import ExperienceBlock from './experience-block'
import { experience } from '../utils/exp'

const WorkExperience = () => {
    return (
        <>
            <div className='space-y-4'>
                <h1 className='text-xl md:text-3xl font-semibold'>Work Experience</h1>
                <p className='text-gray-500 md:text-lg'>All my experiences as a Software Engineer</p>
                {experience.map(({ id, company, role, timeline, img }) => (
                    <ExperienceBlock key={id} company={company} role={role} timeline={timeline} img={img} />
                ))}
            </div>
        </>
    )
}

export default WorkExperience