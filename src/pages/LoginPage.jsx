import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [isRegistering, setIsRegistering] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        contact: '',
        age: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.email || !formData.password) {
            alert("Please fill in required fields");
            return;
        }

        // Mock Login Logic
        // In a real app, you'd validate against backend here.
        // For now, we simulate a successful login/register by saving the form data.

        const userData = {
            fullName: formData.name || 'User', // Fallback for login mode where name isn't asked
            username: formData.username || formData.email.split('@')[0],
            email: formData.email,
            contact: formData.contact || '+00 00000 00000',
            bio: 'Welcome to your financial dashboard.',
            avatar: null
        };

        // If logging in (not registering), we might not have name. 
        // For demo purposes, if name is empty, we'll try to use email part or default.
        if (!isRegistering && !formData.name) {
            // In real app, backend returns profile. Here we just set a default or persist if local storage had it (but context handles that).
            // Since we are mocking login with JUST email/pass, let's assume a default name if it's a fresh "login" without prior register in this session.
            // Ideally we'd fetch user from DB.
            // User requested "feeding into web", so presumably they want what they type to show up.
            // If they type just email/pass, we can't guess name. 
            // Let's force "Guest" if it's strictly login, BUT 
            // actually, the user said "logged in with req initial info".
            // Let's assume they might use "Create Account" or we just map Email to Name for Login mode.
            userData.fullName = formData.email.split('@')[0];
        }

        login(userData);
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
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="johnd"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Contact</label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        placeholder="+1 234..."
                                        value={formData.contact}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder="25"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="user@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
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
                            {isRegistering ? 'Login' : 'Create Account'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
