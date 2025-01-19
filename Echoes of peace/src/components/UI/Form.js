import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icons from './Icons.js';
import { Button,ButtonTray } from './Button.js';

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
// Initialisations --------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------
  return (
    <View style={styles.formContainer}>
        <View style={styles.formItems}>{children}</View>

        <ButtonTray>
          <Button label = {submitLabel} icon = {submitIcon} onClick={onSubmit}/>
          <Button label = 'Cancel' icon={<Icons.Close/>} onClick={onCancel}/>
        </ButtonTray>

    </View>
  );
};

const InputText = ({ label, value, onChange }) => {
    // Initialisations --------------------
    // State -------------------------------
    // Handlers ----------------------------
    // View --------------------------------
      return (
        <View style={styles.item}>
        <Text style={styles.itemLabel}>{label}</Text>
        <TextInput value={value} onChangeText={onChange} style={styles.itemTextInput} />
      </View>
      );
    };
// compose components 
Form.InputText = InputText;


const styles = StyleSheet.create({
    formContainer: {
        gap:10,
    },

    formItems: {
        gap:5,
    },

    itemLabel: {
        color:'grey',
        fontSize: 16,
        marginBottom: 5,
      },
      itemTextInput: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'lightgray'
      }
});

export default Form;