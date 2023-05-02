import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { selectUser } from "../redux/slicers/userSlicer";
import MainNavigation from "./MainNavigation";
import TabNavigation from "./TabNavigation";

const InitialNavigation = () => {
  const user = useSelector(selectUser);
  
  return user.name ? (<TabNavigation />) : (
    <MainNavigation />
  );
};

export default InitialNavigation;
