import React from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, NeoButton } from '../components/GlassComponents';

const InsurancePage = () => {
    const { insuranceGaps, assets } = useFinancialData();

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1>🛡️ Insurance Suggester</h1>
                <p style={{ color: 'var(--text-secondary)' }}>AI-driven risk analysis based on your asset portfolio.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Left: Risk Analysis */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {insuranceGaps.length > 0 ? (
                        insuranceGaps.map((gap, index) => (
                            <GlassCard key={index} style={{ borderLeft: `4px solid ${gap.priority === 'High' ? 'var(--accent-red)' : 'var(--accent-amber)'}` }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <h3 style={{ margin: 0 }}>Missing: {gap.type}</h3>
                                        <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)' }}>{gap.reason}</p>
                                    </div>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        background: gap.priority === 'High' ? 'rgba(198, 92, 92, 0.2)' : 'rgba(212, 167, 106, 0.2)',
                                        color: gap.priority === 'High' ? 'var(--accent-red)' : 'var(--accent-amber)',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {gap.priority} Priority
                                    </span>
                                </div>
                                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                                    <NeoButton>Msg Agent</NeoButton>
                                    <NeoButton variant="secondary">Compare Policies</NeoButton>
                                </div>
                            </GlassCard>
                        ))
                    ) : (
                        <GlassCard>
                            <h3>✅ Fully Protected</h3>
                            <p>No immediate insurance gaps detected based on your current portfolio.</p>
                        </GlassCard>
                    )}

                    {/* Coverage Visualizer */}
                    <GlassCard>
                        <h3>Coverage Strength</h3>
                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Asset Value Protected</span>
                                <span>65%</span>
                            </div>
                            <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px' }}>
                                <div style={{ width: '65%', background: 'var(--accent-blue)', height: '100%', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Right: Quick Stats */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <GlassCard>
                        <h3>Total Assets</h3>
                        <div className="font-mono" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                            ${assets.reduce((sum, a) => sum + a.value, 0).toLocaleString()}
                        </div>
                    </GlassCard>
                    <GlassCard>
                        <h3>Est. Yearly Premium</h3>
                        <div className="font-mono" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}>
                            $1,200
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default InsurancePage;
