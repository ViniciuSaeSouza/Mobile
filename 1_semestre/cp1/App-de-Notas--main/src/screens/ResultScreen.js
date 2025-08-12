import React from 'react';
import { StyleSheet, View } from 'react-native';
import ResultMessage from '../components/ResultMessage';

export default function CMResultScreen({ route }) {
    const { resultado } = route.params;

    return (
        <View style={styles.container}>
            <ResultMessage resultado={resultado} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
});
