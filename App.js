import React, { useState } from 'react';
import {

  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import Tasks from './components/Tasks'

export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let ItemsCopy = [...taskItems];
    ItemsCopy.splice(index, 1);
    setTaskItems(ItemsCopy);
  }

  return (

    <View style={styles.container}>
      <ScrollView>
        {/* today task  */}
        <View style={styles.taskWrapper}>

          <Text style={styles.sectionTitle}>Today's tasks</Text>

          <View style={styles.items}>

            {/* This is where the task will go! */}

            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Tasks text={item} />
                  </TouchableOpacity>
                )

              })
            }



          </View>

        </View>

      </ScrollView>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'}
          value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>

            <Text>+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>

  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },


});


