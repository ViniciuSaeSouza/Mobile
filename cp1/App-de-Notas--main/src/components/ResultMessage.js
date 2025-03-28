import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CMResultMessage({ resultado }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});
