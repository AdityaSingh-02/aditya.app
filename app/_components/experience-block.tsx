import React from 'react'
import Image from 'next/image'

const ExperienceBlock = ({ company = "", role = "", timeline = "", img = "" }:
    { company: string, role: string, timeline: string, img: string }) => {
    return (
      <div className="flex flex-col bg-gray-100 p-5 rounded-xl w-full">
        <section className="flex flex-col md:items-center md:space-x-2 md:flex-row">
          <h1 className="flex flex-col md:flex-row md:items-center text-lg font-semibold">
            {img === "" ? (
              <p>🧑🏽‍💻</p>
            ) : (
              <Image
                src={img}
                width={40}
                height={40}
                alt={company}
                blurDataURL="data:..."
                placeholder="blur"
                className="md:mx-4"
              />
            )}
            {company}
          </h1>
          <p>{role},</p>
          <p className="text-gray-600">{timeline}</p>
        </section>
      </div>
    );
}

export default ExperienceBlock