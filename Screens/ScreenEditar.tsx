import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function ScreenEditar() {
  
  return (
    <View style={styles.container}>
      <Text>Registre a su mascota Aqui</Text>
      <Image source={{ uri: 'https://suramericana.com/content/webp-express/webp-images/doc-root/content/uploads/sites/10/2021/01/seguros-sura-las-mascotas-son-peligrosas-para-la-salud.jpg.webp' }} style={styles.img} />
      <Text>ID</Text>
      <TextInput placeholder='ID' />
      <Text>Raza</Text>
      <TextInput placeholder='Ingrese la Raza' />
      <Text>Nombre</Text>
      <TextInput placeholder='Ingrese el Nombre' />
      <Text>Edad</Text>
      <TextInput placeholder='Ingrese la edad' />
      <Button title='Editar' />
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '80%',
    height: '50%'
  },
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})