import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 1, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'OK', onPress: () => console.log("OK Pressed")}], {cancelable: true});
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text},...prevItems];
    });
  
    }
  };

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem  addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (<ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },

});


export default App;