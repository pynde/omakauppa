import React, {FC} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { blue } from '../assets/colors';

interface NavBarProps {}

const NAV_HEIGHT = 100;

/** Navigation bar for the app */
const NavBar: FC<NavBarProps> = () => {
    return ( 
    <View style={styles.BarStyle}>
        <Image source={require('../assets/images/kotikutoinen.png')} resizeMode='contain' style={styles.ImageStyle}/>
    </View>
     );
};
 
const styles = StyleSheet.create({
        BarStyle: {
            backgroundColor: blue.dark,
            height: NAV_HEIGHT,
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 10
        },
        TextStyle: {
            color: blue.light
        },
        ImageStyle: {
            height: NAV_HEIGHT,
            width: '80%',
            backgroundColor: 'rgb(255, 235, 235)',
            shadowColor: 'grey',
            shadowOpacity: 0.2,
            shadowRadius: 1
        }
     })
export default NavBar;