import { Character } from '../../types'
import { useEffect, useMemo } from 'react'
import { Row } from './row'
import { Store } from '../../store/table-store'

const store = new Store()

interface Params {
  items: Character[]
}

export const CharactersTable = ({ items }: Params) => {
  const rows = useMemo(() => items.map((item) => <Row key={item.id} item={item} />), [items])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  )
}
