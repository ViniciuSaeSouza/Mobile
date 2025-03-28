import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import InputField from '../components/InputField';

export default function CMHomeScreen({ navigation }) {
    const [xxNota1, setXxNota1] = useState('');
    const [xxNota2, setXxNota2] = useState('');
    const [xxNota3, setXxNota3] = useState('');
    const [xxFaltas, setXxFaltas] = useState('');

    const CMcalcularMedia = () => {
        const nota1 = parseFloat(xxNota1) || 0;
        const nota2 = parseFloat(xxNota2) || 0;
        const nota3 = parseFloat(xxNota3) || 0;
        const faltas = parseInt(xxFaltas) || 0;

        const LIMITE_FALTAS = 15;
        const MEDIA_MINIMA = 7.0;
        let resultado = '';

        if (faltas > LIMITE_FALTAS) {
            resultado = 'Reprovado por falta';
        } else {
            const notas = [nota1, nota2, nota3].sort((a, b) => a - b);
            const mediaFinal = ((notas[1] + notas[2]) / 2).toFixed(2);
            resultado = mediaFinal < MEDIA_MINIMA ? 'Reprovado por nota' : `Aprovado com média de ${mediaFinal}`;
        }

        navigation.navigate('Result', { resultado });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setXxNota1(''); setXxNota2(''); setXxNota3(''); setXxFaltas(''); }}>
                <Image source={require('../../assets/fiap-logo.png')} style={styles.logo} />
            </TouchableOpacity>

            <InputField placeholder="ChristianMilfont nota 1" value={xxNota1} onChangeText={setXxNota1} />
            <InputField placeholder="ChristianMilfont Nota 2" value={xxNota2} onChangeText={setXxNota2} />
            <InputField placeholder="ChristianMilfont Nota 3" value={xxNota3} onChangeText={setXxNota3} />
            <InputField placeholder="ChristianMilfont Faltas" value={xxFaltas} onChangeText={setXxFaltas} />

            <TouchableOpacity style={styles.button} onPress={CMcalcularMedia}>
                <Text style={styles.buttonText}>Validar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000FF',
    },
    logo: {
        width: 150,
        height: 50,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#9D0000FF',
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
