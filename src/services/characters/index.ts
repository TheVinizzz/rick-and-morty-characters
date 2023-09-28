import { api } from '@/services/';
import { ICharacter, IFilters, IListCharacter } from './types';

export const getCharacters = async ({page, gender, status, name}: IFilters) =>  {
    const response = await api.get<IListCharacter>('https://rickandmortyapi.com/api/character', {
        params: {
            gender,
            name,
            status,
            page
        }
    });
    return response.data
}

export const getOneCharacter = async (id: string) =>  {
    const response = await api.get<ICharacter>(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data
}