import React from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, ProgressBar, NeoButton } from '../components/GlassComponents';

const LiteracyPage = () => {
    const { literacyState } = useFinancialData();

    // Mock Skill Tree Nodes
    const skills = [
        { id: 'basics', label: 'Budget Basics', status: 'unlocked', pos: { x: 50, y: 10 } },
        { id: 'savings', label: 'Smart Savings', status: 'unlocked', pos: { x: 30, y: 40 } },
        { id: 'invest', label: 'Investing 101', status: 'locked', pos: { x: 70, y: 40 } },
        { id: 'taxes', label: 'Tax Haven', status: 'locked', pos: { x: 50, y: 70 } },
    ];

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>🎓 Financial Literacy</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Gamified learning to level up your financial IQ.</p>
                </div>
                <div style={{ width: '200px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-amber)', fontWeight: 'bold' }}>Level {literacyState.level}</span>
                        <span>{literacyState.xp} XP</span>
                    </div>
                    <ProgressBar value={literacyState.xp % 100} max={100} color="var(--accent-amber)" />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Tree Canvas (Visual Only for now) */}
                <GlassCard style={{ minHeight: '400px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Connecting Lines (Mocked via SVG) */}
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <line x1="50%" y1="18%" x2="35%" y2="45%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                        <line x1="50%" y1="18%" x2="65%" y2="45%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                        <line x1="35%" y1="55%" x2="50%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="65%" y1="55%" x2="50%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>

                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        {skills.map(skill => (
                            <div key={skill.id} style={{
                                position: 'absolute',
                                left: `${skill.pos.x}%`,
                                top: `${skill.pos.y}%`,
                                transform: 'translate(-50%, -50%)',
                                width: '80px', height: '80px',
                                background: skill.status === 'unlocked' ? 'var(--bg-panel)' : 'rgba(0,0,0,0.5)',
                                border: skill.status === 'unlocked' ? '2px solid var(--accent-amber)' : '2px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                                fontSize: '0.8rem', fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: skill.status === 'unlocked' ? '0 0 20px var(--accent-amber-glow)' : 'none'
                            }}>
                                {skill.label}
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Quizzes / Tasks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <GlassCard>
                        <h3>Daily Quest</h3>
                        <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Read "Compound Interest 101" to earn 50 XP.</p>
                        <NeoButton style={{ width: '100%' }}>Start Learning</NeoButton>
                    </GlassCard>

                    <GlassCard>
                        <h3>Recommended For You</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                📖 Asset Diversification
                            </div>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                📖 Inflation Hedge
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default LiteracyPage;
