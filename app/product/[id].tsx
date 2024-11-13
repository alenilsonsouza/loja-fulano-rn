import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { getProductById } from "../../services/product";
import { Btn } from "../../components/btn";

export default function Screen() {

    const {id} = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if(!product) return router.back();

    const handleByItem = () => {
        alert(`Você comprou ${product.title}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{title:product.title, headerShown:true}}/>
            <ScrollView style={styles.area}>
                <Image 
                    source={{uri:product.image}}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.areaPrice}>
                    <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
                </View>
            </ScrollView>
            <View style={styles.areaBtn}>
                <Btn title="Comprar agora!" onPress={handleByItem}/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20
    },
    area:{
        flex:1
    },
    img:{
        width:'100%',
        height:250,
        borderRadius: 15,
        marginBottom: 20
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        marginBottom:10
    },
    description:{
        fontSize:16,
        marginBottom: 10
    },
    areaPrice:{
        padding:20,
        backgroundColor:'#555555',
        borderRadius: 10,
    },
    price:{
        textAlign:'center',
        fontSize: 18,
        fontWeight:'bold',
        color:'#ffffff'
    },
    areaBtn:{}
});