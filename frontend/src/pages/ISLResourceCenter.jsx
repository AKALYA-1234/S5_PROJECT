import React, { useState } from 'react'
import {
    Hand,
    Search,
    Video,
    BookOpen,
    Award,
    CheckCircle,
    Bookmark,
    Plus,
    ArrowRight,
    Filter,
    Check,
    X
} from 'lucide-react'
import { mockISLTerms } from '../data/mockData'
import { ISLSignerIllustration } from '../components/SVGIcons'

export const ISLResourceCenter = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('All Subjects')
    const [selectedGrade, setSelectedGrade] = useState('All Levels')
    const [selectedAvailability, setSelectedAvailability] = useState('All')
    const [activeCategoryTab, setActiveCategoryTab] = useState('All Terms')
    const [selectedTerm, setSelectedTerm] = useState(mockISLTerms[0])
    const [detailSubTab, setDetailSubTab] = useState('description')
    const [bookmarkedTerms, setBookmarkedTerms] = useState({})
    const [requestModalOpen, setRequestModalOpen] = useState(false)
    const [requestInput, setRequestInput] = useState('')
    const [requestSuccess, setRequestSuccess] = useState(false)

    const toggleBookmark = (id) => {
        setBookmarkedTerms(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const handleClearFilters = () => {
        setSearchTerm('')
        setSelectedSubject('All Subjects')
        setSelectedGrade('All Levels')
        setSelectedAvailability('All')
        setActiveCategoryTab('All Terms')
    }

    // Filtered terms
    const filteredTerms = mockISLTerms.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesSubject = selectedSubject === 'All Subjects' || term.subject === selectedSubject
        const matchesCategory = activeCategoryTab === 'All Terms' ||
            (activeCategoryTab === 'Science' && ['Biology', 'Chemistry', 'Physics'].includes(term.subject)) ||
            term.subject === activeCategoryTab
        return matchesSearch && matchesSubject && matchesCategory
    })

    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '26px' }}>
            {/* Header */}
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
                    <Hand size={14} />
                    <span>ISL Resource Center</span>
                </div>
                <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
                    ISL Resource Center
                </h1>
                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                    Explore Indian Sign Language (ISL) videos for academic terms and concepts.
                </p>
            </div>

            {/* Top 4 Stat Cards Row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '16px'
            }}>
                {[
                    { label: 'ISL Videos', value: '1,250+', sub: 'Across subjects', icon: Video, color: '#2563eb' },
                    { label: 'Academic Terms', value: '500+', sub: 'With verified signs', icon: BookOpen, color: '#2563eb' },
                    { label: 'Subjects Covered', value: '8', sub: 'Science, Math, CS, ...', icon: Award, color: '#2563eb' },
                    { label: 'Coverage', value: '95%', sub: 'Verified & Quality Checked', icon: CheckCircle, color: '#10b981' },
                ].map((s, idx) => {
                    const Icon = s.icon
                    return (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                padding: '18px 20px',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px'
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '10px',
                                backgroundColor: '#eff6ff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: s.color,
                                flexShrink: 0
                            }}>
                                <Icon size={22} />
                            </div>
                            <div>
                                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.1' }}>
                                    {s.value}
                                </div>
                                <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155' }}>
                                    {s.label}
                                </div>
                                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                                    {s.sub}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Search & Filters Bar */}
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '18px 20px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
            }}>
                {/* Search Input Row */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ position: 'relative', flexGrow: 1 }}>
                        <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search a term (e.g., photosynthesis, algorithm, cell, derivative...)"
                            style={{
                                width: '100%',
                                padding: '10px 16px 10px 42px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button
                        style={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            padding: '10px 22px',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                    >
                        <Search size={16} /> Search
                    </button>
                </div>

                {/* Filter Dropdowns Row */}
                <div style={{
                    display: 'flex',
                    gap: '14px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b' }}>Subject:</span>
                            <select
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.82rem' }}
                            >
                                <option>All Subjects</option>
                                <option>Biology</option>
                                <option>Chemistry</option>
                                <option>Physics</option>
                                <option>Mathematics</option>
                                <option>Computer Science</option>
                            </select>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b' }}>Grade Level:</span>
                            <select
                                value={selectedGrade}
                                onChange={(e) => setSelectedGrade(e.target.value)}
                                style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.82rem' }}
                            >
                                <option>All Levels</option>
                                <option>Grade 6-10</option>
                                <option>Grade 9-12</option>
                                <option>Grade 11-12</option>
                            </select>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b' }}>Sign Availability:</span>
                            <select
                                value={selectedAvailability}
                                onChange={(e) => setSelectedAvailability(e.target.value)}
                                style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.82rem' }}
                            >
                                <option>All</option>
                                <option>Verified Only</option>
                                <option>Community Signs</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleClearFilters}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#2563eb',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Clear Filters
                    </button>
                </div>
            </div>

            {/* Subject Category Tabs */}
            <div style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '8px'
            }}>
                {['All Terms', 'Science', 'Mathematics', 'Computer Science', 'Chemistry', 'Physics', 'Biology', 'Common Terms'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategoryTab(cat)}
                        style={{
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            fontSize: '0.84rem',
                            fontWeight: activeCategoryTab === cat ? '700' : '500',
                            color: activeCategoryTab === cat ? '#2563eb' : '#64748b',
                            backgroundColor: activeCategoryTab === cat ? '#eff6ff' : 'transparent',
                            border: activeCategoryTab === cat ? '1px solid #bfdbfe' : '1px solid transparent',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Main Grid: Left (Popular Terms + Subject Browse) & Right (Term Details + Related Terms) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px'
            }}>
                {/* Left Column (8 cols) */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '28px' }}>

                    {/* Popular ISL Terms Grid */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Popular ISL Terms
                            </h2>
                            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                                Showing {filteredTerms.length} verified terms
                            </span>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                            gap: '16px'
                        }}>
                            {filteredTerms.map((t) => {
                                const isSelected = selectedTerm.id === t.id
                                const isBookmarked = bookmarkedTerms[t.id]

                                return (
                                    <div
                                        key={t.id}
                                        onClick={() => setSelectedTerm(t)}
                                        style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '12px',
                                            padding: '12px',
                                            border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            boxShadow: isSelected ? '0 4px 12px rgba(37,99,235,0.12)' : 'none',
                                            transition: 'all 0.15s'
                                        }}
                                    >
                                        <div>
                                            {/* Video Thumbnail */}
                                            <div style={{ marginBottom: '10px' }}>
                                                <ISLSignerIllustration duration={t.duration} isLarge={false} title={t.term} />
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                <div>
                                                    <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0f172a', margin: '0 0 2px' }}>
                                                        {t.term}
                                                    </h4>
                                                    <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                                                        {t.subject}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        toggleBookmark(t.id)
                                                    }}
                                                    style={{
                                                        background: 'none',
                                                        border: 'none',
                                                        color: isBookmarked ? '#2563eb' : '#94a3b8',
                                                        cursor: 'pointer',
                                                        padding: '2px'
                                                    }}
                                                    aria-label="Bookmark"
                                                >
                                                    <Bookmark size={16} fill={isBookmarked ? '#2563eb' : 'none'} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Browse by Subject (Bottom Left) */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: '0 0 16px' }}>
                            Browse by Subject
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                            gap: '12px'
                        }}>
                            {[
                                { name: 'Biology', count: '180 terms', icon: '🌿' },
                                { name: 'Chemistry', count: '150 terms', icon: '🧪' },
                                { name: 'Physics', count: '140 terms', icon: '⚛️' },
                                { name: 'Mathematics', count: '200 terms', icon: '∑' },
                                { name: 'Computer Science', count: '250 terms', icon: '</>' },
                                { name: 'General Terms', count: '130 terms', icon: '📖' },
                            ].map(sub => (
                                <div
                                    key={sub.name}
                                    onClick={() => {
                                        setSelectedSubject(sub.name === 'General Terms' ? 'All Subjects' : sub.name)
                                    }}
                                    style={{
                                        backgroundColor: '#f8fafc',
                                        borderRadius: '10px',
                                        padding: '14px 10px',
                                        border: '1px solid #e2e8f0',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.15s'
                                    }}
                                >
                                    <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{sub.icon}</div>
                                    <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0f172a' }}>{sub.name}</div>
                                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{sub.count}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column (4 cols): Selected Term Details & Request Box */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Term Details Card */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', margin: '0 0 14px' }}>
                            Term Details
                        </h3>

                        {/* Main Video Player */}
                        <div style={{ marginBottom: '14px' }}>
                            <ISLSignerIllustration duration={selectedTerm.duration} isLarge={true} title={selectedTerm.term} />
                        </div>

                        {/* Title & Badges */}
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', margin: '0 0 8px' }}>
                            {selectedTerm.term}
                        </h2>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                            <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#eff6ff', color: '#2563eb' }}>
                                {selectedTerm.subject}
                            </span>
                            <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f1f5f9', color: '#475569' }}>
                                {selectedTerm.gradeLevel}
                            </span>
                            {selectedTerm.verified && (
                                <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Check size={12} /> Verified
                                </span>
                            )}
                        </div>

                        {/* Detail Sub-Tabs */}
                        <div style={{
                            display: 'flex',
                            gap: '6px',
                            borderBottom: '1px solid #e2e8f0',
                            paddingBottom: '8px',
                            marginBottom: '12px'
                        }}>
                            {['description', 'related', 'examples'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setDetailSubTab(tab)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: '4px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: detailSubTab === tab ? '700' : '500',
                                        color: detailSubTab === tab ? '#2563eb' : '#64748b',
                                        borderBottom: detailSubTab === tab ? '2px solid #2563eb' : 'none',
                                        cursor: 'pointer',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {tab === 'related' ? 'Related Terms' : tab}
                                </button>
                            ))}
                        </div>

                        {/* Sub-Tab Content */}
                        {detailSubTab === 'description' && (
                            <div>
                                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 14px' }}>
                                    {selectedTerm.description}
                                </p>

                                <h4 style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                                    Key Points (Simplified)
                                </h4>
                                <ul style={{ paddingLeft: '18px', fontSize: '0.8rem', color: '#475569', lineHeight: '1.5' }}>
                                    {selectedTerm.keyPoints.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {detailSubTab === 'related' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {selectedTerm.relatedTerms.map((rt, i) => (
                                    <div key={i} style={{ padding: '8px', backgroundColor: '#f8fafc', borderRadius: '6px', fontSize: '0.82rem', fontWeight: '600', color: '#2563eb' }}>
                                        🔗 {rt}
                                    </div>
                                ))}
                            </div>
                        )}

                        {detailSubTab === 'examples' && (
                            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.5' }}>
                                Example contextual sentence: "Plants rely on <strong>{selectedTerm.term}</strong> to generate glucose from sunlight."
                            </div>
                        )}
                    </div>

                    {/* Related Terms List */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Related Terms
                            </h3>
                            <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: '600' }}>
                                View All →
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                { term: 'Chlorophyll', subject: 'Biology', duration: '0:22' },
                                { term: 'Chloroplast', subject: 'Biology', duration: '0:24' },
                                { term: 'Glucose', subject: 'Biology', duration: '0:20' },
                                { term: 'Carbon Dioxide', subject: 'Biology', duration: '0:18' },
                            ].map(rel => (
                                <div key={rel.term} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '40px', height: '28px', backgroundColor: '#334155', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '0.65rem' }}>
                                            {rel.duration}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0f172a' }}>{rel.term}</div>
                                            <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{rel.subject}</div>
                                        </div>
                                    </div>
                                    <Bookmark size={15} color="#94a3b8" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Request ISL Term Box */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '6px' }}>📝</div>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0f172a', margin: '0 0 4px' }}>
                            Can't find a term?
                        </h4>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 14px' }}>
                            Request an ISL video for this term. Our certified deaf educators and team will review and add it.
                        </p>

                        {requestSuccess ? (
                            <div style={{ padding: '8px 12px', backgroundColor: '#ecfdf5', borderRadius: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: '600' }}>
                                ✓ Request submitted! Our team will review the term.
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <input
                                    type="text"
                                    placeholder="Enter academic term name..."
                                    value={requestInput}
                                    onChange={(e) => setRequestInput(e.target.value)}
                                    style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.82rem' }}
                                />
                                <button
                                    onClick={() => {
                                        if (requestInput.trim()) {
                                            setRequestSuccess(true)
                                            setTimeout(() => {
                                                setRequestSuccess(false)
                                                setRequestInput('')
                                            }, 3000)
                                        }
                                    }}
                                    style={{
                                        backgroundColor: '#eff6ff',
                                        border: '1px solid #bfdbfe',
                                        color: '#2563eb',
                                        padding: '8px 14px',
                                        borderRadius: '8px',
                                        fontSize: '0.84rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <Plus size={15} /> Request Term
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ISLResourceCenter
