import React, { useState } from 'react';
import {
    Plus, Mic, Upload, Trash2, Edit2, CheckCircle, Users, User, DollarSign, Calendar
} from 'lucide-react';

const NotepadPage = () => {
    // 1. Core State
    const [expenses, setExpenses] = useState([
        { id: 1, name: "Example Expense", desc: "Description here", amount: 0, category: "Food", date: new Date().toISOString().split('T')[0] }
    ]);

    const [formData, setFormData] = useState({ name: '', desc: '', amount: '', category: 'Food' });
    const [isFamilyMode, setIsFamilyMode] = useState(false);
    const [isListening, setIsListening] = useState(false); // For Voice Mock
    const [isScanning, setIsScanning] = useState(false);   // For File Mock
    const [editingId, setEditingId] = useState(null);

    // 2. Budget Logic
    const INDIVIDUAL_BUDGET = 15000;
    const FAMILY_BUDGET = 40000;
    const currentBudget = isFamilyMode ? FAMILY_BUDGET : INDIVIDUAL_BUDGET;

    const totalSpent = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
    const spendPercentage = (totalSpent / currentBudget) * 100;

    // Health Score (Simple Logic: 100 - % spent, min 0)
    const healthScore = Math.max(0, 100 - Math.floor(spendPercentage));

    // 3. Alerts & Colors
    const getStatusColor = () => {
        if (spendPercentage >= 90) return 'var(--accent-red)';
        if (spendPercentage >= 75) return 'var(--accent-amber)';
        return 'var(--accent-green)';
    };

    // 4. Handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.amount) return;

        if (editingId) {
            setExpenses(prev => prev.map(item =>
                item.id === editingId ? { ...item, ...formData, amount: Number(formData.amount) } : item
            ));
            setEditingId(null);
        } else {
            const newItem = {
                id: Date.now(),
                ...formData,
                amount: Number(formData.amount),
                date: new Date().toISOString().split('T')[0]
            };
            setExpenses(prev => [newItem, ...prev]);
        }
        setFormData({ name: '', desc: '', amount: '', category: 'Food' });
    };

    const handleDelete = (id) => {
        setExpenses(prev => prev.filter(item => item.id !== id));
    };

    const handleEdit = (item) => {
        setFormData({ name: item.name, desc: item.desc, amount: item.amount, category: item.category });
        setEditingId(item.id);
    };

    // --- MOCK FEATURES ---
    const handleVoiceEntry = () => {
        setIsListening(true);
        setTimeout(() => {
            setIsListening(false);
            setFormData({
                name: "Voice Entry: Dinner",
                desc: "Auto-detected from speech",
                amount: 850,
                category: "Food"
            });
        }, 2000);
    };

    const handleFileEntry = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setFormData({
                name: "Scanned Receipt: Fuel",
                desc: "Extracted from image",
                amount: 2100,
                category: "Transport"
            });
        }, 2000);
    };

    // 5. Grouping Logic
    const groupedExpenses = expenses.reduce((groups, item) => {
        const month = new Date(item.date).toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!groups[month]) groups[month] = [];
        groups[month].push(item);
        return groups;
    }, {});

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'fadeIn 0.4s ease-out' }}>

            {/* --- HEADER & STATS --- */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                {/* Status Card */}
                <div className="glass-panel" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: `${Math.min(spendPercentage, 100)}%`, background: getStatusColor(), transition: 'width 0.5s ease' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Monthly Spending</p>
                            <h2 style={{ margin: '8px 0', fontSize: '2rem' }} className="font-mono">₹{totalSpent.toLocaleString()}</h2>
                        </div>
                        <button
                            onClick={() => setIsFamilyMode(!isFamilyMode)}
                            className={`btn-secondary ${isFamilyMode ? 'active' : ''}`}
                            style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem' }}
                        >
                            {isFamilyMode ? <Users size={16} /> : <User size={16} />}
                            {isFamilyMode ? 'Family' : 'Personal'}
                        </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <span>Limit: <span className="font-mono">₹{currentBudget.toLocaleString()}</span></span>
                        <span style={{ color: spendPercentage > 90 ? 'var(--accent-red)' : 'var(--accent-green)' }}>{spendPercentage.toFixed(1)}% Used</span>
                    </div>
                </div>

                {/* Health Score */}
                <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>Financial Health</h3>
                        <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Based on spending</p>
                    </div>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%',
                        background: 'conic-gradient(var(--accent-green) ' + healthScore + '%, var(--bg-panel-hover) 0)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <div style={{ width: '65px', height: '65px', borderRadius: '50%', background: 'var(--bg-panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                            <span className="font-mono" style={{ fontSize: '1.2rem' }}>{healthScore}</span>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) 2fr', gap: '2rem' }}>

                {/* --- LEFT: ENTRY FORM --- */}
                <div className="glass-panel" style={{ padding: '24px', height: 'fit-content' }}>
                    <h3 style={{ marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                        <Plus size={20} style={{ color: 'var(--primary-brand)' }} /> {editingId ? 'Edit Expense' : 'New Entry'}
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <input
                            name="name" value={formData.name} onChange={handleInputChange}
                            placeholder="Expense Name"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input
                                name="amount" type="number" value={formData.amount} onChange={handleInputChange}
                                placeholder="Amount ₹"
                                className="font-mono" // Monospace for amount input
                            />
                            <select
                                name="category" value={formData.category} onChange={handleInputChange}
                            >
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="EMI">EMI</option>
                                <option value="Entertainment">Fun</option>
                                <option value="Shopping">Shopping</option>
                            </select>
                        </div>

                        <textarea
                            name="desc" value={formData.desc} onChange={handleInputChange}
                            placeholder="Short Description..."
                            style={{ resize: 'vertical', minHeight: '80px' }}
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
                            <button
                                onClick={handleVoiceEntry} disabled={isListening}
                                className={`btn-secondary ${isListening ? 'active' : ''}`}
                            >
                                <Mic size={18} /> {isListening ? 'Listening...' : 'Voice'}
                            </button>
                            <button
                                onClick={handleFileEntry} disabled={isScanning}
                                className={`btn-secondary ${isScanning ? 'active' : ''}`}
                            >
                                <Upload size={18} /> {isScanning ? 'Scanning...' : 'Upload'}
                            </button>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="btn-primary"
                            style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                        >
                            {editingId ? <CheckCircle size={18} /> : <Plus size={18} />}
                            {editingId ? 'Update Expense' : 'Add Expense'}
                        </button>

                        {editingId && (
                            <button
                                onClick={() => { setEditingId(null); setFormData({ name: '', desc: '', amount: '', category: 'Food' }); }}
                                className="btn-secondary"
                                style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
                            >
                                Cancel Edit
                            </button>
                        )}

                    </div>
                </div>

                {/* --- RIGHT: LIST --- */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {Object.entries(groupedExpenses).map(([month, items]) => (
                        <div key={month}>
                            <h4 style={{ color: 'var(--text-secondary)', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Calendar size={16} /> {month}
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {items.map((item) => (
                                    <div key={item.id} className="glass-panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', boxShadow: 'none', border: '1px solid var(--border-subtle)', background: 'var(--bg-app)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-panel-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <DollarSign size={20} color="var(--primary-brand)" />
                                            </div>
                                            <div>
                                                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>{item.name}</h4>
                                                <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                                    {item.category} • {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <span className="font-mono" style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-primary)' }}>₹{item.amount.toLocaleString()}</span>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button onClick={() => handleEdit(item)} className="btn-icon">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button onClick={() => handleDelete(item.id)} className="btn-icon danger">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default NotepadPage;
