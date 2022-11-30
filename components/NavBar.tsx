import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { blue } from '../assets/colors';

interface NavBarProps {}
 
const NavBar: FC<NavBarProps> = () => {
    return ( 
    <View style={styles.BarStyle}>
        <Text style={styles.TextStyle}>Very cool!</Text>
    </View>
     );
};
 
const styles = StyleSheet.create({
        BarStyle: {
            backgroundColor: blue.dark,
            height: 100,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        TextStyle: {
            color: blue.light
        }
     })
export default NavBar;