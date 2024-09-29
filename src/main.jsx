import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Componnets/Header'
import ButtonTable from './Componnets/ButtonTable'
import Content from './Componnets/Content'

createRoot(document.getElementById('root')).render(
  
  <div>

    <Header />
      <div className='main-body'> 
        <div>
           <Content />
        </div>
        <ButtonTable />
      </div>
    

  </div>
)
