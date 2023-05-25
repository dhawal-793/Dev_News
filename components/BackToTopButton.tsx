'use client'

import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <button onClick={handleScroll}>
            <div className={` ${!btnVisiblity ? "-translate-y-[100vh]" : "translate-y-0"} fixed z-30 bottom-2 right-2 transition-all delay-100 duration-500 w-8 h-8 rounded-full cursor-pointer flex justify-center items-center dark:text-dark text-light bg-accent text-2xl group`}>
                <ChevronUpIcon className='group-hover:scale-125 duration-500 transition-all h-5 w-5' />
            </div>
        </button>
    )
}

export default BackToTopButton;
