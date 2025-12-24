import React, { createContext, useContext, useState, useMemo } from 'react';

const FinancialContext = createContext();

export const useFinancialData = () => {
    return useContext(FinancialContext);
};

export const FinancialProvider = ({ children }) => {
    // --- 1. Central State ---

    // Sandbox / Spending Data
    const [transactions, setTransactions] = useState([
        { id: 1, text: 'Starbucks Coffee', amount: 45, category: 'Food', date: new Date().toISOString() },
        { id: 2, text: 'Netflix Subscription', amount: 15, category: 'Entertainment', date: new Date().toISOString() },
    ]);

    // Assets Data
    const [assets, setAssets] = useState([
        { id: 1, name: 'Tesla Model 3', type: 'Vehicle', value: 45000, liquidity: 'Low' },
        { id: 2, name: 'Apple Stock', type: 'Stock', value: 12000, liquidity: 'High' },
    ]);

    // Emergency / Nominee Data
    const [nominees, setNominees] = useState([
        { id: 1, name: 'Sarah Doe', relation: 'Spouse', access: 'Full' }
    ]);

    // Literacy / Gamification Data
    const [literacyState, setLiteracyState] = useState({
        xp: 350,
        level: 3,
        unlockedNodes: ['basics', 'savings'],
    });

    // --- 2. Derived State & Logic (The "Brain") ---

    // Calculate Net Worth
    const netWorth = useMemo(() => {
        const totalAssets = assets.reduce((acc, curr) => acc + curr.value, 0);
        const totalSpent = transactions.reduce((acc, curr) => acc + curr.amount, 0);
        // Simplified Logic: Assets - Spending (for demo)
        return totalAssets - totalSpent;
    }, [assets, transactions]);

    // AI Forecast Logic (Simple Projection)
    const forecast = useMemo(() => {
        // If spending is high, forecast dips. 
        const monthlyBurn = transactions.reduce((acc, curr) => acc + curr.amount, 0);
        const projectedWorth = netWorth - (monthlyBurn * 6); // 6 Month projection
        return {
            value: projectedWorth,
            trend: projectedWorth > netWorth ? 'up' : 'down',
            message: projectedWorth < 0 ? 'Warning: Runway depletion in 6 months.' : 'Stable growth projected.'
        };
    }, [netWorth, transactions]);

    // Insurance Recommendations Logic
    const insuranceGaps = useMemo(() => {
        const gaps = [];
        const hasVehicle = assets.some(a => a.type === 'Vehicle');
        const hasHome = assets.some(a => a.type === 'Real Estate');

        if (hasVehicle) gaps.push({ type: 'Auto Insurance', priority: 'High', reason: 'You own a vehicle but have no linked policy.' });
        if (hasHome) gaps.push({ type: 'Home Insurance', priority: 'Medium', reason: 'Protect your property asset.' });
        if (literacyState.level < 5) gaps.push({ type: 'Life Insurance', priority: 'Low', reason: 'Recommended for long-term safety.' });

        return gaps;
    }, [assets, literacyState]);

    // --- 3. Actions ---

    const addTransaction = (text, amount, category) => {
        setTransactions(prev => [...prev, { id: Date.now(), text, amount, category, date: new Date().toISOString() }]);
        // Gamification Hook: Adding data gives XP
        addXP(10);
    };

    const addAsset = (asset) => {
        setAssets(prev => [...prev, { ...asset, id: Date.now() }]);
        addXP(50);
    };

    const addXP = (amount) => {
        setLiteracyState(prev => ({
            ...prev,
            xp: prev.xp + amount,
            level: Math.floor((prev.xp + amount) / 100) + 1
        }));
    };

    const triggerPanicMode = () => {
        console.warn("PANIC MODE ACTIVATED: notifying nominees...");
        // In a real app, this would modify state to lock UI or send emails
    };

    const value = {
        transactions,
        addTransaction,
        assets,
        addAsset,
        nominees,
        setNominees,
        literacyState,
        addXP,
        netWorth,
        forecast,
        insuranceGaps,
        triggerPanicMode
    };

    return (
        <FinancialContext.Provider value={value}>
            {children}
        </FinancialContext.Provider>
    );
};
