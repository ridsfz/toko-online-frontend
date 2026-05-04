import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>;
  if (!product) return <p style={{ padding: '2rem' }}>Produk tidak ditemukan.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/products" style={{ color: '#1a1a2e', textDecoration: 'none' }}>
        ← Kembali
      </Link>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
      />
      <h1>{product.name}</h1>
      <p style={{ color: '#666' }}>{product.description}</p>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a2e' }}>
        Rp {product.price.toLocaleString('id-ID')}
      </p>
      <p style={{ color: product.stock > 0 ? 'green' : 'red' }}>
        {product.stock > 0 ? `Stok: ${product.stock}` : 'Stok habis'}
      </p>
    </div>
  );
}