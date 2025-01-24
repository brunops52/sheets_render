import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
const apiUrl = 'https://sheetdb.io/api/v1/tno9krv8jdrnp';
  
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    const contentDiv = document.getElementById('api-content');
    
    if (data) {
      contentDiv.innerHTML = data.map(obj => `
          <tr>
            <td>${obj.ramal}</td>
            <td>${obj.colaborador}</td>
          </tr>
        `)
    } else {
      contentDiv.innerHTML = '<p>TESTE_FALHA</p>';
    }
  });
document.querySelector('#app').innerHTML = `
  <div id="api-content">

  </div>
`
setupCounter(document.querySelector('#counter'))
