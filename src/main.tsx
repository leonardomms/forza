import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SmoothScroll } from './components/SmoothScroll'
import { ScrollAnimations } from './components/ScrollAnimations'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmoothScroll>
      <ScrollAnimations>
        <App />
      </ScrollAnimations>
    </SmoothScroll>
  </React.StrictMode>,
)
