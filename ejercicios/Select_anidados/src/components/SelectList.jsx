export const SelectList = ({ title }) => {
    const key = `select-${title}`
    const label = title.toUpperCase()
    const options = []

  return (
    <>
      <label className="label-select" htmlFor={key}>{label}</label>
      <select name={key} id={key}>
            <option value="">Seleccione un {title}</option>
      </select>
    </>
  )
}
