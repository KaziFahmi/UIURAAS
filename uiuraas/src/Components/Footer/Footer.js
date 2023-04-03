import React from 'react'


const Footer = () => {
  return (
    <div className='body' >
        <div class="fade_rule" style={FadeRule}></div>
        <div className='footerUpperLine' style={FooterUpperLine}>Stay In Touch</div>
        <div className='footerLowerLine' style={FooterLowerLine}>self@cse.uiu.ac.bd</div>
    </div>
  )
}

export default Footer


const FadeRule= {
  height:"3px",
  backgroundColor: "#E6E6E6",
  width:" 50%",
  margin: "0 auto",
  backgroundImage:" linear-gradient(to right, #FC9E04 , #14213D)",
}

const FooterUpperLine={
  fontFamily: "'Inter', sans-serif",
  fontSize: "larger"
}

const FooterLowerLine={
  fontFamily: "'Inter', sans-serif"
}