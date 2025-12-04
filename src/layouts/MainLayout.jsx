import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, Home, Baby, Heart, Calendar, CheckSquare } from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: 'var(--color-white)', padding: '1rem 0', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff8ba7', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Heart fill="#ff8ba7" size={24} />
            <span>妊娠・出産・保育プラットフォームデモ</span>
          </Link>

          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <NavLink to="/" icon={<Home size={20} />} label="ホーム" active={isActive('/')} />
            <NavLink to="/todo" icon={<CheckSquare size={20} />} label="やること" active={isActive('/todo')} />
            <NavLink to="/pregnancy" icon={<Baby size={20} />} label="妊娠" active={isActive('/pregnancy')} />
            <NavLink to="/childbirth" icon={<Heart size={20} />} label="出産" active={isActive('/childbirth')} />
            <NavLink to="/childcare" icon={<Menu size={20} />} label="保育" active={isActive('/childcare')} />
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, padding: '2rem 0' }}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer style={{ backgroundColor: '#fff0f5', padding: '2rem 0', marginTop: 'auto' }}>
        <div className="container" style={{ textAlign: 'center', color: '#888' }}>
          <p>© 2025 MamaCare Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, icon, label, active }) => (
  <Link
    to={to}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      color: active ? '#ff8ba7' : '#888',
      fontSize: '0.8rem',
      fontWeight: active ? 'bold' : 'normal'
    }}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default MainLayout;
