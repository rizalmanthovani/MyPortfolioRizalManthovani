import type { Project } from '@/types/Project';

export const webAppInteraktif: Project = {
  id: 1,
  name: 'Web App Interaktif Key',
  image: '/Web-app-interaktif.png',
  shortDescription: 'a desktop application (built with Electron) designed specifically for TikTok streamers.',
  githubUrl: 'https://github.com/rizalmanthovani/Interaktif_Key',
  liveUrl: 'https://username.github.io/repo/',
  languages: ['JavaScript(ES6+)', 'HTML', 'CSS', 'EJS', 'AutoIt', 'SQL'],
  technologies: ['EJS', 'Node.js', 'Express.js', 'Electron', 'Socket.IO', 'PostgrSQL (via pg)', 'Googleapis', 'tiktoklive-connector', 'Express-session', 'electron-store', 'Choice.js', 'JavaScript Obfuscator'],
  fullDescription: [
    {
      type: 'paragraph',
      content: '    Selamat datang di era baru live streaming! '
    },
    {
      type: 'paragraph',
      content: '\n' // Ini akan membuat sebuah paragraf kosong
    },
    {
        type: 'paragraph',
        content: '  Lupakan interaksi yang monoton dan satu arah. Interaktif Key adalah sebuah platform desktop canggih yang dirancang khusus untuk para streamer visioner seperti Anda. Aplikasi ini bukan sekadar alat, melainkan sebuah jembatan yang menghubungkan dunia virtual Anda dengan audiens secara real-time.'
    },
    {
      type: 'image',
      src: '/projectImage/webapp1.png',
      alt: 'Tampilan antarmuka Interaktif Key'
    },
    {
      type: 'paragraph',
      content: '  Bayangkan ini: setiap hadiah, komentar, atau bahkan like dari penonton Anda di TikTok Live dapat secara instan diubah menjadi aksi nyata di dalam game Anda. Karakter melompat karena penonton mengetik "lompat", efek nitro aktif karena seseorang mengirim hadiah mawar, atau suara lucu berputar saat Anda mendapatkan pengikut baru. Inilah kekuatan Interaktif Key: mengubah penonton pasif menjadi partisipan aktif dalam cerita yang Anda bangun.'
    },
    {
      type: 'paragraph',
      content: 'Dibangun dengan arsitektur Electron yang kokoh, backend Node.js yang andal, dan sistem keamanan berlapis, Interaktif Key adalah alat pamungkas untuk menciptakan pengalaman streaming yang tak terlupakan, meroketkan engagement, dan membangun komunitas yang lebih solid dari sebelumnya.'
    },
    {
      type: 'image',
      src: '/projectImage/webapp2.png',
      alt: 'Tampilan antarmuka Interaktif Key'
    },
    {
        type: 'paragraph',
        content: '      ⚙️ Instalasi & Pengaturan Awal: Gerbang Menuju Interaktivitas'
    },
    {
      type: 'paragraph',
      content: 'Saya merancang Interaktif Key agar mudah diakses, bahkan untuk streamer yang baru memulai. Prosesnya mulus dan aman dari awal hingga akhir.'
    },
    {
      type: 'paragraph',
      content: '  1. Instalasi yang Aman dan Terjamin'
    },
    {
      type: 'paragraph',
      content: '      • Aplikasi ini dikemas menggunakan Electron Builder, menghasilkan sebuah file installer .exe yang profesional. Saat pengguna menjalankan installer:'
    },
    {
      type: 'paragraph',
      content: '      • Lisensi (EULA): Pengguna akan disambut dengan Perjanjian Lisensi Pengguna Akhir (licence.txt yang ditampilkan melalui eula.ejs). Ini adalah langkah pertama yang membangun kepercayaan dan menetapkan aturan main.'
    },
    {
      type: 'paragraph',
      content: '  Instalasi Cerdas: Installer akan menempatkan semua file yang diperlukan, termasuk file-file terobfuskasi (dari dist_obfuscated) dan aset, di lokasi yang benar. Konfigurasi di package.json bahkan meminta hak Administrator untuk memastikan instalasi yang mulus dan penempatan file di Program Files.'
    },
    {
      type: 'paragraph',
      content: '  2. Startup Cerdas dan Terverifikasi'
    },
    {
      type: 'paragraph',
      content: '  Setiap kali aplikasi dijalankan, app-electron.js mengambil alih sebagai garda terdepan:'
    },
    {
      type: 'paragraph',
      content: '      • Verifikasi Integritas Kode: Sebelum apa pun, aplikasi menjalankan fungsi verifyCodeIntegrity. Fungsi ini menghitung hash SHA256 dari setiap file penting yang terobfuskasi dan membandingkannya dengan hashes.json yang dibuat saat proses build. Jika ada satu file saja yang diubah, aplikasi akan menolak untuk berjalan. Ini adalah benteng pertahanan pertama web app terhadap modifikasi yang tidak sah.'
    },
    {
      type: 'paragraph',
      content: '      •Inisialisasi Backend: Setelah verifikasi berhasil, app-electron.js menjalankan server Express dari app.js. Ini adalah jantung dari aplikasi ini.'
    },
    {
      type: 'paragraph',
      content: '      • Verifikasi Lisensi Perangkat Keras: app.js kemudian melakukan pemeriksaan kedua yang krusial: verifyOrRegisterLicense. Fungsi ini:'
    },
    {
      type: 'paragraph',
      content: '      • Mengambil ID unik perangkat keras pengguna (node-machine-id).'
    },
    {
      type: 'paragraph',
      content: '      • Memeriksa file lisensi terenkripsi (interaktif_key_reg.dat).'
    },
    {
      type: 'paragraph',
      content: '    3. Pengalaman Pengguna yang Mulus'
    },
    {
      type: 'paragraph',
      content: '      • Jika file ada, data didekripsi dan divalidasi terhadap ID perangkat keras saat ini dan tanggal kadaluarsa. Enkripsi AES-256-CBC dengan HMAC memastikan data tidak hanya rahasia tetapi juga tidak dapat diubah.'
    },
    {
      type: 'paragraph',
      content: '      • Jika file tidak ada, aplikasi akan mendaftarkan perangkat keras tersebut untuk pertama kalinya.'
    },
    {
      type: 'paragraph',
      content: '    4. Login & Manajemen Sesi yang Andal'
    },
    {
      type: 'paragraph',
      content: '      • Setelah lisensi dan EULA disetujui, pengguna harus login.'
    },
    {
      type: 'paragraph',
      content: '      • Opsi Login Fleksibel: Pengguna dapat mendaftar secara lokal (username/password yang di-hash dengan bcrypt) atau menggunakan Google OAuth 2.0 untuk kemudahan. Semua data pengguna disimpan dengan aman di database PostgreSQL (db.js).'
    },
    {
      type: 'image',
      src: '/projectImage/webapp3.png',
      alt: 'Tampilan antarmuka Interaktif Key'
    },
    {
      type: 'paragraph',
      content: '      Fitur Unggulan: Kendali Penuh di Tangan Anda'
    },
    {
      type: 'paragraph',
      content: '        • Inilah inti dari keajaiban Interaktif Key. Halaman "Pusat Interaksi" (keyboard-control.ejs) adalah kokpit aplikasi, ditenagai oleh serangkaian modul JavaScript frontend yang sangat terstruktur (public/js/kb-control/).'
    },
    {
      type: 'paragraph',
      content: '      Pemicu Aksi (Triggers): "Jika Ini Terjadi..."'
    },
    {
      type: 'paragraph',
      content: '  Anda dapat membuat aturan berdasarkan hampir semua event di TikTok Live. Logika ini diatur dengan brilian di routes/index.js dalam fungsi processTikTokEvent.'
    },
    {
      type: 'paragraph',
      content: '      • Komentar Chat: Picu aksi dengan kata kunci. (trigger.type: "comment")'
    },
    {
      type: 'paragraph',
      content: '      • Hadiah Spesifik: Pilih hadiah tertentu dari daftar dinamis yang diambil dari gifts.json. (trigger.type: "gift")'
    },
    {
      type: 'paragraph',
      content: '      • Hadiah Berdasarkan Nilai: Tidak peduli hadiahnya, picu aksi jika nilai diamond-nya mencapai ambang batas tertentu. (trigger.type: "gift_points")'
    },
    {
      type: 'paragraph',
      content: '      • Suka (Likes): Atur pemicu untuk setiap kelipatan jumlah suka total (trigger.type: "like") atau per penonton (trigger.type: "individual_like").'
    },
    {
      type: 'paragraph',
      content: '      • Interaksi Langsung: Tanggapi setiap Share, Follow, atau saat Penonton Bergabung.'
    },
    {
      type: 'paragraph',
      content: '      • Integrasi API (Webhook): Untuk pengguna tingkat lanjut, picu aksi dari layanan eksternal dengan memanggil URL unik yang dihasilkan untuk setiap aksi.'
    },
    {
      type: 'paragraph',
      content: '      Aksi yang Dapat Dikonfigurasi: "...Maka Lakukan Ini"'
    },
    {
      type: 'paragraph',
      content: '    Setiap pemicu dapat menjalankan satu atau beberapa aksi berikut secara bersamaan. Eksekusi pusatnya ditangani oleh webhookHandler.js.'
    },
    {
      type: 'paragraph',
      content: '    • Kontrol Keyboard & Mouse:'
    },
    {
      type: 'paragraph',
      content: '    • Arsitektur Cerdas: Perintah tidak dijalankan di proses utama. app.js mengirim pesan ke proses anak (child_process) yang menjalankan keyboard_controller.js.'
    },
    {
      type: 'paragraph',
      content: '    • Eksekusi Andal: keyboard_controller.js kemudian memanggil skrip AutoIt (autoit_executor.au3), sebuah teknologi otomasi Windows yang sangat kuat, untuk mensimulasikan penekanan tombol (keytap, keyhold) dan klik mouse (mouseclick) dengan presisi tinggi. Arsitektur ini memastikan aplikasi utama tetap responsif.'
    },
    {
      type: 'paragraph',
      content: '   Peringatan Suara & Animasi:'
    },
    {
      type: 'paragraph',
      content: '      • webhookHandler.js mengirim event melalui Socket.IO ke semua klien yang terhubung.'
    },
    {
      type: 'paragraph',
      content: '      • Halaman overlay (overlay.ejs yang ditenagai overlay.js) akan menangkap event ini dan memutar file suara atau menampilkan animasi (.gif, .webm, dll.) di layar. Anda bahkan menyediakan kemampuan untuk memilih file dari mana saja di komputer pengguna, yang kemudian disajikan dengan aman melalui API (/api/local-asset).'
    },
    {
      type: 'paragraph',
      content: '      • Panggil Webhook Eksternal: Integrasikan dengan dunia luar. Kirim data event ke mod game, IFTTT, atau layanan lain untuk kemungkinan tak terbatas.'
    },
    {
      type: 'image',
      src: '/projectImage/webapp4.png',
      alt: 'Tampilan antarmuka Interaktif Key'
    },
    {
      type: 'paragraph',
      content: '      Manajemen Profesional & Integrasi Streaming'
    },
    {
      type: 'paragraph',
      content: '    • Sistem Profil: Buat profil tak terbatas ("Profil GTA V", "Profil Just Chatting") untuk menyimpan setelan aksi yang berbeda. Semua dikelola dengan mulus oleh profileManager.js di sisi klien.'
    },
    {
      type: 'paragraph',
      content: '      • Penyimpanan Fleksibel: Konfigurasi profil dapat disimpan secara lokal di browser atau diunggah/diunduh dari server berdasarkan User ID TikTok Anda, memberikan portabilitas penuh.'
    },
    {
      type: 'paragraph',
      content: '      • Dashboard & Standalone Views: Halaman utama (index.ejs) adalah pusat komando Anda, menampilkan statistik real-time. Selain itu, setiap komponen (chat, top gifters, dll.) memiliki halaman mandiri (views/containers/*.ejs) yang dirancang untuk digunakan sebagai Browser Source di OBS atau Streamlabs, memberikan Anda kebebasan penuh untuk menata layout stream Anda.'
    }

  ],
  size: 'large',
};
