import './App.css'

const nama = 'Yohanes'

function App() {
  return (
    <main className="website">
      <h1>My Website</h1>
      <h2>Aplikasi Catatan Keuangan</h2>
      <h2 className="welcome">Selamat Datang, {nama}!</h2>
      <p className="welcome-back">Selamat Datang Kembali!</p>

      <section className="jsx-example" aria-labelledby="jsx-title">
        <h3 id="jsx-title">Contoh Aturan JSX</h3>
        <div className="email-field">
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="email" />
        </div>
        <p className="red-text">Teks merah ukuran 12px</p>
        <button type="button" onClick={() => window.alert(`Halo, ${nama}!`)}>
          Klik Saya
        </button>
      </section>

      <p>Selamat datang di dashboard pengelolaan keuangan!</p>
      <h3 className="name">Nama: {nama}</h3>
    </main>
  )
}

export default App
