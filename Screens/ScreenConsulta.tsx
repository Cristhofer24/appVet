import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { db } from '../Config/Configuracion'
import { onValue, ref } from 'firebase/database'
import Tarjeta from '../components/tarjeta'

export default function ScreenConsulta() {
  const [id, setId,] = useState("")
  const [nombre, setNombre,] = useState("")
  const [raza, setRaza,] = useState("")
  const [edad, setEdad,] = useState("")
  const [usuarios, setusuarios] = useState([])

  useEffect(() => {
    const starCountRef = ref(db, 'veterinaria/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      //console.log(data); 

      const dataTemp: any = Object.keys(data).map((key) => ({
        key, ...data[key]


      }))
      console.log(dataTemp);
      setusuarios(dataTemp)
    });
  }, [])

  type Usuario = {
    name: string
    key: string
  }
  return (
    <View style={styles.container}>
    <Text>Registre a su mascota Aqui</Text>
    <Image source={{ uri: 'https://suramericana.com/content/webp-express/webp-images/doc-root/content/uploads/sites/10/2021/01/seguros-sura-las-mascotas-son-peligrosas-para-la-salud.jpg.webp' }} style={styles.img} />
    <Text>Buscar por ID</Text>
    <TextInput placeholder='ID' />
    {/* <FlatList
        data={usuarios}
        renderItem={({ item }: { item: Usuario }) =>
          <View>
            <Tarjeta usuario={item} />
          </View>

        }
      /> */}
    <Button title='Buscar'/>
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