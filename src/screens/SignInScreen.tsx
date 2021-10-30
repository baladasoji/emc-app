import React, {useState} from 'react';
import {Image,TextInput,ActivityIndicator, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from './styles';
import {useAuth} from '../contexts/Auth';

export const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const signIn = async () => {
    console.log(code);
    setError('');
    if (code === 'emc2021') {
        isLoading(true);
        await auth.signIn();
    }
    else {
        setError('Invalid code');
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator color={'#000'} animating={true} size="small" />
      ) : (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('./logonew.png')} resizeMode="center"/>
            </View>
            <View style={styles.loginContainer}>
                    <Text style={styles.error}> {error} </Text>
                    <View style={styles.inputView}>
                         <TextInput style={styles.TextInput} secureTextEntry={true} onChangeText={code => setCode(code)} defaultValue={code} placeholder="Enter Code"/>
                    </View>
                    <Button buttonStyle={styles.loginBtn} type="solid" title="Sign In" onPress={signIn} />
            </View>
         </View>
      )}
    </>
  );
};
