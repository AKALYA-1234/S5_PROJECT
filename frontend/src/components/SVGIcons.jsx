import React from 'react'

/**
 * High-fidelity SVG illustrations matching the LearnBridge AI visual design
 */

export const StudentBannerIllustration = ({ title = "Breaking Barriers Through Inclusive Education" }) => (
    <div style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)',
        borderRadius: '16px',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
        border: '1px solid #bfdbfe',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    }}>
        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            {/* Background circle */}
            <circle cx="50" cy="50" r="46" fill="#93c5fd" opacity="0.3" />
            {/* Body / Blue Hoodie */}
            <path d="M22 88C22 72 32 64 50 64C68 64 78 72 78 88" fill="#2563eb" />
            <path d="M42 64L48 78L52 78L58 64" fill="#1d4ed8" />
            {/* Head & Face */}
            <circle cx="50" cy="42" r="16" fill="#fed7aa" />
            {/* Hair */}
            <path d="M34 40C34 26 40 22 50 22C60 22 66 26 66 40C66 43 64 45 64 45C62 36 58 32 50 32C42 32 38 36 36 45C36 45 34 43 34 40Z" fill="#1e293b" />
            {/* Headphones */}
            <path d="M32 40C32 28 40 22 50 22C60 22 68 28 68 40" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
            <rect x="30" y="36" width="6" height="12" rx="3" fill="#0284c7" />
            <rect x="64" y="36" width="6" height="12" rx="3" fill="#0284c7" />
            {/* Face features */}
            <circle cx="45" cy="42" r="1.5" fill="#1e293b" />
            <circle cx="55" cy="42" r="1.5" fill="#1e293b" />
            <path d="M47 48C48 50 52 50 53 48" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
            {/* Laptop */}
            <path d="M28 84L72 84L66 74L34 74Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <rect x="36" y="70" width="28" height="6" rx="1" fill="#cbd5e1" />
        </svg>
        <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1e3a8a', lineHeight: '1.3' }}>
            {title}
        </div>
    </div>
)

export const ISLSignerIllustration = ({ duration = "0:28", isLarge = false, title = "Photosynthesis" }) => (
    <div style={{
        position: 'relative',
        width: '100%',
        height: isLarge ? '240px' : '140px',
        background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
        <svg width={isLarge ? "200" : "120"} height={isLarge ? "200" : "120"} viewBox="0 0 160 160" fill="none">
            {/* Studio backdrop lighting */}
            <radialGradient id="studioGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#475569" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
            </radialGradient>
            <circle cx="80" cy="70" r="70" fill="url(#studioGlow)" />
            {/* Black T-Shirt Torso */}
            <path d="M45 150C45 125 55 110 80 110C105 110 115 125 115 150" fill="#0f172a" />
            {/* Neck */}
            <path d="M72 100H88V115H72Z" fill="#d97706" opacity="0.6" />
            <path d="M72 98H88V112H72Z" fill="#fed7aa" />
            {/* Head */}
            <ellipse cx="80" cy="78" rx="20" ry="24" fill="#fed7aa" />
            {/* Black Hair */}
            <path d="M58 74C58 50 66 44 80 44C94 44 102 50 102 74C102 88 100 96 100 96C95 78 90 70 80 70C70 70 65 78 60 96C60 96 58 88 58 74Z" fill="#090d16" />
            {/* Eyes & Smile */}
            <circle cx="73" cy="78" r="2" fill="#1e293b" />
            <circle cx="87" cy="78" r="2" fill="#1e293b" />
            <path d="M75 88C77 91 83 91 85 88" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
            {/* Signing Hands (Indian Sign Language Gestures) */}
            {/* Right Hand raised */}
            <path d="M98 125L108 92C108 92 114 88 116 94L108 125Z" fill="#fed7aa" />
            <circle cx="112" cy="88" r="6" fill="#fed7aa" />
            {/* Left Hand gesture */}
            <path d="M62 125L52 96C52 96 46 94 46 100L54 125Z" fill="#fed7aa" />
            <circle cx="48" cy="94" r="6" fill="#fed7aa" />
        </svg>

        {/* Video Play Overlay Button */}
        <div style={{
            position: 'absolute',
            width: isLarge ? '48px' : '36px',
            height: isLarge ? '48px' : '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(4px)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
        }}>
            <div style={{
                width: 0,
                height: 0,
                borderTop: isLarge ? '8px solid transparent' : '6px solid transparent',
                borderBottom: isLarge ? '8px solid transparent' : '6px solid transparent',
                borderLeft: isLarge ? '14px solid #ffffff' : '10px solid #ffffff',
                marginLeft: '2px'
            }} />
        </div>

        {/* Duration Badge */}
        <div style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: '600',
            padding: '2px 6px',
            borderRadius: '4px',
        }}>
            {duration}
        </div>
    </div>
)

export const ChloroplastDiagram = ({ isInteractive = false }) => (
    <div style={{
        width: '100%',
        height: '100%',
        minHeight: '220px',
        backgroundColor: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    }}>
        <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a', marginBottom: '8px' }}>
            Photosynthesis in a Chloroplast
        </div>

        <svg width="340" height="180" viewBox="0 0 340 180" fill="none">
            {/* Sun / Light energy */}
            <circle cx="40" cy="40" r="16" fill="#facc15" stroke="#eab308" strokeWidth="2" />
            <path d="M40 14V20M40 60V66M14 40H20M60 40H66M22 22L26 26M54 54L58 58M22 58L26 54M54 26L58 22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <text x="32" y="74" fontSize="9" fontWeight="700" fill="#b45309">Light</text>
            <text x="28" y="84" fontSize="9" fontWeight="700" fill="#b45309">Energy</text>

            {/* Chloroplast Outer Oval */}
            <ellipse cx="170" cy="95" rx="100" ry="60" fill="#86efac" fillOpacity="0.3" stroke="#22c55e" strokeWidth="3" />
            <ellipse cx="170" cy="95" rx="93" ry="54" fill="#bbf7d0" fillOpacity="0.4" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Thylakoids / Granum Stacks */}
            {/* Stack 1 */}
            <ellipse cx="130" cy="75" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="130" cy="85" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="130" cy="95" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="130" cy="105" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="130" cy="115" rx="18" ry="6" fill="#15803d" />

            {/* Stack 2 */}
            <ellipse cx="170" cy="78" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="170" cy="88" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="170" cy="98" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="170" cy="108" rx="18" ry="6" fill="#15803d" />

            {/* Stack 3 */}
            <ellipse cx="210" cy="82" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="210" cy="92" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="210" cy="102" rx="18" ry="6" fill="#15803d" />
            <ellipse cx="210" cy="112" rx="18" ry="6" fill="#15803d" />

            {/* Lamellae connecting lines */}
            <path d="M148 95H152M188 98H192" stroke="#15803d" strokeWidth="3" />

            {/* Arrows and Labels */}
            {/* Water In */}
            <path d="M45 130L95 110" stroke="#0284c7" strokeWidth="2" markerEnd="url(#blueArrow)" />
            <text x="35" y="145" fontSize="10" fontWeight="700" fill="#0284c7">H₂O</text>
            <text x="30" y="156" fontSize="8" fill="#64748b">(Water)</text>

            {/* Oxygen Out */}
            <path d="M190 130L240 155" stroke="#ef4444" strokeWidth="2" />
            <text x="245" y="152" fontSize="10" fontWeight="700" fill="#dc2626">O₂</text>
            <text x="238" y="163" fontSize="8" fill="#64748b">(Oxygen)</text>

            {/* CO2 In */}
            <path d="M290 55L245 75" stroke="#dc2626" strokeWidth="2" />
            <text x="280" y="45" fontSize="10" fontWeight="700" fill="#b91c1c">CO₂</text>
            <text x="260" y="55" fontSize="8" fill="#64748b">(Carbon Dioxide)</text>

            {/* Glucose Out */}
            <path d="M240 100L290 105" stroke="#16a34a" strokeWidth="2" />
            <text x="275" y="98" fontSize="10" fontWeight="700" fill="#15803d">Glucose</text>
            <text x="282" y="108" fontSize="8" fill="#64748b">(Food)</text>

            {/* Pointer labels */}
            <text x="145" y="32" fontSize="9" fontWeight="600" fill="#0f172a">Chloroplast</text>
            <path d="M165 35L165 42" stroke="#64748b" strokeWidth="1" />

            <text x="140" y="165" fontSize="9" fontWeight="700" fill="#15803d">Chlorophyll</text>
            <text x="125" y="174" fontSize="8" fill="#64748b">(Absorbs light energy)</text>
            <path d="M165 155L165 125" stroke="#15803d" strokeWidth="1" />
        </svg>
    </div>
)

export const PlantPhotoBanner = ({ duration = "12:35", title = "Photosynthesis - Overview" }) => (
    <div style={{
        position: 'relative',
        width: '100%',
        height: '140px',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #15803d 0%, #166534 50%, #064e3b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(22, 101, 52, 0.15)'
    }}>
        <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="xMidYMid slice">
            {/* Sunlight glow rays */}
            <radialGradient id="sunGlow" cx="80%" cy="20%" r="60%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#facc15" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#15803d" stopOpacity="0" />
            </radialGradient>
            <rect width="300" height="140" fill="url(#sunGlow)" />

            {/* Plant leaves */}
            <path d="M80 140Q120 70 170 80Q140 120 120 140Z" fill="#4ade80" />
            <path d="M120 140Q160 50 230 60Q190 110 160 140Z" fill="#22c55e" />
            <path d="M160 140Q200 40 270 50Q240 100 200 140Z" fill="#16a34a" />
            <path d="M40 140Q80 90 130 95Q100 130 80 140Z" fill="#86efac" />
        </svg>

        {/* Video Play Overlay */}
        <div style={{
            position: 'absolute',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(3px)',
            border: '2px solid rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
        }}>
            <div style={{
                width: 0,
                height: 0,
                borderTop: '7px solid transparent',
                borderBottom: '7px solid transparent',
                borderLeft: '12px solid #ffffff',
                marginLeft: '2px'
            }} />
        </div>

        {/* Duration Badge */}
        <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '12px',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: '600',
            padding: '2px 8px',
            borderRadius: '4px'
        }}>
            {duration}
        </div>
    </div>
)
