import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';



const Socials = () => {
    return (
        <>
            <div className='space-y-4'>
                <h1 className='text-xl md:text-3xl font-semibold'>Connect with me</h1>
                <div className='flex justify-center text-2xl md:text-4xl space-x-20'>
                    <button><Link href={"#"} target='__blank'><FaGithub /></Link></button>
                    <button><Link href={"#"} target='__blank'><FaLinkedin /></Link></button>
                    <button><Link href={"#"} target='__blank'><FaXTwitter /></Link></button>
                </div>
            </div>
        </>
    )
}

export default Socials