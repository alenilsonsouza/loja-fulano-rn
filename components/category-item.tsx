import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type Props = {
    data:Category
}

export const CategoryItem = ({data}:Props) => {

    const handleClick = () => {
        router.push(`/categories/${data.id}`);
    }

    return (
        <Pressable onPress={handleClick} style={styles.container}>
            <Image 
                source={{uri:data.cover}}
                resizeMode="cover"
                style={styles.img}
            />
            <View style={styles.bg}></View>
            <View style={styles.content}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
            
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#555555',
        marginBottom: 20,
        height:150,
        borderRadius:10,
        overflow:'hidden'
    },
    img:{
        width:'100%',
        height:'100%'
    },
    bg:{
        backgroundColor:'#000000',
        marginTop:-150,
        height:150,
        opacity: 0.6
    },
    content:{
        height:150,
        marginTop:-150,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    title:{
        textAlign:'center',
        color:'#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})