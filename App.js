import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';

export default function App() {
  const[todoContent,setTodoContent]=useState("");
  const[todos,setTodos]=useState([]);

  const handleAddTodo = () =>{
    if(!todoContent) return;
    Keyboard.dismiss();
    setTodos(prev=>[...prev,{id:prev.length+1,text:todoContent}]);
    setTodoContent("")
  };
  const handleRemove = (id) =>{
     const filter=todos.filter((todo)=>todo.id !==id)
    setTodos(filter);
  }
  return (
    <View style={styles.container}>
     <View style={styles.mainApp}>
     <Text style={styles.heading}>Hero Todo</Text>
     <CreateTodo setTodoContent={setTodoContent} todoContent={todoContent}  handleAddTodo={handleAddTodo}>

      </CreateTodo>
     <View style={styles.todos}>
       {todos.map((todo,index)=><Todo key={index} id={todo.id}  handleRemove={handleRemove}
       
       number={index+1} text={todo.text}></Todo>)}
        
    
     </View>
    
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  

  mainApp:{
    paddingTop:40,
    paddingHorizontal:20,
    
  },
  heading:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    color:"red",
    textAlign:'center',
    marginBottom:10,
    
  },
  todos:{
    
  },
});
