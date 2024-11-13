import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    title:string;
    onPress: ()=>void
}

export const Btn = ({title, onPress}:Props) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#164e85',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius:10
    },
    buttonText: {
        color:'#ffffff',
        fontSize: 16,
        textAlign:'center'
    }
});