import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddContact = props => {

    const navigation = useNavigation();

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onContactAdd = () => {
        if (!fullname){
            alert('Enter Contact Fullname.');
            return;
        }
        if (!email){
            alert('Enter Contact Email.');
            return;
        }
        if (!phone){
            alert('Enter Contact Phone in format NPA-NXX-XXXX.');
            return;
        }
        try {
            database.addContact(fullname, email, phone);
        } catch (error) {
            console.log('Error adding contact ' + error);
        }

        alert(fullname + " " + email + " " + phone + ' Added!');
        navigation.navigate('Go To Contacts!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={fullname}
                onChangeText={value => setFullName(value)}
                style={styles.fullname}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Full Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.email}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Email'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={phone}
                onChangeText={value => setPhone(value)}
                style={styles.phone}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Phone in format NPA-NXX-XXXX'}
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