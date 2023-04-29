import React, { useEffect, useState } from "react";
import VerticalBlock from "../../Components/BasicBlocks/VerticalBlock";
import HorizontalBlock from "../../Components/BasicBlocks/HorizontalBlock";
import ProfileCard from "./ProfilePageComponents/ProfileCard";
import UserInfo from "./ProfilePageComponents/UserInfo";
import PastExperience from "./ProfilePageComponents/PastExperience";
import Papers from "./ProfilePageComponents/Papers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//Holds all the components for profile data display
function ProfilePage() {
  const { id } = useParams();
  const [user,setUser] = useState(useSelector((state) => state.auth.userInfo));
  useEffect(() => {
    if (id != null) {
      console.log(id);
      fetch("http://localhost:3001/user/querybyid/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data);
        });
    }
  }, []);

  // console.log(user)
  return (
    <VerticalBlock style={profileBody}>
      <ProfileCard name={user.name} id={user.id} isEditable={id==null} />
      <HorizontalBlock style={{ paddingLeft: "2.5%" }}>
        <UserInfo user={user} />
        <PastExperience />
      </HorizontalBlock>
      <br />
      <Papers />
    </VerticalBlock>
  );
}

export default ProfilePage;

const profileBody = {
  justifyContent: "center",
  width: "85vw",
};
