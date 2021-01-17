import * as React from 'react';
import { Text, View, StyleSheet ,TextInput} from 'react-native';
import CommonStyles from '../constants/styles';

const FormText = ({label,value,onChangeText, secureTextEntry,placeholder,keyboardType,maxlength}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}> {label}</Text>
            <TextInput  style={styles.inputView}value={value} maxLength={maxlength} keyboardType={keyboardType}placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
           
        </View>
    );
}

const styles= StyleSheet.create({

    label:{
        fontWeight:'bold',
        textAlign:'left',
        fontSize:14,
       color: CommonStyles.color.COLOR_PURPLE,
        padding:5,
       

    },
    inputView:{
        padding:5,
        borderRadius:5,
        borderWidth:0.5,
        paddingLeft:10
    },
    inputContainer:{
        margin:10,
        marginLeft:20,
        marginRight:20
    }

})

export default FormText;