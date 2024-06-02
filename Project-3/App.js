import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Scrollview,
  TextInput,
  Stylesheet,
  Button,
  FlatList,
  Image,
  SectionList,} from 'react-native';
import React, { useState } from 'react';

export default function App() {


  const [categories, setCategories] = useState([
    {name: 'exercise', icon: require('../Project-3/assets/exercise.jpg')},
    {name: 'studies'},
    {name: 'coding'},
    {name: 'sleeping'},
    {name: 'eating'},
    {name: 'Jumping'},
  ]);


  const task = [
    {taskId: 'Web Development'},
    {taskId: 'Web Development'},
    {taskId: 'Web Development'},
    {taskId: 'Web Development'},
    {taskId: 'Web Development'},
    {taskId: 'Web Development'}
  ]



  return (
    <View style={styles.container}>

       
    <StatusBar style="auto" />  

      <View style={styles.welcome}>
        <Text style={styles.greetings}>Hello , Devs</Text>
        <Image source={require('../Project-3/assets/profile photo.jpg')} style={styles.image1}
        resizeMode='contain'/>
      </View>
      <Text style={styles.morale}>1443 tasks today. Good job!</Text>

      <View>
        <TextInput style={styles.searchBar}  placeholder='Search' placeholderTextColor="red"/>
      </View>

      <View>
          <Text style={styles.categories}> Categories</Text>
      </View>

      <View>
        
          <FlatList data={categories}
          horizontal={true}
          renderItem={({item})=>(
            <View style={styles.catBoxes}>
                <Text style={styles.itemName}> {item.name} </Text>
                <Text style={styles.taskNumber}>12 tasks</Text>
            </View>
          )}/>

      </View>

      <Text style={styles.ongoing}> Ongoing Task</Text>

      <View> 

        {/* <SectionList /> */}
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EE',
  },

  greetings: {
    color: 'black',
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20
  },

  morale: {
    marginLeft: 20,
    fontSize: 10, 
    marginBottom: 10
  },

  searchBar: {
    width:210,
    margin: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius:15, 
    marginBottom: 40
    
  },

  categories:{
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },

  catBoxes:{
    marginLeft: 20,
    backgroundColor: 'white',
    height: 170, 
    width: 170,
    borderRadius: 20,
    marginBottom: 30
  },

  itemName:{
    fontSize:15,
    marginLeft:7,
    marginTop:7,
    fontWeight: 'bold'
  },

  taskNumber:{
    marginLeft:7,
    fontSize: 10
  },

  ongoing:{
    marginLeft: 20,
    fontWeight:'bold',
    fontSize: 20,
    marginBottom:  15
  },

  welcome:{
    flexDirection: 'row',
  },

  image1:{
    height: 50,
    flex:1,
    marginTop:60,
    justifyContent: 'flex-end',
    marginLeft: 120,
    borderRadius: 25
  }
});

