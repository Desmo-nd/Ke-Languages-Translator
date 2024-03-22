import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat screen</Text>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007AFF', 
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text:{ 
        color: '#FFFFFF', 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginTop: 30
    }
}); 
