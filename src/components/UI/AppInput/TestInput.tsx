import React, { useRef, useState } from "react";

export const TestInput = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const getInputValue = () => {
    const value = inputRef.current?.value
    if (headerRef.current) {
      headerRef.current.innerText = `Значение инпута: ${value}`
    }
  }

  return (
    <div>
      <h1 ref={headerRef}> Значение инпута: </h1>
      <input 
      value={value}
      ref={inputRef} 
      style={{ marginBottom: 16 }}
      onChange={(e) => setValue(e.target.value)} 
       />
      <button onClick={focusInput}>Фокус инпута</button>
      <button onClick={getInputValue}>Получит значение инпута</button>
    </div>
  )
}