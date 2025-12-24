import React, { useMemo } from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, PulseOrb, StatCard } from '../components/GlassComponents';

const AiInsightsPage = () => {
    const { netWorth, forecast } = useFinancialData();

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <PulseOrb state={forecast.trend === 'up' ? 'success' : 'alert'} />
                <div>
                    <h1>AI Financial Insights</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Real-time analysis of your financial health.</p>
                </div>
            </div>

            <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {/* 1. Net Worth Pulse */}
                <GlassCard>
                    <h3>Current Net Worth</h3>
                    <div className="font-mono" style={{ fontSize: '2.5rem', margin: '1rem 0', color: 'var(--primary-brand)' }}>
                        ${netWorth.toLocaleString()}
                    </div>
                </GlassCard>

                {/* 2. Forecast Engine */}
                <GlassCard>
                    <h3>6-Month Forecast</h3>
                    <div className="font-mono" style={{ fontSize: '2.5rem', margin: '1rem 0', color: forecast.trend === 'up' ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                        ${forecast.value.toLocaleString()}
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>{forecast.message}</p>
                </GlassCard>

                {/* 3. Actionable Nudges */}
                <GlassCard style={{ gridColumn: '1 / -1' }}>
                    <h3>💡 Smart Suggestion</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
                        <div style={{ fontSize: '2rem' }}>🥗</div>
                        <div>
                            <p style={{ margin: 0 }}><strong>Spending Anomaly Detected:</strong> You've spent 20% more on Food this month compared to average.</p>
                            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Try cooking at home efficiently using our "Meal Planner" in the Sandbox.</p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default AiInsightsPage;
