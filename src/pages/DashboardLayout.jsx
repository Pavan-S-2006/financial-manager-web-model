import React, { useState, useEffect, useContext } from 'react';
import {
    LayoutDashboard, X, Settings, LogOut,
    Brain, FlaskConical, Shield, Landmark, Siren,
    Users, Bell, BookOpen, Menu
} from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const DashboardLayout = () => {
    const { user, logout } = useContext(AuthContext);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Default Bg
    const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2600'); // Abstract Data

    // Dynamic Background Logic
    useEffect(() => {
        const path = location.pathname;
        if (path === '/dashboard') {
            setBgImage('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2600'); // Neo Fintech
        } else if (path.includes('ai-insights')) {
            setBgImage('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2600'); // AI Brain
        } else if (path.includes('sandbox')) {
            setBgImage('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2600'); // Blueprint/Labs
        } else if (path.includes('insurance')) {
            setBgImage('https://images.unsplash.com/photo-1516738901171-8f4fc48aef02?auto=format&fit=crop&q=80&w=2600'); // Shield/Safe
        } else if (path.includes('assets')) {
            setBgImage('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2600'); // Buildings
        } else if (path.includes('emergency')) {
            setBgImage('https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&q=80&w=2600'); // Alert/Red
        } else if (path.includes('profiles')) {
            setBgImage('https://images.unsplash.com/photo-1554672723-b208dc85134f?auto=format&fit=crop&q=80&w=2600'); // Desk/Organization
        } else if (path.includes('literacy')) {
            setBgImage('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2600'); // Books
        } else {
            setBgImage('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=2600');
        }
    }, [location.pathname]);

    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Brain size={20} />, label: 'AI Financial Insights', path: '/dashboard/ai-insights' },
        { icon: <FlaskConical size={20} />, label: 'Expenditure Sandbox', path: '/dashboard/sandbox' },
        { icon: <Shield size={20} />, label: 'Insurance Suggester', path: '/dashboard/insurance' },
        { icon: <Landmark size={20} />, label: 'Assets & Property', path: '/dashboard/assets' },
        { icon: <Siren size={20} />, label: 'Nominee Emergency', path: '/dashboard/emergency' },
        { icon: <Users size={20} />, label: 'Profiles & Controls', path: '/dashboard/profiles' },
        { icon: <BookOpen size={20} />, label: 'Financial Literacy', path: '/dashboard/literacy' },
    ];

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out'
        }}>
            {/* Dark Overlay for readability - Critical for Glass effect */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(5, 5, 8, 0.85)', // Strong overlay to mute the background usage
                zIndex: 0
            }}></div>

            {/* ☰ Sidebar - Glass Panel */}
            <aside
                className="glass-panel"
                style={{
                    position: 'fixed',
                    left: isSidebarOpen ? '0' : '-300px',
                    top: 0,
                    width: '300px',
                    height: '100vh',
                    zIndex: 1000,
                    borderRadius: '0',
                    borderTop: 'none', borderBottom: 'none', borderLeft: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.5rem',
                    borderRight: '1px solid var(--border-subtle)',
                    transition: 'left 0.3s ease',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
                        QWERTY<span style={{ color: 'var(--primary-brand)' }}>.</span>
                    </h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="btn-icon"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <X size={20} />
                    </button>
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
                    <Link to="/" onClick={logout} style={{ display: 'flex', gap: '12px', padding: '12px', color: 'var(--accent-red)', textDecoration: 'none', alignItems: 'center', fontSize: '0.9rem' }}>
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
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1
            }}>
                <header style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 2rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    background: 'rgba(18, 18, 20, 0.4)', // Very sheer glass for header
                    backdropFilter: 'blur(10px)',
                    zIndex: 10
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            className="btn-icon"
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            style={{ color: 'var(--text-primary)' }}
                        >
                            <Menu size={24} />
                        </button>
                        <div>
                            <h2 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--text-primary)' }}>
                                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard Overview'}
                            </h2>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Welcome back
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <button className="btn-icon">
                            <Bell size={20} />
                        </button>
                        <div className="desktop-only" style={{ textAlign: 'right', color: 'var(--text-primary)' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{user?.fullName || 'Guest User'}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Free Plan</div>
                        </div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-panel-hover)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontWeight: 700, color: 'var(--primary-brand)' }}>{user?.initials || 'GU'}</span>
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
