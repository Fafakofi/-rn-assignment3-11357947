import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView,
  TextInput,

  Button,
  FlatList,
  Image,
  SectionList,} from 'react-native';
import React, { useState } from 'react';

export default function App() {


  const [categories, setCategories] = useState([
    {name: 'exercise',},
    {name: 'studies'},
    {name: 'coding'},
    {name: 'sleeping'},
    {name: 'eating'},
    {name: 'Jumping'},
    {name: 'Reading'},
    {name: 'Swimming'},
  ]);


  const[task, setTask]= useState([
    {taskId: 'Web Development'},
    {taskId: 'App Development'},
    {taskId: 'UI/UX design'},
    {taskId: 'Backend development'},
    {taskId: 'Photoshop'},
    {taskId: 'frontend Development'},
    {taskId: 'Photography'},
    {taskId: 'Database management'},
    {taskId: 'system administration'},
    {taskId: 'computer engineering'},
    {taskId: 'Data science'},
    {taskId: 'Cafe operating'},
    {taskId: 'playing Football'},
    {taskId: 'Project administering'}
  ]);

    const[user, setUser]= useState('Devs');

    const handleClick = ()=> {
      setUser('user')
    }


  return (
    <View style={styles.container}>

       <ScrollView>
      <StatusBar style="auto" />  

        <View style={styles.welcome}>
          <Text style={styles.greetings}>Hello {user}!!</Text>
          <Image source={require('../Project-3/assets/profile photo.jpg')} style={styles.image1}
          resizeMode='contain'/>
        </View>
        <Text style={styles.morale}>1443 tasks today. Good job!</Text>

        <View style={styles.buttonContainer}>

        <Button title='Click' onPress={handleClick}/>

        </View>

        

        <View style={styles.search}>
          <TextInput style={styles.searchBar}  placeholder='Search' placeholderTextColor="red"/>
          <Image source={require('../Project-3/assets/image-1.jpg')} style={styles.image2}
          resizeMode='contain'/>
        </View>

        <View>
            <Text style={styles.categories}> Categories</Text>
        </View>

        <View >
          
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
        <FlatList data={task}
            renderItem={({item})=>(
              <View style={styles.catBoxes2}>
                  <Text style={styles.itemName}> {item.taskId} </Text>
              </View>
            )}/>
        </View>     
        </ScrollView>
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
    marginBottom: 30,
    flex:1,
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
  },

  search:{
    flexDirection: 'row',
  },

  image2:{
    height: 90,
    width:50,
    marginRightTop: 20,
    marginLeft: 50,
    borderRadius: 34
  },

  catBoxes2:{
    marginLeft: 20,
    backgroundColor: 'white',
    height: 170, 
    width: 320,
    borderRadius: 20,
    marginBottom: 30,
    flex:1,
    borderWidth: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  buttonContainer:{
    width:70,
    marginLeft:20
  }


});

 