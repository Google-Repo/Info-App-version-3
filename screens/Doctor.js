import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';


export default function Doctor ({navigation}){
  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* This for background👇 */}
          <ImageBackground source={require('../assets/Background.png')}  style={styles.image}>

             {/* This for Logo👇 */}
            <Image source = {require('../assets/Logo.png')} style = {styles.LogoImage}></Image>

             {/* This for Title👇 */}
            <Image source={require('../assets/Title.png')} style = {styles.TitleImage}></Image>
             
             {/* This for CategoriesBg👇 */}
             <View  style = {styles.CategoriesContainer}>
                <Image source={require('../assets/CategoriesPanel.png')}></Image>
             </View>

            {/* This for Cardiologist Icon👇 */}
            <View style = {styles.CardioIcon}>
                <Image source={require('../assets/CardioIcon.png')} ></Image>
            </View>

            {/* This for Dentist Icon👇 */}
            <View style = {styles.DenIcon}>
                <Image source={require('../assets/DenIcon.png')} ></Image>
            </View> 

            {/* This for Pediologist Icon👇 */}
            <View style = {styles.PediaIcon}>
                <Image source={require('../assets/PediaIcon.png')} ></Image>
            </View> 

            {/* This for DermaIcon Icon👇 */}
            <View style = {styles.DermaIcon}>
                <Image source={require('../assets/DermaIcon.png')} ></Image>
            </View>

            {/* This for GastroIcon Icon👇 */}
            <View style = {styles.GastroIcon}>
                <Image source={require('../assets/GastroIcon.png')} ></Image>
            </View>   
           
                
            

          </ImageBackground>
             
        </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 26, 
    fontWeight: 'bold',
    justifyContent:'center'
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
  CardioIcon:{
    marginLeft:60,
    marginBottom:200
    
  },
  CategoriesContainer:{
    marginLeft:15,
    marginRight:20
    
  },
  CardioIcon:{
    marginLeft:50,
    marginTop:-230
  },
  DenIcon:{
    marginLeft:168,
    marginTop:-80.1
  },
  PediaIcon:{
    marginLeft:262,
    marginTop:-83
  },
  DermaIcon:{
    marginLeft:80,
    marginTop:20
  },
  GastroIcon:{
    marginLeft:191,
    marginTop:-87,
  }
  
 

   
 

  
})