import React, { useState } from 'react';
import { LayoutDashboard, Menu, Wallet, LineChart, Activity, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-core)' }}>
            {/* ☰ Side Drawer Shell (Mobile/Desktop Toggle) */}
            <aside
                className="glass-panel"
                style={{
                    position: 'fixed',
                    left: 0, top: 0, bottom: 0,
                    width: '280px',
                    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s var(--ease-spring)',
                    zIndex: 100,
                    padding: '2rem'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ margin: 0 }}>QWERTY</h2>
                    <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <X />
                    </button>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link to="/dashboard" className="text-secondary" style={{ display: 'flex', gap: '12px', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                        <LayoutDashboard size={20} /> Dashboard
                    </Link>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }}></div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tools</span>
                    <Link to="#" style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none' }}><Activity size={20} /> Financial Health</Link>
                    <Link to="#" style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none' }}><Wallet size={20} /> Budgets</Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main style={{ flex: 1, padding: '2rem', transition: 'margin-left 0.3s' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <button onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <Menu size={28} />
                    </button>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600 }}>Hello, User</span>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #6366f1, #ec4899)' }}></div>
                    </div>
                </header>

                {/* 4-Block Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Block 1: Notepad */}
                    <div className="glass-card" style={{ padding: '2rem', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ background: 'rgba(99, 102, 241, 0.2)', width: 'fit-content', padding: '10px', borderRadius: '12px', marginBottom: '1rem' }}>
                                <Wallet color="#818cf8" />
                            </div>
                            <h3>Track Spending</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Log expenses & EMIs instantly.</p>
                        </div>
                        <button className="btn-primary" style={{ marginTop: 'auto', width: '100%' }}>Open Notepad</button>
                    </div>

                    {/* Block 2: Budgets */}
                    <div className="glass-card" style={{ padding: '2rem', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ background: 'rgba(236, 72, 153, 0.2)', width: 'fit-content', padding: '10px', borderRadius: '12px', marginBottom: '1rem' }}>
                                <LayoutDashboard color="#f472b6" />
                            </div>
                            <h3>Plan Budgets</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Allocate funds & track limits.</p>
                        </div>
                        <button className="btn-primary" style={{ marginTop: 'auto', width: '100%', background: 'rgba(255,255,255,0.1)' }}>View Budgets</button>
                    </div>

                    {/* Block 3: Investments */}
                    <div className="glass-card" style={{ padding: '2rem', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', width: 'fit-content', padding: '10px', borderRadius: '12px', marginBottom: '1rem' }}>
                                <LineChart color="#34d399" />
                            </div>
                            <h3>Grow Money</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Investment sandbox & insurance.</p>
                        </div>
                        <button className="btn-primary" style={{ marginTop: 'auto', width: '100%', background: 'rgba(255,255,255,0.1)' }}>Go to Investments</button>
                    </div>

                    {/* Block 4: Health Score */}
                    <div className="glass-card" style={{ padding: '2rem', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                        <div>
                            <div style={{ background: 'rgba(245, 158, 11, 0.2)', width: 'fit-content', padding: '10px', borderRadius: '12px', marginBottom: '1rem' }}>
                                <Activity color="#fbbf24" />
                            </div>
                            <h3>Financial Health</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>82</span>
                                <span style={{ color: '#10b981' }}>Excellent</span>
                            </div>
                        </div>
                        <button className="btn-primary" style={{ marginTop: 'auto', width: '100%', background: 'var(--gradient-warning)' }}>Check Analysis</button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;
