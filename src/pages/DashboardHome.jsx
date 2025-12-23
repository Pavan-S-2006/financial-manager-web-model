import React from 'react';
import { LayoutDashboard, Wallet, LineChart, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            animation: 'fadeIn 0.5s ease-out'
        }}>
            {/* Block 1: Notepad */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ background: 'var(--accent-blue-glow)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>
                        <Wallet size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Track Spending</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Log all your daily expenses & EMIs instantly.</p>
                </div>
                <Link to="/dashboard/notepad" className="btn-primary" style={{ marginTop: '2rem', width: '100%', textAlign: 'center', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    Open Notepad <ArrowRight size={18} />
                </Link>
            </div>

            {/* Block 2: Budgets */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ background: 'var(--accent-red-glow)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-red)' }}>
                        <LayoutDashboard size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Plan Budgets</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Allocate monthly funds & track limits.</p>
                </div>
                <Link to="/dashboard/budgets" className="btn-secondary" style={{ marginTop: '2rem', width: '100%', textAlign: 'center', textDecoration: 'none' }}>
                    View Budgets
                </Link>
            </div>

            {/* Block 3: Investments */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ background: 'var(--accent-green-glow)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-green)' }}>
                        <LineChart size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Grow Money</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Investment sandbox & portfolio analysis.</p>
                </div>
                <Link to="/dashboard/invest" className="btn-secondary" style={{ marginTop: '2rem', width: '100%', textAlign: 'center', textDecoration: 'none' }}>
                    Go to Investments
                </Link>
            </div>

            {/* Block 4: Health Score */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--accent-amber-glow)' }}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ background: 'var(--accent-amber-glow)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-amber)' }}>
                            <Activity size={24} />
                        </div>
                        <span className="font-mono" style={{ background: 'rgba(104, 166, 125, 0.2)', color: 'var(--accent-green)', padding: '4px 8px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600' }}>+2.4%</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Financial Health</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1', color: 'var(--text-primary)' }}>82</span>
                        <span style={{ color: 'var(--accent-green)', fontWeight: '500', fontSize: '0.9rem' }}>Excellent</span>
                    </div>
                </div>
                <Link to="/dashboard/score" className="btn-primary" style={{ marginTop: '2rem', width: '100%', background: 'var(--accent-amber)', color: '#121214', textAlign: 'center', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    Check Analysis <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
};

export default DashboardHome;
