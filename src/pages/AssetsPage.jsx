import React, { useState } from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, NeoButton, StatCard } from '../components/GlassComponents';

const AssetsPage = () => {
    const { assets, addAsset } = useFinancialData();
    const [isAdding, setIsAdding] = useState(false);
    const [newAsset, setNewAsset] = useState({ name: '', value: '', type: 'Asset' });

    const handleAdd = () => {
        if (newAsset.name && newAsset.value) {
            addAsset({
                name: newAsset.name,
                value: parseFloat(newAsset.value),
                type: newAsset.type,
                liquidity: 'Medium'
            });
            setIsAdding(false);
            setNewAsset({ name: '', value: '', type: 'Asset' });
        }
    };

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>Assets & Portfolio</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Track physical and digital wealth.</p>
                </div>
                <NeoButton onClick={() => setIsAdding(!isAdding)}>+ Add New Asset</NeoButton>
            </div>

            {isAdding && (
                <GlassCard style={{ marginBottom: '2rem', animation: 'fadeIn 0.3s' }}>
                    <h3>Add Asset</h3>
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr 1fr auto', marginTop: '1rem' }}>
                        <input
                            placeholder="Asset Name (e.g., Tesla Model 3)"
                            value={newAsset.name}
                            onChange={e => setNewAsset({ ...newAsset, name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Value ($)"
                            value={newAsset.value}
                            onChange={e => setNewAsset({ ...newAsset, value: e.target.value })}
                        />
                        <select
                            value={newAsset.type}
                            onChange={e => setNewAsset({ ...newAsset, type: e.target.value })}
                        >
                            <option>Real Estate</option>
                            <option>Vehicle</option>
                            <option>Stock</option>
                            <option>Cash</option>
                            <option>Crypto</option>
                        </select>
                        <NeoButton onClick={handleAdd}>Save</NeoButton>
                    </div>
                </GlassCard>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {assets.map(asset => (
                    <GlassCard key={asset.id} className="asset-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{
                                padding: '4px 8px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)'
                            }}>{asset.type}</span>
                            <span style={{ color: asset.liquidity === 'High' ? 'var(--accent-green)' : 'var(--accent-amber)', fontSize: '0.8rem' }}>
                                {asset.liquidity} Liq.
                            </span>
                        </div>
                        <h3>{asset.name}</h3>
                        <div className="font-mono" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                            ${asset.value.toLocaleString()}
                        </div>

                        {/* Depreciation Simulator Plug */}
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Projected Value (1 Yr)</label>
                            <div style={{ width: '100%', background: 'rgba(0,0,0,0.3)', height: '4px', borderRadius: '2px', marginTop: '8px' }}>
                                <div style={{ width: '90%', background: 'var(--text-secondary)', height: '100%' }} />
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default AssetsPage;
