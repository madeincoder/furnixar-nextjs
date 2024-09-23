import Link from 'next/link'
import React from 'react'
import breadcumbBg from '../../../public/images/shortcode/breadcumb.jpg'

type BannerProps = {
    title: string;
    slugTitle: string;
};

const Banner:React.FC<BannerProps> = ({title, slugTitle}) => {
  return (
    <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage: `url(${breadcumbBg.src})`}}>
        <div className="text-center w-full">
            <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">{title}</h2>   
            <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                <li><Link href="/">Home</Link></li>
                <li>/</li>
                <li className="text-primary">{slugTitle}</li>
            </ul>
        </div>
    </div>
  )
}

export default Banner