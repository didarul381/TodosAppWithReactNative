import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function CreateTodo({setTodoContent,todoContent,handleAddTodo}) {
  return (
    <View style={styles.containers}>
     <KeyboardAvoidingView
       behavior={Platform.OS=="ios"?"padding":"height"}
       style={styles.createtodoBox}
     >
       <TextInput  style={styles.input} placeholder='write here...' value={todoContent} 
       onChangeText={(text)=>setTodoContent(text)}>

       </TextInput>
       <TouchableOpacity onPress={handleAddTodo}>
        <View style={styles.btn}>
            <Text style={styles.addbtn}>Add</Text>
        </View>
       </TouchableOpacity>
     </KeyboardAvoidingView>
    </View>
  )
};

const styles = StyleSheet.create({
    containers:{
        flex:1,
    },
    createtodoBox:{
        // position:'absolute',
        // bottom:20,
        marginBottom:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    addbtn:{
        paddingHorizontal:15,
        paddingHorizontal:15,
        borderColor:'#fff',
        borderRadius:10,
        borderColor:'#f7f7',
        borderWidth:1,
        width:60
    },
    input:{
        paddingHorizontal:25,
        paddingHorizontal:15,
        borderColor:'#fff',
        borderRadius:10,
        borderColor:'#f7f7',
        borderWidth:1,
        width:260,
         height:50,
     },
  });
  