import React from 'react'
import { Subcomplete_comp } from '../../components'
import './Subcomplete.css'

function Subcomplete() {
  return (
   <div className='Subcomplete'><div className='pending_head'>
    <h1>Submitted Assignments</h1>
    
           
        <div className='pending_cards'>
            <Subcomplete_comp />
            <Subcomplete_comp />
           
        </div>
        <div className='check_button'>
                <button className='plag_check_btn'>Check for Plagiarism</button>
            </div>
    </div></div> 
  )
}

export default Subcomplete