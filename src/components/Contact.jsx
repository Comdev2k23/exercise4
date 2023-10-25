import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Contact = ({item}) => {
  return (
   <>
        <div className=" border rounded-lg shadow-xl">
            <div className=""> 
                <img className='w-64 h-48' src={item.src} alt={item.name}/>
                <h3 className='font-poppins font-bold 
                 text-xl p-4'>{item.name}</h3>
            </div>
        <div className=""> 
            <div className="flex flex-wrap pl-4"> 
                <BsFillTelephoneFill className='inline-block mr-1 
                h-5' />
                <p className='font-poppins font-semibold'>{item.number}</p>
            </div>
            <div className="flex flex-wrap pl-4"> 
                <MdEmail className='inline-block mr-1 
                h-5' />
                <p className='font-poppins font-semibold 
                break-all'>{item.email}</p>
            </div>
        
        </div>
           
        </div>
   </>
  )
}

export default Contact