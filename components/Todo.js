import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Todo(props) {
    const{text,id,handleRemove}=props
  return (
    <View style={styles.todo}>
      <View style={styles.todoNum}>
        <View style={styles.order}>
            <Text  style={styles.textColor} >{id}</Text>
        </View>
        <Text style={styles.maintext}>{text}</Text>
      </View>
       <TouchableOpacity style={styles.btn} onPress={()=> handleRemove(id)}>
        <Text>Remove</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
     todo:{
     backgroundColor:'#f7f7f7',
     padding:15,
     borderRadius:10,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     marginBottom:10
     },
     todoNum:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
        
     },
     maintext:{
        maxWidth:'80%',
     },
     order:{
        width:25,
        height:25,
        backgroundColor:'#9b59b6',
        opacity:0.8,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
       
        
     },
     textColor:{
        color:'red',
     },
     btn:{
        backgroundColor:'#9b59b6',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
     }
  });
  