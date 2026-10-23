
const pages = {
  home: {
    content: `
            <div class="page-center-layout">
                <h1>Hukum dan Pidana</h1>
                <h2>Prinsip-prinsip Hukum dan Pidana dalam Masyarakat</h2>
                <p>Hukum dan pidana merupakan dua aspek penting dalam sistem hukum yang saling terkait. Hukum adalah aturan yang mengatur perilaku individu dan organisasi dalam masyarakat, sedangkan pidana adalah konsekuensi hukum yang dikenakan terhadap pelanggar hukum.</p>
                <button class="button" id="btn-learn-more">Baca Selengkapnya</button>
            </div>
        `,
    sidebar: `
            <h3>Daftar Artikel</h3>
            <p>💡 Pengertian Hukum Pidana</p>
            <p>📚 Jenis-jenis Hukum Pidana</p>
            <p>⚖ Peran Hukum Pidana dalam Masyarakat</p>
            <p>📝 Contoh Kasus Hukum Pidana</p>
        `,
  },
  about: {
    content: `
            <h1>Tentang Saya</h1>
            <h2>Nur Riefda Shafi Ulima</h2>
            <p><strong>NIM:</strong> A11.2026.16717<br>
            <strong>Program Studi:</strong> Teknik Informatika<br>
            <strong>Fakultas:</strong> Ilmu Komputer<br>
            <strong>Universitas:</strong> Universitas Dian Nuswantoro</p>
            <p>Saya senang mempelajari hal-hal baru di dunia teknologi dan terus mengembangkan kemampuan saya melalui berbagai proyek dan pengalaman.</p>
            <p>Saya terus berusaha mengembangkan kemampuan, mencoba hal-hal baru, dan meningkatkan pengetahuan di bidang teknologi. Saya berharap dapat menghasilkan karya yang kreatif, inovatif, dan bermanfaat melalui ilmu yang saya pelajari.</p>
        `,
    sidebar: `
            <h3>Kontak</h3>
            <p>📧 Hubungi Saya Disini</p>
            <p>🌐 Kampus UDINUS</p>
        `,
  },
  blog: {
    content: `
            <h1>Daftar Artikel</h1>
            
            <div class="blog-item">
                <h2>Pengertian Hukum Pidana</h2>
                <p><small>📅 07 Agustus 2026</small></p>
                <p>Hukum pidana adalah cabang hukum yang mengatur perbuatan-perbuatan yang dianggap melanggar norma hukum dan memberikan sanksi atau hukuman kepada pelaku pelanggaran tersebut. Tujuan utama dari hukum pidana adalah untuk menjaga ketertiban masyarakat, melindungi hak-hak individu, dan mencegah terjadinya kejahatan.</p>
            </div>
            
            <div class="blog-item">
                <h2>Jenis-Jenis Hukum Pidana</h2>
                <p><small>📅 07 Agustus 2026</small></p>
                <p>Hukum pidana dapat dibagi menjadi beberapa jenis berdasarkan sifat dan tujuan hukumnya. Berikut adalah beberapa jenis hukum pidana yang umum dikenal:</p>
                <ul>
                    <li><strong>Hukum Pidana Materiil:</strong> Mengatur perbuatan yang dianggap sebagai tindak pidana dan menentukan sanksi yang dapat dijatuhkan.</li>
                    <li><strong>Hukum Pidana Formil:</strong> Mengatur prosedur dan tata cara penegakan hukum pidana, termasuk penyidikan, penuntutan, dan persidangan.</li>
                    <li><strong>Hukum Pidana Khusus:</strong> Mengatur tindak pidana tertentu yang memiliki karakteristik khusus, seperti tindak pidana korupsi, narkotika, atau terorisme.</li>
                    <li><strong>Hukum Pidana Internasional:</strong> Mengatur tindak pidana yang melibatkan pelanggaran hukum internasional, seperti kejahatan perang atau genosida.</li>
                </ul>
            </div>
            
            <div class="blog-item">
                <h2>Peran Hukum Pidana dalam Masyarakat</h2>
                <p><small>📅 07 Agustus 2026</small></p>
                <p>Hukum pidana memainkan peran penting dalam menjaga ketertiban dan keadilan di masyarakat. Hukum pidana tidak hanya memberikan sanksi kepada pelaku kejahatan, tetapi juga berfungsi sebagai alat untuk mencegah terjadinya tindakan kriminal dan melindungi hak-hak individu.</p>
            </div>
            
            <div class="blog-item">
                <h2>Contoh Kasus Hukum Pidana</h2>
                <p><small>📅 07 Agustus 2026</small></p>
                <ul>
                    <li><strong>Kasus Pencurian:</strong> Andi melihat sebuah HP milik Budi di atas meja. Saat sepi, Andi mengambil HP tersebut tanpa izin untuk dibawa pulang.</li>
                    <li><strong>Kasus Penipuan:</strong> Andi menjual HP secara online, meminta Budi mentransfer uang dahulu, namun setelah dikirim Andi menghilang tanpa mengirim HP.</li>
                    <li><strong>Kasus Penganiayaan:</strong> Andi bertengkar dengan Budi karena suatu masalah lalu melakukan kekerasan fisik hingga Budi mengalami luka.</li>
                    <li><strong>Kasus Korupsi:</strong> Seorang pejabat negara menyalahgunakan dana anggaran publik demi memenuhi kebutuhan atau keuntungan pribadi.</li>
                    <li><strong>Kasus Penipuan di Internet:</strong> Seseorang membuat toko online palsu dengan harga murah, lalu menghapus akun setelah menerima uang transfer pembeli.</li>
                </ul>
            </div>
        `,
    sidebar: `
            <h3>Kategori Blog</h3>
            <p>⚖️ Hukum Pidana</p>
            <p>📂 Studi Kasus</p>
            <p>📖 Edukasi Publik</p>
        `,
  },
  "buku-tamu": {
    content: `
            <h1>Buku Tamu</h1>
            <p>Silakan isi data diri Anda di bawah ini untuk meninggalkan pesan atau masukan.</p>
            <form id="guestbook-form">
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" id="nama" required placeholder="Masukkan nama lengkap Anda">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required placeholder="nama@email.com">
                </div>
                <div class="form-group">
                    <label for="hp">No. HP</label>
                    <input type="tel" id="hp" required placeholder="Contoh: 081234567890">
                </div>
                <div class="form-group">
                    <label>Jenis Kelamin</label>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="gender" value="Laki-laki" required> Laki-laki
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="gender" value="Perempuan"> Perempuan
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pesan">Pesan</label>
                    <textarea id="pesan" rows="4" required placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" class="button">Kirim Pesan</button>
            </form>
        `,
    sidebar: `
            <h3>Informasi Form</h3>
            <p>📝 Validasi Email Aktif</p>
            <p>💬 Data Tersimpan Aman</p>
        `,
  },
};

function navigateTo(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  // Pastikan ID elemen ini sesuai dengan yang ada di struktur HTML utama Anda
  const mainContent = document.getElementById("main-content");
  const rightSidebar = document.getElementById("right-sidebar");

  if (mainContent) mainContent.innerHTML = page.content;
  if (rightSidebar) rightSidebar.innerHTML = page.sidebar;

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("data-page") === pageKey) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (pageKey === "home") {
    const learnMoreBtn = document.getElementById("btn-learn-more");
    if (learnMoreBtn) {
      learnMoreBtn.addEventListener("click", () => navigateTo("blog"));
    }
  }

  if (pageKey === "buku-tamu") {
    const form = document.getElementById("guestbook-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Terima kasih! Pesan Buku Tamu Anda berhasil dikirim.");
        form.reset();
      });
    }
  }

  if (mainContent) mainContent.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute("data-page");
      navigateTo(targetPage);
    });
  });

  navigateTo("home");
});