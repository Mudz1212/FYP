import React from "react";
import DuaBack from "../../../Layout/Duaback";

const ProtectionBack = ({ route, navigation }) => {
  const { item } = route.params;
  return <DuaBack item={item} navigation={navigation} />;
};

export default ProtectionBack;
