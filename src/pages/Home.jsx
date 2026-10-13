import { useState } from 'react'; 
import TaskCard from '../components/TaskCard';

function Home({ tasks, onDeleteTask, onToggleTask }) {
    const [search, setSearch] = useState('');

    const filteredTasks = tasks.filter((task) =>
        task.judul.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h2>Daftar Tugas Hari Ini</h2>
            
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari tugas..." style={{ width: '300px', padding: '8px', marginBottom: '15px' }} />
            {/* Short-circuit Rendering jika data kosong */}
            {tasks.length === 0 && <p>Belum ada tugas. Silakan tambahkan tugas baru!</p>}

            {tasks.length > 0 && filteredTasks.length === 0 && <p>Tidak ada tugas yang cocok dengan pencarian.</p>}
            {/* Rendering List dengan map dan key (sekarang memakai filteredTasks, [2.10 - FITUR 2]) */}
            {filteredTasks.map((task) => (<TaskCard key={task.id} task={task} onDelete={onDeleteTask} onToggle={onToggleTask}/>))}
        </div>
    );
}

export default Home;