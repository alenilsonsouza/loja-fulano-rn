import { FlatList, StyleSheet, View } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen() {

    const categories = getAllCategories();

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({item}) => <CategoryItem data={item} />}
                keyExtractor={item=>item.id.toString()}
                style={styles.list}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    list: {
        padding: 20,
        flex:1,
        width:'100%'
    }
});