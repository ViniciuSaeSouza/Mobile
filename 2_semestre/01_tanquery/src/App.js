import {View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api/posts';

export default function App(){
    //useQuery é um hook principal do TanStack Query
    const { data, isLoading, error, isError} = useQuery({
        queryKey: ['posts'], // chave única para identificar a consulta
        queryFn: fetchPosts, //função que busca os dados
    });

    // Exibe um ActivityIndicator enquanto os dados estão sendo carregados
    if(isLoading){
        return <ActivityIndicator size="large"/>
    }
}