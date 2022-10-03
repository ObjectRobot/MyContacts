import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddContact = props => {

    const navigation = useNavigation();

    const [fullname, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onContactAdd = () => {
        if (!fullname){
            alert('Enter Contact Fullname.');
            return;
        }
        if (!phone){
            alert('Enter Contact Phone in format NPA-NXX-XXXX.');
            return;
        }
        if (!email){
            alert('Enter Contact Email.');
            return;
        }
        try {
            database.addContact(fullname, phone, email);
        } catch (error) {
            console.log('Error adding contact ' + error);
        }

        alert(fullname +  ' Added!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={fullname}
                onChangeText={value => setFullName(value)}
                style={styles.fullname}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Contact Full Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={phone}
                onChangeText={value => setPhone(value)}
                style={styles.phone}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Contact Phone Number in format NPA-NXX-XXXX'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.email}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Contact Email'}
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onContactAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddContact;