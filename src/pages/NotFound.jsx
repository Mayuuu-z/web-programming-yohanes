import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
            <h1>404</h1>
            <h2>Halaman Tidak Ditemukan</h2>
            <p>Maaf, halaman yang kamu cari tidak ada.</p>
            
            <button onClick={() => navigate('/')} style={{ marginTop: '15px', padding: '8px 15px', backgroundColor: '#282c34', color: 'white', border: 'none', cursor: 'pointer' }}>
                Kembali ke Beranda
            </button>
        </div>
    );
}
export default NotFound;
