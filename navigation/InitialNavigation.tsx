import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../redux/slicers/userSlicer";
import MainNavigation from "./MainNavigation";
import TabNavigation from "./TabNavigation";

const InitialNavigation = () => {
  // Selector for retrieving the user information.
  const user = useSelector(selectUser);

  // Conditional return hides the Home and Profile Screen from user if not signed in.
  return user.name ? (<TabNavigation />) : (
    <MainNavigation />
  );
};

export default InitialNavigation;
