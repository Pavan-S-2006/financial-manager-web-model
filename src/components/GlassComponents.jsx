import React from 'react';

// --- 1. Base Glass Panel/Card ---
export const GlassCard = ({ children, className = '', hoverEffect = true, style = {} }) => {
    return (
        <div
            className={`glass-card ${className}`}
            style={{
                ...style,
                // Optional override if needed, but CSS class handles most
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            }}
        >
            {children}
        </div>
    );
};

// --- 2. Neo Button (Glowing) ---
export const NeoButton = ({ children, variant = 'primary', onClick, style = {} }) => {
    const baseStyle = {
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        borderRadius: '12px',
        padding: '12px 24px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...style
    };

    const variants = {
        primary: 'btn-primary', // Uses index.css class
        secondary: 'btn-secondary',
        danger: 'glass-panel', // Fallback or custom
    };

    return (
        <button
            className={variants[variant] || 'btn-primary'}
            onClick={onClick}
            style={variant === 'danger' ? { ...baseStyle, background: 'rgba(239, 68, 68, 0.2)', color: '#ff8888', border: '1px solid rgba(239, 68, 68, 0.3)' } : baseStyle}
        >
            {children}
        </button>
    );
};

// --- 3. Stat/KPI Card ---
export const StatCard = ({ title, value, trend, icon }) => (
    <GlassCard className="flex flex-col gap-2">
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
            {title}
            {icon && <span>{icon}</span>}
        </div>
        <div className="font-mono" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            {value}
        </div>
        {trend && (
            <div style={{ fontSize: '0.8rem', color: trend === 'up' ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                {trend === 'up' ? '↗' : '↘'} {trend === 'up' ? 'Trending Up' : 'Trending Down'}
            </div>
        )}
    </GlassCard>
);

// --- 4. Pulse Orb (AI Visualizer) ---
export const PulseOrb = ({ state = 'neutral' }) => {
    const colors = {
        neutral: 'var(--accent-blue)',
        processing: 'var(--accent-amber)',
        alert: 'var(--accent-red)',
        success: 'var(--accent-green)',
    };

    const color = colors[state] || colors.neutral;

    return (
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
            boxShadow: `0 0 40px ${color}`,
            animation: 'pulse 3s infinite ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                width: '30px',
                height: '30px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                filter: 'blur(5px)'
            }} />
            <style>
                {`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 60px ${color}; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
                `}
            </style>
        </div>
    );
};

// --- 5. Progress Bar ---
export const ProgressBar = ({ value, max = 100, color = 'var(--primary-brand)' }) => (
    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{
            width: `${(value / max) * 100}%`,
            height: '100%',
            background: color,
            transition: 'width 0.5s ease',
            boxShadow: `0 0 10px ${color}`
        }} />
    </div>
);
