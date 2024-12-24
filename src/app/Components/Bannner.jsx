import React from 'react'


const Bannner = () => {
  return (
    <div className=' mt-20'  style={{
        backgroundImage: "url('/banner2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 2rem',
      }}>
       <div className=' text-center mx-auto text-white font-Outfit' >
        <h1 className=' text-5xl font-bold'>Save The Water</h1>
        <p className=' text-4xl '> <span className='text-pink-800'>DUREBLE</span>,REKIABLE,AND READY FOR ANYTHING</p>
       </div>
    </div>
  )
}

export default Bannner