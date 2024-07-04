import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'


export default function ScreenBienvenido({navigation}:any) {

    return (

        <View style={styles.container}>
            <Text style={styles.txt}>Veterinaria PetsBest</Text>
            <Image source={{ uri: 'https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100178.jpg?w=900&t=st=1720099300~exp=1720099900~hmac=214208a7f1acb2d30f4f4fa23a5002d4ea64c7d9dd18cef454983398fd6c30bb' }} style={styles.img} />
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Bottom')}>
                <Text style={styles.txtE}>Empezar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '95%',
        height: '50%',
        borderRadius: 100, // La mitad del tamaño del ancho y alto para hacer la imagen redonda
        borderWidth: 2, // Opcional: añadir borde para resaltar la imagen
        borderColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#4facfe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: '10%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: '25%',
        height: '5%',
        backgroundColor: 'green',
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
        borderWidth: 2, // Opcional: añadir borde para resaltar la imagen
        borderColor: 'white',

    },
    txtE: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    }
})