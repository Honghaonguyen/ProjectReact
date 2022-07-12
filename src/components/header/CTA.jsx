import React from 'react'
import CV from '../../assets/CV_Nguyen_Hong_Hao.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download MyCV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
    </div>
  )
}

export default CTA