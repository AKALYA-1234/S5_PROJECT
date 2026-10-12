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

                    {/* Content Studio & Aliases */}
                    <Route path="/content-studio" element={<ContentStudio />} />
                    <Route path="/studio" element={<Navigate to="/content-studio" replace />} />

                    {/* ISL Resource Center & Aliases */}
                    <Route path="/isl-resources" element={<ISLResourceCenter />} />
                    <Route path="/isl" element={<Navigate to="/isl-resources" replace />} />

                    {/* Learning Materials & Aliases */}
                    <Route path="/learning-materials" element={<LearningMaterials />} />
                    <Route path="/materials" element={<Navigate to="/learning-materials" replace />} />

                    {/* Assessments & Practice */}
                    <Route path="/assessments" element={<Assessments />} />

                    {/* Quality & Accessibility Lab & Aliases */}
                    <Route path="/quality-accessibility" element={<QualityAccessibility />} />
                    <Route path="/quality" element={<Navigate to="/quality-accessibility" replace />} />

                    {/* Settings */}
                    <Route path="/settings" element={<Settings />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
