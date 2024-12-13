import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    details: {
        flex: 1
    },
    name: {
        color: colors.gray[100],
        fontSize: 16,
        fontWeight: '600'
    },
    url: {
        color: colors.gray[400],
        fontSize: 14
    }
});