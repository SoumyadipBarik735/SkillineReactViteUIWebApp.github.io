import React from 'react'
import GTI from "../assets/GoogleTeamsImg.png"
import II1 from   "../assets/IntegrationsImg1.png"
import GDI from "../assets/GoogleDriveImg.png"
import OI from "../assets/OneDriveImg.png"
const Integrations = () => {
  return (
    <section className='font-poppins'>
        <div className='flex gap-32'>
            {/*Left sidebar */}
            <div className='grid grid-cols-2 gap-5'>
                <img src={OI} className='h-28' />
                <img src={II1} className='h-20' />
                <img src={GDI}  className='h-20'/>
                <img src={GTI} className='h-24'/>
            </div>
            {/*Right sidebar */}
            <div>
                <p><span></span></p>
            </div>
        </div>
      
    </section>
  )
}

export default Integrations
