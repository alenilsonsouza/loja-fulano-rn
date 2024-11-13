import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor:'#0000ff'}}>
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({color}) => <FontAwesome 
                        size={28}
                        name="home"
                        color={color}
                    />
                }}
            />
            <Tabs.Screen 
                name="categories"
                options={{
                    headerShown:false,
                    title: 'Categorias',
                    tabBarIcon: ({color}) => <FontAwesome 
                        size={28}
                        name="list"
                        color={color}
                    />
                }}
            />
            <Tabs.Screen 
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({color}) => <FontAwesome 
                        size={28}
                        name="user"
                        color={color}
                    />
                }}
            />
        </Tabs>
    );
}
