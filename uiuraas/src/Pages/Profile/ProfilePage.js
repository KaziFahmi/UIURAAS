import React, { useEffect, useState } from "react";
import VerticalBlock from "../../Components/BasicBlocks/VerticalBlock";
import HorizontalBlock from "../../Components/BasicBlocks/HorizontalBlock";
import ProfileCard from "./ProfilePageComponents/ProfileCard";
import UserInfo from "./ProfilePageComponents/UserInfo";
import PastExperience from "./ProfilePageComponents/PastExperience";
import Papers from "./ProfilePageComponents/Papers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryTemplate from "../../Components/ColorTemplates/PrimaryTemplate";
//Holds all the components for profile data display
function ProfilePage() {
  const { id } = useParams();
  const [user,setUser] = useState(useSelector((state) => state.auth.userInfo));
  const {userInfo} = useSelector(state=>state.auth)
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
  }, [id]);

  console.log(userInfo)
  return (
    <VerticalBlock style={profileBody}>
      <ProfileCard name={user.name} id={user.id} isEditable={id==userInfo.id} />
      <HorizontalBlock style={{}}>
        <UserInfo user={user} />
        <PastExperience id={user.refId} location="profile" width="100%" />
      </HorizontalBlock>
      <br />
      <Papers id={user.refId} />
    </VerticalBlock>
  );
}

export default ProfilePage;

const profileBody = {
  justifyContent: "center",
  width: "80vw",
  marginLeft: '2.5%',
};
