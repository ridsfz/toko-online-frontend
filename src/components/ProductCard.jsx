import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0 0 8px' }}>
          {product.description}
        </p>
        <p style={{ fontWeight: 'bold', color: '#1a1a2e', margin: '0 0 12px' }}>
          Rp {product.price.toLocaleString('id-ID')}
        </p>
        <Link
          to={`/products/${product._id}`}
          style={{
            background: '#1a1a2e',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}