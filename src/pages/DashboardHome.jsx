import React from 'react';
import { LayoutDashboard, Wallet, LineChart, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            animation: 'fadeIn 0.5s ease-out'
        }}>
            {/* Block 1: Notepad */}
            <div className="glass-card" style={{ padding: '2rem', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ background: 'rgba(99, 102, 241, 0.2)', width: 'fit-content', padding: '12px', borderRadius: '14px', marginBottom: '1.5rem' }}>
                        <Wallet color="#818cf8" size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Track Spending</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Log expenses & EMIs instantly.</p>
                </div>
                <Link to="/dashboard/notepad" className="btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', textDecoration: 'none' }}>
                    Open Notepad
                </Link>
            </div>

            {/* Block 2: Budgets */}
            <div className="glass-card" style={{ padding: '2rem', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ background: 'rgba(236, 72, 153, 0.2)', width: 'fit-content', padding: '12px', borderRadius: '14px', marginBottom: '1.5rem' }}>
                        <LayoutDashboard color="#f472b6" size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Plan Budgets</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Allocate funds & track limits.</p>
                </div>
                <Link to="/dashboard/budgets" className="btn-primary" style={{ marginTop: 'auto', width: '100%', background: 'rgba(255,255,255,0.1)', textAlign: 'center', textDecoration: 'none' }}>
                    View Budgets
                </Link>
            </div>

            {/* Block 3: Investments */}
            <div className="glass-card" style={{ padding: '2rem', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', width: 'fit-content', padding: '12px', borderRadius: '14px', marginBottom: '1.5rem' }}>
                        <LineChart color="#34d399" size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Grow Money</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Investment sandbox & insurance.</p>
                </div>
                <Link to="/dashboard/invest" className="btn-primary" style={{ marginTop: 'auto', width: '100%', background: 'rgba(255,255,255,0.1)', textAlign: 'center', textDecoration: 'none' }}>
                    Go to Investments
                </Link>
            </div>

            {/* Block 4: Health Score */}
            <div className="glass-card" style={{ padding: '2rem', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ background: 'rgba(245, 158, 11, 0.2)', width: 'fit-content', padding: '12px', borderRadius: '14px', marginBottom: '1.5rem' }}>
                            <Activity color="#fbbf24" size={28} />
                        </div>
                        <span style={{ background: '#10b981', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>+2.4%</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Financial Health</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1' }}>82</span>
                        <span style={{ color: '#10b981', fontWeight: '500' }}>Excellent</span>
                    </div>
                </div>
                <Link to="/dashboard/score" className="btn-primary" style={{ marginTop: 'auto', width: '100%', background: 'var(--gradient-warning)', textAlign: 'center', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    Check Analysis <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
};

export default DashboardHome;
