import { Stack } from "expo-router";

export default function CategoriesLayout() {
    return (
        <Stack>
            <Stack.Screen name="list" options={{ title: 'Categorias' }} />
            <Stack.Screen name="[id]" />
        </Stack>
    );

}