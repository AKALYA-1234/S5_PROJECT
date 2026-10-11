import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    BookOpen,
    CheckCircle,
    Clock,
    Target,
    Play,
    Bookmark,
    ArrowRight,
    TrendingUp,
    FileText,
    Lightbulb,
    Video,
    Eye,
    Calendar,
    Sparkles,
    ChevronDown
} from 'lucide-react'
import { mockDashboardData } from '../data/mockData'
import { PlantPhotoBanner, ISLSignerIllustration } from '../components/SVGIcons'

export const Dashboard = () => {
    const [bookmarked, setBookmarked] = useState(false)
    const [selectedWeek, setSelectedWeek] = useState('This Week')

    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Header Banner */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
            }}>
                <div>
                    <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
                        Welcome back!
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                        {mockDashboardData.welcomeMessage}
                    </p>
                </div>

                {/* Date and Motivation Pill */}
                <div style={{
                    background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
                    padding: '12px 20px',
                    borderRadius: '14px',
                    border: '1px solid #bfdbfe',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    boxShadow: '0 2px 6px rgba(37, 99, 235, 0.05)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: '#1e3a8a', fontSize: '0.92rem' }}>
                        <Calendar size={16} color="#2563eb" />
                        <span>{mockDashboardData.dateString}</span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#3b82f6', fontWeight: '500' }}>
                        Keep learning, keep growing!
                    </span>
                </div>
            </div>

            {/* Summary Stat Cards Row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px'
            }}>
                {mockDashboardData.stats.map((stat) => (
                    <div
                        key={stat.id}
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '14px',
                            padding: '20px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: stat.bgColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.color,
                            flexShrink: 0
                        }}>
                            {stat.id === 'materials' && <BookOpen size={24} />}
                            {stat.id === 'topics' && <CheckCircle size={24} />}
                            {stat.id === 'study_time' && <Clock size={24} />}
                            {stat.id === 'streak' && <Target size={24} />}
                        </div>
                        <div>
                            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>
                                {stat.label}
                            </div>
                            <div style={{ fontSize: '1.45rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.2', margin: '2px 0' }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: stat.id === 'study_time' ? '#10b981' : '#64748b', fontWeight: '500' }}>
                                {stat.subtext}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Grid: Left 2 cols, Right 1 col */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '28px'
            }}>
                {/* Left Column (8 cols) */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '28px' }}>

                    {/* Continue Learning Card */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Continue Learning
                            </h2>
                            <Link to="/learning-materials" style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                View All <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ width: '220px', flexShrink: 0 }}>
                                <PlantPhotoBanner duration="12:35" title="Photosynthesis - Overview" />
                            </div>
                            <div style={{ flexGrow: 1, minWidth: '240px' }}>
                                <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Biology
                                </span>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', margin: '4px 0 14px' }}>
                                    Photosynthesis - Overview
                                </h3>

                                {/* Progress Bar */}
                                <div style={{ marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2563eb' }}>60%</span>
                                    </div>
                                    <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                                        <div style={{ width: '60%', height: '100%', backgroundColor: '#2563eb', borderRadius: '9999px' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <Link
                                        to="/learning-materials"
                                        style={{
                                            backgroundColor: '#2563eb',
                                            color: '#ffffff',
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            fontSize: '0.88rem',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            boxShadow: '0 2px 6px rgba(37,99,235,0.25)'
                                        }}
                                    >
                                        <Play size={16} fill="#ffffff" /> Continue Learning
                                    </Link>
                                    <button
                                        onClick={() => setBookmarked(!bookmarked)}
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '8px',
                                            border: '1px solid #e2e8f0',
                                            backgroundColor: bookmarked ? '#eff6ff' : '#ffffff',
                                            color: bookmarked ? '#2563eb' : '#64748b',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                        aria-label="Bookmark"
                                    >
                                        <Bookmark size={18} fill={bookmarked ? "#2563eb" : "none"} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Your Learning Materials Section */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Your Learning Materials
                            </h2>
                            <Link to="/learning-materials" style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                View All <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '16px'
                        }}>
                            {mockDashboardData.learningMaterials.map((mat) => (
                                <div
                                    key={mat.id}
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '14px',
                                        padding: '16px',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: '210px',
                                        transition: 'transform 0.15s, box-shadow 0.15s'
                                    }}
                                >
                                    <div>
                                        {/* Visual Preview */}
                                        <div style={{
                                            height: '80px',
                                            borderRadius: '8px',
                                            backgroundColor: mat.type === 'notes' ? '#f0f9ff' : mat.type === 'quiz' ? '#fffbeb' : '#f8fafc',
                                            border: '1px solid #e2e8f0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '12px',
                                            overflow: 'hidden'
                                        }}>
                                            {mat.type === 'notes' && <FileText size={36} color="#0284c7" />}
                                            {mat.type === 'diagram' && (
                                                <div style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: '700', textAlign: 'center' }}>
                                                    ☀️ Chloroplast Process
                                                </div>
                                            )}
                                            {mat.type === 'video' && (
                                                <div style={{ width: '100%', height: '100%' }}>
                                                    <ISLSignerIllustration duration="0:28" isLarge={false} />
                                                </div>
                                            )}
                                            {mat.type === 'quiz' && <Lightbulb size={36} color="#f59e0b" />}
                                        </div>

                                        <span style={{
                                            fontSize: '0.72rem',
                                            fontWeight: '700',
                                            padding: '3px 8px',
                                            borderRadius: '6px',
                                            backgroundColor: mat.badgeType === 'orange' ? '#fff7ed' : '#eff6ff',
                                            color: mat.badgeType === 'orange' ? '#c2410c' : '#2563eb',
                                            display: 'inline-block',
                                            marginBottom: '8px'
                                        }}>
                                            {mat.badge}
                                        </span>

                                        <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', margin: '0 0 4px', lineHeight: '1.3' }}>
                                            {mat.title}
                                        </h4>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
                                            {mat.subject} • {mat.meta}
                                        </p>
                                    </div>

                                    <Link
                                        to="/learning-materials"
                                        style={{
                                            marginTop: '12px',
                                            color: '#2563eb',
                                            fontSize: '0.82rem',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}
                                    >
                                        {mat.action}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommended for You */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Recommended for You
                            </h2>
                            <Link to="/learning-materials" style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                View All <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '16px'
                        }}>
                            {mockDashboardData.recommended.map((rec) => (
                                <div
                                    key={rec.id}
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '12px',
                                        padding: '16px',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <div>
                                        <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>
                                            {rec.subject}
                                        </span>
                                        <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0f172a', margin: '4px 0 12px', lineHeight: '1.3' }}>
                                            {rec.title}
                                        </h4>
                                    </div>
                                    <Link
                                        to="/learning-materials"
                                        style={{
                                            color: '#2563eb',
                                            fontSize: '0.8rem',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}
                                    >
                                        {rec.action}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column (4 cols) */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Today's Plan */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Today's Plan
                            </h3>
                            <Link to="/assessments" style={{ color: '#2563eb', fontSize: '0.82rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                View All <ArrowRight size={13} />
                            </Link>
                        </div>

                        {/* Vertical Timeline */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            {mockDashboardData.todaysPlan.map((plan, idx) => (
                                <div key={plan.id} style={{ display: 'flex', gap: '14px', position: 'relative' }}>
                                    {/* Timeline Node */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{
                                            width: '18px',
                                            height: '18px',
                                            borderRadius: '50%',
                                            backgroundColor: plan.active ? '#2563eb' : '#e2e8f0',
                                            border: plan.active ? '3px solid #bfdbfe' : 'none',
                                            zIndex: 2,
                                            flexShrink: 0
                                        }} />
                                        {idx < mockDashboardData.todaysPlan.length - 1 && (
                                            <div style={{
                                                width: '2px',
                                                flexGrow: 1,
                                                backgroundColor: '#e2e8f0',
                                                margin: '4px 0'
                                            }} />
                                        )}
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a' }}>
                                                {plan.title}
                                            </span>
                                            <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: '500' }}>
                                                {plan.duration}
                                            </span>
                                        </div>
                                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                                            {plan.topic}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Your Progress */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Your Progress
                            </h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '500' }}>{selectedWeek}</span>
                                <Link to="/assessments" style={{ color: '#2563eb', fontSize: '0.82rem', fontWeight: '600', textDecoration: 'none' }}>
                                    Details →
                                </Link>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {mockDashboardData.subjectProgress.map((subj) => (
                                <div key={subj.subject}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '6px' }}>
                                        <span style={{ fontWeight: '600', color: '#334155' }}>{subj.subject}</span>
                                        <span style={{ fontWeight: '700', color: '#0f172a' }}>{subj.progress}%</span>
                                    </div>
                                    <div style={{ height: '7px', backgroundColor: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
                                        <div style={{ width: `${subj.progress}%`, height: '100%', backgroundColor: subj.color, borderRadius: '9999px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Accessibility Status */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Accessibility Status
                            </h3>
                            <Link to="/quality-accessibility" style={{ color: '#2563eb', fontSize: '0.82rem', fontWeight: '600', textDecoration: 'none' }}>
                                View Details →
                            </Link>
                        </div>

                        {/* Circular Progress Gauge Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '16px',
                            textAlign: 'center'
                        }}>
                            {mockDashboardData.accessibilityStatus.map((acc) => (
                                <div key={acc.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        border: `4px solid ${acc.color}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1rem',
                                        fontWeight: '800',
                                        color: '#0f172a',
                                        marginBottom: '8px'
                                    }}>
                                        {acc.value}%
                                    </div>
                                    <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: '600', lineHeight: '1.2' }}>
                                        {acc.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
