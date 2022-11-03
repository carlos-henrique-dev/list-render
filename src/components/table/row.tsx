import { useEffect, useState } from 'react'
import { Store } from '../../store/table-store'
import { Character, RowItem } from '../../types'

interface Params {
  item: Character
}

const store = new Store()

const initialState = {
  selected: false,
  expanded: false,
}

export const Row = ({ item }: Params) => {
  const [row, setData] = useState<RowItem<Character>>({ data: item, ...initialState })

  const updateSelected = () => {
    setData((_data) => ({ ..._data, selected: !_data?.selected }))
  }

  useEffect(() => {
    setData({ data: item, ...initialState })
  }, [item])

  useEffect(() => {
    store.subscribeSelectFuncs(row.data.id, updateSelected)

    return () => {
      store.unsubscribeSelectFuncs(row.data.id)
    }
  }, [])

  return (
    <tr id={`row-${row.data.id}`} className={row.selected ? 'selected' : ''}>
      <td>{row.data.name}</td>
      <td>{row.data.species}</td>
      <td>{row.data.status}</td>
    </tr>
  )
}

/* <tr className={row.expanded ? 'expanded' : ''}>
  <td colSpan={3}>Location: {row.data.location.name}</td>
</tr> */
