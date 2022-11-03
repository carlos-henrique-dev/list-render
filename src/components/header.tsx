interface Params {
  onSelect(): void
  onFetch(): void
  onReset(): void
}

export const Header = ({ onSelect, onFetch, onReset }: Params) => {
  return (
    <div className="header">
      <h1>Characters</h1>

      <div>
        <button onClick={onReset}>Reset</button>
        <button onClick={onFetch}>Fetch more</button>
        <button onClick={onSelect}>Select Random Row</button>
      </div>
    </div>
  )
}
