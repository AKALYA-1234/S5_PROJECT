import React, { useState } from 'react'
import {
    ShieldCheck,
    Download,
    CheckCircle,
    AlertTriangle,
    FileText,
    Video,
    BarChart2,
    Layers,
    ArrowRight,
    ExternalLink,
    Plus,
    RefreshCw,
    HelpCircle
} from 'lucide-react'
import { mockQualityMetrics } from '../data/mockData'

export const QualityAccessibility = () => {
    const [filterSubject, setFilterSubject] = useState('All')
    const [activeDiffTab, setActiveDiffTab] = useState('comparison')

    const { summary, evaluations, missingTerms } = mockQualityMetrics

    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '26px' }}>
            {/* Header */}
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
                        <ShieldCheck size={14} />
                        <span>Quality & Accessibility Lab</span>
                    </div>
                    <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
                        Quality & Accessibility Lab
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                        Audit learning material clarity, caption accuracy, ISL coverage, and syntactic readability. (Demonstration Data)
                    </p>
                </div>

                {/* Right Action: Export Report */}
                <button
                    onClick={() => alert("Demonstration Export: Accessibility compliance audit report exported as PDF.")}
                    style={{
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        padding: '9px 18px',
                        borderRadius: '8px',
                        fontSize: '0.88rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(37,99,235,0.25)'
                    }}
                >
                    <Download size={16} /> Export Report
                </button>
            </div>

            {/* Demonstration Data Banner */}
            <div style={{
                padding: '10px 16px',
                backgroundColor: '#f8fafc',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '0.8rem',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <HelpCircle size={15} color="#2563eb" />
                <span><strong>Demonstration Mode:</strong> Quality metrics and accessibility scores displayed below represent sample audit data for educational content evaluation.</span>
            </div>

            {/* 4 Quality Metric Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px'
            }}>
                {[
                    { label: 'Caption Accuracy', value: `${summary.captionAccuracy.score}%`, status: summary.captionAccuracy.status, color: '#2563eb', sub: 'Target: 90%+' },
                    { label: 'ISL Coverage', value: `${summary.islCoverage.score}%`, status: summary.islCoverage.status, color: '#3b82f6', sub: 'Target: 80%+' },
                    { label: 'Readability Score', value: `${summary.readabilityScore.score}%`, status: summary.readabilityScore.status, color: '#10b981', sub: 'Grade Level: 7.2' },
                    { label: 'Overall Quality', value: `${summary.overallQuality.score}%`, status: summary.overallQuality.status, color: '#0ea5e9', sub: 'Production Ready' },
                ].map((m, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '14px',
                            padding: '20px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                        }}
                    >
                        <div>
                            <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748b' }}>
                                {m.label}
                            </div>
                            <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#0f172a', margin: '4px 0 2px' }}>
                                {m.value}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                            <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#059669', backgroundColor: '#ecfdf5', padding: '2px 8px', borderRadius: '4px' }}>
                                {m.status}
                            </span>
                            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                                {m.sub}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Grid: Left 8 cols & Right 4 cols */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px'
            }}>
                {/* Left Column (8 cols): Evaluation Table & Content Comparison */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Detailed Evaluation Table */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                                Detailed Evaluation Table
                            </h3>
                            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                                4 Modules Audited
                            </span>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b' }}>
                                        <th style={{ padding: '10px 12px', fontWeight: '700' }}>Topic</th>
                                        <th style={{ padding: '10px 12px', fontWeight: '700' }}>Subject</th>
                                        <th style={{ padding: '10px 12px', fontWeight: '700' }}>Caption</th>
                                        <th style={{ padding: '10px 12px', fontWeight: '700' }}>ISL Availability</th>
                                        <th style={{ padding: '10px 12px', fontWeight: '700' }}>Readability</th>
                                        <th style={{ padding: '10px 12px', fontWeight: '700' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {evaluations.map(row => (
                                        <tr key={row.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                                            <td style={{ padding: '12px', fontWeight: '700', color: '#0f172a' }}>{row.topic}</td>
                                            <td style={{ padding: '12px', color: '#475569' }}>{row.subject}</td>
                                            <td style={{ padding: '12px', fontWeight: '600', color: '#2563eb' }}>{row.captionScore}</td>
                                            <td style={{ padding: '12px', color: '#334155' }}>{row.islAvailable}</td>
                                            <td style={{ padding: '12px', color: '#475569' }}>{row.readabilityGrade}</td>
                                            <td style={{ padding: '12px' }}>
                                                <span style={{
                                                    padding: '3px 8px',
                                                    borderRadius: '4px',
                                                    fontSize: '0.72rem',
                                                    fontWeight: '700',
                                                    backgroundColor: row.status === 'Approved' ? '#ecfdf5' : row.status === 'Under Review' ? '#eff6ff' : '#fff7ed',
                                                    color: row.status === 'Approved' ? '#059669' : row.status === 'Under Review' ? '#2563eb' : '#c2410c'
                                                }}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Original-versus-Simplified Content Comparison */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', margin: '0 0 2px' }}>
                                    Original vs. Simplified Content Comparison
                                </h3>
                                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                    Demonstrating linguistic simplification for Deaf and Hard-of-Hearing readers
                                </span>
                            </div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '16px'
                        }}>
                            {/* Original Textbook Material */}
                            <div style={{
                                backgroundColor: '#fff1f2',
                                borderRadius: '10px',
                                border: '1px solid #fecdd3',
                                padding: '16px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#be123c', textTransform: 'uppercase' }}>
                                        Original Textbook Excerpt
                                    </span>
                                    <span style={{ fontSize: '0.7rem', color: '#9f1239' }}>Grade 11.4 Complexity</span>
                                </div>
                                <p style={{ fontSize: '0.82rem', color: '#4c0519', lineHeight: '1.5', margin: 0 }}>
                                    "Photosynthesis represents an anabolic biochemical cascade mediated through chlorophyllous plant cells whereby solar photon influx catalyzes photolysis of ambient hydrous molecules alongside carbonaceous atmospheric gas fixation into carbohydrates."
                                </p>
                                <div style={{ marginTop: '10px', fontSize: '0.72rem', color: '#e11d48' }}>
                                    ⚠️ Complex passive clauses, high syntactic density.
                                </div>
                            </div>

                            {/* LearnBridge Simplified Material */}
                            <div style={{
                                backgroundColor: '#ecfdf5',
                                borderRadius: '10px',
                                border: '1px solid #a7f3d0',
                                padding: '16px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#047857', textTransform: 'uppercase' }}>
                                        LearnBridge Accessible Notes
                                    </span>
                                    <span style={{ fontSize: '0.7rem', color: '#065f46' }}>Grade 6.8 Readability</span>
                                </div>
                                <p style={{ fontSize: '0.82rem', color: '#064e3b', lineHeight: '1.5', margin: 0 }}>
                                    "Plants make their own food through photosynthesis. In plant leaves, green chlorophyll absorbs sunlight. The plant combines water and carbon dioxide to produce glucose (sugar) and oxygen."
                                </p>
                                <div style={{ marginTop: '10px', fontSize: '0.72rem', color: '#059669', fontWeight: '600' }}>
                                    ✓ Direct subject-verb-object structure, integrated ISL glossing.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column (4 cols): Accessibility Coverage Chart, Missing ISL Resources, Review Queue */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Accessibility Coverage Breakdown */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#0f172a', margin: '0 0 14px' }}>
                            Accessibility Coverage Chart
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'Accurate Captions', pct: 94, color: '#2563eb' },
                                { name: 'Visual Diagrams', pct: 88, color: '#10b981' },
                                { name: 'Simplified Notes', pct: 92, color: '#3b82f6' },
                                { name: 'ISL Sign Videos', pct: 81, color: '#f59e0b' },
                            ].map(cov => (
                                <div key={cov.name}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                                        <span style={{ color: '#334155', fontWeight: '600' }}>{cov.name}</span>
                                        <span style={{ fontWeight: '700', color: '#0f172a' }}>{cov.pct}%</span>
                                    </div>
                                    <div style={{ height: '7px', backgroundColor: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
                                        <div style={{ width: `${cov.pct}%`, height: '100%', backgroundColor: cov.color, borderRadius: '9999px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Missing ISL Resources List */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                                Missing ISL Resources
                            </h3>
                            <span style={{ fontSize: '0.74rem', color: '#ef4444', fontWeight: '700' }}>
                                3 High Priority
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {missingTerms.map(m => (
                                <div key={m.term} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                                    <div>
                                        <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#0f172a' }}>{m.term}</div>
                                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{m.subject} • {m.requests} requests</div>
                                    </div>
                                    <button
                                        onClick={() => alert(`Requested ISL recording for ${m.term}`)}
                                        style={{
                                            backgroundColor: '#eff6ff',
                                            border: '1px solid #bfdbfe',
                                            color: '#2563eb',
                                            padding: '4px 8px',
                                            borderRadius: '6px',
                                            fontSize: '0.72rem',
                                            fontWeight: '700',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        + Record
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review Queue */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', margin: '0 0 12px' }}>
                            Editorial Review Queue
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
                            <div style={{ padding: '8px', borderLeft: '3px solid #2563eb', backgroundColor: '#f8fafc' }}>
                                <span style={{ fontWeight: '700', color: '#0f172a' }}>Cell Organelles Quiz</span>
                                <p style={{ margin: '2px 0 0', color: '#64748b', fontSize: '0.74rem' }}>Pending educator visual check</p>
                            </div>
                            <div style={{ padding: '8px', borderLeft: '3px solid #10b981', backgroundColor: '#f8fafc' }}>
                                <span style={{ fontWeight: '700', color: '#0f172a' }}>Chemical Equations ISL</span>
                                <p style={{ margin: '2px 0 0', color: '#64748b', fontSize: '0.74rem' }}>Reviewed and approved</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QualityAccessibility
