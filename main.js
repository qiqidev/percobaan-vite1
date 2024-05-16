import './style.css'
import logorifqi2 from './02.jpeg'
import logorifqi from '/011.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logorifqi}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${logorifqi2}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>RIFQI QURROTA AYUNI</h1>
    <h2>HELLO WORLD</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
     klik tombol untuk menambah hitungan
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
