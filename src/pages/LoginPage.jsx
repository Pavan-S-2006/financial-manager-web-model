import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock Auth
        navigate('/dashboard');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'var(--bg-app)',
            padding: '2rem'
        }}>
            <div className="glass-panel" style={{
                position: 'relative',
                padding: '3rem',
                width: '100%',
                maxWidth: '450px',
                background: 'var(--bg-panel)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-subtle)',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2.25rem', marginBottom: '0.25rem', color: 'var(--text-primary)', letterSpacing: '-0.05em' }}>
                        QWERTY<span style={{ color: 'var(--primary-brand)' }}>.</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Financial Management Suite</p>
                </div>

                <h2 style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {isRegistering ? 'Create Account' : 'Welcome Back'}
                </h2>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                    {isRegistering && (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Username</label>
                                    <input type="text" placeholder="johnd" />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Contact</label>
                                    <input type="tel" placeholder="+1 234..." />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Age</label>
                                    <input type="number" placeholder="25" />
                                </div>
                            </div>
                        </>
                    )}

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Email Address</label>
                        <input type="email" placeholder="user@example.com" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '14px', fontSize: '1rem' }}>
                        {isRegistering ? 'Sign Up' : 'Sign In'}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {isRegistering ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(!isRegistering)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--primary-brand)',
                                cursor: 'pointer',
                                marginLeft: '5px',
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                padding: 0,
                                textDecoration: 'underline'
                            }}>
                            {isRegistering ? 'Login' : 'Back to Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
