import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//Screens
import Home from '../screens/Home';
import Doctor from '../screens/Doctor';
import Restaurant from '../screens/Restaurants';
import Property from '../screens/Property';

//Screen Names
const homeName = 'Home';
const DoctorName = 'Doctor';
const RestaurantName = 'Restaurant';
const PropertyName = 'Property';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                     let iconName;
                     let rn = route.name;

                     if(rn === homeName){
                         iconName = focused ? 'home':'home-outline';
                     }else if (rn === PropertyName){
                         iconName = focused ? 'business':'business-outline';
                     }else if (rn ===RestaurantName){
                         iconName = focused ? 'restaurant':'restaurant-outline';
                     } else if (rn ===  DoctorName){
                         iconName = focused ? 'medkit':'medkit-outline';
                     }

                     return <Icon name = {iconName} size = {size} color = {color}/>
                },
            })}>
                <Tab.Screen  name = {homeName} component = {Home} options={{headerShown: false}}/>
                <Tab.Screen  name = {DoctorName} component = {Doctor} options={{headerShown: false}}/>
                <Tab.Screen  name = {RestaurantName} component = {Restaurant} options={{headerShown: false}}/>
                <Tab.Screen  name = {PropertyName} component = {Property} options={{headerShown: false}}/>
               
                              
            </Tab.Navigator>
        </NavigationContainer>
    );
}