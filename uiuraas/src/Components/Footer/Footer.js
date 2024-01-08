import React from 'react'
import ColumnBlock from '../BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate'


const Footer = () => {
  //A simple footer
  return (
    <ColumnBlock>
        <div class="fade_rule" style={FadeRule}></div>
        <div className='footerUpperLine' style={FooterUpperLine}>Stay In Touch</div>
        <div className='footerLowerLine' style={FooterLowerLine}>self@cse.uiu.ac.bd</div>
    </ColumnBlock>
  )
}

export default Footer


const FadeRule= {
  height:"3px",
  backgroundColor: PrimaryTemplate.whisper,
  width:" 50%",
  margin: "0 auto",
  backgroundImage:" linear-gradient(to right,"+PrimaryTemplate.yellow+","+PrimaryTemplate.blue+")",
}

const FooterUpperLine={
  fontFamily: "'Inter', sans-serif",
  fontSize: "larger"
}

const FooterLowerLine={
  fontFamily: "'Inter', sans-serif"
}