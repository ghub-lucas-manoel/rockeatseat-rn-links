import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string
    nome: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    {
        id: '0',
        nome: 'Curso',
        icon: 'code'
    },
    {
        id: '1',
        nome: 'Projeto',
        icon: 'folder'
    },
    {
        id: '2',
        nome: 'Site',
        icon: 'language'
    },
    {
        id: '3',
        nome: 'Artigo',
        icon: 'newspaper'
    },
    {
        id: '4',
        nome: 'Vídeo',
        icon: 'movie'
    },
    {
        id: '5',
        nome: 'Documentação',
        icon: 'content-paste'
    },
]