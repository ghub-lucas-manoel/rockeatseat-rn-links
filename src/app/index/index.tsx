import { Image, View, StyleSheet, TouchableOpacity, Text, FlatList, Modal } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './styles';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { categories } from '@/utils/categories';
import { LinkStorage, linkStorage } from '@/storage/link-storage';

export default function Index() {
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState(categories[0].nome);
    const [links, setLinks] = useState<LinkStorage[]>([]);
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

    async function getLinks() {
        const resp = await linkStorage.get();
        const filtered = resp.filter((link) => link.category === category);
        setLinks(filtered);
    }

    function handleDetail(selected: LinkStorage) {
        setLink(selected);
        setShowModal(true);
    }
    
    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]));

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
                data={links}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Link name={item.name} url={item.url} onDetails={() => handleDetail(item)}/>

                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
            />

            <Modal transparent visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>{link.category}</Text>
                            <TouchableOpacity>
                                <MaterialIcons name='close' size={20} color={colors.gray[400]} onPress={() => setShowModal(false)}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>{link.name}</Text>
                        <Text style={styles.modalLinkUrl}>{link.url}</Text>
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