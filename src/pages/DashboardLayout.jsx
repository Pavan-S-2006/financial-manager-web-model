import React, { useState } from 'react';
import {
    LayoutDashboard, X, Settings, LogOut,
    Brain, FlaskConical, Shield, Landmark, Siren,
    Users, Bell, BookOpen
} from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Brain size={20} />, label: 'AI Financial Insights', path: '/dashboard/ai-insights' },
        { icon: <FlaskConical size={20} />, label: 'Expenditure Sandbox', path: '/dashboard/sandbox' },
        { icon: <Shield size={20} />, label: 'Insurance Suggester', path: '/dashboard/insurance' },
        { icon: <Landmark size={20} />, label: 'Assets & Property', path: '/dashboard/assets' },
        { icon: <Siren size={20} />, label: 'Nominee Emergency', path: '/dashboard/emergency' },
        { icon: <Users size={20} />, label: 'Profiles & Controls', path: '/dashboard/profiles' },
        { icon: <Bell size={20} />, label: 'Smart Notifications', path: '/dashboard/notifications' },
        { icon: <BookOpen size={20} />, label: 'Financial Literacy', path: '/dashboard/literacy' },
    ];

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            background: 'var(--bg-app)', // Standard app background
        }}>
            {/* ☰ Sidebar - Neo-Shaded Panel */}
            <aside
                className="glass-panel"
                style={{
                    position: isSidebarOpen ? 'absolute' : 'relative',
                    width: '300px',
                    height: '100vh',
                    zIndex: 20,
                    borderRadius: '0', // Full height borders usually look better flat
                    borderTop: 'none', borderBottom: 'none', borderLeft: 'none', // Only right border
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.5rem',
                    background: 'var(--bg-panel)', // Solid dark panel
                    borderRight: '1px solid var(--border-subtle)',
                    boxShadow: '4px 0 24px rgba(0,0,0,0.2)'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
                        QWERTY<span style={{ color: 'var(--primary-brand)' }}>.</span>
                    </h2>
                    {/* Mobile Close Button */}
                    <div className="md:hidden" style={{ display: 'none' }}>
                        <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'white' }}><X /></button>
                    </div>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, paddingBottom: '1rem', overflowY: 'auto' }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    display: 'flex',
                                    gap: '12px',
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    background: isActive ? 'var(--bg-panel-hover)' : 'transparent',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    fontWeight: isActive ? '500' : '400',
                                    transition: 'all 0.2s',
                                    fontSize: '0.9rem',
                                    boxShadow: isActive ? 'var(--shadow-inset)' : 'none',
                                    borderLeft: isActive ? '3px solid var(--primary-brand)' : '3px solid transparent'
                                }}
                            >
                                <span style={{ color: isActive ? 'var(--primary-brand)' : 'currentColor', opacity: isActive ? 1 : 0.7 }}>
                                    {item.icon}
                                </span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                    <Link to="/dashboard/settings" style={{ display: 'flex', gap: '12px', padding: '12px', color: 'var(--text-secondary)', textDecoration: 'none', alignItems: 'center', fontSize: '0.9rem' }}>
                        <Settings size={20} /> Settings
                    </Link>
                    <Link to="/" style={{ display: 'flex', gap: '12px', padding: '12px', color: 'var(--accent-red)', textDecoration: 'none', alignItems: 'center', fontSize: '0.9rem' }}>
                        <LogOut size={20} /> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                overflow: 'hidden'
            }}>
                <header style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 2rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    background: 'var(--bg-app)', // Blend with body
                    zIndex: 10
                }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--text-primary)' }}>
                            {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard Overview'}
                        </h2>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Welcome back, Pavan
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <button className="btn-icon">
                            <Bell size={20} />
                        </button>
                        <div className="desktop-only" style={{ textAlign: 'right', color: 'var(--text-primary)' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Pavan Kumar</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Premium User</div>
                        </div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-panel-hover)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* User Avatar Placeholder */}
                            <span style={{ fontWeight: 700, color: 'var(--primary-brand)' }}>PK</span>
                        </div>
                    </div>
                </header>

                <div style={{
                    flex: 1,
                    padding: '2rem',
                    overflowY: 'auto'
                }}>
                    <Outlet />
                </div>

            </main>
        </div>
    );
};

export default DashboardLayout;
