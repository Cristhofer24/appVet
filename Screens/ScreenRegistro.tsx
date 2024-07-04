import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, set, onValue, update, remove } from "firebase/database";
import { db } from '../Config/Configuracion';

export default function ScreenRegistro() {
  const [id, setId,] = useState("")
  const [nombre, setNombre,] = useState("")
  const [raza, setRaza,] = useState("")
  const [edad, setEdad,] = useState("")

  function guardarInformacion(id:string, nombre: string,raza:string,edad:string) {

    set(ref(db, 'veterinaria/' + id), {
      name: nombre,
      raza:raza,
      age:edad
    });
    Alert.alert('El registro se ha guardado Exitosamente')
    /// limpiar campos 
    setId('')
    setNombre('')
    setRaza('')
    setEdad('')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.txtT1}>Registre a su mascota Aqui</Text>
      <Image source={{ uri: 'https://suramericana.com/content/webp-express/webp-images/doc-root/content/uploads/sites/10/2021/01/seguros-sura-las-mascotas-son-peligrosas-para-la-salud.jpg.webp' }} style={styles.img} />

      <Text style={styles.txtT}>ID</Text>
      <TextInput 
      onChangeText={(Number)=>setId(Number) 
       }
       value={id}
       keyboardType='numeric'
       style={styles.txt}
      placeholder='ID' />

      <Text style={styles.txtT}>Nombre</Text>
      <TextInput
       onChangeText={(text)=>setNombre(text) 
       }
       value={nombre}
      placeholder='Ingrese el Nombre' 
      style={styles.txt}/>
      <Text style={styles.txtT}>Raza</Text>
      <TextInput 
        onChangeText={(text)=>setRaza(text) 
        }
        value={raza}
      placeholder='Ingrese la Raza' 
      style={styles.txt}
      />
      <Text style={styles.txtT}>Edad</Text>
      <TextInput
        onChangeText={(number)=>setEdad(number) 
        }
        value={edad}
       keyboardType='numeric'
      placeholder='Ingrese la edad'
      style={styles.txt}
      />
      <Button title='Guardar' onPress={()=>guardarInformacion( id ,nombre ,raza ,edad)}/>

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
 
  txt:{
   fontSize:15,
   textAlign:'justify',
   height:'5%',
   width:'40%',
   padding:5,
   marginBottom:'2%',
   backgroundColor:'white'
  },
  txtT:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'justify',
   },
   txtT1:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'justify',
   }
})