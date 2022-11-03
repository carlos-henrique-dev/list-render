export type Character = {
  id: number
  name: string
  status: string
  species: string
  location: {
    name: string
  }
}

export type RowItem<T> = {
  data: T
  selected?: boolean
  expanded?: boolean
}
