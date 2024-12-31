import React from 'react'
import Image from 'next/image';

const InstagramReels = () => {
  return (
    <div className=' flex flex-wrap gap-4 justify-evenly mt-10 mb-10'>
        <div>
            <a href="#">
            <Image src='/ImageB.png' alt='Instagram Reel' width={250} height={100} />
            </a>
        </div>
        <div>
            <a href="#">
            <Image src='/ImageC.png' alt='Instagram Reel' width={250} height={100} />
            </a>
        </div>
        <div>
            <a href="#">
            <Image src='/ImageD.png' alt='Instagram Reel' width={250} height={100} />
            </a>
        </div>
        <div>
            <a href="#">
            <Image src='/ImageE.png' alt='Instagram Reel' width={250} height={100} />
            </a>
        </div>
    </div>
  )
}

export default InstagramReels

