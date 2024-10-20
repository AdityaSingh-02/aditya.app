import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import Link from 'next/link';



const Socials = () => {
    return (
        <>
            <div className='space-y-4'>
                <h1 className='text-xl md:text-3xl font-semibold'>Connect with me</h1>
                <div className='flex justify-center text-2xl md:text-4xl space-x-20'>
                    <Link href={"https://github.com/AdityaSingh-02"} target='__blank'><FaGithub /></Link>
                    <Link href={"https://www.linkedin.com/in/adityasingh2002"} target='__blank'><FaLinkedin /></Link>
                    <Link href={"https://x.com/Go_D_Aditya"} target='__blank'><FaXTwitter /></Link>
                    <a href="mailto:asaditya2002@gmail.com"><BiMailSend /></a>
                </div>
            </div>
        </>
    )
}

export default Socials