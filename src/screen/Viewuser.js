import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, AsyncStorage, Image, Dimensions } from 'react-native';
import CommonStyles from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ViewUser = ({ navigation }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        //retrieve the data from the local storage
        AsyncStorage.getItem('userData').then(async (res) => {
            const user_data = await res;
            setUserData(JSON.parse(user_data))
        });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../images/st.petersburg.jpg')}
                    style={styles.bgImage}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={userData != '' ? userData.photo : require('../images/blank-profile-picture.jpg')}//ternary operator to handle if image field is empty.
                            style={{
                                height: 100, width: 100,
                                borderRadius: 100 / 2,
                                overflow: "hidden",
                            }}
                            imageStyle={{ borderRadius: 15 }}
                        />
                    </View>
                </ImageBackground>

            </View>
            <View style={{ flex: 1, justifyContent: 'center', marginTop: 30 }}>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase', fontFamily: CommonStyles.fonts.FONT_REGULAR, padding: 10 }}> {userData.name != '' ? userData.name : 'User name'}</Text>
                    <View style={styles.infoContainer}>
                        <Icon name={'email'} size={18} color={CommonStyles.color.COLOR_PURPLE} />
                        <Text style={styles.infoText}> {userData.email}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Icon name={'phone'} size={18} color={CommonStyles.color.COLOR_PURPLE} />
                        <Text style={styles.infoText}> {userData.phone}</Text>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    infoText: { fontSize: 18, fontWeight: '600', padding: 10 },
    profileContainer:{ position: 'absolute', padding: 10, left: 150, bottom: -40, borderRadius: 50 },
    bgImage:{ width: '100%', height: '100%', borderBottomWidth: 2, borderBottomColor: CommonStyles.color.COLOR_DARK_SEPERATOR }
})

export default ViewUser;