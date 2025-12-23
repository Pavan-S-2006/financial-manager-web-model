import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';


const LandingPage = () => {
  return (
    <div className="landing-container" style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'var(--bg-app)',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>QWERTY<span style={{ color: 'var(--primary-brand)' }}>.</span></h1>
          <Link to="/login" className="btn-primary">Login</Link>
        </nav>

        <header style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Master Your Money with <span className="text-gradient">Intelligence</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Track spending, plan budgets, and simulate financial decisions in one premium, secure dashboard.
          </p>
          <Link to="/dashboard" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 36px', fontSize: '1.1rem', borderRadius: '16px' }}>
            Get Started <ArrowRight size={20} />
          </Link>
        </header>

        {/* Feature Grid Mockup */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Zap size={32} color="var(--accent-amber)" />, title: "Instant Tracking", desc: "Log expenses in seconds with our smart notepad." },
            { icon: <BarChart3 size={32} color="var(--accent-blue)" />, title: "Using Financial Planner", desc: "Know your financial standing with a simple 0-100 score." },
            { icon: <ShieldCheck size={32} color="var(--accent-green)" />, title: "Safe Sandbox", desc: "Simulate big purchases before you buy." }
          ].map((feature, i) => (
            <div key={i} className="glass-card" style={{ padding: '2.5rem', background: 'var(--bg-panel)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ marginBottom: '1.5rem', background: 'var(--bg-panel-hover)', width: 'fit-content', padding: '16px', borderRadius: '14px' }}>{feature.icon}</div>
              <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '1.25rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
