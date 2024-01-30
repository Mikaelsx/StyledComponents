import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
//import { TouchableOpacity } from 'react-native-web';
import { Container } from './src/Container/Container';
import { Title } from './src/Title/Title';
import { Btn } from './src/Btn/Btn';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { Btntes } from './src/Btntes/Btntes';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat': require('./Fontes/static/Montserrat-Regular.ttf'),
  });

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
    // alert.alert('Erro')
  }

  useEffect(() => {
    console.warn(`Contador: ${count}`)
  }, [count])

  return (
    <Container style={styles.container}>
    
    <View style={styles.box}>
      <Title style={styles.H1}>Contador: {count}</Title>

    <View style={styles.row}>

    <Btn style={styles.increment} onPress={increment}>
      <Btntes>+</Btntes>
    </Btn>

    <Btn style={styles.decrement} onPress={decrement}>
      <Btntes>-</Btntes>
    </Btn>

    </View>

    </View>
      <StatusBar style="auto" />
    </Container>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#453F56',
  },


  increment: {
    backgroundColor: '#52FF00',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },

  decrement: {
    backgroundColor: '#FF0000',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },

  row: {
    flexDirection: 'row',
    gap: 20,
  },

  box: {
    width: '80%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    borderRadius: 22,
    backgroundColor: '#24174B'
  },
});