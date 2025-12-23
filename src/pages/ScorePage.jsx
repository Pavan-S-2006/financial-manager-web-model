import React from 'react';
import { ArrowRight } from 'lucide-react';

const ScorePage = () => (
    <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
        <h1 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Financial Health Score</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Your AI-calculated score is <span className="font-mono" style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>82/100</span>.
        </p>

        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-panel-hover)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>Expenditure Sandbox</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Test if you can afford that new purchase.</p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <input
                    type="number"
                    placeholder="Enter amount..."
                    className="font-mono"
                    style={{ flex: 1 }}
                />
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Simulate <ArrowRight size={18} />
                </button>
            </div>
        </div>
    </div>
);
export default ScorePage;
