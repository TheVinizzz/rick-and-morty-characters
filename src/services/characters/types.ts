export type IInfo = {
    count: number
    pages: number
    next: string
    prev: number | null
}

export type IOrigin = {
    name: string
    url: string
}
  
export type ILocation = {
    name: string
    url: string
}

export type ICharacter = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: IOrigin
    location: ILocation
    image: string
    episode: string[]
    url: string
    created: string
  }

export type IListCharacter = {
    info: IInfo
    results: ICharacter[]
}

export type IFilters = {
    gender?: string
    name?: string
    status?: string
    page?: number | string
}