import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Baby, Heart, Calendar, CheckSquare } from 'lucide-react';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: 'var(--color-white)', padding: '1rem 0', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff8ba7', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Heart fill="#ff8ba7" size={24} />
            <span>妊娠・出産・保育プラットフォームデモ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink to="/" icon={<Home size={20} />} label="ホーム" active={isActive('/')} />
            <NavLink to="/todo" icon={<CheckSquare size={20} />} label="やること" active={isActive('/todo')} />
            <NavLink to="/pregnancy" icon={<Baby size={20} />} label="妊娠" active={isActive('/pregnancy')} />
            <NavLink to="/childbirth" icon={<Heart size={20} />} label="出産" active={isActive('/childbirth')} />
            <NavLink to="/childcare" icon={<Menu size={20} />} label="保育" active={isActive('/childcare')} />
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <nav className="mobile-nav-overlay">
          <MobileNavLink to="/" icon={<Home size={20} />} label="ホーム" active={isActive('/')} onClick={closeMenu} />
          <MobileNavLink to="/todo" icon={<CheckSquare size={20} />} label="やること" active={isActive('/todo')} onClick={closeMenu} />
          <MobileNavLink to="/pregnancy" icon={<Baby size={20} />} label="妊娠" active={isActive('/pregnancy')} onClick={closeMenu} />
          <MobileNavLink to="/childbirth" icon={<Heart size={20} />} label="出産" active={isActive('/childbirth')} onClick={closeMenu} />
          <MobileNavLink to="/childcare" icon={<Menu size={20} />} label="保育" active={isActive('/childcare')} onClick={closeMenu} />
        </nav>
      )}

      <main style={{ flex: 1, padding: '2rem 0' }}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer style={{ backgroundColor: '#fff0f5', padding: '2rem 0', marginTop: 'auto' }}>
        <div className="container" style={{ textAlign: 'center', color: '#888' }}>
          <p>© 2025 合同会社Pons. All rights reserved. ※デモサイトですご自由にご利用ください。</p>
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

const MobileNavLink = ({ to, icon, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    style={{
      color: active ? '#ff8ba7' : '#4a4a4a',
      fontWeight: active ? 'bold' : 'normal'
    }}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default MainLayout;
