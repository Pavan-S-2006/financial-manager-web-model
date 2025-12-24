import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { GlassCard, NeoButton } from '../components/GlassComponents';

const ProfilesPage = () => {
    const { logout } = useContext(AuthContext);
    const [settings, setSettings] = useState({
        notifications: true,
        twoFactor: true,
        dataSharing: false,
        darkMode: true
    });

    const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>⚙️ Profiles & Controls</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                {/* User Profile */}
                <GlassCard style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{
                        width: '100px', height: '100px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--primary-brand), var(--accent-blue))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold'
                    }}>
                        PA
                    </div>
                    <div>
                        <h2>Pavan A.</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Premium Member • Financial Guru</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <NeoButton variant="secondary" style={{ padding: '8px 16px' }}>Edit Profile</NeoButton>
                            <NeoButton onClick={logout} variant="secondary" style={{ padding: '8px 16px', borderColor: 'var(--accent-red)', color: 'var(--accent-red)' }}>Sign Out</NeoButton>
                        </div>
                    </div>
                </GlassCard>

                {/* Settings Controls */}
                <GlassCard>
                    <h3>Application Settings</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                        {[
                            { key: 'notifications', label: 'Smart Notifications', desc: 'Receive AI nudges and alerts.' },
                            { key: 'twoFactor', label: '2FA Security', desc: 'Require code for withdrawals/changes.' },
                            { key: 'dataSharing', label: 'Anonymized Data Sharing', desc: 'Help improve our AI models.' },
                        ].map(item => (
                            <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: '600' }}>{item.label}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
                                </div>
                                <div
                                    onClick={() => toggle(item.key)}
                                    style={{
                                        width: '50px', height: '26px',
                                        background: settings[item.key] ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)',
                                        borderRadius: '13px', position: 'relative', cursor: 'pointer', transition: 'all 0.3s'
                                    }}
                                >
                                    <div style={{
                                        width: '20px', height: '20px', background: '#fff', borderRadius: '50%',
                                        position: 'absolute', top: '3px',
                                        left: settings[item.key] ? '27px' : '3px',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Integration Status */}
                <GlassCard>
                    <h3>Connected Accounts</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Manage banking and investment API links.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '30px', height: '30px', background: '#fff', borderRadius: '4px' }}></div>
                                <span>Chase Bank</span>
                            </div>
                            <span style={{ color: 'var(--accent-green)', fontSize: '0.9rem' }}>• Live</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '30px', height: '30px', background: '#333', borderRadius: '4px' }}></div>
                                <span>Robinhood</span>
                            </div>
                            <span style={{ color: 'var(--accent-green)', fontSize: '0.9rem' }}>• Live</span>
                        </div>
                        <NeoButton variant="secondary" style={{ borderStyle: 'dashed' }}>+ Link New Account</NeoButton>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default ProfilesPage;
