import React, { useState } from 'react';
import { GlassCard, NeoButton, ProgressBar } from '../components/GlassComponents';
import { Plus, DollarSign, AlertCircle } from 'lucide-react';

const BudgetPage = () => {
    // Mock Budget State
    const [budgets, setBudgets] = useState([
        { id: 1, category: 'Food & Dining', limit: 800, spent: 450, color: 'var(--accent-orange)' },
        { id: 2, category: 'Transportation', limit: 300, spent: 280, color: 'var(--accent-blue)' },
        { id: 3, category: 'Entertainment', limit: 200, spent: 50, color: 'var(--accent-purple)' },
    ]);

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>My Budgets</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Plan your monthly spending limits.</p>
                </div>
                <NeoButton>
                    <Plus size={18} style={{ marginRight: '8px' }} /> New Budget
                </NeoButton>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {budgets.map(b => {
                    const pct = (b.spent / b.limit) * 100;
                    const isCritical = pct > 90;

                    return (
                        <GlassCard key={b.id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>{b.category}</h3>
                                {isCritical && <AlertCircle color="var(--accent-red)" size={20} />}
                            </div>

                            <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                                ${b.spent} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/ ${b.limit}</span>
                            </div>

                            <ProgressBar value={pct} color={isCritical ? 'var(--accent-red)' : 'var(--primary-brand)'} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                <span>{pct.toFixed(0)}% Used</span>
                                <span>${b.limit - b.spent} Left</span>
                            </div>

                            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                <NeoButton variant="secondary" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>Edit</NeoButton>
                                <NeoButton variant="secondary" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>View Logs</NeoButton>
                            </div>
                        </GlassCard>
                    );
                })}

                {/* Add New Placeholder */}
                <GlassCard style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', cursor: 'pointer', opacity: 0.6 }} hoverEffect={true}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Plus size={24} />
                    </div>
                    <h3>Create Budget</h3>
                </GlassCard>
            </div>
        </div>
    );
};

export default BudgetPage;
