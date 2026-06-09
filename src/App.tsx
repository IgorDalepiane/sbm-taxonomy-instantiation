import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { ClassificationProvider } from './context/ClassificationContext'
import { LocaleProvider } from './context/LocaleProvider'
import { ExampleProfilePage } from './pages/ExampleProfilePage'
import { GuidePage } from './pages/GuidePage'
import { HomePage } from './pages/HomePage'
import { WizardPage } from './pages/WizardPage'

function App() {
  return (
    <LocaleProvider>
      <ClassificationProvider>
        <HashRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/wizard" element={<WizardPage />} />
              <Route path="/example/:id" element={<ExampleProfilePage />} />
              <Route path="/guide" element={<GuidePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </ClassificationProvider>
    </LocaleProvider>
  )
}

export default App
