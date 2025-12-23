import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import '../features/landing.css';

const LandingPage = () => {
  return (
    <div className="landing-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>QWERTY<span style={{ color: 'var(--brand-primary)' }}>.</span></h1>
        <Link to="/login" className="btn-primary">Login</Link>
      </nav>

      <header style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="hero-title">
          Master Your Money with <span className="text-gradient">Intelligence</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Track spending, plan budgets, and simulate financial decisions in one premium dashboard.
        </p>
        <Link to="/dashboard" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          Get Started <ArrowRight size={20} />
        </Link>
      </header>

      {/* Feature Grid Mockup */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '6rem' }}>
        {[
          { icon: <Zap color="var(--accent-pink)" />, title: "Instant Tracking", desc: "Log expenses in seconds with our smart notepad." },
          { icon: <BarChart3 color="var(--accent-cyan)" />, title: "Health Score", desc: "Know your financial standing with a simple 0-100 score." },
          { icon: <ShieldCheck color="var(--brand-glow)" />, title: "Safe Sandbox", desc: "Simulate big purchases before you buy." }
        ].map((feature, i) => (
          <div key={i} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ marginTop: 0 }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
