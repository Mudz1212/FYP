import { Pressable, Vibration } from "react-native";

const Selector = ({ children, onPress, style, pressedStyle }) => {
  const handlePress = () => {
    Vibration.vibrate(1);
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [style, pressed && pressedStyle]}
    >
      {children}
    </Pressable>
  );
};

export default Selector;
