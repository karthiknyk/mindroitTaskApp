import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import CommonStyles from '../constants/styles'
const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity
     
      onPress={onPress}>
      <View style={styles.saveButton}>

        <Text style={{ fontSize: 18, color: 'white', fontWeight: '100' }}>
          {label}
        </Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  saveButton: {
  justifyContent:'center',
 alignItems:'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: CommonStyles.color.COLOR_PURPLE
  }
})
export default Button;