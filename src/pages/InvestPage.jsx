import React from 'react';
import { useFinancialData } from '../context/FinancialContext';
import { GlassCard, NeoButton } from '../components/GlassComponents';
import { TrendingUp, DollarSign, Briefcase } from 'lucide-react';

const InvestPage = () => {
    // Re-use assets from context, as "Investments" usually means Assets
    const { assets } = useFinancialData();

    return (
        <div style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1>Investment Portfolio</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Track stocks, mutual funds, and assets.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <NeoButton variant="secondary">Sync Broker</NeoButton>
                    <NeoButton>+ Add Investment</NeoButton>
                </div>
            </div>

            {/* Portfolio Summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <GlassCard>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        <TrendingUp size={18} /> Total Value
                    </div>
                    <div className="font-mono" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        ${assets.reduce((sum, a) => sum + a.value, 0).toLocaleString()}
                    </div>
                </GlassCard>
                <GlassCard>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        <Briefcase size={18} /> Asset Count
                    </div>
                    <div className="font-mono" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {assets.length}
                    </div>
                </GlassCard>
                <GlassCard>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        <DollarSign size={18} /> YTD Return
                    </div>
                    <div className="font-mono" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>
                        +8.4%
                    </div>
                </GlassCard>
            </div>

            <h3>Your Holdings</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {assets.map(asset => (
                    <GlassCard key={asset.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                                {asset.type === 'Vehicle' ? '🚗' : asset.type === 'Real Estate' ? '🏠' : '📈'}
                            </div>
                            <div>
                                <h3 style={{ margin: 0 }}>{asset.name}</h3>
                                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)' }}>{asset.type} • {asset.liquidity} Liquidity</p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${asset.value.toLocaleString()}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--accent-green)' }}>+0.00% Today</div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default InvestPage;
