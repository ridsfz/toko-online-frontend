import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav style={{ background: '#1a1a2e', padding: '1rem 2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>Toko Online</span>
      <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Beranda</Link>
      <Link to="/products" style={{ color: '#ccc', textDecoration: 'none' }}>Produk</Link>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {username ? (
          <>
            <span style={{ color: '#ccc' }}>Halo, {username}</span>
            <button onClick={handleLogout}
              style={{ background: 'transparent', border: '1px solid #ccc', color: '#ccc', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer' }}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: '#ccc', textDecoration: 'none' }}>Login</Link>
        )}
      </div>
    </nav>
  );
}