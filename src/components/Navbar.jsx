import React from 'react'
import './_app.css'
import './About'

const Navbar = () => {
  return (
    
    <div className=' flex h-screen'>
      
      {/* Sol Taraf*/}
      <div className='w-1/2  bg-white'>
        <nav className='flex justify-center mt-15 '>
          <a href="#Home" className=' navbartext '>Home</a>
          <a href="#About " className='ml-8    navbartext' >About</a>
          <a href="#Portfolio" className='ml-8 navbartext'>Portfolio</a>
          <a href="#Contact" className='ml-8 navbartext'>Contact</a>
        </nav>

        <div >
          
          <div className='mt-30 marginsetting '>
            <p className='text-2xl font-extralight pl-1'>Hello! I'm</p>
            <h1 className='text-5xl pt-3 font-bold '>Baturhan Öztürk</h1>
            <p className='pl-1'>Birlikte Yaşamak İçin Birlikte Çalşalım!</p>
          </div>

          
          <div className=' flex justify-center mt-8'>
            <button className='bg-black rounded-md text-white px-6 py-2 buttontext font-bold buttonw'>See My Projects</button>
            <button              
            onClick={() => {
            const link = document.createElement('a');
            link.href = '/Baturhan_Ozturk.pdf';
            link.download = 'Baturhan_Ozturk.pdf';
            link.click();}}   
            
            className='border border-black rounded-md text-black px-6 py-2 ml-5 buttontext font-bold buttonw active:scale-95'>
            Download CV
            </button>
          </div>

        </div>

      </div>


      {/* Sağ Taraf*/}
      <div className=' w-1/2 bg-black'> 

        <div className=' flex'>
          <h1 className="text-4xl font-bold text-white mt-10 ml-10">
          <span className="block">BATURHAN</span>
          <span className="block font-semibold">ÖZTÜRK</span>
        </h1>
          <button onClick={()=> window.open("https://www.linkedin.com/in/baturhan-%C3%B6zt%C3%BCrk-4b346a323/")} className=' bg-white rounded-md px-5 py-2 buttonw mt-15 ml-70 font-bold active:scale-95 ' > LinkedIn </button>
        </div>

        <img className='' src="./ay.jpg  " alt="" />

      </div>

    </div>

   
  ) 
}

export default Navbar
