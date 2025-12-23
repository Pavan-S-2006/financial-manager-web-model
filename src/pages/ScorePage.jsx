import React from 'react';

const ScorePage = () => (
    <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h1>Financial Health Score</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Your AI-calculated score is 82/100.</p>

        <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
            <h3>Expenditure Sandbox</h3>
            <p>Test if you can afford that new purchase.</p>
            <input type="number" placeholder="Enter amount..." style={{ padding: '12px', borderRadius: '8px', border: 'none', marginRight: '1rem' }} />
            <button className="btn-primary">Simulate</button>
        </div>
    </div>
);
export default ScorePage;
