import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, PulseOrb, ProgressBar, NeoButton } from '../components/GlassComponents';
import { Edit2, PieChart, TrendingUp, Brain } from 'lucide-react';

const DashboardHome = () => {
    const { netWorth, forecast, assets, transactions, insuranceGaps, literacyState } = useFinancialData();

    // Mock Budget Data (could be moved to Context later)
    const budgetData = {
        limit: 5000,
        spent: transactions.reduce((sum, t) => sum + t.amount, 0),
    };
    const budgetPercent = Math.min((budgetData.spent / budgetData.limit) * 100, 100);

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>Overview</h1>
            <div style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Your financial command center.
            </div>

            {/* The 4 Main Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

                {/* 1. NOTEPAD (Quick Entry / Sandbox) */}
                <GlassCard className="pillar-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '4px solid var(--primary-brand)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Edit2 size={24} /> Notepad
                        </h2>
                        <Link to="/dashboard/notepad">
                            <NeoButton variant="secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Open Full</NeoButton>
                        </Link>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Quickly jot down expenses or simulate financial moves.
                    </p>
                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--border-subtle)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Type "Spent $15 on Lunch"...</span>
                    </div>
                    <div style={{ marginTop: 'auto' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Recent Log:</div>
                        {transactions.slice(-2).map(t => (
                            <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <span>{t.text}</span>
                                <span className="font-mono" style={{ color: 'var(--accent-red)' }}>-${t.amount}</span>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* 2. MY BUDGETS */}
                <GlassCard className="pillar-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '4px solid var(--accent-amber)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <PieChart size={24} /> My Budgets
                        </h2>
                        <Link to="/dashboard/budgets">
                            <NeoButton variant="secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Manage</NeoButton>
                        </Link>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Monthly spending vs. limits.
                    </p>
                    <div style={{ margin: '1rem 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Monthly Cap</span>
                            <span className="font-mono">
                                ${budgetData.spent} / ${budgetData.limit}
                            </span>
                        </div>
                        <ProgressBar value={budgetPercent} color={budgetPercent > 90 ? 'var(--accent-red)' : 'var(--accent-green)'} />
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '0.5rem', color: budgetPercent > 90 ? 'var(--accent-red)' : 'var(--accent-green)' }}>
                            {budgetPercent > 90 ? 'Critical' : 'Healthy'}
                        </div>
                    </div>
                </GlassCard>

                {/* 3. INVESTMENTS */}
                <GlassCard className="pillar-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '4px solid var(--accent-green)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <TrendingUp size={24} /> Investments
                        </h2>
                        <Link to="/dashboard/investments">
                            <NeoButton variant="secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Portfolio</NeoButton>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                        <div className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                            ${netWorth.toLocaleString()}
                        </div>
                        <div style={{ color: 'var(--accent-green)' }}>+12% YTD</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Top Assets:</div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {assets.slice(0, 3).map(asset => (
                                <span key={asset.id} style={{
                                    padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', fontSize: '0.85rem'
                                }}>
                                    {asset.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* 4. ADVISOR (AI) */}
                <GlassCard className="pillar-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '4px solid var(--accent-blue)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Brain size={24} /> Advisor
                        </h2>
                        <Link to="/dashboard/ai-insights">
                            <NeoButton variant="secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Ask AI</NeoButton>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'linear-gradient(90deg, rgba(92,139,198,0.1), transparent)', padding: '1rem', borderRadius: '12px' }}>
                        <PulseOrb state={forecast.trend === 'up' ? 'success' : 'alert'} />
                        <div style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            "{forecast.message}"
                        </div>
                    </div>

                    {/* Literacy / Quick Tip */}
                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            <span>Financial IQ: Level {literacyState.level}</span>
                            <span>{literacyState.xp} XP</span>
                        </div>
                        <div style={{ marginTop: '0.5rem' }}>
                            <ProgressBar value={literacyState.xp % 100} color="var(--accent-amber)" />
                        </div>
                    </div>
                </GlassCard>

            </div>
        </div>
    );
};

export default DashboardHome;
