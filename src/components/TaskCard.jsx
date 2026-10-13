function TaskCard({ task, onDelete, onToggle }) {
    return (
        <div style={{
            border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px', backgroundColor: task.isCompleted ? '#d4edda' : 'transparent'}}>
            
            <h3 style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.judul}</h3>
            <p>Kategori: <strong>{task.kategori}</strong></p>

            <label style={{ display: 'block', marginBottom: '10px' }}>
                <input type="checkbox" checked={task.isCompleted} onChange={() => onToggle(task.id)} /> Tandai Selesai
            </label>

            <button onClick={() => onDelete(task.id)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Hapus</button>
        </div>
    );
}
export default TaskCard;
