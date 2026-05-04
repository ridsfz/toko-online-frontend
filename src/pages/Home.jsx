import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      background: '#f5f5f5',
      minHeight: '90vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a1a2e' }}>Selamat Datang di Toko Online</h1>
      <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Temukan produk terbaik dengan harga terjangkau
      </p>
      <Link
        to="/products"
        style={{
          background: '#1a1a2e',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '1rem'
        }}
      >
        Lihat Produk
      </Link>
    </div>
  );
}