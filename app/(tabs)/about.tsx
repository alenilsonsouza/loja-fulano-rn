import { Image, StyleSheet, Text, View } from "react-native";
import { Btn } from "../../components/btn";
import { router } from "expo-router";


export default function Screen() {

    const handleGoToIntro = () => {
        router.push('/');
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/eu.jpg')}
                resizeMode="cover"
                style={styles.img}
            />
            <Text style={styles.name}>Alenilson Souza - Dev Mobile</Text>
            <Text style={styles.email}>E-mail: alenilson@aleevolucoes.com.br</Text>
            <Text style={styles.text}>Curso React Native com Bonieky.</Text>
            <Btn title="Voltar para Introdução" onPress={handleGoToIntro} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    img:{
        width:200,
        height: 200,
        borderRadius: 100,
        marginBottom:20
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth:1
    },
    email:{
        color:'#555555',
        textAlign:'center',
        marginBottom:10
    },
    text:{
        textAlign:'center',
        marginBottom: 20
    }
});