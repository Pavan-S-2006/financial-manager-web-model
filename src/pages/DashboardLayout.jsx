import React, { useState } from 'react';
import { LayoutDashboard, Menu, Wallet, LineChart, Activity, X, Settings, LogOut } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Wallet size={20} />, label: 'Budgets', path: '/dashboard/budgets' },
        { icon: <LineChart size={20} />, label: 'Investments', path: '/dashboard/invest' },
        { icon: <Activity size={20} />, label: 'Health Score', path: '/dashboard/score' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-core)' }}>
            {/* ☰ Side Shell */}
            <aside
                className="glass-panel"
                style={{
                    position: 'fixed',
                    left: 0, top: 0, bottom: 0,
                    width: '280px',
                    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s var(--ease-spring)',
                    zIndex: 100,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '-1px' }}>QWERTY<span style={{ color: 'var(--brand-primary)' }}>.</span></h2>
                    <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <X />
                    </button>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="text-secondary"
                            style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: location.pathname === item.path ? 'white' : 'var(--text-secondary)',
                                background: location.pathname === item.path ? 'rgba(255,255,255,0.08)' : 'transparent',
                                padding: '12px',
                                borderRadius: '12px',
                                fontWeight: location.pathname === item.path ? '600' : '400',
                                transition: 'all 0.2s'
                            }}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <Link to="#" style={{ display: 'flex', gap: '12px', padding: '12px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <Settings size={20} /> Settings
                    </Link>
                    <Link to="/" style={{ display: 'flex', gap: '12px', padding: '12px', color: '#ff5c5c', textDecoration: 'none' }}>
                        <LogOut size={20} /> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main style={{ flex: 1, padding: '2rem', paddingLeft: isSidebarOpen ? '2rem' : '2rem', marginLeft: isSidebarOpen ? '280px' : '0', transition: 'margin-left 0.3s var(--ease-spring)' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {!isSidebarOpen && (
                            <button onClick={() => setSidebarOpen(true)} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', borderRadius: '8px' }}>
                                <Menu size={24} />
                            </button>
                        )}
                        <h2 style={{ margin: 0, fontSize: '1.25rem', opacity: 0.8 }}>
                            {location.pathname === '/dashboard' && 'Overview'}
                            {location.pathname === '/dashboard/notepad' && 'Notepad'}
                            {location.pathname === '/dashboard/budgets' && 'Budget Planner'}
                            {location.pathname === '/dashboard/invest' && 'Investments'}
                            {location.pathname === '/dashboard/score' && 'Financial Health'}
                        </h2>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="desktop-only" style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: 600 }}>Pavan Kumar</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Premium User</div>
                        </div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #ec4899)', border: '2px solid rgba(255,255,255,0.2)' }}></div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <Outlet />

            </main>
        </div>
    );
};

export default DashboardLayout;
