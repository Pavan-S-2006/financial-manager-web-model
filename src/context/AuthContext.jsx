import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize user from localStorage if available
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user_data');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Helper: Generate Initials
    const getInitials = (fullName) => {
        if (!fullName) return 'GU';
        const names = fullName.trim().split(' ');
        if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
        return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    };

    // Helper: Ensure user object has initials
    const enrichUser = (userData) => {
        if (!userData) return null;
        return {
            ...userData,
            initials: getInitials(userData.fullName)
        };
    };

    const login = (userData) => {
        // Expect userData to have { fullName, username, email, contact, etc. }
        const fullUser = enrichUser(userData);
        setUser(fullUser);
        localStorage.setItem('user_data', JSON.stringify(fullUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user_data');
    };

    const updateUser = (updates) => {
        setUser(prev => {
            const newUser = enrichUser({ ...prev, ...updates });
            localStorage.setItem('user_data', JSON.stringify(newUser));
            return newUser;
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
