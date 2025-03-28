import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CMInputField({ placeholder, value, onChangeText }) {
    const handleChange = (text) => {
        // Remove caracteres nao numéricos, exceto um ponto decimal
        let formattedText = text.replace(/[^0-9.]/g, '');

        // Permite  um ponto decimal
        const countDots = (formattedText.match(/\./g) || []).length;
        if (countDots > 1) {
            formattedText = formattedText.slice(0, -1); // Remove o último caractere
        }

        // Garante  no máximo duas casas decimais
        if (/^\d+(\.\d{0,2})?$/.test(formattedText) || formattedText === '') {
            onChangeText(formattedText);
        }

       
    };

    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType="numeric"
            value={value}
            onChangeText={handleChange}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
});
