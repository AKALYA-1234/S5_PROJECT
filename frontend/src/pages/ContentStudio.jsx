import React, { useState } from 'react'
import {
    UploadCloud,
    FileText,
    Clock,
    Sparkles,
    Download,
    Share2,
    CheckSquare,
    Square,
    FileCheck,
    Video,
    Layers,
    HelpCircle,
    BookOpen,
    Volume2,
    FileCode,
    AlertCircle
} from 'lucide-react'
import { ChloroplastDiagram, PlantPhotoBanner, ISLSignerIllustration } from '../components/SVGIcons'

export const ContentStudio = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [activeTab, setActiveTab] = useState('transcript')
    const [includeDiagrams, setIncludeDiagrams] = useState(true)
    const [subject, setSubject] = useState('Auto-detect')
    const [gradeLevel, setGradeLevel] = useState('Undergraduate')
    const [outputLanguage, setOutputLanguage] = useState('English')
    const [explanationLevel, setExplanationLevel] = useState('Standard')
    const [historyModalOpen, setHistoryModalOpen] = useState(false)
    const [processingNotice, setProcessingNotice] = useState(null)

    // Content option checkboxes
    const [options, setOptions] = useState({
        transcript: true,
        simplifiedNotes: true,
        diagrams: true,
        islVideo: true,
        keyTerms: true,
        practiceQuestions: true,
    })

    const toggleOption = (key) => {
        setOptions(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
            setProcessingNotice(null)
        }
    }

    const handleGenerateClick = () => {
        // Clear messaging per requirements: UI and validation only, indicate AI processing backend is pending
        setProcessingNotice({
            type: 'info',
            message: selectedFile
                ? `File "${selectedFile.name}" selected. Note: AI video transcription, OCR, and ISL gloss generation pipeline are scheduled for the next development phase. Demonstration preview loaded below.`
                : 'Please select a sample file or explore the interactive generated demonstration preview below.'
        })
    }

    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Header with Breadcrumb & Action */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        marginBottom: '6px'
                    }}>
                        <FileText size={14} />
                        <span>Content Studio</span>
                    </div>
                    <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
                        Create Accessible Learning Content
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                        Upload your study material and let AI generate simplified, accessible and engaging resources.
                    </p>
                </div>

                <button
                    onClick={() => setHistoryModalOpen(!historyModalOpen)}
                    style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        padding: '10px 18px',
                        fontSize: '0.88rem',
                        fontWeight: '600',
                        color: '#334155',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}
                >
                    <Clock size={16} color="#64748b" />
                    <span>View Upload History</span>
                </button>
            </div>

            {/* Upload & Configuration Section (2 Columns) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px',
                alignItems: 'stretch'
            }}>
                {/* Left Column (8 cols): File Upload & Processing Settings */}
                <div style={{
                    gridColumn: 'span 8',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px'
                }}>
                    {/* File Upload Box */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '20px',
                        alignItems: 'center',
                        padding: '28px 24px',
                        border: '2px dashed #93c5fd',
                        borderRadius: '12px',
                        backgroundColor: '#f8fafc',
                        textAlign: 'center'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: '#eff6ff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#2563eb',
                                marginBottom: '12px'
                            }}>
                                <UploadCloud size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: '0 0 4px' }}>
                                {selectedFile ? selectedFile.name : "Upload your File"}
                            </h3>
                            <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 14px' }}>
                                Supports PDF, PPT, DOCX, TXT, MP4, MP3 (Max 100 MB)
                            </p>

                            <label style={{
                                backgroundColor: '#2563eb',
                                color: '#ffffff',
                                padding: '9px 20px',
                                borderRadius: '8px',
                                fontSize: '0.88rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span>Choose File</span>
                                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} accept=".pdf,.ppt,.pptx,.docx,.txt,.mp4,.mp3" />
                            </label>
                            <span style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '8px' }}>
                                or drag and drop here
                            </span>
                        </div>

                        {/* Supported Formats Legend */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderLeft: '1px solid #e2e8f0',
                            paddingLeft: '20px'
                        }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b', marginBottom: '10px' }}>
                                Supported Formats
                            </span>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '10px'
                            }}>
                                {[
                                    { ext: 'PDF', color: '#ef4444' },
                                    { ext: 'PPT', color: '#f97316' },
                                    { ext: 'DOCX', color: '#2563eb' },
                                    { ext: 'TXT', color: '#64748b' },
                                    { ext: 'MP4', color: '#0284c7' },
                                    { ext: 'MP3', color: '#a855f7' },
                                ].map(f => (
                                    <div key={f.ext} style={{
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        fontSize: '0.72rem',
                                        fontWeight: '800',
                                        color: f.color
                                    }}>
                                        {f.ext}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Processing Settings */}
                    <div>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0f172a', marginBottom: '14px' }}>
                            Processing Settings
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                            gap: '14px',
                            alignItems: 'center'
                        }}>
                            <div>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                                    Subject
                                </label>
                                <select
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        border: '1px solid #cbd5e1',
                                        fontSize: '0.85rem',
                                        color: '#0f172a',
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    <option>Auto-detect</option>
                                    <option>Biology</option>
                                    <option>Physics</option>
                                    <option>Chemistry</option>
                                    <option>Mathematics</option>
                                    <option>Computer Science</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                                    Grade Level
                                </label>
                                <select
                                    value={gradeLevel}
                                    onChange={(e) => setGradeLevel(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        border: '1px solid #cbd5e1',
                                        fontSize: '0.85rem',
                                        color: '#0f172a',
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    <option>Undergraduate</option>
                                    <option>High School (Grades 9-12)</option>
                                    <option>Middle School (Grades 6-8)</option>
                                    <option>Primary School</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                                    Output Language
                                </label>
                                <select
                                    value={outputLanguage}
                                    onChange={(e) => setOutputLanguage(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        border: '1px solid #cbd5e1',
                                        fontSize: '0.85rem',
                                        color: '#0f172a',
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Bilingual (English + Hindi)</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                                    Explanation Level
                                </label>
                                <select
                                    value={explanationLevel}
                                    onChange={(e) => setExplanationLevel(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        border: '1px solid #cbd5e1',
                                        fontSize: '0.85rem',
                                        color: '#0f172a',
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    <option>Standard</option>
                                    <option>Simplified / Accessible</option>
                                    <option>Comprehensive</option>
                                </select>
                            </div>

                            {/* Include Diagrams Toggle */}
                            <div>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '8px' }}>
                                    Include Diagrams
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setIncludeDiagrams(!includeDiagrams)}
                                    style={{
                                        width: '46px',
                                        height: '24px',
                                        backgroundColor: includeDiagrams ? '#2563eb' : '#cbd5e1',
                                        borderRadius: '9999px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s',
                                        padding: 0
                                    }}
                                >
                                    <span style={{
                                        position: 'absolute',
                                        top: '2px',
                                        left: includeDiagrams ? '24px' : '2px',
                                        width: '20px',
                                        height: '20px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '50%',
                                        transition: 'left 0.2s',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                    }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (4 cols): Content Options & Generate Button */}
                <div style={{
                    gridColumn: 'span 4',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: '0 0 4px' }}>
                            Content Options
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 16px' }}>
                            Select the type of accessible content you want to generate.
                        </p>

                        {/* Checkbox Options List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                {
                                    key: 'transcript',
                                    label: 'Transcript & Caption',
                                    desc: 'Accurate text transcription with timestamps',
                                    icon: Volume2
                                },
                                {
                                    key: 'simplifiedNotes',
                                    label: 'Simplified Notes',
                                    desc: 'Easy-to-read summary and key points',
                                    icon: FileText
                                },
                                {
                                    key: 'diagrams',
                                    label: 'Visual Diagrams',
                                    desc: 'Illustrations, flowcharts and infographics',
                                    icon: Layers
                                },
                                {
                                    key: 'islVideo',
                                    label: 'ISL Video Support',
                                    desc: 'Add Indian Sign Language explanation',
                                    icon: Video
                                },
                                {
                                    key: 'keyTerms',
                                    label: 'Key Terms & Glossary',
                                    desc: 'Important terms with simple explanations',
                                    icon: BookOpen
                                },
                                {
                                    key: 'practiceQuestions',
                                    label: 'Practice Questions',
                                    desc: 'MCQs / Short answers with explanations',
                                    icon: HelpCircle
                                },
                            ].map(({ key, label, desc, icon: Icon }) => (
                                <div
                                    key={key}
                                    onClick={() => toggleOption(key)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '10px',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        backgroundColor: options[key] ? '#f8fafc' : 'transparent',
                                        cursor: 'pointer',
                                        userSelect: 'none'
                                    }}
                                >
                                    <div style={{ color: options[key] ? '#2563eb' : '#94a3b8', marginTop: '2px' }}>
                                        {options[key] ? <CheckSquare size={18} /> : <Square size={18} />}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a' }}>
                                            {label}
                                        </div>
                                        <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                                            {desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <button
                            onClick={handleGenerateClick}
                            style={{
                                width: '100%',
                                backgroundColor: '#2563eb',
                                color: '#ffffff',
                                padding: '12px 20px',
                                borderRadius: '10px',
                                fontSize: '0.92rem',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: '0 2px 8px rgba(37,99,235,0.3)',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            <Sparkles size={18} />
                            <span>Generate Content</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Processing Notice Banner */}
            {processingNotice && (
                <div style={{
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#1e3a8a',
                    fontSize: '0.88rem'
                }}>
                    <AlertCircle size={20} color="#2563eb" flexShrink={0} />
                    <span>{processingNotice.message}</span>
                </div>
            )}

            {/* Upload History Modal Placeholder */}
            {historyModalOpen && (
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    padding: '18px 24px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h4 style={{ margin: 0, fontWeight: '700', fontSize: '0.95rem' }}>Upload History (Demo Records)</h4>
                        <button onClick={() => setHistoryModalOpen(false)} style={{ background: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.85rem' }}>Close ✕</button>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#475569' }}>
                        • <code>Photosynthesis_Chapter4.pdf</code> — Biology — Processed on 6 Oct 2026<br />
                        • <code>Cell_Structure_Lecture.mp4</code> — Biology — Processed on 4 Oct 2026
                    </div>
                </div>
            )}

            {/* Generated Content Preview Section */}
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e2e8f0'
            }}>
                {/* Preview Header & Actions */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '18px',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    <div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>
                            Generated Content Preview
                        </h2>
                        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
                            AI-generated accessible learning materials from your uploaded file (Demonstration Mode).
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            onClick={() => alert("Demonstration Export: Full accessible learning packet downloaded as ZIP.")}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #cbd5e1',
                                borderRadius: '8px',
                                padding: '8px 14px',
                                fontSize: '0.82rem',
                                fontWeight: '600',
                                color: '#334155',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                cursor: 'pointer'
                            }}
                        >
                            <Download size={15} /> Download All
                        </button>
                        <button
                            onClick={() => alert("Demonstration Share: Link copied to clipboard.")}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #cbd5e1',
                                borderRadius: '8px',
                                padding: '8px 14px',
                                fontSize: '0.82rem',
                                fontWeight: '600',
                                color: '#334155',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                cursor: 'pointer'
                            }}
                        >
                            <Share2 size={15} /> Share
                        </button>
                    </div>
                </div>

                {/* Preview Navigation Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '6px',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '12px',
                    marginBottom: '20px',
                    overflowX: 'auto'
                }}>
                    {[
                        { id: 'transcript', label: 'Transcript & Caption', icon: Volume2 },
                        { id: 'simplifiedNotes', label: 'Simplified Notes', icon: FileText },
                        { id: 'diagrams', label: 'Visual Diagrams', icon: Layers },
                        { id: 'islVideo', label: 'ISL Video', icon: Video },
                        { id: 'keyTerms', label: 'Key Terms', icon: BookOpen },
                        { id: 'practiceQuestions', label: 'Practice Questions', icon: HelpCircle },
                    ].map(tab => {
                        const Icon = tab.icon
                        const isActive = activeTab === tab.id
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 14px',
                                    borderRadius: '8px',
                                    fontSize: '0.84rem',
                                    fontWeight: isActive ? '700' : '500',
                                    color: isActive ? '#2563eb' : '#64748b',
                                    backgroundColor: isActive ? '#eff6ff' : 'transparent',
                                    border: isActive ? '1px solid #bfdbfe' : '1px solid transparent',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <Icon size={16} />
                                <span>{tab.label}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Tab 1: Transcript & Caption + Simplified Notes Side-by-Side (Matching Reference Screenshot 2) */}
                {activeTab === 'transcript' && (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gap: '24px',
                        alignItems: 'start'
                    }}>
                        {/* Left Side: Video Player & Timestamped Transcript */}
                        <div style={{ gridColumn: 'span 7' }}>
                            <div style={{ marginBottom: '14px' }}>
                                <PlantPhotoBanner duration="12:35" title="Photosynthesis An Overview" />
                            </div>

                            {/* Timestamped Transcript lines */}
                            <div style={{
                                backgroundColor: '#f8fafc',
                                borderRadius: '10px',
                                border: '1px solid #e2e8f0',
                                padding: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            }}>
                                {[
                                    { time: '00:00', text: 'Photosynthesis is the process by which plants make their own food using sunlight, water and carbon dioxide.' },
                                    { time: '00:08', text: 'It takes place mainly in the leaves, specifically in the chloroplasts.' },
                                    { time: '00:15', text: 'Chlorophyll is the green pigment that helps in absorbing sunlight.' },
                                    { time: '00:22', text: 'The main products of photosynthesis are glucose and oxygen.' },
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.84rem' }}>
                                        <span style={{
                                            backgroundColor: '#eff6ff',
                                            color: '#2563eb',
                                            fontWeight: '700',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            flexShrink: 0
                                        }}>
                                            {item.time}
                                        </span>
                                        <span style={{ color: '#334155', lineHeight: '1.4' }}>
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Simplified Notes Preview */}
                        <div style={{
                            gridColumn: 'span 5',
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            padding: '20px',
                            border: '1px solid #e2e8f0'
                        }}>
                            <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: '700', textTransform: 'uppercase' }}>
                                Simplified Notes
                            </span>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', margin: '4px 0 12px' }}>
                                Photosynthesis – Key Points
                            </h3>

                            <ul style={{ paddingLeft: '18px', color: '#334155', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '18px' }}>
                                <li>Plants make their own food using sunlight, water and carbon dioxide.</li>
                                <li>It occurs in chloroplasts, mainly in the leaves.</li>
                                <li>Chlorophyll absorbs sunlight.</li>
                                <li>The process produces glucose (food) and oxygen.</li>
                                <li>It is essential for plant growth and survival.</li>
                            </ul>

                            {/* Key Takeaway Callout Box */}
                            <div style={{
                                backgroundColor: '#eff6ff',
                                borderRadius: '8px',
                                padding: '14px',
                                border: '1px solid #bfdbfe'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontSize: '0.85rem', color: '#1e3a8a', marginBottom: '4px' }}>
                                    💡 Key Takeaway
                                </div>
                                <p style={{ margin: 0, fontSize: '0.82rem', color: '#1e40af', lineHeight: '1.4' }}>
                                    Photosynthesis converts light energy into chemical energy in the form of glucose, which helps plants grow.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 2: Simplified Notes Full View */}
                {activeTab === 'simplifiedNotes' && (
                    <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px' }}>Photosynthesis — Complete Simplified Study Sheet</h3>
                        <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                            Standard textbooks contain dense paragraphs that can pose syntactic barriers for DHH readers. LearnBridge simplifies complex grammar into clear subject-verb-object structures, accompanied by visual glossaries.
                        </p>
                    </div>
                )}

                {/* Tab 3: Visual Diagrams */}
                {activeTab === 'diagrams' && (
                    <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                        <ChloroplastDiagram />
                    </div>
                )}

                {/* Tab 4: ISL Video */}
                {activeTab === 'islVideo' && (
                    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
                        <ISLSignerIllustration duration="0:28" isLarge={true} title="Photosynthesis in ISL" />
                        <p style={{ fontSize: '0.82rem', color: '#64748b', textAlign: 'center', marginTop: '10px' }}>
                            Verified Indian Sign Language (ISL) demonstration for the academic term <strong>Photosynthesis</strong>.
                        </p>
                    </div>
                )}

                {/* Tab 5: Key Terms */}
                {activeTab === 'keyTerms' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                        {[
                            { term: 'Chloroplast', def: 'The cell organelle where photosynthesis takes place.' },
                            { term: 'Chlorophyll', def: 'Green pigment that absorbs sunlight.' },
                            { term: 'Stroma', def: 'Fluid-filled space surrounding the thylakoids.' },
                            { term: 'Thylakoid', def: 'Membrane sacs where light reactions happen.' },
                        ].map(k => (
                            <div key={k.term} style={{ padding: '14px', borderRadius: '8px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#2563eb' }}>{k.term}</div>
                                <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>{k.def}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tab 6: Practice Questions */}
                {activeTab === 'practiceQuestions' && (
                    <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px' }}>Sample Generated Quiz Questions</h4>
                        <div style={{ fontSize: '0.85rem', color: '#334155' }}>
                            1. Which organelle absorbs light during photosynthesis? <strong>Answer: Chloroplast</strong><br />
                            2. What is the green pigment in plant leaves called? <strong>Answer: Chlorophyll</strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContentStudio
