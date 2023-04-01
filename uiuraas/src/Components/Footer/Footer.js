import React from 'react'


const Footer = () => {
  return (
    <div className='body' style={FadeRule}>
        <div class="fade_rule" style></div>
        <div className='footerUpperLine'>Stay In Touch</div>
        <div className='footerLowerLine'>self@cse.uiu.ac.bd</div>
    </div>
  )
}

export default Footer


const FadeRule= {
  height:"3px",
  backgroundColor: "#E6E6E6",
  width:" 66.0em",
  margin: "0 auto",
  backgroundImage:" linear-gradient(to right, #FC9E04 , #14213D)",
}

const FooterUpperLine={
  fontFamily: "'Inter', sans-serif",
  fontSize: "larger"
}

const footerLowerLine={
  fontFamily: "'Inter', sans-serif"
}