import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import ContentStudio from './pages/ContentStudio'
import ISLResourceCenter from './pages/ISLResourceCenter'
import LearningMaterials from './pages/LearningMaterials'
import Assessments from './pages/Assessments'
import QualityAccessibility from './pages/QualityAccessibility'
import Settings from './pages/Settings'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/studio" element={<ContentStudio />} />
                    <Route path="/isl" element={<ISLResourceCenter />} />
                    <Route path="/materials" element={<LearningMaterials />} />
                    <Route path="/assessments" element={<Assessments />} />
                    <Route path="/quality" element={<QualityAccessibility />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
