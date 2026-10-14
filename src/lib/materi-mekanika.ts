import { Materi } from "./types";

export const materiMekanika: Materi[] = [
  {
    slug: "pengukuran",
    no: 1,
    title: "Pengukuran",
    category: "Mekanika",
    summary: "Jangka sorong, mikrometer sekrup, angka penting, dan ketidakpastian pengukuran beserta operasi angka penting.",
    blocks: [
      {
        type: "paragraph",
        text: "Pengukuran adalah dasar dari seluruh fisika. Setiap besaran fisika diukur dengan instrumen yang memiliki tingkat ketelitian tertentu. Pemahaman tentang ketelitian alat, angka penting, dan ketidakpastian pengukuran sangat krusial dalam TKA, terutama soal baca skala dan notasi ilmiah.",
      },
      {
        type: "definition",
        term: "Pengukuran",
        definition: "Kegiatan membandingkan suatu besaran dengan besaran sejenis yang dijadikan satuan, menggunakan alat tertentu sehingga menghasilkan nilai numerik dan satuan.",
      },
      {
        type: "heading",
        level: 2,
        text: "Alat Ukur Panjang",
      },
      {
        type: "image",
        src: "/diagrams/pengukuran-alat.svg",
        alt: "Skala mistar, jangka sorong, dan mikrometer sekrup beserta bagian-bagiannya",
        caption: "Skala utama dibaca pada batang, skala nonius pada bagian yang dapat digeser, dan skala putar pada thimble. Garis yang tepat segaris menentukan angka desimal.",
      },
      {
        type: "paragraph",
        text: "Tiga alat yang paling sering diujikan adalah mistar, jangka sorong, dan mikrometer sekrup. Masing-masing memiliki skala terkecil dan cara baca yang berbeda. Mistar digunakan untuk benda kasar, jangka sorong untuk diameter dan kedalaman, sedangkan mikrometer sekrup untuk benda tipis seperti kawat atau pelat.",
      },
      {
        type: "table",
        headers: ["Alat", "Ketelitian", "Rumus Pembacaan", "Penggunaan"],
        rows: [
          ["Mistar", "1 mm = 0,1 cm", "langsung baca skala", "benda kasar, panjang umum"],
          ["Jangka sorong", "0,1 mm = 0,01 cm", "SU + SN x 0,1 mm", "diameter luar/dalam, kedalaman"],
          ["Mikrometer sekrup", "0,01 mm", "ST + SP x 0,01 mm", "benda tipis (kawat, pelat, bola kecil)"],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Cara Membaca Jangka Sorong",
      },
      {
        type: "paragraph",
        text: "Jangka sorong memiliki skala utama (SU) pada batang diam dan skala nonius (SN) pada rahang geser. Prinsip utamanya adalah menemukan garis nonius yang persis segaris dengan garis skala utama, lalu menjumlahkan kedua pembacaan.",
      },
      {
        type: "list",
        items: [
          { text: "Baca skala utama (SU): angka milimeter tepat sebelum garis nol nonius." },
          { text: "Baca skala nonius (SN): nomor garis nonius yang persis segaris dengan garis skala utama." },
          { text: "Hasil = SU + SN x ketelitian (0,1 mm atau 0,01 cm)." },
          { text: "Perhatikan kesalahan nol: jika jangka sorong tertutup tidak menunjukkan 0, lakukan koreksi." },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Cara Membaca Mikrometer Sekrup",
      },
      {
        type: "paragraph",
        text: "Mikrometer sekrup menggunakan ulir halus sehingga satu putaran penuh pada skala putar sama dengan 0,5 mm pada skala tetap. Ketelitian terkecilnya 0,01 mm.",
      },
      {
        type: "list",
        items: [
          { text: "Baca skala tetap (ST): angka 0,5 mm terakhir sebelum garis referensi skala putar." },
          { text: "Baca skala putar (SP): garis pada skala putar yang segaris dengan garis referensi." },
          { text: "Hasil = ST + SP x 0,01 mm." },
          { text: "Cek kesalahan nol: jatuhkan ujuang sekrup, baca tuas penstop; kalibrasi jika bukan nol." },
        ],
      },
      {
        type: "note",
        text: "Tips TKA: soal sering memberi gambar jangka sorong atau mikrometer. Perhatikan selalu satuan yang diminta, mm atau cm. Konversi: 1 cm = 10 mm. Jangan lupa koreksi kesalahan nol jika disebutkan.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Neraca dan Massa",
      },
      {
        type: "paragraph",
        text: "Neraca tiga lengan digunakan untuk mengukur massa. Ketelitiannya 0,1 g. Massa total adalah jumlah pembacaan ketiga lengan, yaitu lengan belakang (ukuran 100 g), lengan tengah (ukuran 10 g), dan lengan depan (ukuran 1 g). Pastikan neraca dalam keadaan seimbang sebelum pembacaan.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ketidakpastian Pengukuran",
      },
      {
        type: "paragraph",
        text: "Setiap pengukuran tunggal memiliki ketidakpastian sebesar setengah dari skala terkecil alat yang digunakan. Ini merepresentasikan rentang di mana nilai sejati diharapkan berada. Semakin kecil skala terkecil, semakin kecil ketidakpastian, sehingga pengukuran semakin teliti.",
      },
      {
        type: "formula",
        latex: "\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil}",
        description: "Ketidakpastian pengukuran tunggal",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$\\Delta x$", meaning: "ketidakpastian pengukuran", unit: "mm atau cm (sesuai alat)" },
          { symbol: "skala terkecil", meaning: "nilai terkecil yang dapat diukur alat", unit: "mm atau cm", note: "ditentukan oleh jenis alat ukur" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Mistar: ketidakpastian $\\pm 0{,}5$ mm." },
          { text: "Jangka sorong: ketidakpastian $\\pm 0{,}05$ mm." },
          { text: "Mikrometer sekrup: ketidakpastian $\\pm 0{,}005$ mm." },
        ],
      },
      {
        type: "paragraph",
        text: "Jika terdapat kesalahan nol, yaitu alat menunjukkan nilai bukan nol saat tidak ada benda yang diukur, maka hasil sejati adalah hasil pengukuran dikurangi kesalahan nol. Tanda kesalahan nol menentukan penambahan atau pengurangan: jika jarum di atas nol, kurangi; jika di bawah nol, tambahkan.",
      },
      {
        type: "heading",
        level: 2,
        text: "Angka Penting (AP)",
      },
      {
        type: "paragraph",
        text: "Angka penting adalah digit-digit dalam suatu bilangan yang dianggap berarti dan berkontribusi pada ketelitian pengukuran. Penulisan hasil pengukuran harus mencerminkan ketelitian alat melalui jumlah angka penting.",
      },
      {
        type: "list",
        items: [
          { text: "Angka bukan nol selalu angka penting (1 hingga 9)." },
          { text: "Nol di antara angka bukan nol adalah angka penting, misal 2005 memiliki 4 AP." },
          { text: "Nol di depan bukan angka penting, misal 0,0025 memiliki 2 AP." },
          { text: "Nol di belakang koma adalah angka penting, misal 2,500 memiliki 4 AP." },
          { text: "Nol di belakang angka bulat tanpa koma bersifat ambigu; gunakan notasi ilmiah untuk kepastian. 1200 bisa 2, 3, atau 4 AP. Teks $1{,}2 \\times 10^3 = $ 2 AP; $1{,}20 \\times 10^3 = $ 3 AP; $1{,}200 \\times 10^3 = $ 4 AP." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Operasi Angka Penting",
      },
      {
        type: "paragraph",
        text: "Saat melakukan operasi aritmetika pada hasil pengukuran, jumlah angka penting hasil akhir ditentukan oleh bilangan dengan angka penting paling sedikit. Aturan berbeda untuk perkalian/pembagian dan penjumlahan/pengurangan.",
      },
      {
        type: "table",
        headers: ["Operasi", "Aturan", "Contoh"],
        rows: [
          ["Kali / Bagi", "Hasil punya AP sebanyak AP paling sedikit", "2,50 x 4,2 = 10,5 (3 AP dari 4,2? hasil 10,5 = 3 AP)"],
          ["Tambah / Kurang", "Hasil punya desimal sebanyak desimal paling sedikit", "12,5 + 3,42 = 15,9 (1 desimal dari 12,5)"],
        ],
      },
      {
        type: "note",
        text: "Perhatian: dalam perkalian, angka penting menentukan; dalam penjumlahan, jumlah desimal menentukan. Jangan tertukar. Hasil akhir sebaiknya tidak lebih teliti daripada alat yang digunakan.",
        variant: "warning",
      },
      {
        type: "example",
        title: "Pengukuran Mikrometer",
        blocks: [
          { type: "paragraph", text: "Diketahui: sebuah kawat diukur dengan mikrometer sekrup. Skala tetap menunjukkan 2,5 mm dan skala putar menunjukkan 23. Ditanyakan: diameter kawat?" },
          { type: "paragraph", text: "Penyelesaian: pembacaan diameter merupakan penjumlahan skala tetap dan kontribusi skala putar sesuai ketelitian 0,01 mm." },
          {
            type: "formula",
            latex: "d = ST + SP \\times 0{,}01 \\text{ mm}",
            description: "Rumus pembacaan mikrometer sekrup",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$d$", meaning: "diameter benda yang diukur", unit: "mm" },
              { symbol: "$ST$", meaning: "pembacaan skala tetap", unit: "mm" },
              { symbol: "$SP$", meaning: "pembacaan skala putar", unit: "tanpa satuan (angka)", note: "dikalikan ketelitian 0,01 mm" },
            ],
          },
          {
            type: "formula",
            latex: "d = 2{,}5 + 23 \\times 0{,}01 = 2{,}5 + 0{,}23 = 2{,}73 \\text{ mm}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$2{,}5$", meaning: "pembacaan skala tetap", unit: "mm" },
              { symbol: "$23$", meaning: "pembacaan skala putar", unit: "tanpa satuan" },
              { symbol: "$0{,}01$", meaning: "ketelitian mikrometer", unit: "mm" },
            ],
          },
          { type: "paragraph", text: "Jawaban: diameter kawat = 2,73 mm, yang memiliki 3 angka penting sesuai ketelitian alat." },
        ],
      },
      {
        type: "example",
        title: "Pengukuran Jangka Sorong",
        blocks: [
          { type: "paragraph", text: "Diketahui: jangka sorong menunjukkan skala utama 12 mm dan garis nonius ke-4 yang segaris. Ditanyakan: hasil pengukuran dan ketidakpastiannya?" },
          {
            type: "formula",
            latex: "x = SU + SN \\times 0{,}1 \\text{ mm}",
            description: "Rumus pembacaan jangka sorong",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$x$", meaning: "hasil pengukuran", unit: "mm" },
              { symbol: "$SU$", meaning: "skala utama", unit: "mm" },
              { symbol: "$SN$", meaning: "skala nonius", unit: "tanpa satuan" },
              { symbol: "$0{,}1$", meaning: "ketelitian jangka sorong", unit: "mm" },
            ],
          },
          {
            type: "formula",
            latex: "x = 12 + 4 \\times 0{,}1 = 12{,}4 \\text{ mm}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$12$", meaning: "skala utama", unit: "mm" },
              { symbol: "$4$", meaning: "skala nonius", unit: "tanpa satuan" },
            ],
          },
          { type: "paragraph", text: "Ketidakpastian: $\\Delta x = \\frac{1}{2} \\times 0{,}1 = 0{,}05$ mm. Jadi hasil pengukuran = $(12{,}4 \\pm 0{,}05)$ mm." },
          { type: "paragraph", text: "Jawaban: 12,4 mm dengan ketidakpastian $\\pm 0{,}05$ mm." },
        ],
      },
      {
        type: "note",
        text: "Notasi ilmiah ditulis $a \\times 10^n$ dengan $1 \\le a < 10$. Berguna untuk menulis angka sangat besar atau sangat kecil dan menentukan jumlah AP dengan pasti, misal $0{,}000250 = 2{,}50 \\times 10^{-4}$ (3 AP).",
        variant: "info",
      },
    ],
  },
  {
    slug: "gerak-lurus",
    no: 2,
    title: "Gerak Lurus",
    category: "Mekanika",
    summary: "GLB, GLBB, gerak vertikal, kejar-kejaran, dan interpretasi grafik kinematika.",
    blocks: [
      {
        type: "paragraph",
        text: "Kinematika mempelajari gerak benda tanpa memperhatikan penyebabnya. Besaran utama dalam gerak lurus: jarak (skalar), perpindahan (vektor), kelajuan, kecepatan, dan percepatan. Memahami perbedaan besaran skalar dan vektor sangat penting.",
      },
      {
        type: "definition",
        term: "Perpindahan",
        definition: "Perubahan posisi benda, yaitu selisih posisi akhir dan posisi awal ($\\Delta x = x_2 - x_1$). Nilai perpindahan dapat negatif, nol, atau positif tergantung arah gerak.",
      },
      {
        type: "heading",
        level: 2,
        text: "Besaran Dasar Gerak Lurus",
      },
      {
        type: "table",
        headers: ["Besaran", "Tipe", "Rumus", "Satuan"],
        rows: [
          ["Jarak ($s$)", "Skalar", "panjang lintasan total", "m"],
          ["Perpindahan ($\\Delta x$)", "Vektor", "$\\Delta x = x_f - x_i$", "m"],
          ["Kelajuan rata-rata", "Skalar", "$v = s/t$", "m/s"],
          ["Kecepatan rata-rata", "Vektor", "$\\vec v = \\Delta x / \\Delta t$", "m/s"],
          ["Percepatan", "Vektor", "$a = \\Delta v / \\Delta t$", "m/s^2"],
        ],
      },
      {
        type: "note",
        text: "Kelajuan rata-rata tidak sama dengan kecepatan rata-rata. Kelajuan = total jarak / waktu, sedangkan kecepatan = perpindahan / waktu. Benda yang kembali ke titik awal memiliki perpindahan nol tetapi jarak tidak nol.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Gerak Lurus Beraturan (GLB)",
      },
      {
        type: "paragraph",
        text: "GLB adalah gerak dengan kecepatan konstan sehingga percepatan nol. Pada grafik posisi terhadap waktu (s-t) terlihat garis lurus miring dengan gradien sama dengan kecepatan. Pada grafik kecepatan terhadap waktu (v-t) terlihat garis horizontal lurus.",
      },
      {
        type: "formula",
        latex: "s = v \\cdot t",
        description: "Rumus GLB, jarak tempuh pada gerak dengan kecepatan konstan",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$s$", meaning: "jarak tempuh", unit: "m" },
          { symbol: "$v$", meaning: "kecepatan konstan", unit: "m/s" },
          { symbol: "$t$", meaning: "waktu tempuh", unit: "s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Gerak Lurus Berubah Beraturan (GLBB)",
      },
      {
        type: "paragraph",
        text: "GLBB adalah gerak dengan percepatan konstan. Benda dipercepat maupun diperlambat dengan percepatan tetap. Tiga persamaan utama GLBB menghubungkan kecepatan awal ($v_0$), kecepatan akhir ($v_t$), percepatan ($a$), waktu ($t$), dan jarak ($s$). Pilih persamaan yang tidak memuat besaran yang tidak diketahui dan tidak ditanyakan.",
      },
      {
        type: "formula",
        latex: "v_t = v_0 + a t",
        description: "Kecepatan akhir setelah waktu t",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$v_t$", meaning: "kecepatan akhir", unit: "m/s" },
          { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
          { symbol: "$a$", meaning: "percepatan konstan", unit: "m/s^2", note: "positif = dipercepat, negatif = diperlambat" },
          { symbol: "$t$", meaning: "waktu", unit: "s" },
        ],
      },
      {
        type: "formula",
        latex: "s = v_0 t + \\frac{1}{2} a t^2",
        description: "Jarak tempuh dalam waktu t",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$s$", meaning: "jarak (perpindahan) yang ditempuh", unit: "m" },
          { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
          { symbol: "$t$", meaning: "waktu", unit: "s" },
          { symbol: "$a$", meaning: "percepatan konstan", unit: "m/s^2" },
        ],
      },
      {
        type: "formula",
        latex: "v_t^2 = v_0^2 + 2 a s",
        description: "Hubungan kecepatan dan jarak tanpa waktu",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$v_t$", meaning: "kecepatan akhir", unit: "m/s" },
          { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
          { symbol: "$a$", meaning: "percepatan konstan", unit: "m/s^2" },
          { symbol: "$s$", meaning: "jarak tempuh", unit: "m" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Dipercepat: $a$ positif, kecepatan bertambah terhadap waktu." },
          { text: "Diperlambat: $a$ negatif, kecepatan berkurang terhadap waktu." },
          { text: "Dari diam: $v_0 = 0$, sehingga $s = \\frac{1}{2} a t^2$ dan $v_t = a t$." },
          { text: "Kecepatan rata-rata pada GLBB: $\\bar v = (v_0 + v_t)/2$." },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Interpretasi Grafik",
      },
      {
        type: "image",
        src: "/diagrams/gerak-lurus-grafik.svg",
        alt: "Grafik posisi-waktu dan grafik kecepatan-waktu untuk gerak dipercepat",
        caption: "Gradien grafik s-t sama dengan besar kecepatan, sedangkan luas di bawah grafik v-t sama dengan perpindahan.",
      },
      {
        type: "table",
        headers: ["Grafik", "Arti Gradien", "Arti Luas"],
        rows: [
          ["$v$-$t$", "gradien = percepatan $a$", "luas di bawah grafik = jarak $s$"],
          ["$s$-$t$", "gradien = kecepatan $v$", "kurva melengkung menunjukkan ada percepatan"],
          ["$a$-$t$", "gradien = perubahan percepatan", "luas di bawah grafik = perubahan kecepatan $\\Delta v$"],
        ],
      },
      {
        type: "note",
        text: "Tips TKA: pada soal grafik, tentukan besaran yang ditanyakan (jarak, kecepatan rata-rata, percepatan) dari gradien atau luas. Selalu periksa dimensi waktu tempuh yang ditanyakan.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Gerak Vertikal",
      },
      {
        type: "paragraph",
        text: "Gerak vertikal adalah kasus khusus GLBB dengan percepatan gravitasi $g \\approx 10$ m/s^2 ke bawah. Ada dua jenis utama: jatuh bebas dan lempar vertikal (ke atas atau ke bawah). Tanda positif/negatif bergantung sistem koordinat yang dipilih; konvensi umum: ke atas positif, ke bawah negatif, atau sebaliknya dengan konsisten.",
      },
      {
        type: "heading",
        level: 3,
        text: "Jatuh Bebas",
      },
      {
        type: "paragraph",
        text: "Benda dijatuhkan dari ketinggian $h$ dengan kecepatan awal nol, tanpa hambatan udara. Semua benda, terlepas masanya, jatuh dengan percepatan yang sama (dalam vakum). Rumus yang digunakan:",
      },
      {
        type: "list",
        items: [
          { text: "Kecepatan setelah t: $v = g t$." },
          { text: "Ketinggian: $h = \\frac{1}{2} g t^2$." },
          { text: "Kecepatan saat sampai tanah: $v = \\sqrt{2 g h}$." },
          { text: "Waktu jatuh: $t = \\sqrt{2 h / g}$." },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Lempar ke Atas",
      },
      {
        type: "paragraph",
        text: "Benda dilempar ke atas dengan kecepatan awal $v_0$, mengalami perlambatan $a = -g$ (jika ke atas positif). Karena simetri gerak, waktu naik sama dengan waktu turun dan kecepatan saat sampai titik lempar sama besar berlawanan arah.",
      },
      {
        type: "formula",
        latex: "t_{naik} = \\frac{v_0}{g}",
        description: "Waktu untuk mencapai titik tertinggi",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$t_{naik}$", meaning: "waktu naik ke puncak", unit: "s" },
          { symbol: "$v_0$", meaning: "kecepatan awal lempar", unit: "m/s" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2", note: "diambil $g \\approx 10$ m/s^2" },
        ],
      },
      {
        type: "formula",
        latex: "h_{maks} = \\frac{v_0^2}{2 g}",
        description: "Ketinggian maksimum dari titik lempar",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$h_{maks}$", meaning: "ketinggian maksimum", unit: "m" },
          { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Di puncak trajektori: kecepatan sesaat $v = 0$, tetapi percepatan tetap $g$ ke bawah." },
          { text: "Waktu total di udara (hingga kembali ke titik lempar): $t_{total} = 2 t_{naik} = 2 v_0 / g$." },
          { text: "Kecepatan saat kembali ke titik lempar sama besar dengan kecepatan awal, arah berlawanan." },
        ],
      },
      {
        type: "note",
        text: "Sifat simetri: waktu naik = waktu turun, kecepatan saat sampai ke tanah = kecepatan awal. Ini sering ditanyakan di TKA, terutama pada pilihan ganda yang mengecoh.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Kejar-kejaran",
      },
      {
        type: "paragraph",
        text: "Soal kejar-kejaran diselesaikan dengan menyamakan posisi kedua benda pada waktu yang sama. Tentukan titik acuan dan arah positif yang konsisten, lalu gunakan $s_1 = s_2 + s_{awal}$ (atau selisih sesuai posisi awal). Pastikan waktu dihitung dari titik awal masing-masing.",
      },
      {
        type: "example",
        title: "Mobil Rem Darurat",
        blocks: [
          { type: "paragraph", text: "Diketahui: mobil melaju 20 m/s lalu direm dengan perlambatan konstan 4 m/s^2. Ditanyakan: jarak yang ditempuh hingga berhenti?" },
          { type: "paragraph", text: "Penyelesaian: gunakan persamaan GLBB yang menghubungkan kecepatan akhir, kecepatan awal, percepatan, dan jarak. Pada saat berhenti, kecepatan akhir $v_t = 0$." },
          {
            type: "formula",
            latex: "v_t^2 = v_0^2 + 2 a s",
            description: "Persamaan GLBB tanpa waktu",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$v_t$", meaning: "kecepatan akhir (nol saat berhenti)", unit: "m/s" },
              { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$a$", meaning: "percepatan (perlambatan)", unit: "m/s^2" },
              { symbol: "$s$", meaning: "jarak pengereman", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "0 = 20^2 + 2(-4) s",
            description: "Substitusi nilai, perlambatan diambil negatif",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$20$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$-4$", meaning: "perlambatan", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "s = \\frac{400}{8} = 50 \\text{ m}",
            description: "Hasil perhitungan",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$s$", meaning: "jarak pengereman", unit: "m" },
            ],
          },
          { type: "paragraph", text: "Jawaban: mobil menempuh 50 m sebelum berhenti." },
        ],
      },
      {
        type: "example",
        title: "Benda Dilempar Vertikal ke Atas",
        blocks: [
          { type: "paragraph", text: "Diketahui: bola dilempar ke atas dengan kecepatan 20 m/s. Gunakan $g = 10$ m/s^2. Ditanyakan: ketinggian maksimum dan waktu total di udara?" },
          {
            type: "formula",
            latex: "h_{maks} = \\frac{v_0^2}{2 g}",
            description: "Ketinggian maksimum",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$h_{maks}$", meaning: "ketinggian maksimum", unit: "m" },
              { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "h_{maks} = \\frac{20^2}{2 \\times 10} = \\frac{400}{20} = 20 \\text{ m}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$20$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "t_{total} = \\frac{2 v_0}{g}",
            description: "Waktu total di udara",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$t_{total}$", meaning: "waktu total di udara", unit: "s" },
              { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "t_{total} = \\frac{2 \\times 20}{10} = 4 \\text{ s}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$t_{total}$", meaning: "waktu total di udara", unit: "s", note: "hasil perhitungan" },
              { symbol: "$20$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          { type: "paragraph", text: "Jawaban: ketinggian maksimum 20 m dan waktu total di udara 4 s." },
        ],
      },
      {
        type: "example",
        title: "Jatuh Bebas dari Ketinggian",
        blocks: [
          { type: "paragraph", text: "Diketahui: batu dijatuhkan dari ketinggian 45 m. Gunakan $g = 10$ m/s^2. Ditanyakan: waktu jatuh dan kecepatan saat sampai tanah?" },
          {
            type: "formula",
            latex: "h = \\frac{1}{2} g t^2",
            description: "Rumus jatuh bebas dari diam",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$h$", meaning: "ketinggian jatuh", unit: "m" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          {
            type: "formula",
            latex: "45 = \\frac{1}{2} \\times 10 \\times t^2 \\implies t^2 = 9 \\implies t = 3 \\text{ s}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$45$", meaning: "ketinggian jatuh", unit: "m" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s", note: "hasil 3 s" },
            ],
          },
          {
            type: "formula",
            latex: "v = g t",
            description: "Kecepatan saat sampai tanah (dari diam)",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$v$", meaning: "kecepatan akhir", unit: "m/s" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          {
            type: "formula",
            latex: "v = 10 \\times 3 = 30 \\text{ m/s}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$v$", meaning: "kecepatan saat sampai tanah", unit: "m/s", note: "hasil perhitungan" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$3$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          { type: "paragraph", text: "Jawaban: waktu jatuh 3 s dan kecepatan saat sampai tanah 30 m/s." },
        ],
      },
    ],
  },
  {
    slug: "gerak-lengkung",
    no: 3,
    title: "Gerak Lengkung",
    category: "Mekanika",
    summary: "Gerak parabola horizontal dan sudut, gerak melingkar beraturan, dan hubungan roda.",
    blocks: [
      {
        type: "paragraph",
        text: "Gerak lengkung terjadi ketika kecepatan dan percepatan tidak sejajar. Prinsip penting: gerak lengkung dapat diuraikan menjadi komponen gerak lurus pada sumbu x dan sumbu y yang masing-masing independen. Gerak pada sumbu x tidak memengaruhi gerak pada sumbu y.",
      },
      {
        type: "definition",
        term: "Gerak Parabola",
        definition: "Gerak benda yang lintasannya berbentuk parabola karena pengaruh gravitasi, dengan komponen horizontal berupa GLB dan komponen vertikal berupa GLBB (jatuh bebas/perlambatan).",
      },
      {
        type: "heading",
        level: 2,
        text: "Gerak Parabola - Lempar Horizontal",
      },
      {
        type: "image",
        src: "/diagrams/gerak-lengkung-parabola.svg",
        alt: "Lembaran gerak parabola dengan komponen kecepatan horizontal dan vertikal",
        caption: "Komponen kecepatan horizontal tetap, sedangkan komponen vertikal berkurang karena percepatan gravitasi.",
      },
      {
        type: "paragraph",
        text: "Benda dilempar horizontal dari ketinggian $h$ dengan kecepatan awal $v_0$. Sumbu x adalah GLB (percepatan nol), sumbu y adalah jatuh bebas (percepatan $g$). Kecepatan awal vertikal nol.",
      },
      {
        type: "formula",
        latex: "v_x = v_0, \\quad v_y = g t, \\quad x = v_0 t, \\quad y = \\frac{1}{2} g t^2",
        description: "Komponen kecepatan dan posisi untuk lempar horizontal",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$v_x$", meaning: "kecepatan horizontal (konstan)", unit: "m/s" },
          { symbol: "$v_0$", meaning: "kecepatan awal lempar horizontal", unit: "m/s" },
          { symbol: "$v_y$", meaning: "kecepatan vertikal", unit: "m/s" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$t$", meaning: "waktu sejak dilempar", unit: "s" },
          { symbol: "$x$", meaning: "posisi horizontal", unit: "m" },
          { symbol: "$y$", meaning: "posisi vertikal (jatuh)", unit: "m" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Waktu jatuh: $t = \\sqrt{2 h / g}$, tidak bergantung pada $v_0$." },
          { text: "Jangkauan horizontal: $x = v_0 \\sqrt{2 h / g}$." },
          { text: "Kecepatan resultan saat sampai tanah: $v = \\sqrt{v_x^2 + v_y^2}$." },
          { text: "Arah kecepatan: $\\tan \\theta = v_y / v_x$." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Gerak Parabola - Sudut Elevasi $\\alpha$",
      },
      {
        type: "paragraph",
        text: "Benda dilempar dengan kecepatan $v_0$ dan sudut elevasi $\\alpha$ terhadap horizontal. Komponen awal: $v_{0x} = v_0 \\cos \\alpha$ (konstan, GLB) dan $v_{0y} = v_0 \\sin \\alpha$ (GLBB dengan $a = -g$).",
      },
      {
        type: "formula",
        latex: "t_{puncak} = \\frac{v_0 \\sin \\alpha}{g}",
        description: "Waktu untuk mencapai puncak trajektori",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$t_{puncak}$", meaning: "waktu mencapai puncak", unit: "s" },
          { symbol: "$v_0$", meaning: "kecepatan awal lempar", unit: "m/s" },
          { symbol: "$\\alpha$", meaning: "sudut elevasi terhadap horizontal", unit: "derajat (°)", note: "konversi ke radian jika perlu" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
        ],
      },
      {
        type: "formula",
        latex: "h_{maks} = \\frac{v_0^2 \\sin^2 \\alpha}{2 g}",
        description: "Ketinggian maksimum dari titik lempar",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$h_{maks}$", meaning: "ketinggian maksimum", unit: "m" },
          { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
          { symbol: "$\\alpha$", meaning: "sudut elevasi", unit: "derajat (°)" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
        ],
      },
      {
        type: "formula",
        latex: "R = \\frac{v_0^2 \\sin 2\\alpha}{g}",
        description: "Jangkauan horizontal maksimum",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$R$", meaning: "jangkauan horizontal", unit: "m" },
          { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
          { symbol: "$\\alpha$", meaning: "sudut elevasi", unit: "derajat (°)" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
        ],
      },
      {
        type: "note",
        text: "Jangkauan R maksimum terjadi saat sudut 45 derajat karena sin 90 = 1. Untuk dua sudut pelengkap, misal 30 derajat dan 60 derajat, jangkauan sama tetapi ketinggian berbeda.",
        variant: "tip",
      },
      {
        type: "note",
        text: "Perhatian: waktu total di udara untuk lempar sudut adalah $t_{total} = 2 t_{puncak} = 2 v_0 \\sin\\alpha / g$. Jangan gunakan waktu jatuh bebas murni kecuali jika sudut 90 derajat (lempar vertikal).",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Gerak Melingkar Beraturan (GMB)",
      },
      {
        type: "image",
        src: "/diagrams/gerak-lengkung-melingkar.svg",
        alt: "Gerak melingkar beraturan dengan gaya sentripetal yang menuju pusat",
        caption: "Besar kecepatan tetap tetapi arahnya selalu berubah, sehingga diperlukan gaya sentripetal.",
      },
      {
        type: "paragraph",
        text: "GMB adalah gerak melingkar dengan kelajuan linear konstan. Kecepatan tetap besarnya tetapi arahnya berubah terus (arah tangensial), sehingga benda mengalami percepatan sentripetal yang arahnya menuju pusat lingkaran. Foton menitikberatkan pada hubungan besaran-besaran berikut.",
      },
      {
        type: "list",
        items: [
          { text: "Periode: $T = t / n$ (waktu untuk satu putaran penuh)." },
          { text: "Frekuensi: $f = n / t = 1 / T$ (jumlah putaran per satuan waktu)." },
          { text: "Kecepatan sudut: $\\omega = 2\\pi / T = 2\\pi f$." },
          { text: "Kecepatan linear: $v = \\omega r$." },
        ],
      },
      {
        type: "formula",
        latex: "a_s = \\frac{v^2}{r} = \\omega^2 r",
        description: "Percepatan sentripetal (arah menuju pusat)",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$a_s$", meaning: "percepatan sentripetal", unit: "m/s^2" },
          { symbol: "$v$", meaning: "kecepatan linear", unit: "m/s" },
          { symbol: "$r$", meaning: "jari-jari lingkaran", unit: "m" },
          { symbol: "$\\omega$", meaning: "kecepatan sudut", unit: "rad/s" },
        ],
      },
      {
        type: "formula",
        latex: "F_s = m \\frac{v^2}{r} = m \\omega^2 r",
        description: "Gaya sentripetal yang diperlukan",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$F_s$", meaning: "gaya sentripetal", unit: "N" },
          { symbol: "$m$", meaning: "massa benda", unit: "kg" },
          { symbol: "$v$", meaning: "kecepatan linear", unit: "m/s" },
          { symbol: "$r$", meaning: "jari-jari lintasan", unit: "m" },
          { symbol: "$\\omega$", meaning: "kecepatan sudut", unit: "rad/s" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Roda dan Hubungan Gerak",
      },
      {
        type: "paragraph",
        text: "Pada sistem roda yang dihubungkan, besaran yang sama ditentukan oleh jenis hubungannya. Pada roda sepusat (seporos), kecepatan sudut sama. Pada roda bersinggungan atau dihubungkan sabuk, kecepatan linear sama.",
      },
      {
        type: "table",
        headers: ["Hubungan", "Besaran Sama", "Rumus"],
        rows: [
          ["Sepusat (seporos)", "$\\omega$ dan $T$", "$\\omega_1 = \\omega_2$, $v = \\omega r$"],
          ["Bersinggungan", "$v$ linear", "$v_1 = v_2$, $\\omega_1 r_1 = \\omega_2 r_2$"],
          ["Sabuk / rantai", "$v$ linear", "$v_1 = v_2$, $\\omega_1 r_1 = \\omega_2 r_2$"],
        ],
      },
      {
        type: "example",
        title: "Jangkauan Maksimum",
        blocks: [
          { type: "paragraph", text: "Diketahui: peluru ditembakkan dengan $v_0 = 20$ m/s pada sudut 30 derajat ($g = 10$ m/s^2). Ditanyakan: jangkauan horizontal?" },
          {
            type: "formula",
            latex: "R = \\frac{v_0^2 \\sin 2\\alpha}{g}",
            description: "Rumus jangkauan",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$R$", meaning: "jangkauan horizontal", unit: "m" },
              { symbol: "$v_0$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$\\alpha$", meaning: "sudut elevasi", unit: "derajat (°)" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "R = \\frac{20^2 \\times \\sin 60^\\circ}{10} = \\frac{400 \\times 0{,}866}{10} = 34{,}64 \\text{ m}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$R$", meaning: "jangkauan horizontal", unit: "m", note: "hasil perhitungan" },
              { symbol: "$20$", meaning: "kecepatan awal", unit: "m/s" },
              { symbol: "$60^\\circ$", meaning: "dua kali sudut elevasi (sin 60)", unit: "derajat" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          { type: "paragraph", text: "Jawaban: jangkauan maksimum 34,64 m." },
        ],
      },
      {
        type: "example",
        title: "Lempar Horizontal dari Gedung",
        blocks: [
          { type: "paragraph", text: "Diketahui: bola dilempar horizontal dari gedung setinggi 20 m dengan kecepatan 15 m/s ($g = 10$ m/s^2). Ditanyakan: waktu jatuh, jangkauan horizontal, dan kecepatan saat sampai tanah?" },
          {
            type: "formula",
            latex: "t = \\sqrt{\\frac{2 h}{g}}",
            description: "Waktu jatuh (komponen vertikal dari diam)",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s" },
              { symbol: "$h$", meaning: "ketinggian", unit: "m" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "t = \\sqrt{\\frac{2 \\times 20}{10}} = \\sqrt{4} = 2 \\text{ s}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s", note: "hasil perhitungan" },
              { symbol: "$20$", meaning: "ketinggian", unit: "m" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "x = v_0 t",
            description: "Jangkauan horizontal (GLB)",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$x$", meaning: "jangkauan horizontal", unit: "m" },
              { symbol: "$v_0$", meaning: "kecepatan awal horizontal", unit: "m/s" },
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          {
            type: "formula",
            latex: "x = 15 \\times 2 = 30 \\text{ m}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$x$", meaning: "jangkauan horizontal", unit: "m", note: "hasil perhitungan" },
              { symbol: "$15$", meaning: "kecepatan awal horizontal", unit: "m/s" },
              { symbol: "$2$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          {
            type: "formula",
            latex: "v = \\sqrt{v_x^2 + (gt)^2}",
            description: "Kecepatan resultan saat sampai tanah",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$v$", meaning: "kecepatan resultan", unit: "m/s" },
              { symbol: "$v_x$", meaning: "kecepatan horizontal (konstan)", unit: "m/s" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$t$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          {
            type: "formula",
            latex: "v = \\sqrt{15^2 + (10 \\times 2)^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25 \\text{ m/s}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$v$", meaning: "kecepatan resultan akhir", unit: "m/s", note: "hasil perhitungan" },
              { symbol: "$15$", meaning: "kecepatan horizontal", unit: "m/s" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$2$", meaning: "waktu jatuh", unit: "s" },
            ],
          },
          { type: "paragraph", text: "Jawaban: waktu jatuh 2 s, jangkauan 30 m, kecepatan akhir 25 m/s." },
        ],
      },
      {
        type: "example",
        title: "Satelit dan Percepatan Sentripetal",
        blocks: [
          { type: "paragraph", text: "Diketahui: benda 2 kg bergerak melingkar berjari-jari 4 m dengan kecepatan 8 m/s. Ditanyakan: percepatan sentripetal dan gaya sentripetal?" },
          {
            type: "formula",
            latex: "a_s = \\frac{v^2}{r}",
            description: "Percepatan sentripetal",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a_s$", meaning: "percepatan sentripetal", unit: "m/s^2" },
              { symbol: "$v$", meaning: "kecepatan linear", unit: "m/s" },
              { symbol: "$r$", meaning: "jari-jari lintasan", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "a_s = \\frac{8^2}{4} = \\frac{64}{4} = 16 \\text{ m/s}^2",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a_s$", meaning: "percepatan sentripetal", unit: "m/s^2", note: "hasil perhitungan" },
              { symbol: "$8$", meaning: "kecepatan linear", unit: "m/s" },
              { symbol: "$4$", meaning: "jari-jari lintasan", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "F_s = m a_s",
            description: "Gaya sentripetal (Hukum II Newton)",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$F_s$", meaning: "gaya sentripetal", unit: "N" },
              { symbol: "$m$", meaning: "massa", unit: "kg" },
              { symbol: "$a_s$", meaning: "percepatan sentripetal", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "F_s = 2 \\times 16 = 32 \\text{ N}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$F_s$", meaning: "gaya sentripetal", unit: "N", note: "hasil perhitungan" },
              { symbol: "$2$", meaning: "massa benda", unit: "kg" },
              { symbol: "$16$", meaning: "percepatan sentripetal", unit: "m/s^2" },
            ],
          },
          { type: "paragraph", text: "Jawaban: percepatan sentripetal 16 m/s^2 dan gaya sentripetal 32 N." },
        ],
      },
    ],
  },
  {
    slug: "hukum-newton",
    no: 4,
    title: "Hukum Newton",
    category: "Mekanika",
    summary: "Hukum I, II, III Newton dengan aplikasi bidang miring, katrol Atwood, lift, gesekan, dan benda bersentuhan.",
    blocks: [
      {
        type: "paragraph",
        text: "Hukum Newton menghubungkan gaya dengan gerak benda. Dinamika mempelajari penyebab gerak, yaitu gaya. Langkah umum: gambar diagram benda bebas (free body diagram), pilih sumbu, tulis $\\Sigma F = m a$ pada setiap sumbu, lalu selesaikan sistem persamaan.",
      },
      {
        type: "image",
        src: "/diagrams/bidang-miring.svg",
        alt: "Diagram bidang miring dengan gaya berat, normal, dan gesekan",
        caption: "Gambar: gaya-gaya pada benda di bidang miring; vektor berat diuraikan menjadi komponen sejajar dan tegak lurus bidang.",
      },
      {
        type: "heading",
        level: 2,
        text: "Tiga Hukum Newton",
      },
      {
        type: "list",
        items: [
          { text: "Hukum I (Kelembaman): $\\Sigma F = 0$ maka benda diam atau bergerak lurus beraturan. Benda cenderung mempertahankan keadaan geraknya." },
          { text: "Hukum II: $\\Sigma F = m a$. Percepatan berbanding lurus dengan gaya total dan berbanding terbalik dengan massa." },
          { text: "Hukum III (Aksi-Reaksi): $F_{aksi} = -F_{reaksi}$. Sama besar, berlawanan arah, bekerja pada dua benda berbeda." },
        ],
      },
      {
        type: "note",
        text: "Pasangan aksi-reaksi tidak pernah saling meniadakan karena bekerja pada benda yang berbeda. Gaya berat benda dan gaya normal bukan pasangan aksi-reaksi karena keduanya bekerja pada benda yang sama (meskipun arahnya berlawanan, asal gayanya berbeda).",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Jenis-Jenis Gaya",
      },
      {
        type: "table",
        headers: ["Gaya", "Rumus", "Keterangan"],
        rows: [
          ["Berat ($w$)", "$w = m g$", "selalu ke bawah, $g \\approx 10$ m/s^2"],
          ["Normal ($N$)", "disesuaikan", "tegak lurus permukaan sentuh"],
          ["Tegangan tali ($T$)", "disesuaikan", "sepanjang tali, arah menjauhi benda"],
          ["Gesek statis ($f_s$)", "$f_s \\le \\mu_s N$", "maksimum saat benda hampir bergerak"],
          ["Gesek kinetis ($f_k$)", "$f_k = \\mu_k N$", "saat benda sudah bergerak"],
          ["Pegas (Hooke)", "$F = k x$", "arah berlawanan dengan simpangan dari titik setimbang"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Aplikasi Hukum Newton",
      },
      {
        type: "heading",
        level: 3,
        text: "Bidang Miring",
      },
      {
        type: "paragraph",
        text: "Benda bermassa $m$ pada bidang miring bersudut $\\theta$. Gaya berat diuraikan menjadi komponen sejajar bidang ($mg \\sin\\theta$) dan tegak lurus bidang ($mg \\cos\\theta$). Gesekan (jika ada) bekerja melawan gerak.",
      },
      {
        type: "formula",
        latex: "a = g \\sin \\theta",
        description: "Percepatan pada bidang miring licin",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$a$", meaning: "percepatan benda sepanjang bidang miring", unit: "m/s^2" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$\\theta$", meaning: "sudut bidang miring terhadap horizontal", unit: "derajat (°)" },
        ],
      },
      {
        type: "formula",
        latex: "a = g (\\sin \\theta - \\mu_k \\cos \\theta)",
        description: "Percepatan pada bidang miring kasar",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$a$", meaning: "percepatan benda", unit: "m/s^2" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$\\theta$", meaning: "sudut bidang miring", unit: "derajat (°)" },
          { symbol: "$\\mu_k$", meaning: "koefisien gesek kinetis", unit: "tanpa satuan" },
        ],
      },
      {
        type: "formula",
        latex: "N = m g \\cos \\theta",
        description: "Gaya normal pada bidang miring",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$N$", meaning: "gaya normal (tegak lurus bidang)", unit: "N" },
          { symbol: "$m$", meaning: "massa benda", unit: "kg" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$\\theta$", meaning: "sudut bidang miring", unit: "derajat (°)" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Katrol (Sistem Atwood)",
      },
      {
        type: "image",
        src: "/diagrams/hukum-newton-katrol.svg",
        alt: "Sistem Atwood dengan dua massa, tegangan tali, dan arah percepatan",
        caption: "Pada katrol ideal tegangan tali sama di kedua sisi, dan kedua massa memiliki percepatan yang berlawanan arah.",
      },
      {
        type: "paragraph",
        text: "Untuk katrol ideal (tanpa massa dan tanpa gesekan), dua massa $m_1$ dan $m_2$ ($m_2 > m_1$) dihubungkan tali. Sistem bergerak dengan percepatan yang sama besar pada kedua massa (ke arah massa yang lebih besar).",
      },
      {
        type: "formula",
        latex: "a = \\frac{(m_2 - m_1) g}{m_1 + m_2}",
        description: "Percepatan sistem Atwood",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$a$", meaning: "percepatan sistem", unit: "m/s^2" },
          { symbol: "$m_1, m_2$", meaning: "massa kedua benda", unit: "kg", note: "$m_2 > m_1$" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
        ],
      },
      {
        type: "formula",
        latex: "T = \\frac{2 m_1 m_2 g}{m_1 + m_2}",
        description: "Tegangan tali pada sistem Atwood",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$T$", meaning: "tegangan tali", unit: "N" },
          { symbol: "$m_1, m_2$", meaning: "massa kedua benda", unit: "kg" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Lift (Elevator)",
      },
      {
        type: "paragraph",
        text: "Dalam lift yang bergerak, benda di dalam mengalami berat semu. Gaya normal yang dikerjakan lantai pada benda (timbangan) berubah sesuai percepatan lift. Arah percepatan menentukan apakah benda terasa lebih berat atau lebih ringan.",
      },
      {
        type: "table",
        headers: ["Keadaan", "Gaya Normal", "Berat Semu"],
        rows: [
          ["Naik dipercepat", "$N = m(g + a)$", "lebih berat"],
          ["Naik diperlambat", "$N = m(g - a)$", "lebih ringan"],
          ["Turun dipercepat", "$N = m(g - a)$", "lebih ringan"],
          ["Turun diperlambat", "$N = m(g + a)$", "lebih berat"],
          ["Diam / GLB", "$N = m g$", "normal"],
          ["Hambat bebas", "$N = 0$", "tanpa berat"],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Benda Bersentuhan",
      },
      {
        type: "paragraph",
        text: "Untuk dua benda bersentuhan yang didorong gaya $F$, cari percepatan bersama terlebih dahulu karena kedua benda bergerak bersama (asumsi tidak terpisah). Kemudian cari gaya kontak antara dua benda.",
      },
      {
        type: "formula",
        latex: "a = \\frac{F}{m_1 + m_2}",
        description: "Percepatan bersama kedua benda",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$a$", meaning: "percepatan bersama", unit: "m/s^2" },
          { symbol: "$F$", meaning: "gaya dorong total", unit: "N" },
          { symbol: "$m_1, m_2$", meaning: "massa kedua benda", unit: "kg" },
        ],
      },
      {
        type: "formula",
        latex: "F_{kontak} = m_2 \\cdot a",
        description: "Gaya kontak (jika F mendorong $m_1$ di depan $m_2$)",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$F_{kontak}$", meaning: "gaya kontak antara kedua benda", unit: "N" },
          { symbol: "$m_2$", meaning: "massa benda di depan", unit: "kg" },
          { symbol: "$a$", meaning: "percepatan bersama", unit: "m/s^2" },
        ],
      },
      {
        type: "example",
        title: "Bidang Miring Kasar",
        blocks: [
          { type: "paragraph", text: "Diketahui: benda bermassa 2 kg berada di bidang miring bersudut 30 derajat dengan $\\mu_k = 0{,}2$. Ditanyakan: percepatan benda? (g = 10 m/s^2)" },
          {
            type: "formula",
            latex: "a = g (\\sin \\theta - \\mu_k \\cos \\theta)",
            description: "Rumus percepatan bidang miring kasar",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan benda", unit: "m/s^2" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$\\theta$", meaning: "sudut bidang miring", unit: "derajat (°)" },
              { symbol: "$\\mu_k$", meaning: "koefisien gesek kinetis", unit: "tanpa satuan" },
            ],
          },
          {
            type: "formula",
            latex: "a = 10(\\sin 30^\\circ - 0{,}2 \\cos 30^\\circ)",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan benda", unit: "m/s^2" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$\\sin 30^\\circ$", meaning: "sinus sudut bidang", note: "0,5", unit: "tanpa satuan" },
              { symbol: "$0{,}2$", meaning: "koefisien gesek kinetis", unit: "tanpa satuan" },
              { symbol: "$\\cos 30^\\circ$", meaning: "kosinus sudut bidang", note: "0,866", unit: "tanpa satuan" },
            ],
          },
          {
            type: "formula",
            latex: "a = 10(0{,}5 - 0{,}2 \\times 0{,}866) = 10(0{,}5 - 0{,}173) = 3{,}27 \\text{ m/s}^2",
            description: "Hasil perhitungan",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan benda", unit: "m/s^2", note: "hasil perhitungan" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$0{,}5$", meaning: "$\\sin 30^\\circ$", unit: "tanpa satuan" },
              { symbol: "$0{,}173$", meaning: "$\\mu_k \\cos 30^\\circ$", unit: "tanpa satuan" },
            ],
          },
          { type: "paragraph", text: "Jawaban: percepatan benda = 3,27 m/s^2 ke bawah sepanjang bidang." },
        ],
      },
      {
        type: "example",
        title: "Sistem Atwood",
        blocks: [
          { type: "paragraph", text: "Diketahui: $m_1 = 2$ kg dan $m_2 = 4$ kg dihubungkan dengan tali pada katrol ideal. Ditanyakan: percepatan sistem dan tegangan tali? (g = 10 m/s^2)" },
          {
            type: "formula",
            latex: "a = \\frac{(m_2 - m_1) g}{m_1 + m_2}",
            description: "Percepatan sistem",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan sistem", unit: "m/s^2" },
              { symbol: "$m_1, m_2$", meaning: "massa kedua benda", unit: "kg" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "a = \\frac{(4-2) \\times 10}{2+4} = \\frac{20}{6} = 3{,}33 \\text{ m/s}^2",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan sistem", unit: "m/s^2", note: "hasil perhitungan" },
              { symbol: "$4, 2$", meaning: "massa kedua benda", unit: "kg" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "T = \\frac{2 m_1 m_2 g}{m_1 + m_2}",
            description: "Tegangan tali",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$T$", meaning: "tegangan tali", unit: "N" },
              { symbol: "$m_1, m_2$", meaning: "massa kedua benda", unit: "kg" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "T = \\frac{2 \\times 2 \\times 4 \\times 10}{6} = \\frac{160}{6} = 26{,}67 \\text{ N}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$T$", meaning: "tegangan tali", unit: "N", note: "hasil perhitungan" },
              { symbol: "$2, 4$", meaning: "massa kedua benda", unit: "kg" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
            ],
          },
          { type: "paragraph", text: "Jawaban: percepatan 3,33 m/s^2 dan tegangan tali 26,67 N." },
        ],
      },
      {
        type: "example",
        title: "Lift Bergerak",
        blocks: [
          { type: "paragraph", text: "Diketahui: orang bermassa 60 kg berdiri di atas timbangan dalam lift yang bergerak ke atas dengan percepatan 2 m/s^2. Ditanyakan: pembacaan timbangan? (g = 10 m/s^2)" },
          {
            type: "formula",
            latex: "N = m (g + a)",
            description: "Gaya normal saat lift naik dipercepat",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$N$", meaning: "gaya normal / pembacaan timbangan", unit: "N" },
              { symbol: "$m$", meaning: "massa orang", unit: "kg" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$a$", meaning: "percepatan lift", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "N = 60 \\times (10 + 2) = 60 \\times 12 = 720 \\text{ N}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$N$", meaning: "gaya normal / pembacaan timbangan", unit: "N", note: "hasil perhitungan" },
              { symbol: "$60$", meaning: "massa orang", unit: "kg" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$2$", meaning: "percepatan lift", unit: "m/s^2" },
            ],
          },
          { type: "paragraph", text: "Jawaban: timbangan menunjukkan 720 N (setara 72 kg), lebih berat dari berat sebenarnya 600 N." },
        ],
      },
      {
        type: "example",
        title: "Benda Bersentuhan",
        blocks: [
          { type: "paragraph", text: "Diketahui: dua balok masses $m_1 = 3$ kg dan $m_2 = 5$ kg bersentuhan di permukaan licin. Diberi gaya dorong $F = 16$ N pada $m_1$ sehingga mendorong $m_2$. Ditanyakan: percepatan sistem dan gaya kontak?" },
          {
            type: "formula",
            latex: "a = \\frac{F}{m_1 + m_2}",
            description: "Percepatan bersama",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan bersama", unit: "m/s^2" },
              { symbol: "$F$", meaning: "gaya dorong", unit: "N" },
              { symbol: "$m_1, m_2$", meaning: "massa kedua balok", unit: "kg" },
            ],
          },
          {
            type: "formula",
            latex: "a = \\frac{16}{3 + 5} = \\frac{16}{8} = 2 \\text{ m/s}^2",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$a$", meaning: "percepatan bersama", unit: "m/s^2", note: "hasil perhitungan" },
              { symbol: "$16$", meaning: "gaya dorong", unit: "N" },
              { symbol: "$3, 5$", meaning: "massa kedua balok", unit: "kg" },
            ],
          },
          {
            type: "formula",
            latex: "F_{kontak} = m_2 \\cdot a",
            description: "Gaya kontak",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$F_{kontak}$", meaning: "gaya kontak antar balok", unit: "N" },
              { symbol: "$m_2$", meaning: "massa balok di depan", unit: "kg" },
              { symbol: "$a$", meaning: "percepatan bersama", unit: "m/s^2" },
            ],
          },
          {
            type: "formula",
            latex: "F_{kontak} = 5 \\times 2 = 10 \\text{ N}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$F_{kontak}$", meaning: "gaya kontak antar balok", unit: "N", note: "hasil perhitungan" },
              { symbol: "$5$", meaning: "massa balok di depan", unit: "kg" },
              { symbol: "$2$", meaning: "percepatan bersama", unit: "m/s^2" },
            ],
          },
          { type: "paragraph", text: "Jawaban: percepatan 2 m/s^2 dan gaya kontak 10 N." },
        ],
      },
      {
        type: "note",
        text: "Tips TKA: selalu gambar diagram benda bebas sebelum menulis persamaan. Gaya gesek statis tidak selalu $\\mu_s N$; itu adalah nilai maksimum, gaya sebenarnya menyesuaikan hingga ambang gerak.",
        variant: "tip",
      },
    ],
  },
  {
    slug: "usaha-energi",
    no: 5,
    title: "Usaha dan Energi",
    category: "Mekanika",
    summary: "Usaha, energi kinetik, energi potensial, teorema usaha-energi, kekekalan energi, daya, dan efisiensi.",
    blocks: [
      {
        type: "paragraph",
        text: "Usaha dan energi menghubungkan gaya dengan perubahan keadaan gerak benda. Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk. Prinsip kekekalan energi mekanik sangat sering diujikan, terutama pada lintasan licin, pegas, dan ayunan.",
      },
      {
        type: "definition",
        term: "Energi Mekanik",
        definition: "Jumlah energi kinetik dan energi potensial pada suatu keadaan ($E_m = E_k + E_p$). Pada sistem dengan hanya gaya konservatif, energi mekanik kekal.",
      },
      {
        type: "heading",
        level: 2,
        text: "Usaha",
      },
      {
        type: "image",
        src: "/diagrams/usaha-energi-grafik.svg",
        alt: "Grafik gaya-perpindahan dan diagram konversi energi potensial menjadi kinetik",
        caption: "Usaha sama dengan luas di bawah grafik gaya-perpindahan, dan kekekalan energi mengubah energi potensial menjadi energi kinetik.",
      },
      {
        type: "paragraph",
        text: "Usaha dilakukan oleh gaya ketika titik tangkap gaya berpindah. Nilai usaha bergantung pada besar gaya, besar perpindahan, dan sudut antara keduanya. Jika gaya tegak lurus perpindahan, usaha nol.",
      },
      {
        type: "formula",
        latex: "W = F \\cdot s \\cdot \\cos \\theta",
        description: "Usaha oleh gaya konstan F pada perpindahan s",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$W$", meaning: "usaha", unit: "Joule (J)" },
          { symbol: "$F$", meaning: "besar gaya", unit: "N" },
          { symbol: "$s$", meaning: "besar perpindahan", unit: "m" },
          { symbol: "$\\theta$", meaning: "sudut antara gaya dan perpindahan", unit: "derajat (°)" },
        ],
      },
      {
        type: "table",
        headers: ["Sudut $\\theta$", "Nilai $\\cos \\theta$", "Usaha", "Contoh"],
        rows: [
          ["0 derajat", "1", "positif maksimum", "gaya searah gerak"],
          ["90 derajat", "0", "nol", "gaya normal, gaya sentripetal"],
          ["180 derajat", "-1", "negatif", "gaya gesek melawan gerak"],
        ],
      },
      {
        type: "paragraph",
        text: "Usaha total adalah jumlah usaha dari semua gaya atau $W_{net} = \\Sigma F \\cdot s$ (gaya total dikali perpindahan) pada GLBB. Pada grafik F-s, luas di bawah kurva menyatakan usaha.",
      },
      {
        type: "heading",
        level: 2,
        text: "Energi",
      },
      {
        type: "paragraph",
        text: "Energi adalah kemampuan melakukan usaha. Yang paling sering di TKA adalah energi kinetik (energi gerak), energi potensial gravitasi (energi ketinggian), dan energi potensial pegas (energi deformasi).",
      },
      {
        type: "table",
        headers: ["Jenis Energi", "Rumus", "Keterangan"],
        rows: [
          ["Kinetik ($E_k$)", "$\\frac{1}{2} m v^2$", "energi karena gerak"],
          ["Potensial gravitasi ($E_p$)", "$m g h$", "energi karena ketinggian"],
          ["Potensial pegas", "$\\frac{1}{2} k x^2$", "energi tersimpan dalam pegas"],
        ],
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$E_k$", meaning: "energi kinetik", unit: "J" },
          { symbol: "$m$", meaning: "massa", unit: "kg" },
          { symbol: "$v$", meaning: "kecepatan", unit: "m/s" },
          { symbol: "$E_p$", meaning: "energi potensial gravitasi", unit: "J" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$h$", meaning: "ketinggian terhadap acuan", unit: "m" },
          { symbol: "$k$", meaning: "konstanta pegas", unit: "N/m" },
          { symbol: "$x$", meaning: "simpangan / kompresi pegas", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Susunan Pegas",
      },
      {
        type: "paragraph",
        text: "Konstanta pegas pengganti bergantung pada susunan. Pegas seri lebih lunak (konstanta lebih kecil), pegas paralel lebih kaku (konstanta lebih besar).",
      },
      {
        type: "list",
        items: [
          { text: "Seri: $1/k_s = 1/k_1 + 1/k_2$ (lebih lunak, rentang lebih panjang)." },
          { text: "Paralel: $k_p = k_1 + k_2$ (lebih kaku, deformasi sama)." },
          { text: "Untuk n pegas identik k: seri $k_s = k/n$, paralel $k_p = n k$." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Teorema Usaha-Energi",
      },
      {
        type: "paragraph",
        text: "Usaha total (neto) yang dilakukan pada benda sama dengan perubahan energi kinetiknya. Ini penghubung langsung antara gaya (dinamika) dan kecepatan (kinematika).",
      },
      {
        type: "formula",
        latex: "W_{net} = \\Delta E_k = \\frac{1}{2} m (v_2^2 - v_1^2)",
        description: "Usaha total = perubahan energi kinetik",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$W_{net}$", meaning: "usaha total (neto)", unit: "J" },
          { symbol: "$\\Delta E_k$", meaning: "perubahan energi kinetik", unit: "J" },
          { symbol: "$m$", meaning: "massa", unit: "kg" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan awal dan akhir", unit: "m/s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Kekekalan Energi Mekanik",
      },
      {
        type: "paragraph",
        text: "Jika hanya ada gaya konservatif (gravitasi dan pegas), energi mekanik kekal, sehingga jumlah energi potensial dan kinetik pada dua keadaan sama.",
      },
      {
        type: "formula",
        latex: "E_{p1} + E_{k1} = E_{p2} + E_{k2}",
        description: "$E_m = E_p + E_k$ konstan",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$E_{p1}, E_{p2}$", meaning: "energi potensial gravitasi keadaan 1 dan 2", unit: "J" },
          { symbol: "$E_{k1}, E_{k2}$", meaning: "energi kinetik keadaan 1 dan 2", unit: "J" },
        ],
      },
      {
        type: "paragraph",
        text: "Jika ada gaya non-konservatif (gesekan, hambatan udara), energi mekanik berkurang sebesar usaha gaya tersebut (biasanya negatif).",
      },
      {
        type: "formula",
        latex: "W_{gesek} = \\Delta E_m, \\quad W_{gesek} = - f_k \\cdot s",
        description: "Usaha gesekan mengurangi energi mekanik",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$W_{gesek}$", meaning: "usaha gaya gesek (negatif)", unit: "J" },
          { symbol: "$\\Delta E_m$", meaning: "perubahan energi mekanik", unit: "J" },
          { symbol: "$f_k$", meaning: "gaya gesek kinetis", unit: "N" },
          { symbol: "$s$", meaning: "jarak tempuh", unit: "m" },
        ],
      },
      {
        type: "note",
        text: "Aplikasi penting: benda yang meluncur dari ketinggian h di bidang miring licin memiliki kecepatan $v = \\sqrt{2 g h}$ di bawah, tidak bergantung pada sudut bidang miring maupun massa benda.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Daya dan Efisiensi",
      },
      {
        type: "paragraph",
        text: "Daya adalah laju melakukan usaha, yaitu usaha per satuan waktu. Efisiensi mengukur seberapa banyak energi masukan yang diubah menjadi energi berguna.",
      },
      {
        type: "formula",
        latex: "P = \\frac{W}{t} = F \\cdot v",
        description: "Daya, satuan Watt (W) = J/s",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$P$", meaning: "daya", unit: "Watt (W)" },
          { symbol: "$W$", meaning: "usaha", unit: "J" },
          { symbol: "$t$", meaning: "waktu", unit: "s" },
          { symbol: "$F$", meaning: "gaya", unit: "N" },
          { symbol: "$v$", meaning: "kecepatan", unit: "m/s" },
        ],
      },
      {
        type: "formula",
        latex: "\\eta = \\frac{P_{keluar}}{P_{masuk}} \\times 100\\% = \\frac{W_{berguna}}{W_{total}} \\times 100\\%",
        description: "Efisiensi mesin",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol",
        items: [
          { symbol: "$\\eta$", meaning: "efisiensi", unit: "persen (%)" },
          { symbol: "$P_{keluar}$", meaning: "daya berguna keluaran", unit: "W" },
          { symbol: "$P_{masuk}$", meaning: "daya masukan", unit: "W" },
          { symbol: "$W_{berguna}$", meaning: "kerja berguna", unit: "J" },
          { symbol: "$W_{total}$", meaning: "kerja total masukan", unit: "J" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Aplikasi yang Sering Keluar di TKA",
      },
      {
        type: "list",
        items: [
          { text: "Jatuh bebas dan meluncur licin dari tinggi h: $v = \\sqrt{2 g h}$." },
          { text: "Bandul/ayunan: titik terendah $E_k$ maksimum, titik tertinggi $E_p$ maksimum." },
          { text: "Looping lingkaran vertikal: kecepatan minimum di puncak $v = \\sqrt{g R}$ (saat $N = 0$)." },
          { text: "Benda menabrak pegas: $\\frac{1}{2} m v^2 = \\frac{1}{2} k x^2$ (lintasan licin)." },
          { text: "Bidang miring kasar: $m g h - f_k s = \\frac{1}{2} m v^2$." },
        ],
      },
      {
        type: "example",
        title: "Benda Meluncur ke Pegas",
        blocks: [
          { type: "paragraph", text: "Diketahui: benda 1 kg meluncur dari ketinggian 0,8 m di bidang licin dan menabrak pegas $k = 200$ N/m. Ditanyakan: kompresi maksimum pegas? ($g = 10$ m/s^2)" },
          { type: "paragraph", text: "Gunakan kekekalan energi mekanik: energi potensial awal berubah menjadi energi potensial pegas pada kompresi maksimum (kecepatan nol)." },
          {
            type: "formula",
            latex: "m g h = \\frac{1}{2} k x^2",
            description: "Kekekalan energi: potensial gravitasi menjadi potensial pegas",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$m$", meaning: "massa benda", unit: "kg" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$h$", meaning: "ketinggian awal", unit: "m" },
              { symbol: "$k$", meaning: "konstanta pegas", unit: "N/m" },
              { symbol: "$x$", meaning: "kompresi maksimum pegas", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "1 \\times 10 \\times 0{,}8 = \\frac{1}{2} \\times 200 \\times x^2",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$1$", meaning: "massa benda", unit: "kg" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$0{,}8$", meaning: "ketinggian awal", unit: "m" },
              { symbol: "$200$", meaning: "konstanta pegas", unit: "N/m" },
              { symbol: "$x$", meaning: "kompresi pegas", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "8 = 100 x^2 \\implies x^2 = 0{,}08 \\implies x = 0{,}283 \\text{ m}",
            description: "Hasil perhitungan",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$8$", meaning: "energi potensial awal $mgh$", unit: "J", note: "hasil perhitungan" },
              { symbol: "$100$", meaning: "$\\frac{1}{2}k$", unit: "N/m" },
              { symbol: "$x$", meaning: "kompresi maksimum pegas", unit: "m" },
            ],
          },
          { type: "paragraph", text: "Jawaban: kompresi maksimum pegas = 0,283 m (28,3 cm)." },
        ],
      },
      {
        type: "example",
        title: "Usaha-Energi pada Bidang Kasar",
        blocks: [
          { type: "paragraph", text: "Diketahui: benda 2 kg meluncur dari ketinggian 5 m pada bidang miring kasar dengan panjang lintasan 10 m ($\\mu_k = 0{,}1$, $g = 10$ m/s²) dan tiba di bawah dengan kecepatan 6 m/s. Ditanyakan: konsistensi dengan teorema usaha-energi?" },
          { type: "paragraph", text: "Energi awal $E_{p1} = m g h = 2 \\times 10 \\times 5 = 100$ J. Energi akhir $E_{k2} = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 2 \\times 6^2 = 36$ J. Selisih 64 J merupakan energi yang hilang karena usaha gesekan, sesuai konsep kekekalan energi dengan gaya non-konservatif." },
          {
            type: "formula",
            latex: "W_{gesek} = - f_k \\cdot s = - \\mu_k N s = - \\mu_k (m g \\cos \\theta) s",
            description: "Usaha gesekan pada bidang miring",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$W_{gesek}$", meaning: "usaha gesekan", unit: "J" },
              { symbol: "$f_k$", meaning: "gaya gesek kinetis", unit: "N" },
              { symbol: "$s$", meaning: "jarak tempuh sepanjang bidang", unit: "m" },
              { symbol: "$\\mu_k$", meaning: "koefisien gesek kinetis", unit: "tanpa satuan" },
              { symbol: "$N$", meaning: "gaya normal", unit: "N" },
              { symbol: "$\\theta$", meaning: "sudut bidang", unit: "derajat (°)" },
            ],
          },
          { type: "paragraph", text: "Jawaban: kerja gesekan mengurangi energi mekanik; sisanya menjadi energi kinetik." },
        ],
      },
      {
        type: "example",
        title: "Daya Motor",
        blocks: [
          { type: "paragraph", text: "Diketahui: motor mengangkat beban 50 kg setinggi 10 m dalam 5 s. Ditanyakan: daya motor jika efisiensi 80%? ($g = 10$ m/s²)" },
          {
            type: "formula",
            latex: "W = m g h",
            description: "Usaha mengangkat beban (gaya berat x ketinggian)",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$W$", meaning: "usaha", unit: "J" },
              { symbol: "$m$", meaning: "massa beban", unit: "kg" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s²" },
              { symbol: "$h$", meaning: "ketinggian", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "W = 50 \\times 10 \\times 10 = 5000 \\text{ J}",
            description: "Substitusi nilai",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$W$", meaning: "usaha mengangkat beban", unit: "J", note: "hasil perhitungan" },
              { symbol: "$50$", meaning: "massa beban", unit: "kg" },
              { symbol: "$10$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$10$", meaning: "ketinggian", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "P_{keluar} = \\frac{W}{t} = \\frac{5000}{5} = 1000 \\text{ W}",
            description: "Daya berguna",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$P_{keluar}$", meaning: "daya berguna", unit: "W" },
              { symbol: "$W$", meaning: "usaha", unit: "J" },
              { symbol: "$t$", meaning: "waktu", unit: "s" },
            ],
          },
          {
            type: "formula",
            latex: "\\eta = \\frac{P_{keluar}}{P_{masuk}} \\implies P_{masuk} = \\frac{P_{keluar}}{\\eta} = \\frac{1000}{0{,}8} = 1250 \\text{ W}",
            description: "Daya masukan dengan efisiensi 80%",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol",
            items: [
              { symbol: "$\\eta$", meaning: "efisiensi", unit: "tanpa satuan (0,8 = 80%)" },
              { symbol: "$P_{masuk}$", meaning: "daya masukan motor", unit: "W" },
            ],
          },
          { type: "paragraph", text: "Jawaban: daya masukan motor = 1250 W." },
        ],
      },
      {
        type: "note",
        text: "Perhatian: kecepatan minimum di puncak looping lingkaran vertikal saat gaya normal nol adalah $v = \\sqrt{g R}$; di titik puncak, berat semata-mata menyediakan gaya sentripetal.",
        variant: "warning",
      },
    ],
  },
];
