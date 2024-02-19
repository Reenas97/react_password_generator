import { useState } from "react"
import "./App.css"
import Button from "./components/Button"


export default function App() {
  const [copyText, setCopyText] = useState("Copiar")

  let [generatedPassword, setGeneratedPassword] = useState("")

  function generatePassword(){

    const lowercaseLetters = 'abcdefghijklmnopqrstuwxyz'
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_+=~`[]{}|;:,.<>?'

    let passwordCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols

    let password = ''

    for (let i = 0; i < 12; i++){
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
      <div className="buttonsContainer">
        <Button
          buttonName = "Gerar!"
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
