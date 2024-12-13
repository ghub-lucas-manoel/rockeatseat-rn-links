import { StyleSheet } from 'react-native';

import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
    contnainer: {
        flex: 1,
        paddingTop: 10
    },
    title: {
        color: colors.green[300],
        fontSize: 22
    },
    header: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    logo: {
        height: 32,
        width: 38
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600]
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end"
    },
    modalContainer: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        padding: 24,
        paddingBottom: 42
    },
    modalHeader: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 32
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.gray[200]
    },
    modalLinkUrl: {
        fontSize: 14,
        color: colors.gray[400]
    },
    modalFooter: {
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: colors.gray[400],
        marginTop: 24,
        justifyContent: 'space-between',
        paddingVertical: 24    
    }
})