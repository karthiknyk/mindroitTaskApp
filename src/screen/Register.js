import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import FormText from '../common/FormText'
import Button from '../common/Button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import SYImagePicker from 'react-native-syan-image-picker'

import CommonStyles from '../constants/styles'
const requestCameraPermission = async () => {

    //android permission for accessing the camera
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Cool Photo App Camera Permission',
                message:
                    'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        // console.warn('You can use the GRANT', granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.warn('You can use the LOCATION');
        } else {
            // console.warn('LOCATION permission denied');
        }
    } catch (err) {
        // console.warn(err);
    }
}



const Register = ({ navigation }) => {

    const [response, setResponse] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        requestCameraPermission()
    }, []);

    const selectPhotoTapped = () => {
        //get image from gallery or camera
        const options = {
            imageCount: 1,
            isRecordSelected: true,
            isCrop: true,
            showCropCircle: true,
            quality: 90,
            compress: true,
            enableBase64: false
        }
        console.log('camera clicked')
        SYImagePicker.showImagePicker(options, (err, photos) => {
            console.log(err, photos);
            if (!err) {

                setPhoto(photos)

            }
        })


    }

    const saveUser = () => {

        //store data in local storage 
        if (name != '' && email != '' && phone != '') {

            let data = {
                name: name,
                email: email,
                phone: phone,
                photo: photo
            }

            AsyncStorage.setItem('userData', JSON.stringify(data), (err) => {
                if (err) {
                    console.log("an error");
                    throw err;
                }
                console.log("success");
            }).catch((err) => {
                console.log("error is: " + err);
            });
            navigation.navigate('ViewUser')
        } else {
            Alert.alert('Some fields are missing please retry...')
        }
    }
    return (
        <View style={{ flex: 1 }}>


            <View style={styles.imageContainer}>
                <Image
                    source={photo != '' ? photo : require('../images/blank-profile-picture.jpg')}
                    style={{
                        height: 100, width: 100,
                        borderRadius: 100 / 2,
                        overflow: "hidden",
                    }}
                    imageStyle={{ borderRadius: 15 }}
                />
                <View>
                    <TouchableOpacity onPress={() => selectPhotoTapped()}>
                        <View
                            style={{justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text style={[styles.Label, { color: CommonStyles.color.COLOR_BLACK_TRANSP }]}>{name}</Text>
                            <Text style={[styles.Label, { color: CommonStyles.color.COLOR_PURPLE }]}>Change Profile Photo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <FormText label={'Name'} placeholder={'Mark'} onChangeText={(text) => setName(text)} />
                <FormText label={'Email'} placeholder={'mrk@gmail.com'} onChangeText={(text) => setEmail(text)} />
                <FormText label={'Phone'} placeholder={'7845895505'} maxlength={10} keyboardType='numeric' onChangeText={(text) => setPhone(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <Button label={'Save'} onPress={() => saveUser()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    saveButton: {
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: CommonStyles.color.COLOR_PURPLE
    },
    Label: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 14,
        padding: 5,
    },
    buttonContainer:{ justifyContent: 'center', alignItems: 'center' },
    imageContainer:{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10, marginTop: 5 }
})

export default Register;