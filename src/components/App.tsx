import { Pane } from 'evergreen-ui'
import Classes from 'pages/Classes/Classes'
import Materials from 'pages/Materials/Materials'
import Progress from 'pages/Progress/Progress'
import Settings from 'pages/Settings/Settings'
import Statistics from 'pages/Statistics/Statistics'
import Testing from 'pages/Testing/Testing'
import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import EvergreenUIThemeProvider from '../theme/provider'
import AppLayout from './AppLayout/AppLayout'

export const App: FC = () => {
  return (
    <EvergreenUIThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<Navigate to="statistics" />} />
          <Route path="admin" element={<AppLayout />}>
            <Route path="materials" element={<Materials />} />
            <Route path="classes" element={<Classes />} />
            <Route path="progress" element={<Progress />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="testing" element={<Testing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Pane>Not Found</Pane>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EvergreenUIThemeProvider>
  )
}

export default App
