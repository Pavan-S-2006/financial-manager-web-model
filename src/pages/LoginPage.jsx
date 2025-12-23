import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

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
            background: 'radial-gradient(circle at center, #1e1e2e 0%, #050507 100%)'
        }}>
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h2>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                        <input
                            type="email"
                            placeholder="user@example.com"
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid #333',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid #333',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                        />
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
