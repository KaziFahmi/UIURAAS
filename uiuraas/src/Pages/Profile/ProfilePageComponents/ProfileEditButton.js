import React from 'react'
import HoverBlock from '../../../Components/BasicBlocks/HoverBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

//To edit profile data
function ProfileEditButton(props) {
    return (
        <HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}>
           <button style={editButton} > 
              {props.icon}
           </button>
         </HoverBlock> 
       )
}

export default ProfileEditButton

const editButton={
    backgroundColor:"transparent",
    border:"none",
    color:PrimaryTemplate.blue,
    fontSize:"300%"
}