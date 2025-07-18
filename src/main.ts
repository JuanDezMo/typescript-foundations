import './style.css'
import typescriptLogo from './typescript.svg'
//import './code/01-basic-types'
//import './code/02-objects'
//import './code/03-functions'
import './code/04-second-functions'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript Fundamentals</h1>
  </div>
`