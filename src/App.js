import React, {useState} from 'react'

const App = () => {

  const [value, setValue] = useState({normal: "", texto: "", select: "", check: false})
  const handleChange = ({target}) => {
    setValue({
      ...value,
      [target.name]: target.type === "checkbox" 
      ? target.checked
      : target.value
    })
  }
  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span>Longitud menor a 5</span> : null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
      <textarea name="texto" onChange={handleChange} value={value.texto}/>


      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Seleccione --</option>
        <option value="chanchofeliz">chancho feliz</option>
        <option value="chanchitofeliz">chanchito feliz</option>
        <option value="chanchitotriste">chanchito triste</option>
        <option value="felipe">felipe</option>
      </select>


      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
    </div>
  )
}

export default App;
