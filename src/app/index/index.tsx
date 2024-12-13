import { Image, View, StyleSheet, TouchableOpacity, Text, FlatList, Modal } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './styles';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { router } from 'expo-router';
import { useState } from 'react';
import { categories } from '@/utils/categories';

export default function Index() {
    const [category, setCategory] = useState(categories[0].nome);

    return (
        <View style={styles.contnainer}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}/>

                <TouchableOpacity onPress={() => router.navigate('/add')}>
                    <MaterialIcons name='add' size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>
            
            <Categories selected={category} onChange={setCategory}/>
            <FlatList 
                data={['1', '2', '3', '4', '5', '6']}
                keyExtractor={item => item}
                renderItem={() => (
                    <Link name='Name' url='url' onDetails={() => console.log("Fucionou!")}/>

                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Categoria</Text>
                            <TouchableOpacity>
                                <MaterialIcons name='close' size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>Nome Link</Text>
                        <Text style={styles.modalLinkUrl}>Url Link</Text>
                        <View style={styles.modalFooter}>
                            <Option name='Excluir' icon='delete' variant='secondary'/>
                            <Option name='Abrir' icon='language'/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const localStyle = StyleSheet.create({
    title: {
        color: colors.green[300],
        fontSize: 22
    }
})