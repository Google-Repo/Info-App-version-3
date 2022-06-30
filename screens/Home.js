import * as React from 'react';
import {View, Text ,Pressable, StyleSheet, SafeAreaView, StatusBar , ImageBackground,Image , Platform, TouchableOpacity, ImageBackgroundckground, Dimensions} from 'react-native';
 
const {height, width} = Dimensions.get("window")

export default function Home ({navigation}){
  return(
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
       
          <ImageBackground source={require('../assets/Background.png')}  style={styles.image}>
           
           <Image source = {require('../assets/Logo.png')} style = {styles.LogoImage}></Image>

            <Image source={require('../assets/HomeTitle.png')} style = {styles.TitleImage}></Image>
            
     <View style={{flex:0.2,alignItems: 'center', justifyContent: 'center' }}>
           <Pressable style={styles.Doctor} onPress={() => navigation.navigate('Doctor')}>
               {/* // <Text style={styles.DoctorText}>{'Doctor'}</Text> */}
               <Image
                source={require("../assets/DoctorButton.png")}
               ></Image>
           </Pressable>
        </View>

        <View style={{flex:0.2,alignItems: 'center', justifyContent: 'center' }}>
           <Pressable style={styles.Restaurant} onPress={() => navigation.navigate('Restaurant')}>
             
              <Image
                source={require("../assets/RestaurantButton.png")}
               ></Image>
           </Pressable>
        </View>

      <View style={{flex:0.2,alignItems: 'center', justifyContent: 'center' }}>
           <Pressable style={styles.Property} onPress={() => navigation.navigate('Property')}>
              {/* <Text style={styles.PropertyText}>{'Property'}</Text> */}
              <Image
                source={require("../assets/PropertyButton.png")}
               ></Image>
           </Pressable>
      </View>
  
  </ImageBackground>
             
        </View>
  
           
        
    
     
   
  );
}



const styles=StyleSheet.create({
    droidSafeArea:{
        marginTop:Platform.OS=="android"? StatusBar.currentHeight:0
    },
    
    LogoImage:{
      marginTop:15,
      marginLeft:41
    },
    TitleImage:{
      marginTop:5,
      marginLeft:-29,
      justifyContent:'center',
      alignItems:'center'
      
  },

   image:{
    height:766,
    width:390,
    marginLeft:10,
    marginBottom:50
    
  },
  
  Doctor:{ 
   
    marginBottom:-4
  },
  Restaurant:{
    marginTop:53,
    marginBottom:-4
  },
  Property:{
    marginTop:53,
    marginBottom:-53
    
  },
  
  
    
    
  })
