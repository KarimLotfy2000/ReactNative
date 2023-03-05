import { useState } from "react"

import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button ,ScrollView ,TouchableOpacity} from 'react-native';

export default function ToDoList({navigation}) {

  const [newItem, setnewItem] = useState("")
  const [items, setItems] = useState([
    {
        text:"",
        completed:false
    }
  ])
  

  function OnChangeItems(text) {
    setnewItem(text)
   

  }

  function OnPressAdd() {
    setItems((prevItems) => [...prevItems, { text: newItem, completed: false }])
   
    setnewItem("")

  }
  function ChangeCompleted(index) {
      const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  }


  function DeleteAll(){
    setItems([])
  }
  return (
    <View style={styles.Appcontainer}>
        <Button title="Settings"
         onPress={()=>{navigation.navigate("Settings")}}

        />
        
     
      <View style={styles.InputContainer}>
        <TextInput onChangeText={OnChangeItems} value={newItem} style={styles.TextInput} placeholder='Enter Items here' />
        <Button onPress={OnPressAdd} title="Add Item" />
       
      </View>
       
      <View style={styles.ItemsContainer}>
       <Button onPress={DeleteAll} title="Delete All"/>
      <ScrollView style={styles.Scroll}>
        {items.map((item, index) => {
          return (
          <TouchableOpacity key={index} onPress={() => ChangeCompleted(index)}>
          <View style={styles.Item} key={index} >
          
          <Text style={ item.completed && styles.completedText} >{item.text}</Text>
          </View>
          </TouchableOpacity>
          )                                                                        
        })}
        
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    paddingHorizontal: 40,
    paddingTop: 30,
    flex: 1,
    backgroundColor: "rgba(190, 208, 239, 1)"
  },
  InputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "black"

  },
  TextInput: {
    width: "70%",
    marginRight: 2,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "grey",
    backgroundColor: "white"


  },
  ItemsContainer: {
   
    flex: 4,
    marginTop: 30,
    alignItems: "flex-start"

  },
  Scroll:{
    width:"100%",
     
  },
  Item: {
    height:40,
    width: "80%",
    padding: 5,
    margin: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "rgba(6, 58, 142, 1)",
    backgroundColor: "rgba(9, 84, 206, 1)",

  },
   completedText:{
     textDecorationLine: 'line-through',
     color:"lightgrey"
   }
});
