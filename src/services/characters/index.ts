import { api } from '@/services/';
import { IFilters, IListCharacter } from './types';

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