// Array untuk menyimpan catatan
let notes = [
    {
      id: 1,
      heading: "Mempelajari Javascript",
      description: "Dasar-dasar JavaScript untuk pemula.",
      created_by: "John Doe",
      created_at: 1738146027613
    }
  ];
  
  // Fungsi untuk menambah catatan baru
  const createNote = (heading, description, created_by) => {
    const newNote = {
      id: notes.length + 1, // ID bertambah otomatis
      heading: heading,
      description: description,
      created_by: created_by,
      created_at: 1738231734054 // Sesuai tugas
    };
    notes.push(newNote);
    console.log("Catatan berhasil ditambahkan!");
  };
  
  // Fungsi untuk membaca semua catatan
  const readNote = () => {
    console.log("Daftar Catatan:");
    console.log(notes);
  };
  
  // Fungsi untuk memperbarui catatan berdasarkan ID
  const updateNote = (id, newHeading, newDescription) => {
    let found = false;
    for (let note of notes) {
      if (note.id === id) {
        note.heading = newHeading;
        note.description = newDescription;
        found = true;
        console.log("Catatan berhasil diperbarui!");
        break;
      }
    }
    if (!found) {
      console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
    }
  };
  
  // Fungsi untuk menghapus catatan berdasarkan ID
  const deleteNote = (id) => {
    let initialLength = notes.length;
    notes = notes.filter(note => note.id !== id);
    if (notes.length < initialLength) {
      console.log("Catatan berhasil dihapus!");
    } else {
      console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
    }
  };
  
  // Menjalankan kode
  createNote("Belajar React", "Mempelajari dasar-dasar React.", "Jane Doe");
  readNote();
  console.log("=================================================");
  updateNote(1, "Mempelajari JavaScript Lanjutan", "Konsep lanjutan dalam JavaScript.");
  readNote();
  console.log("=================================================");
  deleteNote(1);
  readNote();
      