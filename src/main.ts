import './style.css'
import typescriptLogo from './typescript.svg'
import './code/01-basic-types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript Fundamentals</h1>
  </div>
`