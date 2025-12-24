import React, { useState } from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, NeoButton } from '../components/GlassComponents';

const SandboxPage = () => {
    const { addTransaction } = useFinancialData();
    const [input, setInput] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [simulationMode, setSimulationMode] = useState(false);

    const handleProcess = () => {
        setIsThinking(true);
        // Simulate NLP processing lag
        setTimeout(() => {
            if (input.toLowerCase().includes('spent')) {
                // Mock parsing
                addTransaction(input, 50, 'Uncategorized'); // Mocked extraction
            }
            setIsThinking(false);
            setInput('');
        }, 1500);
    };

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>Expenditure Sandbox</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Draft, simulate, and commit expenses via natural language.</p>
                </div>

                {/* Simulation Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.3)', padding: '8px 16px', borderRadius: '20px' }}>
                    <span style={{ color: !simulationMode ? 'var(--text-primary)' : 'var(--text-muted)' }}>Real Mode</span>
                    <div
                        onClick={() => setSimulationMode(!simulationMode)}
                        style={{
                            width: '40px', height: '20px', background: simulationMode ? 'var(--accent-amber)' : 'var(--primary-brand)',
                            borderRadius: '10px', position: 'relative', cursor: 'pointer', transition: 'all 0.3s'
                        }}
                    >
                        <div style={{
                            width: '16px', height: '16px', background: '#fff', borderRadius: '50%',
                            position: 'absolute', top: '2px', left: simulationMode ? '22px' : '2px', transition: 'all 0.3s'
                        }} />
                    </div>
                    <span style={{ color: simulationMode ? 'var(--accent-amber)' : 'var(--text-muted)' }}>Simulation</span>
                </div>
            </div>

            <GlassCard style={{ minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type freely... e.g., 'Spent $45 at Starbucks today' or 'Planning to buy a MacBook next month'"
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-mono)',
                        resize: 'none',
                        outline: 'none'
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    {/* Voice Visulizer Mock */}
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', height: '24px' }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} style={{
                                width: '4px',
                                height: isThinking ? `${Math.random() * 20 + 5}px` : '4px',
                                background: 'var(--accent-blue)',
                                borderRadius: '2px',
                                animation: isThinking ? 'wave 0.5s infinite ease-in-out' : 'none'
                            }} />
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <NeoButton variant="secondary" onClick={() => setInput('')}>Clear</NeoButton>
                        <NeoButton onClick={handleProcess}>
                            {isThinking ? 'Processing...' : simulationMode ? 'Simulate Impact' : 'Commit Entry'}
                        </NeoButton>
                    </div>
                </div>
            </GlassCard>

            <div style={{ marginTop: '2rem' }}>
                <h3>Recent Drafts / Logs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <GlassCard style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            background: 'rgba(92, 139, 198, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>☕</div>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Starbucks Coffee</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Parsed from: "Coffee this morning 45"</div>
                        </div>
                        <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>$45.00</div>
                    </GlassCard>
                </div>
            </div>

            <style>{`
                @keyframes wave {
                    0%, 100% { height: 4px; }
                    50% { height: 20px; }
                }
            `}</style>
        </div>
    );
};

export default SandboxPage;
