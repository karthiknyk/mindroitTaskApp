import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screen/Register';
import ViewUser from './screen/Viewuser';
import CommonStyles from './constants/styles'

const Stack = createStackNavigator();
//Holds all the navigation activity.
export default function Routes({ navigation }) {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Register'>
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Register', //Set Header Title
                        headerStyle: {
                            backgroundColor: CommonStyles.color.COLOR_PURPLE, //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
                <Stack.Screen
                    name="ViewUser"
                    component={ViewUser}
                    options={{
                        title: 'View User', //Set Header Title
                        headerStyle: {
                            backgroundColor: CommonStyles.color.COLOR_PURPLE, //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
