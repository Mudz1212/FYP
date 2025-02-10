import React from "react";
import DuaBack from "../../../Layout/Duaback";

const WakingupBack = ({ route, navigation }) => {
  const { item } = route.params;
  return <DuaBack item={item} navigation={navigation} />;
};

export default WakingupBack;
