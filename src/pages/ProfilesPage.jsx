import React, { useState, useContext, useEffect } from 'react';
import { User, Mail, Phone, Camera, Lock, Save, Crown, XCircle, CheckCircle } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const ProfilesPage = () => {
    // 1. Context
    const { user, updateUser } = useContext(AuthContext);

    // 2. Local State for form (initialized from Context)
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        contact: '',
        bio: '',
        avatar: null
    });

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || '',
                username: user.username || '',
                email: user.email || '',
                contact: user.contact || '',
                bio: user.bio || '',
                avatar: user.avatar || null
            });
        }
    }, [user]);

    const [isEditing, setIsEditing] = useState(false);
    const [showSecurityModal, setShowSecurityModal] = useState(false);
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // 3. Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const initiateSave = () => {
        // Validation Logic (Basic)
        if (!formData.fullName || !formData.email) {
            alert("Please fill in required fields (Name, Email).");
            return;
        }
        setShowSecurityModal(true);
    };

    const confirmSave = () => {
        setIsSaving(true);
        // Mock Auth Check
        setTimeout(() => {
            if (password === '1234') { // Mock Pwd
                // UPDATE CONTEXT
                updateUser(formData);

                setIsEditing(false);
                setShowSecurityModal(false);
                setPassword('');
                setAuthError('');
                setIsSaving(false);
            } else {
                setAuthError('Incorrect Password. Please try again.');
                setIsSaving(false);
            }
        }, 1000);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', animation: 'fadeIn 0.5s ease-out' }}>

            {/* Header / Banner */}
            <div className="glass-panel" style={{
                padding: '2rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            width: '80px', height: '80px',
                            borderRadius: '50%',
                            background: 'var(--bg-panel-hover)',
                            border: '2px solid var(--accent-blue)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem', fontWeight: 'bold'
                        }}>
                            {formData.avatar ? <img src={formData.avatar} alt="Profile" style={{ width: '100%', borderRadius: '50%' }} /> : (user?.initials || 'PK')}
                        </div>
                        {isEditing && (
                            <button className="btn-icon" style={{
                                position: 'absolute', bottom: -5, right: -5,
                                background: 'var(--primary-brand)', color: 'white'
                            }}>
                                <Camera size={16} />
                            </button>
                        )}
                    </div>
                    <div>
                        <h2 style={{ margin: 0 }}>{formData.fullName || 'Guest User'}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.25rem' }}>
                            <Crown size={16} color="var(--accent-amber)" />
                            <span style={{ color: 'var(--accent-amber)', fontWeight: 600, fontSize: '0.9rem' }}>Premium User</span>
                        </div>
                    </div>
                </div>

                {!isEditing && (
                    <button onClick={() => setIsEditing(true)} className="btn-primary">
                        Edit Profile
                    </button>
                )}
            </div>

            {/* Main Form */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ margin: 0 }}>Personal Information</h3>
                    {isEditing && <span style={{ fontSize: '0.85rem', color: 'var(--accent-amber)' }}>Editing enabled</span>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                    {/* Full Name */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Full Name</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                disabled={!isEditing}
                                style={{ paddingLeft: '40px', width: '100%' }}
                            />
                        </div>
                    </div>

                    {/* Username (Locked usually, but let's allow read) */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Username</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>@</span>
                            <input
                                type="text"
                                value={formData.username}
                                disabled={true} // Usually can't change username easily
                                style={{ paddingLeft: '35px', width: '100%', opacity: 0.7, cursor: 'not-allowed' }}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                style={{ paddingLeft: '40px', width: '100%' }}
                            />
                        </div>
                    </div>

                    {/* Contact - Font Mono for numbers */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Contact Number</label>
                        <div style={{ position: 'relative' }}>
                            <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="tel"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="font-mono"
                                style={{ paddingLeft: '40px', width: '100%' }}
                            />
                        </div>
                    </div>

                    {/* Bio (Full Width) */}
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Bio / Notes</label>
                        <textarea
                            name="bio"
                            rows="3"
                            value={formData.bio}
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>

                {/* Actions */}
                {isEditing && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '3rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="btn-secondary"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={initiateSave}
                            className="btn-primary"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Save size={18} /> Save Changes
                        </button>
                    </div>
                )}
            </div>

            {/* Security Modal */}
            {showSecurityModal && (
                <div className="modal-overlay">
                    <div className="glass-card" style={{ width: '100%', maxWidth: '400px', background: '#18191C' }}>
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'rgba(92, 139, 198, 0.2)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                                <Lock size={24} color="var(--accent-blue)" />
                            </div>
                            <h3 style={{ margin: 0 }}>Security Verification</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Please enter your password to save changes.</p>
                        </div>

                        <input
                            type="password"
                            placeholder="Current Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                            style={{ width: '100%', marginBottom: '1rem' }}
                        />

                        {authError && (
                            <div style={{ color: 'var(--accent-red)', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <XCircle size={14} /> {authError}
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => { setShowSecurityModal(false); setAuthError(''); setPassword(''); }}
                                className="btn-secondary"
                                style={{ flex: 1 }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmSave}
                                className="btn-primary"
                                style={{ flex: 1 }}
                                disabled={isSaving}
                            >
                                {isSaving ? 'Verifying...' : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilesPage;
