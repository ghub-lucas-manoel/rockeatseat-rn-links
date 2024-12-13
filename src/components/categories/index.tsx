import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "@/components/category";
import { styles } from "./styles";

type Props = {
    selected: string,
    onChange: (category: string) => void
}

export function Categories({ selected, onChange} : Props) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                    name={item.nome}
                    icon={item.icon}
                    isSelected={item.nome === selected}
                    onPress={() => onChange(item.nome)}
                />
            )}
            style={styles.container}
            horizontal
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    );
}