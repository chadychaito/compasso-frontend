import axios from "axios";
import { useEffect, useState } from "react";

import {
  User,
  Name,
  Login,
  Biography,
  Avatar,
  Footer,
  FollowGroup,
} from "./styles";

const formatFollowers = (number) => {
  if (number.length < 2) return `seguidor`;
  return `seguidores`;
};

export const Profile = ({ name }) => {
  const [userProfile, setUserProfile] = useState(false);

  useEffect(async () => {
    if (name) {
      const { data } = await axios.get(`https://api.github.com/users/${name}`);
      setUserProfile(data);
    }
  }, [name]);

  return (
    userProfile && (
      <>
        <User>
          <Avatar src={userProfile.avatar_url} />
          <Name>{userProfile.name}</Name>
          <Login>{userProfile.login}</Login>
          <Biography>{userProfile.bio}</Biography>
          <Footer>
            <FollowGroup>
              {userProfile.followers && (
                <p>
                  <b>{userProfile.followers}</b>{" "}
                  {formatFollowers(userProfile.followers)}
                </p>
              )}
              <p>
                <b>{userProfile.following}</b> seguindo
              </p>
            </FollowGroup>
            <p>{userProfile.location}</p>
          </Footer>
        </User>
      </>
    )
  );
};
