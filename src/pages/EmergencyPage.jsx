import React, { useState } from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, NeoButton } from '../components/GlassComponents';

const EmergencyPage = () => {
    const { nominees, setNominees, triggerPanicMode } = useFinancialData();
    const [panicActive, setPanicActive] = useState(false);

    const handlePanic = () => {
        setPanicActive(true);
        triggerPanicMode();
        setTimeout(() => setPanicActive(false), 3000); // Reset after mock action
    };

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            {/* Panic Overlay */}
            {panicActive && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(198, 92, 92, 0.9)', zIndex: 9999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h1 style={{ fontSize: '4rem', color: '#fff' }}>SOS TRIGGERED</h1>
                    <p style={{ color: '#fff', fontSize: '1.5rem' }}>Notifying Nominees & Locking Assets...</p>
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>🚨 Emergency Panel</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Manage legacy planning and emergency protocols.</p>
                </div>
                <NeoButton
                    variant="danger"
                    onClick={handlePanic}
                    style={{
                        boxShadow: '0 0 20px rgba(198, 92, 92, 0.4)',
                        padding: '16px 32px',
                        fontSize: '1.2rem'
                    }}
                >
                    ⚠️ PANIC BUTTON
                </NeoButton>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {/* 1. Nominees */}
                <GlassCard>
                    <h3>Nominees & Access</h3>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {nominees.map(nominee => (
                            <div key={nominee.id} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px'
                            }}>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{nominee.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{nominee.relation} • {nominee.access} Access</div>
                                </div>
                                <NeoButton variant="secondary" style={{ padding: '4px 12px', fontSize: '0.8rem' }}>Edit</NeoButton>
                            </div>
                        ))}
                        <NeoButton variant="secondary" style={{ borderStyle: 'dashed' }}>+ Add Nominee</NeoButton>
                    </div>
                </GlassCard>

                {/* 2. Critical Documents */}
                <GlassCard>
                    <h3>Critical Vault</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Encrypted storage for Wills, Deeds, and Policy Docs.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                        <div style={{
                            height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: '2rem' }}>📄</span>
                            <span style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Living Will</span>
                        </div>
                        <div style={{
                            height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: '2rem' }}>🏥</span>
                            <span style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Health Proxy</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default EmergencyPage;
