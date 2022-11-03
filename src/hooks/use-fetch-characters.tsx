import { useEffect, useRef, useState } from 'react'
import { Character } from '../types'

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const page = useRef(1)

  const fetchCharacters = async (page: number) => {
    const request = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const { results }: { results: Character[] } = await request.json()
    setCharacters([...results, ...characters])
  }

  useEffect(() => {
    fetchCharacters(page.current)
  }, [])

  const fetchMore = () => {
    fetchCharacters(page.current + 1)
    page.current = page.current + 1
  }

  const reset = () => {
    page.current = 0
    setCharacters([])
  }

  return {
    characters,
    fetchMore,
    reset,
  }
}
