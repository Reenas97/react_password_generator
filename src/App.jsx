import { useState } from "react"
import "./App.css"
import Button from "./components/Button"


export default function App() {
  const [copyText, setCopyText] = useState("Copiar")

  let [generatedPassword, setGeneratedPassword] = useState("")

  const [showInput, setShowInput] = useState(false)

  const [changePasswordSize, setChangePasswordSize] = useState(12)

  const passwordSize = showInput ? changePasswordSize : 12

  function generatePassword(){

    const lowercaseLetters = 'abcdefghijklmnopqrstuwxyz'
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_+=~`[]{}|;:,.<>?'

    let passwordCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols

    let password = ''

    for (let i = 0; i < passwordSize; i++){
      password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
    }

    setGeneratedPassword(password)

    setCopyText("Copiar")
  }

  function copyToClipboard(){
    navigator.clipboard.writeText(generatedPassword)
    setCopyText("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div className="app__input">
        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
        <label htmlFor="showInput">Customizar tamanho da senha</label>
      </div>
      {showInput ? (
        <div className="app__input">
        <label htmlFor="changePasswordSize">Tamanho da senha:</label>
          <input 
            type="number"
            id="changePasswordSize"
            min={1}
            value= {changePasswordSize}
            onChange={(ev) => setChangePasswordSize(ev.target.value)}        
          />
        </div>
      ): null}
      <div className="buttonsContainer">
        <Button
          buttonName = {`Gerar senha de ${passwordSize} caracteres`}
          function = {generatePassword}
        />
        <Button
          buttonName = {copyText}
          function = {copyToClipboard}
        />
      </div>
      <p>{generatedPassword}</p>
    </div>
  )
}
