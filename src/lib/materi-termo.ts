import { Materi } from './types';

export const materiTermo: Materi[] = [
  {
    slug: 'kalor',
    no: 11,
    title: 'Kalor dan Perpindahannya',
    category: 'Termodinamika',
    summary: 'Kalor, perubahan suhu dan wujud, pemuaian, perpindahan kalor, dan pencampuran dengan asas Black.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Kalor adalah bentuk energi yang berpindah antara dua benda atau sistem karena perbedaan suhu. Perpindahan kalor selalu berlangsung dari benda bersuhu tinggi menuju benda bersuhu rendah dan berhenti saat kedua benda mencapai kesetimbangan termal. Kalor yang diserap atau dilepas oleh suatu benda dapat menghasilkan dua efek: perubahan suhu (kalor sensibel) dan perubahan wujud (kalor laten). Satuan kalor dalam SI adalah joule (J); kalori (cal) juga sering digunakan, dengan $1\\,\\text{cal} = 4{,}184\\,\\text{J}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Skala Suhu',
      },
      {
        type: 'paragraph',
        text: 'Suhu adalah ukuran derajat panas dinginnya suatu benda. Beberapa skala suhu yang dipakai: Celcius, Fahrenheit, Reamur, dan Kelvin (mutlak). Titik tetap bawah (es mencair) dan titik tetap atas (air mendidih) dipakai sebagai acuan. Pada skala Kelvin, nol mutlak berarti energi kinetik molekul minimum.',
      },
      {
        type: 'formula',
        latex: '\\frac{T_C}{5} = \\frac{T_F - 32}{9} = \\frac{T_R}{4}',
        description: 'Hubungan antar skala Celcius, Fahrenheit, dan Reamur.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$T_C$', meaning: 'Suhu pada skala Celcius', unit: '$^\\circ\\mathrm{C}$' },
          { symbol: '$T_F$', meaning: 'Suhu pada skala Fahrenheit', unit: '$^\\circ\\mathrm{F}$' },
          { symbol: '$T_R$', meaning: 'Suhu pada skala Reamur', unit: '$^\\circ\\mathrm{R}$' },
        ],
      },
      {
        type: 'formula',
        latex: 'T_K = T_C + 273{,}15',
        description: 'Konversi Celcius ke Kelvin (suhu mutlak).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$T_K$', meaning: 'Suhu mutlak (Kelvin)', unit: 'K' },
          { symbol: '$T_C$', meaning: 'Suhu Celcius', unit: '$^\\circ\\mathrm{C}$' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Fahrenheit dari Celcius: $T_F = \\frac{9}{5}T_C + 32$.' },
          { text: 'Celcius dari Fahrenheit: $T_C = \\frac{5}{9}(T_F - 32)$.' },
          { text: 'Reamur dari Celcius: $T_R = \\frac{4}{5}T_C$.' },
          { text: 'Kelvin dari Celcius: $T_K = T_C + 273{,}15$ (pada TKA sering dipakai $+273$).' },
          { text: 'Selisih suhu $1\\ \\text{K} = 1^\\circ\\text{C} = 1{,}8^\\circ\\text{F}$. Perbedaan 1 kelvin sama besar dengan 1 derajat Celcius.' },
        ],
      },
      {
        type: 'note',
        text: 'Semua rumus termodinamika (gas ideal, termodinamika) menyatakan suhu dalam Kelvin. Jangan lupa konversi Celcius ke Kelvin.',
        variant: 'warning',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kalor dan Perubahan Suhu',
      },
      {
        type: 'paragraph',
        text: 'Kalor yang dibutuhkan untuk mengubah suhu suatu benda sebanding dengan massanya, kalor jenisnya, dan perubahan suhunya. Semakin besar kalor jenis, semakin besar kalor yang diperlukan untuk menaikkan suhu benda yang sama.',
      },
      {
        type: 'formula',
        latex: 'Q = m c \\Delta T',
        description: 'Kalor untuk mengubah suhu (kalor sensibel).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$Q$', meaning: 'Kalor yang diserap atau dilepas', unit: 'J' },
          { symbol: '$m$', meaning: 'Massa benda', unit: 'kg' },
          { symbol: '$c$', meaning: 'Kalor jenis bahan', unit: 'J/(kg·^\\circ C)' },
          { symbol: '$\\Delta T$', meaning: 'Perubahan suhu $T_{akhir} - T_{awal}$', unit: '$^\\circ$C atau K' },
        ],
      },
      {
        type: 'formula',
        latex: 'C = \\frac{Q}{\\Delta T} = m c',
        description: 'Kapasitas kalor (kalor yang diperlukan per satuan kenaikan suhu).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$C$', meaning: 'Kapasitas kalor benda', unit: 'J/$^\\circ$C' },
          { symbol: '$Q$', meaning: 'Kalor', unit: 'J' },
          { symbol: '$\\Delta T$', meaning: 'Perubahan suhu', unit: '$^\\circ$C' },
          { symbol: '$m$', meaning: 'Massa benda', unit: 'kg' },
          { symbol: '$c$', meaning: 'Kalor jenis', unit: 'J/(kg·^\\circ C)' },
        ],
      },
      {
        type: 'table',
        headers: ['Bahan', 'Kalor jenis $c$ (J/(kg·^\\circ C))', 'Keterangan'],
        rows: [
          ['Air murni', '4184', 'Kalor jenis sangat tinggi, pendingin efektif'],
          ['Es', '2090', 'Lebih kecil dari air cair'],
          ['Uap air', '2010', 'Kalor jenis uap'],
          ['Aluminium', '899', 'Logam konduktor baik, kalor jenis sedang'],
          ['Besi', '449', 'Banyak dipakai alat masak'],
          ['Tembaga', '385', 'Penghantar kalor sangat baik'],
          ['Timbal', '128', 'Kalor jenis kecil'],
          ['Kaca', '840', 'Bahan isolator sedang'],
          ['Kayu', '1700', 'Isolator termal'],
          ['Udara', '1005', 'Gas, kalor jenis per satuan massa besar'],
        ],
      },
      {
        type: 'note',
        text: 'Benda dengan kalor jenis besar butuh kalor lebih banyak untuk naik suhu yang sama. Air punya kalor jenis paling besar di antara bahan biasa, sehingga laut dan udara lembap menstabilkan iklim.',
        variant: 'info',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kalor dan Perubahan Wujud',
      },
      {
        type: 'paragraph',
        text: 'Saat benda berubah wujud (padat-cair, cair-gas, dan sebaliknya), suhu tetap konstan selama proses berlangsung meskipun kalor terus diberikan. Kalor yang diperlukan disebut kalor laten karena tidak menaikkan suhu, melainkan memutuskan atau membentuk ikatan antar partikel.',
      },
      {
        type: 'formula',
        latex: 'Q = m L',
        description: 'Kalor untuk mengubah wujud zat (kalor laten).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$Q$', meaning: 'Kalor untuk mengubah wujud', unit: 'J' },
          { symbol: '$m$', meaning: 'Massa zat yang berubah wujud', unit: 'kg' },
          { symbol: '$L$', meaning: 'Kalor laten (lebur atau uap)', unit: 'J/kg' },
        ],
      },
      {
        type: 'table',
        headers: ['Perubahan Wujud', 'Kalor Laten', 'Keterangan'],
        rows: [
          ['Lebur (padat ke cair)', '$L_f$ (es $\\approx 334$ kJ/kg)', 'Suhu tetap di titik lebur (0 $^\\circ$C untuk es)'],
          ['Beku (cair ke padat)', '$L_f$', 'Suhu tetap di titik beku'],
          ['Menguap (cair ke gas)', '$L_v$ (air $\\approx 2260$ kJ/kg)', 'Suhu tetap di titik didih (100 $^\\circ$C untuk air)'],
          ['Mengembun (gas ke cair)', '$L_v$', 'Kalor dilepas ke lingkungan'],
          ['Menyublim (padat ke gas)', '$L_s$', 'Contoh: kamfer, es kering, napthalena'],
          ['Mengkristal (gas ke padat)', '$L_s$', 'Lawan menyublim'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Grafik pemanasan es menjadi uap memiliki lima tahap: (1) menaikkan suhu es dari suhu awal ke 0 $^\\circ$C; (2) melebur di suhu 0 $^\\circ$C (garis datar, kalor laten lebur); (3) menaikkan suhu air dari 0 ke 100 $^\\circ$C; (4) menguap di suhu 100 $^\\circ$C (garis datar, kalor laten uap); (5) menaikkan suhu uap dari 100 $^\\circ$C ke suhu akhir. Luas di bawah garis (kalor) pada setiap segmen dihitung dengan rumus yang berbeda.',
      },
      {
        type: 'note',
        text: 'Saat perubahan wujud berlangsung, termometer tetap menunjukkan suhu konstan. Kalor yang diberikan tidak menaikkan suhu, tetapi mengubah ikatan antar molekul.',
        variant: 'tip',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Pemuaian Zat',
      },
      {
        type: 'image',
        src: '/diagrams/kalor-ekspansi-panjang.svg',
        alt: 'Pemuaian panjang batang dari panjang awal L0 menjadi L dengan pertambahan panjang',
        caption: 'Pemuaian panjang sebanding dengan panjang awal batang dan dengan kenaikan suhu.',
      },
      {
        type: 'paragraph',
        text: 'Pemuaian adalah bertambahnya ukuran benda saat dipanaskan. Penambahan panjang, luas, dan volume sebanding dengan ukuran awal, koefisien pemuaian bahan, dan perubahan suhu. Koefisien muai panjang $\\alpha$ bernilai kecil untuk bahan kaku dan besar untuk bahan lunak.',
      },
      {
        type: 'formula',
        latex: '\\Delta L = L_0\\,\\alpha\\,\\Delta T',
        description: 'Pemuaian panjang (linear).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\Delta L$', meaning: 'Perubahan panjang', unit: 'm' },
          { symbol: '$L_0$', meaning: 'Panjang awal', unit: 'm' },
          { symbol: '$\\alpha$', meaning: 'Koefisien muai panjang', unit: '$^\\circ$C$^{-1}$ atau K$^{-1}$' },
          { symbol: '$\\Delta T$', meaning: 'Perubahan suhu', unit: '$^\\circ$C atau K' },
        ],
      },
      {
        type: 'formula',
        latex: '\\Delta A = A_0\\,\\beta\\,\\Delta T,\\quad \\beta = 2\\alpha',
        description: 'Pemuaian luas, koefisien muai luas $\\beta$.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\Delta A$', meaning: 'Perubahan luas', unit: 'm$^2$' },
          { symbol: '$A_0$', meaning: 'Luas awal', unit: 'm$^2$' },
          { symbol: '$\\beta$', meaning: 'Koefisien muai luas $= 2\\alpha$', unit: '$^\\circ$C$^{-1}$' },
          { symbol: '$\\Delta T$', meaning: 'Perubahan suhu', unit: '$^\\circ$C atau K' },
        ],
      },
      {
        type: 'formula',
        latex: '\\Delta V = V_0\\,\\gamma\\,\\Delta T,\\quad \\gamma = 3\\alpha',
        description: 'Pemuaian volume, koefisien muai volume $\\gamma$.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\Delta V$', meaning: 'Perubahan volume', unit: 'm$^3$' },
          { symbol: '$V_0$', meaning: 'Volume awal', unit: 'm$^3$' },
          { symbol: '$\\gamma$', meaning: 'Koefisien muai volume $= 3\\alpha$', unit: '$^\\circ$C$^{-1}$' },
          { symbol: '$\\Delta T$', meaning: 'Perubahan suhu', unit: '$^\\circ$C atau K' },
        ],
      },
      {
        type: 'table',
        headers: ['Bahan', 'Koefisien muai panjang $\\alpha$ ($10^{-6}$ /$^\\circ$C)', 'Catatan'],
        rows: [
          ['Baja', '11', 'Rel kereta, kabel'],
          ['Aluminium', '23', 'Memuai hampir 2x baja'],
          ['Tembaga', '17', 'Panci dan peralatan'],
          ['Kaca', '9', 'Kaca tahan panas'],
          ['Kaca pyrex', '3', 'Tahan perubahan suhu'],
          ['Beton', '12', 'Struktur bangunan'],
          ['Air (0-4 $^\\circ$C)', 'negatif, lalu positif', 'Menyusut dulu lalu memuai'],
        ],
      },
      {
        type: 'note',
        text: 'Bimetal terdiri dari dua logam dengan $\\alpha$ berbeda yang dilas jadi satu. Saat dipanaskan, bimetal melengkung ke arah logam dengan $\\alpha$ lebih kecil karena logam dengan $\\alpha$ besar memuai lebih banyak. Digunakan pada termostat, saklar otomatis, termometer bimetal.',
        variant: 'info',
      },
      {
        type: 'note',
        text: 'Air memiliki anomali: volume minimum pada 4 $^\\circ$C. Saat membeku, air memuai. Inilah sebabnya es mengapung dan pipa bisa pecah di musim dingin.',
        variant: 'warning',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Perpindahan Kalor',
      },
      {
        type: 'image',
        src: '/diagrams/kalor-penetapan-panas.svg',
        alt: 'Tiga jenis perpindahan kalor: konduksi, konveksi, dan radiasi',
        caption: 'Konduksi memerlukan media padat, konveksi memerlukan fluid, sedangkan radiasi tidak memerlukan media.',
      },
      {
        type: 'paragraph',
        text: 'Kalor dapat berpindah dengan tiga mekanisme: konduksi (melalui medium padat), konveksi (peredaran fluida), dan radiasi (gelombang elektromagnetik tanpa medium). Laju perpindahan kalor $H = Q/t$ diukur dalam watt (W).',
      },
      {
        type: 'formula',
        latex: 'H = \\frac{Q}{t} = \\frac{k A \\Delta T}{L}',
        description: 'Laju perpindahan kalor secara konduksi (hukum Fourier).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$H$', meaning: 'Laju perpindahan kalor', unit: 'W' },
          { symbol: '$Q$', meaning: 'Kalor', unit: 'J' },
          { symbol: '$t$', meaning: 'Waktu', unit: 's' },
          { symbol: '$k$', meaning: 'Konduktivitas termal bahan', unit: 'W/(m· K)' },
          { symbol: '$A$', meaning: 'Luas penampang', unit: 'm$^2$' },
          { symbol: '$\\Delta T$', meaning: 'Perbedaan suhu', unit: 'K' },
          { symbol: '$L$', meaning: 'Tebal/ketakutan bahan', unit: 'm' },
        ],
      },
      {
        type: 'formula',
        latex: 'H = h A \\Delta T',
        description: 'Laju perpindahan kalor secara konveksi (hukum Newton pendinginan).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$H$', meaning: 'Laju perpindahan kalor', unit: 'W' },
          { symbol: '$h$', meaning: 'Koefisien konveksi', unit: 'W/(m$^2$· K)' },
          { symbol: '$A$', meaning: 'Luas permukaan', unit: 'm$^2$' },
          { symbol: '$\\Delta T$', meaning: 'Selisih suhu permukaan dan fluida', unit: 'K' },
        ],
      },
      {
        type: 'formula',
        latex: 'H = e\\,\\sigma A T^4',
        description: 'Laju radiasi benda hitam (Stefan-Boltzmann).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$H$', meaning: 'Daya radiasi', unit: 'W' },
          { symbol: '$e$', meaning: 'Emisivitas (0-1, hitam sempurna $e=1$)', unit: 'tak berdimensi' },
          { symbol: '$\\sigma$', meaning: 'Konstanta Stefan-Boltzmann $= 5{,}67\\times10^{-8}$', unit: 'W/(m$^2$· K$^4$)' },
          { symbol: '$A$', meaning: 'Luas permukaan', unit: 'm$^2$' },
          { symbol: '$T$', meaning: 'Suhu mutlak benda', unit: 'K' },
        ],
      },
      {
        type: 'formula',
        latex: '\\lambda_{\\max} T = b = 2{,}9\\times10^{-3}\\ \\mathrm{m\\cdot K}',
        description: 'Hukum pergeseran Wien: panjang gelombang puncak berbanding terbalik dengan suhu.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\lambda_{\\max}$', meaning: 'Panjang gelombang radiasi maksimum', unit: 'm' },
          { symbol: '$T$', meaning: 'Suhu mutlak benda', unit: 'K' },
          { symbol: '$b$', meaning: 'Konstanta Wien', unit: 'm· K' },
        ],
      },
      {
        type: 'table',
        headers: ['Mekanisme', 'Medium', 'Ciri Khas'],
        rows: [
          ['Konduksi', 'Padat (terutama logam)', 'Partikel tetap, energi dipindah tumbukan'],
          ['Konveksi', 'Cair dan gas', 'Fluida ikut berpindah (konveksi alami atau paksa)'],
          ['Radiasi', 'Tidak perlu medium', 'Gelombang elektromagnetik, dapat melalui ruang hampa'],
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Benda hitam sempurna: $e = 1$ (menyerap dan memancarkan radiasi maksimum).' },
          { text: 'Benda putih mengkilat: $e \\approx 0$ (memantulkan radiasi).' },
          { text: 'Jika benda juga menerima radiasi lingkungan suhu $T_0$, daya bersih: $H = e\\sigma A(T^4 - T_0^4)$.' },
          { text: 'Konduktivitas termal $k$: tembaga $\\approx 400$, aluminium $\\approx 237$, besi $\\approx 50$, kaca $\\approx 1$, kayu $\\approx 0{,}1$, udara $\\approx 0{,}02\\ \\mathrm{W/(m\\cdot K)}$.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Pencampuran Kalor (Asas Black)',
      },
      {
        type: 'paragraph',
        text: 'Asas Black menyatakan bahwa dalam sistem terisolasi, kalor yang dilepas oleh zat yang lebih panas sama dengan kalor yang diserap oleh zat yang lebih dingin. Dengan kata lain, tidak ada energi kalor yang hilang, hanya berpindah. Persamaan dasarnya $Q_{\\text{lepas}} = Q_{\\text{terima}}$.',
      },
      {
        type: 'formula',
        latex: 'm_1 c_1 (T_1 - T_c) = m_2 c_2 (T_c - T_2)',
        description: 'Kalor dilepas benda panas = kalor diterima benda dingin, bila tidak ada perubahan wujud.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$m_1, m_2$', meaning: 'Massa benda panas dan dingin', unit: 'kg' },
          { symbol: '$c_1, c_2$', meaning: 'Kalor jenis benda panas dan dingin', unit: 'J/(kg·^\\circ C)' },
          { symbol: '$T_1, T_2$', meaning: 'Suhu awal benda panas dan dingin', unit: '$^\\circ$C' },
          { symbol: '$T_c$', meaning: 'Suhu campuran (kesetimbangan)', unit: '$^\\circ$C' },
        ],
      },
      {
        type: 'formula',
        latex: 'T_c = \\frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}',
        description: 'Suhu campuran langsung bila kedua benda tetap satu wujud.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$T_c$', meaning: 'Suhu campuran akhir', unit: '$^\\circ$C' },
          { symbol: '$m_i, c_i, T_i$', meaning: 'Massa, kalor jenis, dan suhu awal tiap benda', unit: 'beragam' },
        ],
      },
      {
        type: 'note',
        text: 'Jika terjadi perubahan wujud (misalnya es mencair), hitung tahap demi tahap. Terlebih dahulu tentukan apakah kalor yang dilepas benda panas cukup untuk mencairkan/menguapkan seluruh benda dingin. Bila tidak cukup, suhu akhir adalah suhu perubahan wujud dengan sebagian benda masih tersisa.',
        variant: 'warning',
      },
      {
        type: 'example',
        title: 'Pencampuran Dua Massa Air',
        blocks: [
          { type: 'paragraph', text: 'Massa 200 g air bersuhu 80 $^\\circ$C dicampur dengan 300 g air bersuhu 20 $^\\circ$C. Tentukan suhu campuran. ($c_{air} = 1\\ \\text{cal/g}\\cdot^\\circ\\text{C}$)' },
          { type: 'formula', latex: 'T_c = \\frac{m_1 c T_1 + m_2 c T_2}{m_1 c + m_2 c} = \\frac{200(80) + 300(20)}{200 + 300}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$T_c$', meaning: 'Suhu campuran', unit: '$^\\circ$C' }, { symbol: '$m_i,T_i$', meaning: 'massa dan suhu awal', unit: 'g, $^\\circ$C' }] },
          { type: 'paragraph', text: 'Numerator = $16000 + 6000 = 22000$, denominator = $500$, sehingga $T_c = 44^\\circ\\text{C}$.' },
        ],
      },
      {
        type: 'example',
        title: 'Air Panas dengan Es (Bagian Mencair)',
        blocks: [
          { type: 'paragraph', text: '50 g air bersuhu 40 $^\\circ$C dicampur dengan 10 g es bersuhu 0 $^\\circ$C. Tentukan suhu akhir. ($c_{air}=1\\ \\text{cal/g}\\cdot^\\circ\\text{C}$, $L_f=80\\ \\text{cal/g}$)' },
          { type: 'paragraph', text: 'Kalor yang tersedia dari air panas: $Q_{lepas}=50\\times1\\times(40 - T_c)$. Kalor untuk melelehkan seluruh es: $Q_{lebur}=10\\times80=800\\ \\text{cal}$.' },
          { type: 'paragraph', text: 'Kalor maksimum jika air dingin ke 0 $^\\circ$C: $50\\times1\\times40=2000\\ \\text{cal}$. Karena $2000 > 800$, semua es mencair.' },
          { type: 'formula', latex: '2000 - 800 = 60(c)(T_c - 0) = 60\\,T_c' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$Q$', meaning: 'Kalor (cal)', unit: 'cal' }, { symbol: '$m$', meaning: 'Massa (g)', unit: 'g' }, { symbol: '$T_c$', meaning: 'Suhu akhir', unit: '$^\\circ$C' }] },
          { type: 'paragraph', text: 'Sisa kalor 1200 cal memanaskan 60 g air: $T_c = 1200/60 = 20^\\circ\\text{C}$.' },
        ],
      },
      {
        type: 'example',
        title: 'Es Tidak Seluruhnya Mencair',
        blocks: [
          { type: 'paragraph', text: '20 g air bersuhu 30 $^\\circ$C dicampur dengan 50 g es bersuhu 0 $^\\circ$C. Tentukan keadaan akhir. ($c=1$, $L_f=80$)' },
          { type: 'paragraph', text: 'Kalor maksimum dari air panas ke 0 $^\\circ$C: $Q = 20\\times1\\times30 = 600\\ \\text{cal}$. Kalor yang dibutuhkan untuk melelehkan 50 g es: $50\\times80 = 4000\\ \\text{cal}$.' },
          { type: 'paragraph', text: 'Karena $600 < 4000$, kalor hanya cukup melelehkan $600/80 = 7{,}5$ g es. Suhu akhir tetap 0 $^\\circ$C dengan campuran air dan es (sekitar 42,5 g es tersisa).' },
        ],
      },
      {
        type: 'example',
        title: 'Pemuaian Pipa Baja',
        blocks: [
          { type: 'paragraph', text: 'Pipa baja panjang 10 m pada suhu 20 $^\\circ$C dipanaskan hingga 80 $^\\circ$C. Berapa pertambahan panjangnya? ($\\alpha_{baja}=11\\times10^{-6}$/ $^\\circ$C)' },
          { type: 'formula', latex: '\\Delta L = L_0\\,\\alpha\\,\\Delta T = 10\\times 11\\times10^{-6}\\times (80-20)' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$\\Delta L$', meaning: 'Pertambahan panjang', unit: 'm' }, { symbol: '$L_0$', meaning: 'Panjang awal', unit: 'm' }, { symbol: '$\\alpha$', meaning: 'Koefisien muai panjang', unit: '$^\\circ$C$^{-1}$' }, { symbol: '$\\Delta T$', meaning: 'Perubahan suhu', unit: '$^\\circ$C' }] },
          { type: 'paragraph', text: '$\\Delta L = 10\\times 11\\times10^{-6}\\times 60 = 0{,}0066\\ \\text{m} = 6{,}6\\ \\text{mm}$. Sisakan celah pemuaian pada sambungan.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kalorimeter dan Pengukuran Kalor',
      },
      {
        type: 'paragraph',
        text: 'Kalorimeter adalah alat untuk mengukur kalor reaksi atau perubahan suhu akibat pertukaran kalor. Dalam kalorimeter ideal, tidak ada kalor yang hilang ke lingkungan, sehingga berlaku asas Black. Kapasitas kalor kalorimeter ($C_{kal}$) sering perlu dimasukkan.',
      },
      {
        type: 'formula',
        latex: 'Q_{reaktan} + Q_{produk} + Q_{kal} = 0,\\quad Q_{kal} = C_{kal}(T_{akhir}-T_{awal})',
        description: 'Neraca energi dalam kalorimeter (terisolasi dari lingkungan).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$Q_{reaktan}$', meaning: 'Kalor yang dilepas reactan (negatif)', unit: 'J' },
          { symbol: '$Q_{produk}$', meaning: 'Kalor yang diserap produk', unit: 'J' },
          { symbol: '$Q_{kal}$', meaning: 'Kalor yang diserap kalorimeter', unit: 'J' },
          { symbol: '$C_{kal}$', meaning: 'Kapasitas kalor kalorimeter', unit: 'J/$^\\circ$C' },
          { symbol: '$T_{awal},T_{akhir}$', meaning: 'Suhu sebelum dan sesudah reaksi', unit: '$^\\circ$C' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Kalorimeter sederhana: wadah berisolasi (styrofoam) dengan termometer dan pengaduk; cocok untuk reaksi larutan.' },
          { text: 'Kalorimeter bom: wadah tertutup bertekanan tinggi untuk pembakaran bahan bakar; kalor diukur dari kenaikan suhu air sekitarnya.' },
          { text: 'Jika kapasitas kalor kalorimeter tidak diberikan, anggap nol atau koreksi dengan percobaan blanko.' },
        ],
      },
      {
        type: 'example',
        title: 'Pengukuran Kalor Pembakaran',
        blocks: [
          { type: 'paragraph', text: 'Bahan bakar 2 g dibakar dalam kalorimeter bom yang mengandung 1 kg air ($c=4184$) dan kalorimeter ($C_{kal}=800$ J/$^\\circ$C). Suhu naik dari 25 ke 29,5 $^\\circ$C. Hitung kalor pembakaran per gram.' },
          { type: 'formula', latex: 'Q = (m_{air}c_{air}+C_{kal})\\Delta T = (1000\\times4184 + 800)\\times (29{,}5-25)' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$Q$', meaning: 'Kalor pembakaran total', unit: 'J' }, { symbol: '$m_{air}$', meaning: 'Massa air', unit: 'g' }, { symbol: '$c_{air}$', meaning: 'Kalor jenis air', unit: 'J/(kg·$^\\circ$C)' }, { symbol: '$C_{kal}$', meaning: 'Kapasitas kalor kalorimeter', unit: 'J/$^\\circ$C' }, { symbol: '$\\Delta T$', meaning: 'Kenaikan suhu', unit: '$^\\circ$C' }] },
          { type: 'paragraph', text: '$\\Delta T = 4{,}5\\ ^\\circ$C, total faktor = $4184000+800 = 4184800$ J/$^\\circ$C; $Q = 4184800\\times4{,}5 \\approx 18{,}83$ MJ. Per gram = $9{,}42$ MJ/g.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hukum Pendinginan Newton',
      },
      {
        type: 'paragraph',
        text: 'Laju pendinginan benda sebanding dengan selisih suhu benda dan lingkungan. Model ini dipakai untuk memperkirakan waktu pendinginan kopi, mesin, atau benda yang dikeluarkan dari oven (konveksi-radiasi sederhana).',
      },
      {
        type: 'formula',
        latex: '\\frac{dT}{dt} = -k(T - T_{\\ell}),\\quad T(t) = T_{\\ell} + (T_0 - T_{\\ell})e^{-k t}',
        description: 'Hukum pendinginan Newton, solusi eksponensial.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$T(t)$', meaning: 'Suhu benda pada waktu $t$', unit: '$^\\circ$C atau K' },
          { symbol: '$T_0$', meaning: 'Suhu awal benda', unit: '$^\\circ$C' },
          { symbol: '$T_{\\ell}$', meaning: 'Suhu lingkungan (konstan)', unit: '$^\\circ$C' },
          { symbol: '$k$', meaning: 'Konstanta pendinginan bergantung bahan dan lingkungan', unit: 's$^{-1}$' },
          { symbol: '$t$', meaning: 'Waktu', unit: 's' },
        ],
      },
      {
        type: 'note',
        text: 'Pendinginan eksponensial: selisih suhu berkurang sepersekian setiap selang waktu tetap, tetapi benda tidak pernah benar-benar mencapai suhu lingkungan dalam waktu hingga. Perbedaan suhu 1 $^\\circ$C sering dianggap setimbang.',
        variant: 'info',
      },
      {
        type: 'example',
        title: 'Pendinginan Kopi',
        blocks: [
          { type: 'paragraph', text: 'Kopi panas 90 $^\\circ$C diletakkan di ruang 25 $^\\circ$C dengan konstanta $k = 0{,}05$ s$^{-1}$. Tentukan suhunya setelah 1 menit.' },
          { type: 'formula', latex: 'T(60) = 25 + (90-25)e^{-0{,}05\\times 60} = 25 + 65 e^{-3}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$T(60)$', meaning: 'Suhu setelah 60 s', unit: '$^\\circ$C' }, { symbol: '$k$', meaning: 'Konstanta pendinginan', unit: 's$^{-1}$' }, { symbol: '$t$', meaning: 'Waktu', unit: 's' }] },
          { type: 'paragraph', text: '$e^{-3} \\approx 0{,}0498$, sehingga $T \\approx 25 + 65\\times0{,}0498 \\approx 28{,}2\\ ^\\circ$C.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tips dan Jebakan TKA Topik Kalor',
      },
      {
        type: 'list',
        items: [
          { text: 'Pastikan semua suhu di perhitungan pencampuran berada dalam satu skala (Celcius cukup selama $\\Delta T$ yang dipakai).' },
          { text: 'Jika ada es dan air, cek terlebih dahulu apakah kalor cukup mencairkan seluruh es sebelum menghitung suhu campuran.' },
          { text: 'Rumus $Q = mc\\Delta T$ untuk perubahan suhu; $Q = mL$ untuk perubahan wujud. Jangan campur pada satu tahap bila suhu berubah juga.' },
          { text: 'Pada grafik pemanasan, segmen datar (melebur/menguap) tidak mengubah suhu, tetapi butuh kalor $mL$.' },
          { text: 'Pemuaian: gunakan $\\Delta T = T_{akhir}-T_{awal}$ (bukan suhu absolut) dan $\\alpha$ sesuai bahan.' },
          { text: 'Perpindahan kalor konduksi: luas A, tebal L, hindari tertukar; $H$ dalam watt, $Q$ dalam joule.' },
          { text: 'Radiasi Stefan-Boltzmann menggunakan suhu mutlak $T$ (Kelvin), dan $T^4$ sangat sensitif.' },
          { text: 'Asas Black berlaku hanya jika sistem terisolasi; pertimbangkan kalorimeter bila soal menyebutkan.' },
        ],
      },
      {
        type: 'definition',
        term: 'Kalor sensibel',
        definition: 'Kalor yang menyebabkan perubahan suhu benda tanpa mengubah wujudnya, dihitung dengan $Q = mc\\Delta T$.',
      },
      {
        type: 'definition',
        term: 'Kalor laten',
        definition: 'Kalor yang diserap atau dilepas saat benda berubah wujud pada suhu tetap, dihitung dengan $Q = mL$.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Konduksi pada Batang (Bentuk Diferensial)',
      },
      {
        type: 'paragraph',
        text: 'Pada konduksi, kalor mengalir dari daerah bersuhu tinggi ke rendah. Laju aliran sebanding dengan gradien suhu. Bentuk diferensial hukum Fourier menunjukkan arah aliran berlawanan gradien suhu.',
      },
      {
        type: 'formula',
        latex: 'H = -k A \\frac{dT}{dx}',
        description: 'Hukum Fourier diferensial; tanda negatif menyatakan arah aliran ke suhu lebih rendah.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$H$', meaning: 'Laju perpindahan kalor', unit: 'W' },
          { symbol: '$k$', meaning: 'Konduktivitas termal', unit: 'W/(m· K)' },
          { symbol: '$A$', meaning: 'Luas penampang', unit: 'm$^2$' },
          { symbol: '$dT/dx$', meaning: 'Gradien suhu', unit: 'K/m' },
        ],
      },
      {
        type: 'example',
        title: 'Batang Tembaga Seragam',
        blocks: [
          { type: 'paragraph', text: 'Batang tembaga panjang 1 m, penampang 1 cm$^2$, $k = 400$ W/(m· K). Ujung-ujungnya bersuhu 100 $^\\circ$C dan 0 $^\\circ$C. Hitung laju kalor dan kalor total dalam 10 menit.' },
          { type: 'formula', latex: 'H = k A \\frac{\\Delta T}{L} = 400\\times 10^{-4}\\times \\frac{100}{1} = 4\\ \\text{W}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$H$', meaning: 'Laju perpindahan kalor', unit: 'W' }, { symbol: '$k$', meaning: 'Konduktivitas tembaga', unit: 'W/(m· K)' }, { symbol: '$A$', meaning: 'Penampang', unit: 'm$^2$' }, { symbol: '$\\Delta T$', meaning: 'Selisih suhu', unit: 'K' }, { symbol: '$L$', meaning: 'Panjang batang', unit: 'm' }] },
          { type: 'formula', latex: 'Q = H t = 4\\times (10\\times60) = 2400\\ \\text{J} \\, (t=600\\ \\text{s})' },
          { type: 'paragraph', text: 'Kalor mengalir dari ujung panas (100 $^\\circ$C) ke ujung dingin (0 $^\\circ$C) dengan laju 4 W.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Radiasi Netto Antara Benda dan Lingkungan',
      },
      {
        type: 'formula',
        latex: 'H_{net} = e\\,\\sigma A \\left(T^4 - T_0^4\\right)',
        description: 'Daya radiasi bersih benda bersuhu T di lingkungan suhu T0.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$H_{net}$', meaning: 'Daya radiasi bersih', unit: 'W' },
          { symbol: '$e$', meaning: 'Emisivitas permukaan', unit: 'tak berdimensi' },
          { symbol: '$\\sigma$', meaning: 'Konstanta Stefan-Boltzmann', unit: 'W/(m$^2$· K$^4$)' },
          { symbol: '$A$', meaning: 'Luas permukaan', unit: 'm$^2$' },
          { symbol: '$T$', meaning: 'Suhu mutlak benda', unit: 'K' },
          { symbol: '$T_0$', meaning: 'Suhu mutlak lingkungan', unit: 'K' },
        ],
      },
      {
        type: 'example',
        title: 'Pendinginan Radiasi',
        blocks: [
          { type: 'paragraph', text: 'Benda hitam sempurna luas 0,5 m$^2$, suhu 400 K berada di lingkungan 300 K. Hitung laju pendinginan radiasi.' },
          { type: 'formula', latex: 'H = \\sigma A \\left(T^4 - T_0^4\\right) = 5{,}67\\times10^{-8}\\times0{,}5\\times(400^4 - 300^4)' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$H$', meaning: 'Daya radiasi netto', unit: 'W' }, { symbol: '$\\sigma$', meaning: 'Konstanta Stefan-Boltzmann', unit: 'W/(m$^2$· K$^4$)' }, { symbol: '$A$', meaning: 'Luas muka benda', unit: 'm$^2$' }, { symbol: '$T,T_0$', meaning: 'Suhu benda dan lingkungan (K)', unit: 'K' }] },
          { type: 'paragraph', text: '$400^4 = 2{,}56\\times10^{10}$, $300^4 = 8{,}1\\times10^{9}$; selisih $\\approx 1{,}75\\times10^{10}$; kali $5{,}67\\times10^{-8}\\times0{,}5 \\approx 496$ W (tergantung pembulatan). Benda kehilangan sekitar 500 W melalui radiasi.' },
        ],
      },
      {
        type: 'note',
        text: 'Radiasi bergantung pada $T^4$, sehingga kenaikan suhu kecil pada suhu tinggi menghasilkan peningkatan radiasi besar. Ingat suhu mutlak.',
        variant: 'info',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kalor Pemanasan Bertahap (Contoh Komprehensif)',
      },
      {
        type: 'paragraph',
        text: 'Banyak soal menggabungkan perubahan suhu dan perubahan wujud pada satu benda. Hitung kalor total dengan menjumlahkan setiap tahap secara berurutan: $Q_{total} = \\sum Q_i$. Gunakan suhu dalam Celcius, tetapi konversi ke Kelvin bila rumus termodinamika.',
      },
      {
        type: 'example',
        title: 'Es Mencair dan Air Memanas hingga Uap',
        blocks: [
          { type: 'paragraph', text: 'Sebanyak 100 g es pada -10 $^\\circ$C dipanaskan hingga menjadi uap air pada 110 $^\\circ$C. Hitung kalor total. ($c_{es}=2100$, $c_{air}=4184$, $c_{uap}=2010$ J/(kg· K); $L_f=334$ kJ/kg; $L_v=2260$ kJ/kg)' },
          { type: 'paragraph', text: '1. Naikkan suhu es -10\\to0: $Q_1 = 0,1\\times2100\\times10 = 2100$ J.' },
          { type: 'paragraph', text: '2. Lebur es 0\\to0: $Q_2 = 0,1\\times334000 = 33400$ J.' },
          { type: 'paragraph', text: '3. Naikkan suhu air 0\\to100: $Q_3 = 0,1\\times4184\\times100 = 41840$ J.' },
          { type: 'paragraph', text: '4. Uap air 100\\to100: $Q_4 = 0,1\\times2260000 = 226000$ J.' },
          { type: 'paragraph', text: '5. Naikkan suhu uap 100\\to110: $Q_5 = 0,1\\times2010\\times10 = 2010$ J.' },
          { type: 'formula', latex: 'Q_{total} = 2100+33400+41840+226000+2010 = 305350\\ \\text{J} \\approx 305\\ \\text{kJ}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$Q_{total}$', meaning: 'Kalor total (J)', unit: 'J' }, { symbol: '$Q_i$', meaning: 'Kalor tahap ke-i', unit: 'J' }] },
          { type: 'paragraph', text: 'Kalor laten menguap (226 kJ) mendominasi total, menunjukkan besar energi yang diperlukan untuk mengubah air menjadi uap.' },
        ],
      },
      {
        type: 'note',
        text: 'Pada grafik pemanasan, segmen datar (phase change) tidak menambah suhu tetapi butuh kalor besar; segmen miring (temperature change) suhu naik. Bila soal meminta suhu akhir setelah kalor tertentu, tentukan tahap mana yang selesai total.',
        variant: 'tip',
      },
    ],
  },
  {
    slug: 'pemanasan-global',
    no: 12,
    title: 'Pemanasan Global',
    category: 'Termodinamika',
    summary: 'Efek rumah kaca, gas rumah kaca, penyebab, dampak, dan upaya mitigasi pemanasan global.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Pemanasan global adalah naiknya suhu rata-rata atmosfer dan permukaan Bumi dalam jangka panjang akibat meningkatnya konsentrasi gas rumah kaca. Efek rumah kaca alami sebenarnya diperlukan untuk menjaga Bumi tetap hangat, tetapi peningkatan buatan manusia membuat suhu global naik berlebihan dan memicu perubahan iklim.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mekanisme Efek Rumah Kaca',
      },
      {
        type: 'image',
        src: '/diagrams/pemanasan-global-rumah-kaca.svg',
        alt: 'Skema efek rumah kaca dengan radiasi inframerah yang tertahan oleh kaca',
        caption: 'Cahaya matahari masuk melalui kaca, tetapi radiasi inframerah tertahan sehingga suhu di dalam naik.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          { text: 'Radiasi matahari (gelombang pendek, sinar tampak dan UV) menembus atmosfer dan mencapai permukaan Bumi.' },
          { text: 'Permukaan Bumi menyerap radiasi, lalu memancarkan kembali energi dalam bentuk gelombang inframerah (gelombang panjang).' },
          { text: 'Gas rumah kaca seperti CO$_2$, CH$_4$, N$_2$O, uap air, dan CFC menyerap sebagian inframerah dan memantulkannya kembali ke permukaan Bumi.' },
          { text: 'Akibatnya energi panas terperangkap di atmosfer, suhu rata-rata global meningkat.' },
        ],
      },
      {
        type: 'formula',
        latex: 'P = e\\,\\sigma A T^4',
        description: 'Daya radiasi yang dipancarkan benda hitam (dasar mekanisme radiasi Bumi).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P$', meaning: 'Daya radiasi', unit: 'W' },
          { symbol: '$e$', meaning: 'Emisivitas (0-1)', unit: 'tak berdimensi' },
          { symbol: '$\\sigma$', meaning: 'Konstanta Stefan-Boltzmann', unit: 'W/(m$^2$· K$^4$)' },
          { symbol: '$A$', meaning: 'Luas permukaan', unit: 'm$^2$' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
        ],
      },
      {
        type: 'note',
        text: 'Efek rumah kaca alami sangat diperlukan. Tanpa gas rumah kaca, suhu rata-rata Bumi sekitar -18 $^\\circ$C, sedangkan dengan efek rumah kaca alami sekitar +15 $^\\circ$C. Yang berbahaya adalah peningkatan konsentrasi gas rumah kaca akibat aktivitas manusia.',
        variant: 'warning',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Gas Rumah Kaca',
      },
      {
        type: 'table',
        headers: ['Gas', 'Rumus', 'Sumber Utama', 'Catatan'],
        rows: [
          ['Karbon dioksida', 'CO$_2$', 'Pembakaran bahan bakar fosil, deforestasi, industri', 'Paling dominan kontribusinya pada pemanasan'],
          ['Metana', 'CH$_4$', 'Peternakan, sawah, TPA, kebocoran gas bumi', 'Potensi pemanasan jauh lebih besar per molekul dari CO$_2$'],
          ['Dinitrogen oksida', 'N$_2$O', 'Pupuk nitrogen, pembakaran biomassa', 'Juga menyumbang kerusakan lapisan ozon'],
          ['CFC (klorofluorokarbon)', 'CFC', 'AC, kulkas, aerosol', 'Mengganggu lapisan ozon sekaligus trap panas'],
          ['Uap air', 'H$_2$O (g)', 'Penguapan alami lautan', 'Feedback positif: suhu naik, penguapan naik'],
          ['Ozon troposferik', 'O$_3$', 'Reaksi fotokimia polusi', 'Gas rumah kaca yang juga berbahaya bagi pernapasan'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Penyebab Pemanasan Global',
      },
      {
        type: 'list',
        items: [
          { text: 'Pembakaran batu bara, minyak, dan gas alam untuk energi dan transportasi yang melepas CO$_2$.' },
          { text: 'Deforestasi dan pembakaran hutan yang mengurangi penyerap CO$_2$ (pohon) dan melepas karbon tersimpan.' },
          { text: 'Peternakan dan sawah yang menghasilkan metana dari pencernaan ternak dan penggenangan.' },
          { text: 'Penggunaan pupuk nitrogen sintetis yang melepas N$_2$O.' },
          { text: 'Aktivitas industri, limbah padat, dan penggunaan CFC pada peralatan pendingin.' },
          { text: 'Pertumbuhan populasi manusia yang meningkatkan konsumsi energi dan lahan.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Dampak Pemanasan Global',
      },
      {
        type: 'list',
        items: [
          { text: 'Kenaikan suhu global dan seringnya gelombang panas (heatwave) ekstrem.' },
          { text: 'Mencairnya es di kutub dan gletser, sehingga permukaan laut naik dan mengancam daerah pesisir.' },
          { text: 'Cuaca ekstrem: badai tropis lebih kuat, banjir, kekeringan panjang, dan hujan tak terduga.' },
          { text: 'Perubahan pola musim, gagal panen, dan krisis pangan serta air bersih.' },
          { text: 'Pemutihan terumbu karang (coral bleaching) akibat air laut yang terlalu hangat.' },
          { text: 'Punahnya spesies yang tidak mampu beradaptasi terhadap perubahan habitat.' },
          { text: 'Meluasnya penyebaran penyakit tropis (demam berdarah, malaria) karena nyamuk hidup di daerah baru.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Solusi dan Mitigasi',
      },
      {
        type: 'list',
        items: [
          { text: 'Beralih ke energi terbarukan: surya, angin, air, panas bumi, dan biomassa.' },
          { text: 'Peningkatan efisiensi energi pada peralatan, bangunan, dan industri.' },
          { text: 'Reboisasi dan penghijauan untuk menyerap CO$_2$.' },
          { text: 'Transportasi publik, kendaraan listrik, dan pengurangan perjalanan beremisi tinggi.' },
          { text: 'Penerapan prinsip 3R: Reduce, Reuse, Recycle, dan pengelolaan limbah (TPA) berbasis metana capture.' },
          { text: 'Teknologi rendah emisi dan carbon capture storage.' },
          { text: 'Kesepakatan internasional: Protokol Kyoto (1997) dan Perjanjian Paris (2015) untuk pembatasan emisi.' },
          { text: 'Pendidikan lingkungan dan pola konsumsi berkelanjutan di masyarakat.' },
        ],
      },
      {
        type: 'definition',
        term: 'Carbon footprint',
        definition: 'Total emisi gas rumah kaca yang dihasilkan langsung maupun tidak langsung oleh suatu aktivitas, produk, atau individu, biasanya dinyatakan dalam ekuivalen CO2.',
      },
      {
        type: 'definition',
        term: 'Albedo',
        definition: 'Ukuran reflectivity permukaan terhadap radiasi matahari. Es dan salju memiliki albedo tinggi (memantulkan banyak), laut gelap beralbedo rendah (menyerap panas).',
      },
      {
        type: 'note',
        text: 'Tip TKA: pembedakan dengan cermat gas rumah kaca (CO2, CH4, N2O, uap air) dan gas perusak ozon (terutama CFC). CFC termasuk keduanya. Efek rumah kaca dan menipisnya lapisan ozon adalah dua masalah berbeda meskipun saling terkait.',
        variant: 'tip',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Keseimbangan Radiasi Bumi (Estimasi Suhu Efektif)',
      },
      {
        type: 'paragraph',
        text: 'Suhu efektif Bumi dapat diperkirakan dari keseimbangan antara energi matahari yang diserap dan energi yang dipancarkan sebagai radiasi inframerah. Kita asumsikan Bumi sebagai benda hitam dengan albedo rata-rata $A$.',
      },
      {
        type: 'formula',
        latex: '\\frac{(1-A) S \\pi R^2}{4\\pi R^2} = \\sigma T_{\\text{eff}}^4 \\implies T_{\\text{eff}} = \\left[\\frac{(1-A)S}{4\\sigma}\\right]^{1/4}',
        description: 'Suhu efektif Bumi berdasarkan keseimbangan radiasi.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$A$', meaning: 'Albedo rata-rata Bumi (\\approx 0,3)', unit: 'tak berdimensi' },
          { symbol: '$S$', meaning: 'Konstanta surya \\approx 1361', unit: 'W/m$^2$' },
          { symbol: '$\\sigma$', meaning: 'Konstanta Stefan-Boltzmann', unit: 'W/(m$^2$· K$^4$)' },
          { symbol: '$T_{\\text{eff}}$', meaning: 'Suhu efektif Bumi', unit: 'K' },
          { symbol: '$R$', meaning: 'Jari-jari Bumi', unit: 'm' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Dengan $A \\approx 0{,}3$ dan $S \\approx 1361$ W/m$^2$, diperoleh $T_{\\text{eff}} \\approx 255$ K (-18 $^\\circ$C). Suhu permukaan rata-rata saat ini sekitar 288 K (15 $^\\circ$C) karena adanya efek rumah kaca alami yang menaikkan suhu sekitar 33 K.',
      },
      {
        type: 'list',
        items: [
          { text: 'Jika albedo naik (lebih banyak es), energi yang diserap turun, suhu efektif turun (umpan balik es-albedo positif).' },
          { text: 'Jika konsentrasi gas rumah kaca naik, permukaan lebih sulit mendingin ke ruang, suhu rata-rata naik (pemanasan global).' },
          { text: 'Forcing radiatif mengukur perubahan keseimbangan energi per satuan luas permukaan (W/m$^2$) akibat perubahan konsentrasi gas rumah kaca.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Dampak Regional dan Sektor',
      },
      {
        type: 'table',
        headers: ['Sektor', 'Dampak Utama', 'Contoh'],
        rows: [
          ['Pangan', 'Penurunan hasil panen, perubahan waktu tanam', 'Kekeringan di daerah subtropis'],
          ['Air', 'Penyusutan sumber air, intrusi air laut ke akuifer', 'Sungai dan danau menyusut'],
          ['Kesehatan', 'Penyakit tropis meluas, gelombang panas', 'Demam berdarah di wilayah baru'],
          ['Ekosistem', 'Pemutihan karang, pergeseran habitat', 'Punahnya spesies pegunungan'],
          ['Pesisir', 'Abrasi dan banjir rob, kota terancam', 'Jakarta, Venice, kota delta'],
          ['Ekonomi', 'Kerugian bencana, biaya adaptasi', 'Asuransi dan infrastruktur'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mitigasi dan Adaptasi',
      },
      {
        type: 'list',
        items: [
          { text: 'Mitigasi: mengurangi emisi (transisi energi, efisiensi, penghijauan, teknologi rendah karbon).' },
          { text: 'Adaptasi: menyesuaikan diri terhadap dampak yang tak terhindarkan (bangunan tahan banjir, varietas tanaman tahan kekeringan, sistem peringatan dini).' },
          { text: 'Carbon capture: menangkap CO$_2$ dari cerobong pabrik atau udara, lalu menyimpannya di formasi geologis.' },
          { text: 'Geoengineering: manipulasi iklim (memantulkan sinar matahari dengan aerosol stratosfer) masih kontroversial dan berisiko.' },
          { text: 'Individu dapat berkontribusi: hemat energi, kurangi sampah, gunakan transportasi ramah lingkungan, dan dukung kebijakan ramah iklim.' },
        ],
      },
      {
        type: 'definition',
        term: 'Jejak karbon (carbon footprint)',
        definition: 'Total emisi gas rumah kaca yang dihasilkan langsung maupun tidak langsung oleh suatu aktivitas, produk, atau individu, biasanya dinyatakan dalam ekuivalen CO2.',
      },
      {
        type: 'definition',
        term: 'Tipping point iklim',
        definition: 'Titik ambang di mana perubahan iklim memicu umpan balik positif yang sulit dibalik, misalnya mencairnya lapisan es Greenland yang tidak dapat pulih.',
      },
      {
        type: 'note',
        text: 'TKA sering membandingkan konsep efek rumah kaca (alami vs buatan), gas rumah kaca vs gas perusak ozon, dan mitigasi vs adaptasi. Catat juga peran ozon di stratosfer (melindungi UV) berbeda dari ozon di troposfer (polusi/gas rumah kaca).',
        variant: 'tip',
      },
      {
        type: 'paragraph',
        text: 'Kerja sama internasional menjadi kunci: Protokol Kyoto mewajibkan negara industri mengurangi emisi; Perjanjian Paris menetapkan target menjaga kenaikan suhu global di bawah 2 $^\\circ$C dan mengejar 1,5 $^\\circ$C dibanding pra-industri.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kota dan Efek Pulau Panas (Urban Heat Island)',
      },
      {
        type: 'paragraph',
        text: 'Kota cenderung lebih panas daripada wilayah pedesaan di sekitarnya karena beton dan aspal menyerap radiasi, berkurangnya vegetasi (transpirasi), dan aktivitas antropogenik. Suhu di pusat kota bisa 2-6 $^\\circ$C lebih tinggi, meningkatkan kebutuhan AC dan memperkuat gelombang panas lokal.',
      },
      {
        type: 'list',
        items: [
          { text: 'Permukaan beton/aspal berpoles rendah albedo dan kaya massa termal.' },
          { text: 'Sedikit pohon mengurangi pendinginan evaporatif.' },
          { text: 'Kendaraan dan AC memancarkan panas tambahan.' },
          { text: 'Solusi: atap hijau, taman kota, bahan pemantul panas, dan transportasi publik.' },
        ],
      },
      {
        type: 'example',
        title: 'Suhu Efektif Bumi',
        blocks: [
          { type: 'paragraph', text: 'Hitung $T_{eff}$ Bumi dengan $A=0,3$, $S=1361$ W/m$^2$, $\\sigma=5,67\\times10^{-8}$.' },
          { type: 'formula', latex: 'T_{eff} = \\left[\\frac{(1-0{,}3)\\times1361}{4\\times5{,}67\\times10^{-8}}\\right]^{1/4}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$T_{eff}$', meaning: 'Suhu efektif', unit: 'K' }, { symbol: '$A$', meaning: 'Albedo', unit: 'tak berdimensi' }, { symbol: '$S$', meaning: 'Konstanta surya', unit: 'W/m$^2$' }, { symbol: '$\\sigma$', meaning: 'Konstanta Stefan-Boltzmann', unit: 'W/(m$^2$· K$^4$)' }] },
          { type: 'paragraph', text: 'Bilangan dalam kurung: $(0,7\\times1361)/(2,268\\times10^{-7}) = 952,7/2,268\\times10^{-7} = 4,20\\times10^9$; akar keempat $\\approx 254,6$ K (-18,5 $^\\circ$C). Suhu permukaan aktual +15 $^\\circ$C karena efek rumah kaca alami (+33 K).' },
        ],
      },
      {
        type: 'note',
        text: 'Untuk TKA, ingat: efek rumah kaca alami menaikkan suhu sekitar +33 K; peningkatan gas rumah kaca akibat manusia menaikkan sekitar +1,1 K sejak era praindustri.',
        variant: 'info',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Emisi per Sumber Energi (Estimasi)',
      },
      {
        type: 'table',
        headers: ['Sumber Energi', 'Emisi CO$_2$ (g/kWh)', 'Catatan'],
        rows: [
          ['Batu bara', '820', 'Paling tinggi per kWh listrik'],
          ['Gas alam (CCGT)', '350-490', 'Lebih rendah dari batu bara'],
          ['Minyak (diesel)', '650-800', 'Transportasi dan pembangkit'],
          ['Biomassa', '18-40 (biogenic)', 'Tergantung pasokan dan metode'],
          ['Tenaga surya (PV)', '30-50 (life cycle)', 'Operasi tanpa emisi langsung'],
          ['Tenaga angin', '10-20 (life cycle)', 'Sangat rendah'],
          ['Tenaga air (hidro)', '4-14 (life cycle)', 'Rendah, tetapi dampak ekosistem'],
          ['Geotermal', '6-79 (life cycle)', 'Bervariasi lokasi'],
          ['Nuklir', '3-6 (life cycle)', 'Emisi sangat rendah, limbah radioaktif'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Nilai life cycle memasukkan manufaktur, konstruksi, operasi, dan pembongkaran. Peralihan dari fosil ke terbarukan mengurangi emisi, tetapi butuh kapasitas penyimpanan (baterai) dan jaringan fleksibel.',
      },
      {
        type: 'definition',
        term: 'Kapasitas terpasang (installed capacity)',
        definition: 'Daya maksimum yang dapat dihasilkan suatu pembangkit saat beroperasi penuh; tidak selalu sama dengan energi rata-rata yang dihasilkan (capacity factor).',
      },
      {
        type: 'list',
        items: [
          { text: 'Strategi pemanasan global menggabungkan mitigasi (kurangi emisi) dan adaptasi (siap dampak).' },
          { text: 'Solusi terbaik biasanya kombinasi: efisiensi + terbarukan + elektrifikasi + perubahan gaya hidup.' },
          { text: 'Pembangunan berkelanjutan menyeimbangkan pertumbuhan ekonomi, keadilan sosial, dan perlindungan lingkungan (triple bottom line).' },
        ],
      },
    ],
  },
  {
    slug: 'gas-ideal',
    no: 13,
    title: 'Gas Ideal',
    category: 'Termodinamika',
    summary: 'Hukum gas (Boyle, Charles, Gay-Lussac), persamaan keadaan, dan teori kinetik gas ideal.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Gas ideal adalah model sederhana gas yang partikelnya dianggap sebagai bola kecil yang tidak saling tarik-menarik (kecuali saat tumbukan) dan volumenya dapat diabaikan dibanding volume wadah. Partikel bergerak acak dengan kecepatan yang bergantung pada suhu. Suhu dalam semua rumus gas ideal selalu dinyatakan dalam Kelvin.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hukum-Hukum Gas',
      },
      {
        type: 'paragraph',
        text: 'Hukum gas menggambarkan hubungan antara tekanan $P$, volume $V$, suhu $T$, dan jumlah mol $n$. Setiap hukum mengubah dua variabel sambil menahan satu variabel tetap.',
      },
      {
        type: 'table',
        headers: ['Hukum', 'Variabel tetap', 'Rumus', 'Persamaan praktis'],
        rows: [
          ['Boyle', 'Suhu $T$ tetap', '$P V = \\text{konstan}$', '$P_1 V_1 = P_2 V_2$'],
          ['Charles', 'Tekanan $P$ tetap', '$V/T = \\text{konstan}$', '$V_1/T_1 = V_2/T_2$'],
          ['Gay-Lussac', 'Volume $V$ tetap', '$P/T = \\text{konstan}$', '$P_1/T_1 = P_2/T_2$'],
          ['Boyle-Gay-Lussac', 'Jumlah mol tetap', '$PV/T = \\text{konstan}$', '$P_1 V_1/T_1 = P_2 V_2/T_2$'],
          ['Avogadro', 'P,$T$ tetap', '$V/n = \\text{konstan}$', 'Volume molar semua gas sama pada suhu/tekanan sama'],
        ],
      },
      {
        type: 'formula',
        latex: '\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}',
        description: 'Bentuk umum perubahan keadaan gas (n tetap), $T$ dalam Kelvin.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P_1,P_2$', meaning: 'Tekanan awal dan akhir', unit: 'Pa (atau atm)' },
          { symbol: '$V_1,V_2$', meaning: 'Volume awal dan akhir', unit: 'm$^3$ (atau L)' },
          { symbol: '$T_1,T_2$', meaning: 'Suhu mutlak awal dan akhir', unit: 'K' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Persamaan Gas Ideal',
      },
      {
        type: 'image',
        src: '/diagrams/gas-ideal-partikel.svg',
        alt: 'Perbandingan jumlah partikel pada volume besar dan volume kecil dengan tekanan berbeda',
        caption: 'Pada suhu tetap, volume yang lebih kecil menghasilkan tekanan yang lebih besar.',
      },
      {
        type: 'paragraph',
        text: 'Persamaan keadaan gas ideal menghubungkan keempat variabel keadaan dalam satu persamaan. Konstanta $R$ universal dan $N_A$ (bilangan Avogadro) digunakan untuk menghubungkan skala makroskopik dan mikroskopik.',
      },
      {
        type: 'formula',
        latex: 'P V = n R T = N k T',
        description: 'Persamaan keadaan gas ideal.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P$', meaning: 'Tekanan gas', unit: 'Pa' },
          { symbol: '$V$', meaning: 'Volume gas', unit: 'm$^3$' },
          { symbol: '$n$', meaning: 'Jumlah mol gas', unit: 'mol' },
          { symbol: '$R$', meaning: 'Konstanta gas universal $= 8{,}314$', unit: 'J/(mol· K)' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
          { symbol: '$N$', meaning: 'Jumlah molekul gas', unit: 'tak berdimensi' },
          { symbol: '$k$', meaning: 'Konstanta Boltzmann $= 1{,}38\\times10^{-23}$', unit: 'J/K' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Jumlah mol dari massa: $n = \\frac{m}{M}$, dengan $M$ = massa molar (kg/mol).' },
          { text: 'Jumlah molekul: $N = n N_A$, dengan $N_A = 6{,}02\\times10^{23}\\ \\text{mol}^{-1}$.' },
          { text: '$R = 8{,}314\\ \\mathrm{J/(mol\\cdot K)} = 0{,}082\\ \\mathrm{L\\cdot atm/(mol\\cdot K)} = 8314\\ \\mathrm{J/(kmol\\cdot K)}$.' },
          { text: '$k = \\frac{R}{N_A} = 1{,}38\\times10^{-23}\\ \\text{J/K}$ (konstanta Boltzmann).' },
          { text: 'Volume molar pada STP (0 $^\\circ$C, 1 atm): $V_m = 22{,}4\\ \\text{L/mol}$.' },
          { text: 'Massa jenis gas: $\\rho = \\frac{PM}{RT}$.' },
        ],
      },
      {
        type: 'note',
        text: 'Pada TKA sering muncul satuan L dan atm. Pakailah $R = 0{,}082\\ \\mathrm{L\\cdot atm/(mol\\cdot K)}$ jika $P$ dalam atm, $V$ dalam liter, dan $T$ dalam K. Jika $P$ dalam Pa dan $V$ dalam m$^3$, pakai $R=8{,}314$.',
        variant: 'tip',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Teori Kinetik Gas',
      },
      {
        type: 'paragraph',
        text: 'Teori kinetik gas menghubungkan sifat makroskopik (tekanan, suhu) dengan gerak molekul. Tekanan gas muncul dari tumbukan molekul dengan dinding wadah. Suhu berbanding lurus dengan energi kinetik rata-rata molekul.',
      },
      {
        type: 'formula',
        latex: 'P = \\frac{1}{3}\\frac{N}{V} m \\overline{v^2} = \\frac{2}{3}\\frac{N}{V} \\overline{E_k}',
        description: 'Tekanan gas berdasarkan tumbukan molekul dengan dinding.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P$', meaning: 'Tekanan gas', unit: 'Pa' },
          { symbol: '$N$', meaning: 'Jumlah molekul', unit: 'tak berdimensi' },
          { symbol: '$V$', meaning: 'Volume wadah', unit: 'm$^3$' },
          { symbol: '$m$', meaning: 'Massa satu molekul', unit: 'kg' },
          { symbol: '$\\overline{v^2}$', meaning: 'Rata-rata kuadrat kecepatan molekul', unit: 'm$^2$/s$^2$' },
          { symbol: '$\\overline{E_k}$', meaning: 'Energi kinetik rata-rata per molekul', unit: 'J' },
        ],
      },
      {
        type: 'formula',
        latex: '\\overline{E_k} = \\frac{3}{2} k T',
        description: 'Energi kinetik rata-rata per molekul, hanya bergantung pada suhu mutlak.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\overline{E_k}$', meaning: 'Energi kinetik rata-rata per molekul', unit: 'J' },
          { symbol: '$k$', meaning: 'Konstanta Boltzmann', unit: 'J/K' },
          { symbol: '$T$', meaning: 'Suhu mutlak gas', unit: 'K' },
        ],
      },
      {
        type: 'formula',
        latex: 'v_{\\mathrm{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3 k T}{m}} = \\sqrt{\\frac{3 R T}{M}}',
        description: 'Kecepatan rms (root mean square) molekul gas.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$v_{\\mathrm{rms}}$', meaning: 'Kecepatan kuadrat rata-rata akar', unit: 'm/s' },
          { symbol: '$k$', meaning: 'Konstanta Boltzmann', unit: 'J/K' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
          { symbol: '$m$', meaning: 'Massa satu molekul', unit: 'kg' },
          { symbol: '$R$', meaning: 'Konstanta gas universal', unit: 'J/(mol· K)' },
          { symbol: '$M$', meaning: 'Massa molar gas', unit: 'kg/mol' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Energi dalam (energi internal) gas ideal bergantung pada jumlah derajat kebebasan. Setiap derajat kebebasan menyumbang $\\frac{1}{2}kT$ per molekul, atau $\\frac{1}{2}RT$ per mol.',
      },
      {
        type: 'table',
        headers: ['Jenis Gas', 'Derajat kebebasan', 'Energi dalam $U$', 'Kapasitas kalor $C_V$ per mol'],
        rows: [
          ['Monoatomik (He, Ne, Ar)', '3 translasi', '$\\frac{3}{2} n R T$', '$\\frac{3}{2} R$'],
          ['Diatomik suhu sedang (N$_2$, O$_2$)', '3 translasi + 2 rotasi', '$\\frac{5}{2} n R T$', '$\\frac{5}{2} R$'],
          ['Diatomik suhu tinggi', 'tambah 2 vibrasi', '$\\frac{7}{2} n R T$', '$\\frac{7}{2} R$'],
          ['Poliatomik (CO$_2$, H$_2$O)', '3 translasi + 3 rotasi', '$3 n R T$', '$3 R$'],
        ],
      },
      {
        type: 'formula',
        latex: 'U = \\frac{f}{2} n R T',
        description: 'Energi dalam gas ideal dengan $f$ derajat kebebasan.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$U$', meaning: 'Energi dalam gas', unit: 'J' },
          { symbol: '$f$', meaning: 'Derajat kebebasan molekul', unit: 'tak berdimensi' },
          { symbol: '$n$', meaning: 'Jumlah mol', unit: 'mol' },
          { symbol: '$R$', meaning: 'Konstanta gas universal', unit: 'J/(mol· K)' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
        ],
      },
      {
        type: 'note',
        text: 'Energi kinetik rata-rata per molekul $\\frac{3}{2}kT$ sama untuk semua gas pada suhu yang sama, tidak peduli massanya. Tetapi kecepatan rms berbeda: gas yang lebih ringan (massa molar kecil) bergerak lebih cepat, sebab $v_{rms} \\propto 1/\\sqrt{M}$.',
        variant: 'info',
      },
      {
        type: 'example',
        title: 'Kecepatan rms Hidrogen',
        blocks: [
          { type: 'paragraph', text: 'Gas H$_2$ ($M = 2\\ \\text{g/mol} = 0{,}002\\ \\text{kg/mol}$) pada suhu 300 K. Hitung $v_{rms}$.' },
          { type: 'formula', latex: 'v_{rms} = \\sqrt{\\frac{3 R T}{M}} = \\sqrt{\\frac{3\\times 8{,}314\\times 300}{0{,}002}}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$v_{rms}$', meaning: 'Kecepatan rms', unit: 'm/s' }, { symbol: '$R$', meaning: 'Konstanta gas', unit: 'J/(mol· K)' }, { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' }, { symbol: '$M$', meaning: 'Massa molar', unit: 'kg/mol' }] },
          { type: 'formula', latex: 'v_{rms} = \\sqrt{\\frac{7482{,}6}{0{,}002}} = \\sqrt{3741300} \\approx 1934\\ \\text{m/s}' },
          { type: 'paragraph', text: 'Hidrogen bergerak sangat cepat karena massanya ringan. Untuk O$_2$ (M=0,032) pada suhu yang sama, $v_{rms} \\approx 483$ m/s.' },
        ],
      },
      {
        type: 'example',
        title: 'Tekanan dari Jumlah Molekul',
        blocks: [
          { type: 'paragraph', text: 'Gas ideal dalam tabung volume 2 L pada suhu 300 K berisi 0,5 mol. Hitung tekanannya.' },
          { type: 'formula', latex: 'P = \\frac{n R T}{V} = \\frac{0{,}5\\times 8{,}314\\times 300}{0{,}002}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$P$', meaning: 'Tekanan', unit: 'Pa' }, { symbol: '$n$', meaning: 'Jumlah mol', unit: 'mol' }, { symbol: '$R$', meaning: 'Konstanta gas', unit: 'J/(mol· K)' }, { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' }, { symbol: '$V$', meaning: 'Volume', unit: 'm$^3$' }] },
          { type: 'paragraph', text: 'Penyebut V = 2 L = 0,002 m$^3$. $P = 1247100/2? $ Sebenarnya $0{,}5\\times 8{,}314\\times 300 = 1247{,}1 J$; dibagi 0,002 = 623550 Pa $\\approx 6{,}16$ atm.' },
        ],
      },
      {
        type: 'example',
        title: 'Perubahan Keadaan (Boyle)',
        blocks: [
          { type: 'paragraph', text: 'Gas ideal awal $P_1=2$ atm, $V_1=4$ L, T konstan. Volume diperkecil menjadi 1 L. Hitung tekanan akhir.' },
          { type: 'formula', latex: 'P_2 = \\frac{P_1 V_1}{V_2} = \\frac{2\\times 4}{1} = 8\\ \\text{atm}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$P_1,P_2$', meaning: 'Tekanan awal/akhir', unit: 'atm' }, { symbol: '$V_1,V_2$', meaning: 'Volume awal/akhir', unit: 'L' }] },
          { type: 'paragraph', text: 'Mengecilkan volume 4x pada suhu tetap menaikkan tekanan 4x (hukum Boyle).' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kecepatan Molekul: Rata-Rata, RMS, dan Paling Mungkin',
      },
      {
        type: 'paragraph',
        text: 'Teori kinetik membedakan beberapa ukuran kecepatan molekul. Semuanya sebanding dengan $\\sqrt{T/M}$, tetapi konstanta berbeda.',
      },
      {
        type: 'formula',
        latex: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}},\\quad \\bar v = \\sqrt{\\frac{8RT}{\\pi M}},\\quad v_{mp} = \\sqrt{\\frac{2RT}{M}}',
        description: 'Kecepatan rms, rata-rata (mean), dan paling mungkin molekul gas ideal.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$v_{\\text{rms}}$', meaning: 'Kecepatan kuadrat rata-rata yang diakar', unit: 'm/s' },
          { symbol: '$\\bar v$', meaning: 'Kecepatan rata-rata aritmetik', unit: 'm/s' },
          { symbol: '$v_{mp}$', meaning: 'Kecepatan dengan probabilitas terbesar', unit: 'm/s' },
          { symbol: '$R$', meaning: 'Konstanta gas universal', unit: 'J/(mol· K)' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
          { symbol: '$M$', meaning: 'Massa molar gas', unit: 'kg/mol' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Urutan besar: $v_{mp} < \\bar v < v_{rms}$. Nilai-nilai ini penting pada proses difusi, efusi, dan perpindahan panas gas.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Gas Nyata dan Penyimpangan Model Ideal',
      },
      {
        type: 'paragraph',
        text: 'Gas nyata menyimpang dari model ideal pada suhu rendah dan tekanan tinggi karena volume molekul tidak lagi dapat diabaikan dan gaya antarmolekul (van der Waals) mulai berperan. Pada suhu/tekanan tinggi, gas ideal tetap aproksimasi baik.',
      },
      {
        type: 'formula',
        latex: '\\left(P + a\\frac{n^2}{V^2}\\right)(V - nb) = nRT',
        description: 'Persamaan van der Waals untuk gas nyata (modifikasi persamaan ideal).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P,V,T,n$', meaning: 'Tekanan, volume, suhu, jumlah mol', unit: 'Pa, m$^3$, K, mol' },
          { symbol: '$a$', meaning: 'Parameter gaya tarik antarmolekul', unit: 'Pa· m$^6$/mol$^2$' },
          { symbol: '$b$', meaning: 'Volume eksklusi per mol (ukuran molekul)', unit: 'm$^3$/mol' },
          { symbol: '$R$', meaning: 'Konstanta gas universal', unit: 'J/(mol· K)' },
        ],
      },
      {
        type: 'note',
        text: 'Untuk soal TKA, anggap gas ideal kecuali soal menyatakan sebaliknya. Perhatikan satuan $P$, $V$, $T$, dan $n$ konsisten sebelum masuk ke rumus.',
        variant: 'tip',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Jalur Lanjut Proses pada Diagram P-V',
      },
      {
        type: 'list',
        items: [
          { text: 'Siklus tertutup: $\\Delta U = 0$ (kembali ke keadaan awal), sehingga $W_{\\text{net}} = Q_{\\text{net}}$.' },
          { text: 'Luas di bawah kurva pada diagram $P$-$V$ = usaha; bila jalur kembali ke awal, luas tertutup = usaha net yang dilakukan.' },
          { text: 'Proses searah jarum jam = mesin (usaha oleh sistem); berlawanan jarum jam = pendingin/kompresi.' },
          { text: 'Jangan lupa tanda: usaha oleh sistem positif saat ekspansi (volume naik), negatif saat kompresi.' },
        ],
      },
      {
        type: 'example',
        title: 'Proses Dua Tahap',
        blocks: [
          { type: 'paragraph', text: 'Gas ideal 1 mol pada (P1=2 atm, V1=1 L, T1=300 K) mengalami proses isokhorik hingga P2=4 atm, lalu isotermik hingga V3=2 L. Hitung usaha total yang dilakukan gas (abaikan R satuan; 1 L· atm = 101,3 J).' },
          { type: 'paragraph', text: 'Tahap 1 isokhorik: $W_1 = 0$ karena $\\Delta V=0$. Temperatur naik: $T_2 = T_1 (P_2/P_1) = 300\\times2 = 600$ K.' },
          { type: 'paragraph', text: 'Tahap 2 isotermik pada T2 = 600 K: $W_2 = nRT_2 \\ln(V_3/V_2)$. V2 = V1 = 1 L, V3 = 2 L. Gunakan R = 0,082 L· atm/(mol· K): $W_2 = 1\\times0,082\\times600\\times\\ln2 = 49,2\\times0,693 = 34,1$ L· atm.' },
          { type: 'formula', latex: 'W_{\\text{total}} = W_1 + W_2 \\approx 34{,}1\\ \\text{L}\\cdot\\text{atm} \\approx 3455\\ \\text{J}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$W_{\\text{total}}$', meaning: 'Usaha total yang dilakukan gas', unit: 'J' }, { symbol: '$W_1,W_2$', meaning: 'Usaha tiap tahap', unit: 'J' }] },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tips dan Jebakan TKA Topik Gas Ideal',
      },
      {
        type: 'list',
        items: [
          { text: 'Semua suhu harus Kelvin. Gunakan K = C + 273 (atau 273,15).' },
          { text: 'Pastikan kesesuaian satuan R dengan P dan V yang dipakai.' },
          { text: 'Gas ideal tidak bergantung pada jenis gas untuk $P,V,n,T$, tetapi $v_{rms}$ dan energi dalam bergantung (massa molar / derajat kebebasan).' },
          { text: 'Gunakan persamaan keadaan $PV=nRT$ untuk menentukan variabel yang belum diketahui.' },
          { text: 'Kalor jenis molar gas: $C_p = C_V + R$; jangan samakan dengan kalor jenis per massa.' },
          { text: 'Pada isokhorik, $W=0$; pada isotermik, $\\Delta U=0$; pada adiabatik, $Q=0$.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Perbandingan Kecepatan Molekul Contoh',
      },
      {
        type: 'paragraph',
        text: 'Kecepatan rms gas ringan lebih besar daripada gas berat pada suhu yang sama. Demikian pula, pada suhu yang lebih tinggi molekul bergerak rata-rata lebih cepat.',
      },
      {
        type: 'table',
        headers: ['Gas', 'Massa molar M (g/mol)', 'v_rms pada 300 K (m/s)'],
        rows: [
          ['H$_2$', '2', '1934'],
          ['He', '4', '1368'],
          ['H$_2$O', '18', '645'],
          ['N$_2$', '28', '517'],
          ['O$_2$', '32', '484'],
          ['CO$_2$', '44', '413'],
        ],
      },
      {
        type: 'formula',
        latex: 'v_{rms}(T_2) = v_{rms}(T_1)\\sqrt{\\frac{T_2}{T_1}}',
        description: 'Skala kecepatan rms dengan suhu pada gas yang sama.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$v_{rms}(T_1), v_{rms}(T_2)$', meaning: 'Kecepatan rms pada suhu awal/akhir', unit: 'm/s' },
          { symbol: '$T_1,T_2$', meaning: 'Suhu mutlak awal/akhir', unit: 'K' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Laju Efusi dan Hukum Graham',
      },
      {
        type: 'paragraph',
        text: 'Gas bocor melalui lubang kecil dengan laju yang berbanding terbalik dengan akar massa molar. Semakin ringan gas, semakin cepat ia berdifusi/efusi.',
      },
      {
        type: 'formula',
        latex: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}',
        description: 'Laju efusi relatif (hukum Graham).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$r_1,r_2$', meaning: 'Laju efusi gas pertama/kedua', unit: 'mol/s atau volume/s' },
          { symbol: '$M_1,M_2$', meaning: 'Massa molar gas pertama/kedua', unit: 'g/mol' },
        ],
      },
      {
        type: 'example',
        title: 'Efusi Helium vs Oksigen',
        blocks: [
          { type: 'paragraph', text: 'Bandingkan laju efusi He (M=4) dan O$_2$ (M=32).' },
          { type: 'formula', latex: '\\frac{r_{He}}{r_{O_2}} = \\sqrt{\\frac{32}{4}} = \\sqrt{8} \\approx 2{,}83' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$r_{He}, r_{O_2}$', meaning: 'Laju efusi', unit: 'tak berdimensi relative' }, { symbol: '$M$', meaning: 'Massa molar', unit: 'g/mol' }] },
          { type: 'paragraph', text: 'Helium bocor/berdifusi sekitar 2,83 kali lebih cepat daripada oksigen pada suhu yang sama.' },
        ],
      },
      {
        type: 'note',
        text: 'Hukum Graham penting untuk pemisahan isotop (misalnya uranium) dan penjelasan mengapa balon helium cepat kempes. TKA dapat menanyakan rasio waktu atau rasio effusi.',
        variant: 'tip',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Manometer dan Pengukuran Tekanan Gas',
      },
      {
        type: 'paragraph',
        text: 'Manometer (tabung U berisi raksa) mengukur tekanan gas relatif terhadap atmosfer. Perbedaan tinggi kolom raksa $\\Delta h$ memberikan tekanan pengukuran dalam mmHg (torr).',
      },
      {
        type: 'formula',
        latex: 'P_{gas} = P_{atm} \\pm \\rho g \\Delta h,\\quad \\rho_{Hg} g \\times 1\\ \\text{mm} = 133{,}3\\ \\text{Pa}',
        description: 'Tekanan gas dari manometer raksa (tanda + jika merkuri turun di sisi gas).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P_{gas}$', meaning: 'Tekanan gas', unit: 'Pa' },
          { symbol: '$P_{atm}$', meaning: 'Tekanan atmosfer', unit: 'Pa' },
          { symbol: '$\\rho, g$', meaning: 'Massa jenis raksa dan percepatan gravitasi', unit: 'kg/m$^3$, m/s$^2$' },
          { symbol: '$\\Delta h$', meaning: 'Selisih tinggi kolom raksa', unit: 'm atau mm' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Manometer terbuka: $P_{gas} = P_{atm} \\pm \\rho g h$ (tanda tergantung sisi yang lebih tinggi).' },
          { text: 'Manometer tertutup: mengukur tekanan mutlak gas (sisi lain vakum).' },
          { text: '1 atm = 760 mmHg = 760 torr = 101325 Pa.' },
        ],
      },
      {
        type: 'example',
        title: 'Manometer Terbuka',
        blocks: [
          { type: 'paragraph', text: 'Manometer terbuka menunjukkan sisi (gas) lebih rendah 120 mm dari sisi atmosfer. Tekanan atmosfer 760 mmHg. Tentukan tekanan gas.' },
          { type: 'formula', latex: 'P_{gas} = 760\\ \\text{mmHg} + 120\\ \\text{mmHg} = 880\\ \\text{mmHg}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$P_{gas}$', meaning: 'Tekanan gas', unit: 'mmHg' }] },
          { type: 'paragraph', text: 'Karena merkuri sisi gas lebih rendah, gas menekan lebih kuat: $P_{gas} = P_{atm} + \\rho g h$.' },
        ],
      },
      {
        type: 'example',
        title: 'Gas dalam Dua Keadaan Bertahap',
        blocks: [
          { type: 'paragraph', text: 'Gas ideal 2 mol awal pada (2 atm, 4 L, 300 K). Pertama isobarik mengembang hingga volume 8 L, lalu isokhorik dingin hingga 200 K. Tentukan tekanan akhir.' },
          { type: 'paragraph', text: 'Setelah isobarik: $T_2 = T_1 (V_2/V_1) = 300\\times(8/4)=600$ K, P2 = 2 atm tetap.' },
          { type: 'paragraph', text: 'Setelah isokhorik: $P_3 = P_2 (T_3/T_2) = 2\\times (200/600) = 0{,}667$ atm.' },
          { type: 'formula', latex: 'P_3 = \\frac{2}{3}\\ \\text{atm} \\approx 67{,}5\\ \\text{kPa}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$P_3$', meaning: 'Tekanan akhir', unit: 'atm atau kPa' }, { symbol: '$T_2,T_3$', meaning: 'Suhu mutlak tahap', unit: 'K' }] },
        ],
      },
    ],
  },
  {
    slug: 'termodinamika',
    no: 14,
    title: 'Termodinamika',
    category: 'Termodinamika',
    summary: 'Proses termodinamika, hukum-hukum termodinamika, mesin kalor, efisiensi Carnot, dan mesin pendingin.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Termodinamika mempelajari hubungan antara kalor, usaha (kerja), dan energi dalam dalam suatu sistem. Proses termodinamika biasa digambarkan pada diagram $P$-$V$, di mana usaha yang dilakukan sistem oleh gas sama dengan luas di bawah kurva yang bersangkutan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Variabel Termodinamika',
      },
      {
        type: 'list',
        items: [
          { text: 'Energi dalam $U$: energi total (kinetik+potensial) partikel dalam sistem, sifat keadaan.' },
          { text: 'Kalor $Q$: energi yang dipindah karena perbedaan suhu, bukan sifat keadaan.' },
          { text: 'Usaha $W$: energi yang dipindah karena gaya yang bekerja melalui perpindahan, bukan sifat keadaan.' },
          { text: '$Q$ dan $W$ bergantung pada jalur proses, sedangkan $U$ (dan fungsi lain seperti $H$, $S$) bergantung hanya pada keadaan.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Usaha dalam Proses Termodinamika',
      },
      {
        type: 'formula',
        latex: 'W = \\int P\\, dV',
        description: 'Usaha yang dilakukan oleh sistem (gas) pada perubahan volume.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$W$', meaning: 'Usaha yang dilakukan sistem', unit: 'J' },
          { symbol: '$P$', meaning: 'Tekanan gas', unit: 'Pa' },
          { symbol: '$dV$', meaning: 'Diferensial volume', unit: 'm$^3$' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Tanda usaha: $W > 0$ jika gas mengembang (melakukan usaha pada lingkungan), $W < 0$ jika gas dikompresi (lingkungan melakukan usaha pada gas). Kalor $Q > 0$ jika sistem menyerap kalor.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Empat Proses Termodinamika Dasar',
      },
      {
        type: 'image',
        src: '/diagrams/termodinamika-siklus.svg',
        alt: 'Siklus empat proses mesin pembakaran dalam pada diagram tekanan-volume',
        caption: 'Luas di dalam siklus adalah usaha neto, yaitu kalor masuk dikurangi kalor keluar.',
      },
      {
        type: 'table',
        headers: ['Proses', 'Variabel tetap', 'Usaha $W$ (oleh sistem)', 'Kalor $Q$', 'Perubahan energi dalam'],
        rows: [
          ['Isotermik', 'Tetap $T$', '$n R T \\ln(V_2/V_1)$', '$Q = W$', '$\\Delta U = 0$'],
          ['Isobarik', 'Tetap $P$', '$P \\Delta V$', '$Q = n C_p \\Delta T$', '$\\Delta U = n C_V \\Delta T$'],
          ['Isokhorik', 'Tetap $V$', '$0$', '$Q = \\Delta U = n C_V \\Delta T$', '$\\Delta U = n C_V \\Delta T$'],
          ['Adiabatik', '$Q = 0$', '$-\\Delta U$', '$0$', '$\\Delta U = -W$'],
        ],
      },
      {
        type: 'formula',
        latex: 'W_{\\text{isotermik}} = n R T \\ln\\!\\left(\\frac{V_2}{V_1}\\right)',
        description: 'Usaha dalam proses isotermik gas ideal (suhu tetap).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$W$', meaning: 'Usaha yang dilakukan sistem', unit: 'J' },
          { symbol: '$n$', meaning: 'Jumlah mol gas', unit: 'mol' },
          { symbol: '$R$', meaning: 'Konstanta gas universal', unit: 'J/(mol· K)' },
          { symbol: '$T$', meaning: 'Suhu mutlak (tetap)', unit: 'K' },
          { symbol: '$V_1,V_2$', meaning: 'Volume awal dan akhir', unit: 'm$^3$' },
        ],
      },
      {
        type: 'formula',
        latex: 'W_{\\text{isobarik}} = P \\Delta V = P (V_2 - V_1)',
        description: 'Usaha dalam proses tekanan tetap.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$W$', meaning: 'Usaha yang dilakukan sistem', unit: 'J' },
          { symbol: '$P$', meaning: 'Tekanan tetap', unit: 'Pa' },
          { symbol: '$\\Delta V$', meaning: 'Perubahan volume', unit: 'm$^3$' },
        ],
      },
      {
        type: 'formula',
        latex: 'P V^{\\gamma} = \\text{konstan},\\quad T V^{\\gamma-1} = \\text{konstan}',
        description: 'Hubungan adiabatik (tidak ada pertukaran kalor, $Q=0$).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P,V,T$', meaning: 'Tekanan, volume, suhu mutlak', unit: 'Pa, m$^3$, K' },
          { symbol: '$\\gamma$', meaning: 'Rasio kapasitas kalor $C_p/C_V$ (monoatomik $5/3$, diatomik $7/5$)', unit: 'tak berdimensi' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kapasitas Kalor Gas',
      },
      {
        type: 'table',
        headers: ['Gas', '$C_V$ (per mol)', '$C_p$ (per mol)', '$\\gamma = C_p/C_V$'],
        rows: [
          ['Monoatomik', '$\\frac{3}{2}R$', '$\\frac{5}{2}R$', '$\\frac{5}{3} \\approx 1{,}67$'],
          ['Diatomik (suhu sedang)', '$\\frac{5}{2}R$', '$\\frac{7}{2}R$', '$\\frac{7}{5} = 1{,}40$'],
          ['Poliatomik', '$3R$', '$4R$', '$\\frac{4}{3} \\approx 1{,}33$'],
        ],
      },
      {
        type: 'formula',
        latex: 'C_p = C_V + R',
        description: 'Hubungan Mayer: kapasitas kalor pada tekanan tetap = kapasitas kalor pada volume tetap + R.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$C_p$', meaning: 'Kapasitas kalor pada tekanan tetap (molar)', unit: 'J/(mol· K)' },
          { symbol: '$C_V$', meaning: 'Kapasitas kalor pada volume tetap (molar)', unit: 'J/(mol· K)' },
          { symbol: '$R$', meaning: 'Konstanta gas universal', unit: 'J/(mol· K)' },
        ],
      },
      {
        type: 'note',
        text: 'Pada proses isokhorik, semua kalor masuk menjadi perubahan energi dalam (tidak ada usaha). Pada proses isotermik, semua kalor masuk menjadi usaha ($\\Delta U=0$). Pada adiabatik, kalor nol, usaha mengurangi energi dalam (suhu turun saat ekspansi).',
        variant: 'info',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hukum Termodinamika',
      },
      {
        type: 'list',
        items: [
          { text: 'Hukum Ke-0: Jika sistem A setimbang termal dengan B dan B setimbang dengan C, maka A setimbang dengan C. Inilah dasar pengukuran suhu dengan termometer.' },
          { text: 'Hukum Ke-1: $\\Delta U = Q - W$. Hukum kekekalan energi untuk sistem termodinamika, dengan $Q$ kalor masuk (+) dan $W$ usaha yang dilakukan sistem (+).' },
          { text: 'Hukum Ke-2 (Clausius): Kalor tidak mengalir spontan dari benda dingin ke panas. (Kelvin-Planck): Tidak mungkin membuat mesin yang mengubah seluruh kalor dari satu reservoir menjadi usaha (harus ada kalor dibuang). Entropi sistem terisolasi tidak pernah berkurang.' },
        ],
      },
      {
        type: 'formula',
        latex: '\\Delta U = Q - W',
        description: 'Hukum Pertama Termodinamika (tanda $W$ usaha yang dilakukan sistem).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\Delta U$', meaning: 'Perubahan energi dalam sistem', unit: 'J' },
          { symbol: '$Q$', meaning: 'Kalor yang diterima sistem', unit: 'J' },
          { symbol: '$W$', meaning: 'Usaha yang dilakukan sistem', unit: 'J' },
        ],
      },
      {
        type: 'formula',
        latex: 'dS = \\frac{dQ_{\\text{rev}}}{T}',
        description: 'Perubahan entropi pada proses reversibel, $S$ fungsi keadaan.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$S$', meaning: 'Entropi (derajat ketidakteraturan)', unit: 'J/K' },
          { symbol: '$dQ_{\\text{rev}}$', meaning: 'Kalor reversibel', unit: 'J' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
        ],
      },
      {
        type: 'note',
        text: 'Konvensi tanda sangat penting. Pada rumus $\\Delta U = Q - W$, $W$ positif bila sistem mengembang. Beberapa buku menulis $\\Delta U = Q + W$ dengan $W$ usaha pada sistem. Pastikan konsisten dengan soal.',
        variant: 'warning',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mesin Kalor (Heat Engine)',
      },
      {
        type: 'paragraph',
        text: 'Mesin kalor mengubah kalor menjadi usaha mekanik dengan bekerja dalam siklus antara reservoir panas suhu $T_1$ dan reservoir dingin suhu $T_2$. Setiap siklus, mesin menyerap kalor $Q_1$, melakukan usaha $W$, dan membuang kalor $Q_2$ ke lingkungan.',
      },
      {
        type: 'formula',
        latex: 'W = Q_1 - Q_2,\\quad \\eta = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1}',
        description: 'Usaha dan efisiensi mesin kalor, dengan $0 < \\eta < 1$.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$W$', meaning: 'Usaha yang dihasilkan (output)', unit: 'J' },
          { symbol: '$Q_1$', meaning: 'Kalor yang diserap dari reservoir panas', unit: 'J' },
          { symbol: '$Q_2$', meaning: 'Kalor yang dibuang ke reservoir dingin', unit: 'J' },
          { symbol: '$\\eta$', meaning: 'Efisiensi mesin kalor', unit: 'tak berdimensi (atau %)' },
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Mesin Carnot (Efisiensi Maksimum)',
      },
      {
        type: 'paragraph',
        text: 'Siklus Carnot terdiri dari dua proses isotermik dan dua proses adiabatik, semuanya reversibel. Dalam kondisi ideal ini, efisiensi mesin Carnot hanya bergantung pada suhu kedua reservoir (dalam Kelvin) dan merupakan efisiensi maksimum teoritis untuk rentang suhu tersebut.',
      },
      {
        type: 'formula',
        latex: '\\eta_C = 1 - \\frac{T_2}{T_1}',
        description: 'Efisiensi Carnot; $T_1 > T_2$ dalam Kelvin.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\eta_C$', meaning: 'Efisiensi maksimum (Carnot)', unit: 'tak berdimensi' },
          { symbol: '$T_1$', meaning: 'Suhu reservoir panas (sumber)', unit: 'K' },
          { symbol: '$T_2$', meaning: 'Suhu reservoir dingin (pelipur)', unit: 'K' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Tidak ada mesin nyata yang mencapai efisiensi Carnot; mesin nyata selalu lebih rendah karena gesekan, kebocoran panas, dan ketidakreversibelan. Untuk meningkatkan efisiensi, perbesar $T_1$ atau perkecil $T_2$.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Mesin Pendingin (Refrigerator)',
      },
      {
        type: 'paragraph',
        text: 'Mesin pendingin (lemari es, AC) melakukan proses kebalikan dari mesin kalor: menggunakan usaha untuk memindahkan kalor dari reservoir dingin ke reservoir panas. Performansinya dinilai dengan Coefficient of Performance (COP), bukan efisiensi.',
      },
      {
        type: 'formula',
        latex: 'COP_{\\text{pendingin}} = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}',
        description: 'COP untuk mesin pendingin Carnot.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$COP$', meaning: 'Coefficient of Performance', unit: 'tak berdimensi' },
          { symbol: '$Q_2$', meaning: 'Kalor yang diambil dari ruang dingin', unit: 'J' },
          { symbol: '$W$', meaning: 'Usaha yang diberikan ke mesin', unit: 'J' },
          { symbol: '$T_2$', meaning: 'Suhu ruang yang didinginkan', unit: 'K' },
          { symbol: '$T_1$', meaning: 'Suhu lingkungan', unit: 'K' },
        ],
      },
      {
        type: 'formula',
        latex: 'COP_{\\text{pompa kalor}} = \\frac{Q_1}{W} = \\frac{T_1}{T_1 - T_2}',
        description: 'COP untuk pompa kalor (meyediakan kalor ke ruang hangat).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$COP$', meaning: 'Coefficient of Performance', unit: 'tak berdimensi' },
          { symbol: '$Q_1$', meaning: 'Kalor yang diberikan ke ruang hangat', unit: 'J' },
          { symbol: '$W$', meaning: 'Usaha input', unit: 'J' },
          { symbol: '$T_1$', meaning: 'Suhu ruang yang dihangatkan', unit: 'K' },
          { symbol: '$T_2$', meaning: 'Suhu lingkungan', unit: 'K' },
        ],
      },
      {
        type: 'example',
        title: 'Efisiensi Carnot',
        blocks: [
          { type: 'paragraph', text: 'Mesin Carnot bekerja antara reservoir panas 227 $^\\circ$C dan dingin 27 $^\\circ$C. Hitung efisiensinya.' },
          { type: 'formula', latex: 'T_1 = 227 + 273 = 500\\ \\text{K},\\quad T_2 = 27 + 273 = 300\\ \\text{K}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$T_1,T_2$', meaning: 'Suhu reservoir (Kelvin)', unit: 'K' }] },
          { type: 'formula', latex: '\\eta = 1 - \\frac{T_2}{T_1} = 1 - \\frac{300}{500} = 0{,}40 = 40\\%' },
          { type: 'paragraph', text: 'Artinya 40% kalor yang diserap diubah menjadi usaha; 60% sisanya dibuang.' },
        ],
      },
      {
        type: 'example',
        title: 'COP Lemari Es',
        blocks: [
          { type: 'paragraph', text: 'Lemari es Carnot bekerja antara ruang dingin -3 $^\\circ$C dan lingkungan 27 $^\\circ$C. Hitung COP.' },
          { type: 'formula', latex: 'T_1 = 27 + 273 = 300\\ \\text{K},\\quad T_2 = -3 + 273 = 270\\ \\text{K}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$T_1,T_2$', meaning: 'Suhu (Kelvin)', unit: 'K' }] },
          { type: 'formula', latex: 'COP = \\frac{T_2}{T_1 - T_2} = \\frac{270}{30} = 9' },
          { type: 'paragraph', text: 'COP = 9 artinya untuk setiap 1 J usaha listrik, kalor yang dikeluarkan dari ruang dingin = 9 J. COP pendingin selalu bisa lebih besar dari 1.' },
        ],
      },
      {
        type: 'note',
        text: 'Kesalahan paling umum TKA: memasukkan suhu dalam Celcius ke rumus yang membutuhkan Kelvin. Selalu konversi: $T_K = T_C + 273$ (atau 273,15).',
        variant: 'warning',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Siklus Mesin Pembakaran Internal (Otto dan Diesel)',
      },
      {
        type: 'paragraph',
        text: 'Mesin bensin (Otto) dan diesel bekerja dalam siklus yang menggabungkan kompresi adiabatik, pembakaran (panas masuk), ekspansi adiabatik, dan pembuangan panas. Efisiensi teoritis tergantung pada rasio kompresi dan $\\gamma$ (tetapi lebih rendah dari Carnot karena sumber panas tidak pada suhu tetap).',
      },
      {
        type: 'formula',
        latex: '\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma-1}},\\quad \\eta_{\\text{Diesel}} = 1 - \\frac{r^{1-\\gamma}[(r_c)^{\\gamma}-1]}{\\gamma(r_c-1)}',
        description: 'Efisiensi ideal siklus Otto dan Diesel; $r$ rasio kompresi, $r_c$ cut-off ratio.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\eta_{\\text{Otto}}$', meaning: 'Efisiensi ideal siklus Otto', unit: 'tak berdimensi' },
          { symbol: '$\\eta_{\\text{Diesel}}$', meaning: 'Efisiensi ideal siklus Diesel', unit: 'tak berdimensi' },
          { symbol: '$r$', meaning: 'Rasio kompresi $V_{maks}/V_{min}$', unit: 'tak berdimensi' },
          { symbol: '$r_c$', meaning: 'Rasio cut-off (volume setelah pembakaran/volume sebelum)', unit: 'tak berdimensi' },
          { symbol: '$\\gamma$', meaning: 'Rasio kapasitas kalor $C_p/C_V$', unit: 'tak berdimensi' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Efisiensi Otto naik dengan rasio kompresi $r$ (tetapi $r$ dibatasi oleh ketukan mesin/preignition).' },
          { text: 'Mesin diesel lebih efisien pada rasio kompresi tinggi dan tidak terjadi ketukan (pembakaran spontan terkontrol).' },
          { text: 'Mesin nyata jauh lebih rendah efisiensinya dari nilai ideal karena gesekan, pendinginan, dan pembakaran tidak sempurna.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Entropi dan Arah Waktu',
      },
      {
        type: 'paragraph',
        text: 'Entropi adalah ukuran ketidakteraturan atau jumlah mikrostate yang tersedia. Hukum Kedua menyatakan total entropi alam semesta tidak pernah berkurang pada proses spontan. Proses reversibel memiliki $\\Delta S_{univ}=0$; proses irreversibel (nyata) memiliki $\\Delta S_{univ}>0$.',
      },
      {
        type: 'formula',
        latex: '\\Delta S = \\frac{Q_{\\text{rev}}}{T},\\quad \\Delta S_{univ} = \\Delta S_{sistem} + \\Delta S_{lingkungan} \\ge 0',
        description: 'Perubahan entropi dan hukum Kedua dalam bentuk entropi.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$\\Delta S$', meaning: 'Perubahan entropi sistem', unit: 'J/K' },
          { symbol: '$Q_{\\text{rev}}$', meaning: 'Kalor reversibel', unit: 'J' },
          { symbol: '$T$', meaning: 'Suhu mutlak', unit: 'K' },
          { symbol: '$\\Delta S_{univ}$', meaning: 'Perubahan entropi semesta', unit: 'J/K' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Kalor mengalir dari panas ke dingin menaikkan entropi semesta meskipun entropi sistem panas turun.' },
          { text: 'Pembekuan/pengembunan menurunkan entropi zat, tetapi lingkungan menerima kalor sehingga total naik.' },
          { text: 'Benda terisolasi yang mencapai kesetimbangan termal memiliki entropi maksimum.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Analisis Siklus pada Diagram P-V',
      },
      {
        type: 'list',
        items: [
          { text: 'Luas di bawah proses = usaha oleh sistem; untuk siklus, luas tertutup = usaha net.' },
          { text: 'Jika siklus searah jarum jam (clockwise), sistem menghasilkan usaha (mesin kalor); jika berlawanan, perlu usaha input (pendingin/pompa).' },
          { text: 'Gunakan Hukum I pada tiap proses, lalu jumlahkan untuk menemukan $Q_{net}$, $W_{net}$, dan efisiensi.' },
          { text: 'Untuk proses adiabatik, $Q=0$ dan $PV^\\gamma = \\text{konstan}$.' },
        ],
      },
      {
        type: 'example',
        title: 'Siklus Empat Proses',
        blocks: [
          { type: 'paragraph', text: 'Gas ideal 1 mol mengalami siklus: (1) isokhorik A->B: V=2 L, P naik dari 1 ke 2 atm; (2) isotermik B->C ekspansi ke 4 L; (3) isokhorik C->D tekanan turun ke 1 atm; (4) isotermik D->A kompresi ke 2 L. Tentukan usaha net.' },
          { type: 'paragraph', text: 'Usaha hanya pada proses isotermik: W (B->C) = nRT_B ln(V_C/V_B), W (D->A) = nRT_D ln(V_A/V_D). T_B = P_B V_B/nR. Untuk perhitungan kualitatif, usaha net = luas persegi panjang kurva dalam logaritmis? Gunakan luas tertutup; dapat dihitung numerik dengan R=0,082.' },
          { type: 'formula', latex: 'T_B = \\frac{P_B V_B}{nR} = \\frac{2\\times2}{1\\times0{,}082} \\approx 48{,}78\\ \\text{K? (satuan konsisten; skala L}\\cdot\\text{atm)}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$P_B,V_B$', meaning: 'Tekanan dan volume keadaan B', unit: 'atm, L' }, { symbol: '$n,R$', meaning: 'Mol dan konstanta gas', unit: 'mol, L· atm/(mol· K)' }] },
          { type: 'paragraph', text: 'Catatan: pastikan konsistensi satuan; contoh ini ilustratif untuk metode. Pada ujian, angka-angka biasanya dipilih agar hasil sederhana.' },
        ],
      },
      {
        type: 'example',
        title: 'Mesin Kalor dengan Q2 Diketahui',
        blocks: [
          { type: 'paragraph', text: 'Mesin kalor menyerap 1200 J tiap siklus, efisiensi 30%. Hitung usaha dan kalor yang dibuang tiap siklus.' },
          { type: 'formula', latex: 'W = \\eta Q_1 = 0{,}30\\times1200 = 360\\ \\text{J}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$W$', meaning: 'Usaha per siklus', unit: 'J' }, { symbol: '$\\eta$', meaning: 'Efisiensi', unit: 'tak berdimensi' }, { symbol: '$Q_1$', meaning: 'Kalor diserap', unit: 'J' }] },
          { type: 'formula', latex: 'Q_2 = Q_1 - W = 1200 - 360 = 840\\ \\text{J}' },
          { type: 'paragraph', text: 'Mesin membuang 840 J ke lingkungan setiap siklus. Daya mesin = W kali frekuensi siklus.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tips dan Jebakan TKA Topik Termodinamika',
      },
      {
        type: 'list',
        items: [
          { text: 'Gunakan Kelvin untuk semua rumus Carnot dan gas.' },
          { text: 'Efisiensi tidak pernah melebihi 1 (100%); Carnot max untuk selisih suhu tetap.' },
          { text: 'COP pendingin dapat lebih besar dari 1; jangan sebut efisiensi.' },
          { text: 'Usaha pada diagram P-V = luas; tanda bergantung arah proses (ekspansi/kompresi).' },
          { text: 'Pada adiabatik, suhu berubah walaupun Q=0, jadi jangan gunakan formula isokhorik.' },
          { text: 'Jika soal memberi kalor jenis dalam J/(kg K), ubah ke molar bila perlu (kali M).' },
          { text: 'Distinguish internal energy (keadaan) vs heat/work (proses).' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tabel Konversi Satuan Termal (Cepat)',
      },
      {
        type: 'table',
        headers: ['Besaran', 'Satuan umum', 'Konversi ke SI'],
        rows: [
          ['Tekanan', 'atm', '1 atm = 1,013\\times10^5 Pa'],
          ['Volume', 'liter (L)', '1 L = 10^{-3} m^3'],
          ['Suhu', 'Celcius', 'K = $^\\circ$C + 273,15'],
          ['Energi', 'kalori (cal)', '1 cal = 4,184 J'],
          ['R (gas)', 'L· atm/(mol K)', '0,082; SI R = 8,314 J/(mol K)'],
          ['Usaha', 'L· atm', '1 L· atm = 101,3 J'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Penerapan Hukum I dalam Proses Kombinasi',
      },
      {
        type: 'table',
        headers: ['Proses', 'Hukum I (\\Delta U=Q-W, W oleh sistem)', 'Catatan Perhitungan'],
        rows: [
          ['Isotermik (gas ideal)', '0 = Q - W \\implies Q = W', 'W = nRT ln(V_2/V_1)'],
          ['Isokhorik', '\\Delta U = Q - 0', 'Q = nC_V \\Delta T, usaha nol'],
          ['Isobarik', '\\Delta U = Q - P\\Delta V', 'Q = nC_p \\Delta T'],
          ['Adiabatik', '\\Delta U = -W', 'W = -nC_V \\Delta T, Q=0'],
          ['Siklik', '0 = Q_{net} - W_{net}', 'Efisiensi = W_{net}/Q_{in}'],
        ],
      },
      {
        type: 'example',
        title: 'Benda Jatuh dalam Silinder dengan Gas',
        blocks: [
          { type: 'paragraph', text: 'Piston massa 2 kg menutup gas ideal dalam silinder vertikal (luas A = 10 cm$^2$). Jika gas dikompresi isobarik oleh penambahan beban, suhu gas naik dari 300 ke 320 K pada tekanan atmosfer? Abaikan efek; hitung volume awal/akhir jika n=0,01 mol. (p=1,013\\times10^5 Pa)' },
          { type: 'formula', latex: 'V_1 = \\frac{nRT_1}{P} = \\frac{0{,}01\\times8{,}314\\times300}{1{,}013\\times10^5} \\approx 2{,}46\\times10^{-4}\\ \\text{m}^3' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$V_1$', meaning: 'Volume awal gas', unit: 'm$^3$' }, { symbol: '$n,T_1,P$', meaning: 'Mol, suhu awal, tekanan', unit: 'mol, K, Pa' }] },
          { type: 'formula', latex: 'V_2 = V_1 \\frac{T_2}{T_1} = 2{,}46\\times10^{-4}\\times\\frac{320}{300} \\approx 2{,}62\\times10^{-4}\\ \\text{m}^3' },
          { type: 'paragraph', text: 'Gas mengembang seiring suhu naik pada tekanan tetap, jadi piston bergerak ke atas (usaha oleh gas positif).' },
        ],
      },
      {
        type: 'note',
        text: 'Dalam soal termal, perhatikan apakah sistem terisolasi (Q=0) atau bekerja pada tekanan tetap (P=const) atau volume tetap (V=const). Identifikasi kondisi sebelum memilih rumus.',
        variant: 'warning',
      },
      {
        type: 'example',
        title: 'Mesin Pendingin dan COP Praktis',
        blocks: [
          { type: 'paragraph', text: 'AC ideal bekerja antara ruang 20 $^\\circ$C dan lingkungan 35 $^\\circ$C. Hitung COP pendingin dan usaha yang dibutuhkan untuk memindahkan 1 MJ dari ruang.' },
          { type: 'formula', latex: 'T_1 = 308\\ \\text{K},\\quad T_2 = 293\\ \\text{K},\\quad COP = \\frac{T_2}{T_1 - T_2} = \\frac{293}{15} \\approx 19{,}5' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$COP$', meaning: 'Coefficient of Performance pendingin', unit: 'tak berdimensi' }, { symbol: '$T_1,T_2$', meaning: 'Suhu lingkungan dan ruang (K)', unit: 'K' }] },
          { type: 'formula', latex: 'W = \\frac{Q_2}{COP} = \\frac{1\\times10^6}{19{,}5} \\approx 5{,}13\\times10^4\\ \\text{J}' },
          { type: 'paragraph', text: 'Untuk memindahkan 1 MJ dari ruang, dibutuhkan sekitar 51,3 kJ listrik pada ideal Carnot; mesin nyata (COP 2-4) butuh lebih banyak.' },
        ],
      },
      {
        type: 'definition',
        term: 'Proses reversibel',
        definition: 'Proses ideal yang dapat dibalik tanpa meninggalkan jejak pada sistem maupun lingkungan; tidak ada gesekan, disipasi, atau gradien suhu/tekanan.',
      },
      {
        type: 'definition',
        term: 'Proses irreversibel',
        definition: 'Proses nyata yang meninggalkan perubahan pada sistem atau lingkungan (gesekan, perpindahan panas melalui gradien, ketidakteraturan); selalu menambah entropi semesta.',
      },
    ],
  },
  {
    slug: 'listrik-statis',
    no: 15,
    title: 'Listrik Statis',
    category: 'Listrik',
    summary: 'Muatan listrik, hukum Coulomb, medan listrik (vektor), potensial listrik (skalar), dan energi potensial.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Listrik statis mempelajari muatan listrik yang diam. Konsep utamanya meliputi muatan listrik, gaya antar muatan (Coulomb), medan listrik, potensial listrik, dan energi potensial listrik. Perlu diperhatikan secara khusus: medan listrik $\\vec{E}$ adalah besaran vektor (memiliki arah), sedangkan potensial listrik $V$ adalah besaran skalar (tidak memiliki arah).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Muatan Listrik',
      },
      {
        type: 'list',
        items: [
          { text: 'Partikel dasar: proton bermuatan positif (+e), elektron bermuatan negatif (-e), netron netral.' },
          { text: 'Muatan dasar: $e = 1{,}6\\times10^{-19}\\ \\mathrm{C}$. Muatan total benda selalu kelipatan bulat dari $e$: $q = n e$ (kuantisasi muatan).' },
          { text: 'Muatan sejenis tolak-menolak; muatan berlawanan tarik-menarik.' },
          { text: 'Cara memuati benda: gesekan (friction), induksi (tanpa kontak), dan konduksi (melalui kontak).' },
          { text: 'Hukum kekekalan muatan: muatan total dalam sistem tertutup selalu konstan; muatan tidak dapat diciptakan atau dimusnahkan, hanya dipindahkan.' },
        ],
      },
      {
        type: 'definition',
        term: 'Muatan titik',
        definition: 'Muatan yang dianggap terkonsentrasi pada satu titik, sehingga jarak antar muatan jauh lebih besar dari ukuran muatan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hukum Coulomb',
      },
      {
        type: 'image',
        src: '/diagrams/listrik-statis-coulomb.svg',
        alt: 'Dua muatan listrik berlawanan tanda yang saling tarik-menarik beserta gaya Coulomb pada masing-masing muatan',
        caption: 'Muatan berlawanan tanda saling menarik. Kedua gaya besarnya sama tetapi arahnya berlawanan, sesuai Hukum Newton III. Jika kedua muatan sepi, arahnya justru bertolak.',
      },
      {
        type: 'paragraph',
        text: 'Gaya elektrostatik antara dua muatan titik sebanding dengan hasil kali kedua muatan dan berbanding terbalik dengan kuadrat jarak antara keduanya. Gaya ini adalah vektor: dua muatan sejenis saling tolak (gaya menjauh), muatan berlawanan saling tarik (gaya mendekat).',
      },
      {
        type: 'formula',
        latex: 'F = k \\frac{q_1 q_2}{r^2}',
        description: 'Besar gaya Coulomb antara dua muatan titik.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$F$', meaning: 'Besar gaya elektrostatik', unit: 'N' },
          { symbol: '$k$', meaning: 'Konstanta Coulomb $= \\frac{1}{4\\pi\\epsilon_0} = 9\\times10^9$', unit: 'N· m$^2$/C$^2$' },
          { symbol: '$q_1,q_2$', meaning: 'Muatan kedua benda', unit: 'C' },
          { symbol: '$r$', meaning: 'Jarak antara kedua muatan', unit: 'm' },
        ],
      },
      {
        type: 'formula',
        latex: 'k = \\frac{1}{4\\pi\\epsilon_0},\\quad \\epsilon_0 = 8{,}85\\times10^{-12}\\ \\mathrm{C^2/(N\\cdot m^2)}',
        description: 'Hubungan konstanta Coulomb dengan permitivitas ruang hampa.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$k$', meaning: 'Konstanta Coulomb', unit: 'N· m$^2$/C$^2$' },
          { symbol: '$\\epsilon_0$', meaning: 'Permitivitas listrik ruang hampa', unit: 'C$^2$/(N· m$^2$)' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Untuk banyak muatan, gaya total pada satu muatan didapat dengan penjumlahan vektor semua gaya dari muatan lain (prinsip superposisi). Arah sangat penting.',
      },
      {
        type: 'list',
        items: [
          { text: 'Dua muatan pada satu garis: jumlahkan secara aljabar sesuai arah (tolak-mendorong, tarik-menarik).' },
          { text: 'Dua gaya tegak lurus: resultan $F = \\sqrt{F_1^2 + F_2^2}$, arah $\\tan\\theta = F_2/F_1$.' },
          { text: 'Gaya dalam bidang: uraikan ke komponen $x$ dan $y$, jumlahkan, lalu resultan $R = \\sqrt{\\Sigma F_x^2 + \\Sigma F_y^2}$.' },
          { text: 'Konfigurasi segitiga sama sisi atau bujur sangkar sering muncul di soal TKA; gunakan simetri.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Medan Listrik (Besaran Vektor)',
      },
      {
        type: 'image',
        src: '/diagrams/listrik-statis-medan.svg',
        alt: 'Garis medan listrik antara muatan positif dan muatan negatif titik',
        caption: 'Garis medan keluar dari muatan positif dan masuk ke muatan negatif, serta makin rapat di dekat muatan.',
      },
      {
        type: 'paragraph',
        text: 'Medan listrik adalah daerah di sekitar muatan di mana muatan uji lain mengalami gaya. Medan listrik adalah vektor: memiliki besar dan arah. Untuk menentukan medan dari beberapa muatan, jumlahkan secara vektor.',
      },
      {
        type: 'formula',
        latex: 'E = \\frac{F}{q} = k \\frac{Q}{r^2}',
        description: 'Kuat medan listrik dari satu muatan titik.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$E$', meaning: 'Kuat medan listrik', unit: 'N/C atau V/m' },
          { symbol: '$F$', meaning: 'Gaya pada muatan uji', unit: 'N' },
          { symbol: '$q$', meaning: 'Muatan uji', unit: 'C' },
          { symbol: '$k$', meaning: 'Konstanta Coulomb', unit: 'N· m$^2$/C$^2$' },
          { symbol: '$Q$', meaning: 'Muatan sumber medan', unit: 'C' },
          { symbol: '$r$', meaning: 'Jarak muatan sumber ke titik', unit: 'm' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Arah medan: keluar dari muatan positif, masuk ke muatan negatif (arah gaya pada muatan uji positif).' },
          { text: 'Garis-garis medan tidak pernah berpotongan; kerapatan garis menunjukkan kuat medan (makin rapat makin kuat).' },
          { text: 'Antara dua keping sejajar (pelat konduktor): $E = \\frac{V}{d}$ (medan seragam, tidak bergantung jarak).' },
          { text: 'Dalam medan listrik seragam, gaya pada muatan $q$: $F = q E$ (gaya konstan) dan percepatan $a = \\frac{qE}{m}$.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Titik medan nol ($E = 0$) dicari dengan menyamakan medan dari dua muatan yang berlawanan arah. Secara umum, titik $E=0$ berada di antara dua muatan yang berbeda jenis, atau di luar pada sisi muatan yang lebih kecil jika muatan sejenis.',
      },
      {
        type: 'example',
        title: 'Titik E = 0',
        blocks: [
          { type: 'paragraph', text: 'Muatan $q_1 = +4\\ \\mu$C di x=0 dan $q_2 = +9\\ \\mu$C di x=10 cm (sejenis). Cari titik di antara keduanya di mana E = 0 (dan titik di luar).' },
          { type: 'paragraph', text: 'Di antara dua muatan sejenis, medan keduanya arah berlawanan (saling tolak) sehingga bisa nol. Syarat: $k q_1/x^2 = k q_2/(10-x)^2$, dengan x dalam cm.' },
          { type: 'formula', latex: '\\frac{4}{x^2} = \\frac{9}{(10-x)^2} \\implies \\frac{2}{x} = \\frac{3}{10-x}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$q_1,q_2$', meaning: 'Muatan titik', unit: '$\\mu$C' }, { symbol: '$x$', meaning: 'Jarak dari $q_1$ ke titik nol', unit: 'cm' }] },
          { type: 'formula', latex: '2(10-x) = 3x \\implies x = 4\\ \\text{cm}' },
          { type: 'paragraph', text: 'Titik nol berada 4 cm dari $q_1$ (6 cm dari $q_2$). Di luar sisi muatan kecil (kiri q1) juga ada titik nol yang memenuhi persamaan dengan tanda berbeda; cari dengan $2/(x) = 3/(10+x)$ jika x ke kiri.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Potensial Listrik (Besaran Skalar)',
      },
      {
        type: 'paragraph',
        text: 'Potensial listrik adalah energi potensial per satuan muatan. Berbeda dengan medan listrik, potensial adalah besaran skalar: tidak memiliki arah, dan untuk banyak muatan cukup dijumlahkan secara aljabar (tanda muatan sangat penting).',
      },
      {
        type: 'formula',
        latex: 'V = k \\frac{Q}{r}',
        description: 'Potensial listrik dari satu muatan titik (skalar).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$V$', meaning: 'Potensial listrik', unit: 'volt (V)' },
          { symbol: '$k$', meaning: 'Konstanta Coulomb', unit: 'N· m$^2$/C$^2$' },
          { symbol: '$Q$', meaning: 'Muatan sumber', unit: 'C' },
          { symbol: '$r$', meaning: 'Jarak ke titik', unit: 'm' },
        ],
      },
      {
        type: 'formula',
        latex: 'E_p = k \\frac{q_1 q_2}{r},\\quad W = q\\,\\Delta V',
        description: 'Energi potensial listrik sepasang muatan dan usaha memindahkan muatan.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$E_p$', meaning: 'Energi potensial listrik', unit: 'J' },
          { symbol: '$q_1,q_2$', meaning: 'Muatan pertama dan kedua', unit: 'C' },
          { symbol: '$r$', meaning: 'Jarak antar muatan', unit: 'm' },
          { symbol: '$W$', meaning: 'Usaha yang dilakukan gaya listrik/luar', unit: 'J' },
          { symbol: '$q$', meaning: 'Muatan yang dipindahkan', unit: 'C' },
          { symbol: '$\\Delta V$', meaning: 'Beda potensial', unit: 'V' },
        ],
      },
      {
        type: 'formula',
        latex: 'V = E \\cdot d',
        description: 'Beda potensial antara dua titik pada medan seragam (dua keping sejajar).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$V$', meaning: 'Beda potensial antara keping', unit: 'V' },
          { symbol: '$E$', meaning: 'Kuat medan seragam', unit: 'V/m atau N/C' },
          { symbol: '$d$', meaning: 'Jarak antar keping', unit: 'm' },
        ],
      },
      {
        type: 'note',
        text: 'Perbedaan krusial yang sering ditanyakan TKA: medan listrik $\\vec{E}$ adalah VEKTOR, sehingga gaya dan medan dari banyak muatan dijumlahkan secara vektor (perhatikan arah). Potensial $V$ adalah SKALAR, sehingga potensial total cukup dijumlahkan secara aljabar; tanda muatan (+/-) tetap berlaku. Energi potensial $E_p$ juga skalar (tanda ikut muatan).',
        variant: 'warning',
      },
      {
        type: 'note',
        text: 'Hubungan medan dan potensial: $\\vec{E} = -\\nabla V$ (medan listrik adalah negatif gradien potensial). Pada satu dimensi: $E = -\\frac{dV}{dx}$. Tanda negatif berarti medan menunjuk ke arah penurunan potensial.',
        variant: 'info',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kekekalan Energi dalam Medan Listrik',
      },
      {
        type: 'paragraph',
        text: 'Bila sebuah muatan dipercepat oleh beda potensial $\\Delta V$, energi listrik berubah menjadi energi kinetik (dengan mengabaikan gesekan). Prinsip ini dipakai pada tabung sinar katoda, akselerator partikel, mikroskop elektron, dan spektrometer massa.',
      },
      {
        type: 'formula',
        latex: 'q \\Delta V = \\frac{1}{2} m v^2 \\implies v = \\sqrt{\\frac{2 q \\Delta V}{m}}',
        description: 'Muatan dipercepat oleh beda potensial; energi listrik menjadi kinetik.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$q$', meaning: 'Muatan yang dipercepat', unit: 'C' },
          { symbol: '$\\Delta V$', meaning: 'Beda potensial', unit: 'V' },
          { symbol: '$m$', meaning: 'Massa muatan', unit: 'kg' },
          { symbol: '$v$', meaning: 'Kecepatan akhir', unit: 'm/s' },
        ],
      },
      {
        type: 'example',
        title: 'Gaya Coulomb Dasar',
        blocks: [
          { type: 'paragraph', text: 'Dua muatan $q_1 = +2\\ \\mu$C dan $q_2 = -3\\ \\mu$C terpisah 30 cm. Hitung besar gaya di antara keduanya (tarik atau tolak?)' },
          { type: 'formula', latex: 'F = k \\frac{|q_1 q_2|}{r^2} = \\frac{9\\times10^9 \\times (2\\times10^{-6})(3\\times10^{-6})}{(0{,}3)^2}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$F$', meaning: 'Gaya Coulomb', unit: 'N' }, { symbol: '$k$', meaning: 'Konstanta Coulomb', unit: 'N· m$^2$/C$^2$' }, { symbol: '$q_1,q_2$', meaning: 'Muatan', unit: 'C' }, { symbol: '$r$', meaning: 'Jarak', unit: 'm' }] },
          { type: 'formula', latex: 'F = \\frac{9\\times10^9 \\times 6\\times10^{-12}}{0{,}09} = \\frac{54\\times10^{-3}}{0{,}09} = 0{,}6\\ \\text{N}' },
          { type: 'paragraph', text: 'Karena muatan berbeda jenis, gayanya tarik-menarik sebesar 0,6 N.' },
        ],
      },
      {
        type: 'example',
        title: 'Penjumlahan Vektor Medan Listrik',
        blocks: [
          { type: 'paragraph', text: 'Muatan $q_1 = +1\\ \\mu$C di titik (0,0) dan $q_2 = -4\\ \\mu$C di (3,0) m. Tentukan medan listrik di titik P (0,4) m, termasuk resultan.' },
          { type: 'paragraph', text: 'Vektor $\\vec{E}_1$: arah dari q1 positif ke P = (0,1) (atas): $E_1 = k(1\\mu)/(0^2+4^2) = 9e9\\times1e-6/16 = 562{,}5$ N/C, arah +y.' },
          { type: 'paragraph', text: 'Vektor $\\vec{E}_2$: muatan negatif, medan masuk ke q2. Vektor dari P ke q2 = (3,-4), jarak 5 m. $E_2 = 9e9\\times4e-6/25 = 1440$ N/C. Komponen: $E_{2x}=1440\\times3/5 = 864$ N/C, $E_{2y}=1440\\times(-4)/5 = -1152$ N/C.' },
          { type: 'formula', latex: 'E_x = 0 + 864 = 864\\ \\text{N/C};\\quad E_y = 562{,}5 - 1152 = -589{,}5\\ \\text{N/C}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$E_x,E_y$', meaning: 'Komponen medan listrik', unit: 'N/C' }, { symbol: '$E_1,E_2$', meaning: 'Medan dari masing-masing muatan', unit: 'N/C' }] },
          { type: 'formula', latex: 'E_{\\text{res}} = \\sqrt{864^2 + (-589{,}5)^2} \\approx 1046\\ \\text{N/C}' },
          { type: 'paragraph', text: 'Besar resultan $\\approx 1046$ N/C dengan arah $\\tan\\theta = -589{,}5/864$ ke bawah dari sumbu +x.' },
        ],
      },
      {
        type: 'example',
        title: 'Potensial dari Beberapa Muatan (Skalar)',
        blocks: [
          { type: 'paragraph', text: 'Muatan $q_1 = +2\\ \\mu$C dan $q_2 = -2\\ \\mu$C terpisah 0,5 m. Hitung potensial di titik tengah.' },
          { type: 'paragraph', text: 'Jarak dari tengah ke masing-masing muatan = 0,25 m. $V_1 = k(2\\mu)/0{,}25 = +72000$ V (positif). $V_2 = k(-2\\mu)/0{,}25 = -72000$ V (negatif).' },
          { type: 'formula', latex: 'V_{\\text{total}} = V_1 + V_2 = 72000 - 72000 = 0\\ \\text{V}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$V_{\\text{total}}$', meaning: 'Potensial listrik total (skalar, jumlah aljabar)', unit: 'V' }, { symbol: '$V_1,V_2$', meaning: 'Potensial dari tiap muatan', unit: 'V' }] },
          { type: 'paragraph', text: 'Pada titik tengah dipol listrik, potensial = 0 (karena jarak sama dan muatan berlawanan), tetapi medan listrik di tengah tidak nol (medan adalah vektor). Inilah bukti perbedaan vektor vs skalar.' },
        ],
      },
      {
        type: 'example',
        title: 'Energi Potensial dan Kecepatan',
        blocks: [
          { type: 'paragraph', text: 'Elektron (massa $9{,}11\\times10^{-31}$ kg, muatan $-1{,}6\\times10^{-19}$ C) dipercepat melalui beda potensial 100 V. Hitung kecepatannya (abaikan relativitas).' },
          { type: 'formula', latex: 'v = \\sqrt{\\frac{2 |q| \\Delta V}{m}} = \\sqrt{\\frac{2 \\times 1{,}6\\times10^{-19} \\times 100}{9{,}11\\times10^{-31}}}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$v$', meaning: 'Kecepatan akhir', unit: 'm/s' }, { symbol: '$q$', meaning: 'Muatan elektron', unit: 'C' }, { symbol: '$\\Delta V$', meaning: 'Beda potensial', unit: 'V' }, { symbol: '$m$', meaning: 'Massa elektron', unit: 'kg' }] },
          { type: 'paragraph', text: 'Pembilang = $3{,}2\\times10^{-17}$; dibagi $9{,}11\\times10^{-31}$ = $3{,}51\\times10^{13}$; akar $\\approx 5{,}93\\times10^6$ m/s. Kecepatan cukup tinggi, mendekati regime relativistik pada voltase besar.' },
        ],
      },
      {
        type: 'note',
        text: 'Jebakan TKA yang umum: posisi medan listrik $E=0$ (vektor) tidak sama dengan posisi potensial $V=0$ (skalar). Sebuah titik bisa punya potensial nol tetapi medan tidak nol, dan sebaliknya. Selalu tentukan dulu apakah soal menanyakan medan atau potensial.',
        variant: 'tip',
      },
      {
        type: 'example',
        title: 'Medan Seragam Dua Keping',
        blocks: [
          { type: 'paragraph', text: 'Dua keping sejajar terpisah 2 cm diberi beda potensial 100 V. Hitung kuat medan listrik di antaranya.' },
          { type: 'formula', latex: 'E = \\frac{V}{d} = \\frac{100}{0{,}02} = 5000\\ \\text{N/C}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$E$', meaning: 'Kuat medan seragam', unit: 'N/C atau V/m' }, { symbol: '$V$', meaning: 'Beda potensial', unit: 'V' }, { symbol: '$d$', meaning: 'Jarak antar keping', unit: 'm' }] },
          { type: 'paragraph', text: 'Medan seragam berarti besarnya sama di semua titik antara keping (selain efek tepi).' },
        ],
      },
      {
        type: 'table',
        headers: ['Konsep', 'Besaran', 'Sifat', 'Penjumlahan'],
        rows: [
          ['Medan listrik $E$', 'Vektor', 'Punya arah (keluar/tarik)', 'Penjumlahan vektor (komponen)'],
          ['Potensial listrik $V$', 'Skalar', 'Tanda muatan ikut', 'Penjumlahan aljabar'],
          ['Gaya Coulomb $F$', 'Vektor', 'Tolak/tarik', 'Penjumlahan vektor'],
          ['Energi potensial $E_p$', 'Skalar', 'Dapat +/-', 'Penjumlahan aljabar'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Distribusi Muatan pada Konduktor',
      },
      {
        type: 'paragraph',
        text: 'Pada konduktor (logam dan konduktor lain), muatan berlebih terdistribusi di permukaan. Di dalam konduktor dalam kesetimbangan elektrostatik, medan listrik nol dan seluruh volume berada pada potensial sama (ekuipotensial).',
      },
      {
        type: 'list',
        items: [
          { text: 'Muatan pada permukaan konduktor terkonsentrasi pada bagian yang kelengkungan besar (ujung lancip, puncak).' },
          { text: 'Medan listrik tepat di luar permukaan konduktor tegak lurus permukaan, dengan besar $E = \\sigma/\\epsilon_0$ ($\\sigma$ = rapat muatan permukaan).' },
          { text: 'Faraday cage: rongga dalam konduktor memiliki medan nol dan perlindungan dari medan luar.' },
          { text: 'Konduktor yang disentuh bumi (tanah) dapat menetralkan kelebihan muatan (grounding/pembumian).' },
          { text: 'Isolator (dielektrik) membatasi pergerakan muatan; muatan tetap di tempat yang di mana ia ditempatkan (gesekan).' },
        ],
      },
      {
        type: 'formula',
        latex: 'E_{\\text{permukaan}} = \\frac{\\sigma}{\\epsilon_0}',
        description: 'Medan listrik tepat di luar permukaan konduktor.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$E_{\\text{permukaan}}$', meaning: 'Medan listrik tepat di luar permukaan', unit: 'N/C' },
          { symbol: '$\\sigma$', meaning: 'Rapat muatan permukaan', unit: 'C/m$^2$' },
          { symbol: '$\\epsilon_0$', meaning: 'Permitivitas ruang hampa', unit: 'C$^2$/(N· m$^2$)' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Medan Listrik dari Berbagai Distribusi (Ringkas)',
      },
      {
        type: 'table',
        headers: ['Distribusi', 'Medan di titik khusus', 'Catatan'],
        rows: [
          ['Cincin bermuatan (jari-jari R)', 'Pusat: $E = 0$; sumbu: $E = k\\frac{Q z}{(z^2+R^2)^{3/2}}$', 'Simetri membatalkan komponen radial'],
          ['Cakram/piring uniform', 'Dekat piring: $E = \\sigma/(2\\epsilon_0)$; jauh: seperti muatan titik', 'Analogi piring sejajar'],
          ['Dua piring sejajar berlawanan muatan', 'Uniform di tengah: $E = \\sigma/\\epsilon_0 = V/d$', 'Kapasitor planar ideal'],
          ['Bola konduktor bermuatan', 'Luar: seperti muatan titik; dalam: $E = 0$', 'Muatan di permukaan'],
          ['Kawat lurus tak berhingga', '$E = \\lambda/(2\\pi\\epsilon_0 r)$ (radial)', 'Rapat muatan linear $\\lambda$'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Dipol Listrik',
      },
      {
        type: 'paragraph',
        text: 'Dipol listrik adalah pasangan dua muatan berlawanan $+q$ dan $-q$ yang terpisah jarak $d$. Dipol memiliki momen dipol $\\vec{p} = q\\vec{d}$ (vektor dari negatif ke positif) dan merespons medan luar dengan torka yang cenderung menyelaraskannya.',
      },
      {
        type: 'formula',
        latex: 'p = q\\, d,\\quad \\tau = p E \\sin\\theta,\\quad U = -p E \\cos\\theta',
        description: 'Momen dipol, torka, dan energi potensial dipol dalam medan listrik.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$p$', meaning: 'Momen dipol listrik', unit: 'C· m' },
          { symbol: '$q$', meaning: 'Muatan pada ujung dipol', unit: 'C' },
          { symbol: '$d$', meaning: 'Jarak pemisahan muatan', unit: 'm' },
          { symbol: '$\\tau$', meaning: 'Torka pada dipol', unit: 'N· m' },
          { symbol: '$E$', meaning: 'Medan listrik luar', unit: 'N/C' },
          { symbol: '$\\theta$', meaning: 'Sudut antara $p$ dan $E$', unit: 'rad atau $^\\circ$' },
          { symbol: '$U$', meaning: 'Energi potensial dipol', unit: 'J' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Kapasitor dan Energi Listrik',
      },
      {
        type: 'paragraph',
        text: 'Kapasitor adalah komponen yang menyimpan muatan dan energi potensial listrik di antara konduktor yang dipisahkan dielektrik. Kapasitansi $C$ bergantung pada geometri dan bahan dielektrik.',
      },
      {
        type: 'formula',
        latex: 'C = \\frac{Q}{V},\\quad C_{\\text{planar}} = \\frac{\\epsilon_0 \\epsilon_r A}{d},\\quad U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2}Q V',
        description: 'Kapasitansi dan energi tersimpan dalam kapasitor.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$C$', meaning: 'Kapasitansi', unit: 'farad (F)' },
          { symbol: '$Q$', meaning: 'Muatan pada satu pelat', unit: 'C' },
          { symbol: '$V$', meaning: 'Beda potensial antar pelat', unit: 'V' },
          { symbol: '$\\epsilon_0$', meaning: 'Permitivitas ruang hampa', unit: 'F/m' },
          { symbol: '$\\epsilon_r$', meaning: 'Konstanta dielektrik (relatif) bahan', unit: 'tak berdimensi' },
          { symbol: '$A$', meaning: 'Luas pelat', unit: 'm$^2$' },
          { symbol: '$d$', meaning: 'Jarak antar pelat', unit: 'm' },
          { symbol: '$U$', meaning: 'Energi tersimpan', unit: 'J' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Pelat kapasitor planar: menyisipkan dielektrik ($\\epsilon_r>1$) meningkatkan kapasitansi $\\epsilon_r$ kali, mengurangi medan pada tegangan tetap.' },
          { text: 'Seri: $\\frac{1}{C_s} = \\sum \\frac{1}{C_i}$, muatan sama pada setiap pelat, tegangan terbagi.' },
          { text: 'Paralel: $C_p = \\sum C_i$, tegangan sama, muatan bertambah.' },
          { text: 'Energi kapasitor bisa ditulis $U = \\frac{1}{2}\\epsilon_0 E^2 \\times (A d)$ (rapat energi medan $u = \\frac{1}{2}\\epsilon_0 E^2$).' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Contoh Soal Lanjutan Listrik Statis',
      },
      {
        type: 'example',
        title: 'Keping Sejajar dan Dielektrik',
        blocks: [
          { type: 'paragraph', text: 'Kapasitor planar luas $A = 4\\times10^{-4}$ m$^2$, jarak $d = 2$ mm, berisi udara. Diberi tegangan 100 V. Hitung kapasitansi dan energi tersimpan.' },
          { type: 'formula', latex: 'C = \\frac{\\epsilon_0 A}{d} = \\frac{8{,}85\\times10^{-12}\\times 4\\times10^{-4}}{0{,}002}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$C$', meaning: 'Kapasitansi', unit: 'F' }, { symbol: '$\\epsilon_0$', meaning: 'Permitivitas ruang hampa', unit: 'F/m' }, { symbol: '$A$', meaning: 'Luas pelat', unit: 'm$^2$' }, { symbol: '$d$', meaning: 'Jarak pelat', unit: 'm' }] },
          { type: 'formula', latex: 'C = 1{,}77\\times10^{-12}\\ \\text{F} = 1{,}77\\ \\text{pF}' },
          { type: 'formula', latex: 'U = \\frac{1}{2} C V^2 = \\frac{1}{2}\\times1{,}77\\times10^{-12}\\times 100^2 \\approx 8{,}85\\times10^{-9}\\ \\text{J}' },
          { type: 'paragraph', text: 'Energi tersimpan sangat kecil karena pF; namun medan listrik $E = V/d = 50000$ V/m cukup besar.' },
        ],
      },
      {
        type: 'example',
        title: 'Gaya pada Muatan dalam Medan Seragam',
        blocks: [
          { type: 'paragraph', text: 'Muatan $q = -2\\ \\mu$C berada dalam medan seragam $E = 3\\times10^3$ N/C ke arah +x. Hitung gaya dan percepatannya (massa 0,1 g).' },
          { type: 'formula', latex: 'F = qE = (-2\\times10^{-6})(3\\times10^3) = -6\\times10^{-3}\\ \\text{N}' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$F$', meaning: 'Gaya listrik', unit: 'N' }, { symbol: '$q$', meaning: 'Muatan', unit: 'C' }, { symbol: '$E$', meaning: 'Medan listrik', unit: 'N/C' }] },
          { type: 'formula', latex: 'a = \\frac{F}{m} = \\frac{-6\\times10^{-3}}{1\\times10^{-4}} = -60\\ \\text{m/s}^2' },
          { type: 'paragraph', text: 'Tanda negatif berarti percepatan ke arah -x (lawan arah medan, sesuai muatan negatif).' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tips dan Jebakan TKA Topik Listrik Statis',
      },
      {
        type: 'list',
        items: [
          { text: 'Medan listrik E = vektor (penjumlahan vektor) dan potensial V = skalar (penjumlahan aljabar); jangan tertukar.' },
          { text: 'Gaya Coulomb bergantung kuadrat jarak; potensial bergantung linear (1/r).' },
          { text: 'Energi potensial $kq_1q_2/r$: negatif untuk muatan berlawanan (bound), positif untuk sejenis.' },
          { text: 'Jarak selalu diubah ke meter; muatan ke coulomb ($\\mu$C = 10^-6 C).' },
          { text: 'Titik medan nol != titik potensial nol; hitung sesuai diminta.' },
          { text: 'Medan seragam dua keping: $E = V/d$, berguna pada percepatan partikel.' },
          { text: 'Pada konduktor dalam kesetimbangan: E=0 di dalam, seluruh volume ekuipotensial.' },
        ],
      },
      {
        type: 'definition',
        term: 'Ekuipotensial',
        definition: 'Lokus titik-titik yang memiliki potensial listrik sama. Garis ekuipotensial tidak berpotongan, tegak lurus dengan garis medan listrik, dan memindahkan muatan di sepanjangnya tidak melakukan usaha.',
      },
      {
        type: 'definition',
        term: 'Momen dipol listrik',
        definition: 'Ukuran separasi muatan pada sistem dipol, didefinisikan sebagai $p = qd$ dan merupakan vektor dari muatan negatif ke muatan positif.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Energi Potensial Sistem Tiga Muatan (Contoh Lanjut)',
      },
      {
        type: 'paragraph',
        text: 'Energi potensial listrik sistem beberapa muatan adalah jumlah energi potensial pasangan-pasangan (skalar). Suatu sistem stabil jika energi potensial total negatif (muatan berlawanan dominan).',
      },
      {
        type: 'formula',
        latex: 'U_{total} = k\\left(\\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}}\\right)',
        description: 'Energi potensial total tiga muatan titik (penjumlahan skalar).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$U_{total}$', meaning: 'Energi potensial sistem', unit: 'J' },
          { symbol: '$k$', meaning: 'Konstanta Coulomb', unit: 'N· m$^2$/C$^2$' },
          { symbol: '$q_i$', meaning: 'Muatan titik ke-i', unit: 'C' },
          { symbol: '$r_{ij}$', meaning: 'Jarak antara muatan i dan j', unit: 'm' },
        ],
      },
      {
        type: 'example',
        title: 'Energi Tiga Muatan',
        blocks: [
          { type: 'paragraph', text: 'Tiga muatan: $q_1=+2\\ \\mu$C, $q_2=-2\\ \\mu$C, $q_3=+1\\ \\mu$C. Jarak $r_{12}=0{,}3$ m, $r_{13}=0{,}4$ m, $r_{23}=0{,}5$ m (segitiga siku-siku). Hitung energi potensial total.' },
          { type: 'formula', latex: 'U = 9\\times10^9\\left[\\frac{(2\\times10^{-6})(-2\\times10^{-6})}{0{,}3} + \\frac{(2\\times10^{-6})(1\\times10^{-6})}{0,4} + \\frac{(-2\\times10^{-6})(1\\times10^{-6})}{0,5}\\right]' },
          { type: 'glossary', title: 'Keterangan Simbol', items: [{ symbol: '$U$', meaning: 'Energi potensial total', unit: 'J' }, { symbol: '$q_i$', meaning: 'Muatan', unit: 'C' }, { symbol: '$r_{ij}$', meaning: 'Jarak antar muatan', unit: 'm' }] },
          { type: 'paragraph', text: 'Term pertama = $-120\\times10^{-3}$; term kedua = $+45\\times10^{-3}$; term ketiga = $-36\\times10^{-3}$; jumlah = $-111\\times10^{-3}$; kali $9\\times10^9$ = $-9{,}99\\times10^8$ J (bound system overall). Catatan: perhitungan detail satuan coulomb; hasil besar negatif.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Medan dari Cincin Bermuatan (Rumus)',
      },
      {
        type: 'paragraph',
        text: 'Pada sumbu cincin dengan jari-jari R dan total muatan Q, komponen medan sepanjang sumbu (z) dihitung dengan integrasi. Komponen tegak lurus saling meniadakan karena simetri.',
      },
      {
        type: 'formula',
        latex: 'E_z = \\frac{k Q z}{(z^2+R^2)^{3/2}}',
        description: 'Medan listrik pada sumbu cincin bermuatan uniform.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$E_z$', meaning: 'Komponen medan sepanjang sumbu', unit: 'N/C' },
          { symbol: '$k$', meaning: 'Konstanta Coulomb', unit: 'N· m$^2$/C$^2$' },
          { symbol: '$Q$', meaning: 'Total muatan cincin', unit: 'C' },
          { symbol: '$z$', meaning: 'Jarak titik ke pusat cincin sepanjang sumbu', unit: 'm' },
          { symbol: '$R$', meaning: 'Jari-jari cincin', unit: 'm' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Di pusat cincin (z = 0): E = 0 karena simetri.' },
          { text: 'Jika z >> R: E $\\approx kQ/z^2$, seperti muatan titik.' },
          { text: 'Potensial pada sumbu: $V = kQ/\\sqrt{z^2+R^2}$ (skalar, penjumlahan mudah).' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Pengertian Vektor vs Skalar (Rangkuman Listrik Statis)',
      },
      {
        type: 'table',
        headers: ['Besaran', 'Tipe', 'Rumus Identitas', 'Penjumlahan'],
        rows: [
          ['Medan listrik $\\vec{E}$', 'Vektor', '$kQ/r^2$ arah radial', 'Komponen x,y,z'],
          ['Potensial listrik $V$', 'Skalar', '$kQ/r$', 'Aljabar (tanda muatan)'],
          ['Gaya Coulomb $\\vec F$', 'Vektor', '$kq_1q_2/r^2$ radial', 'Komponen (hukum Newton)'],
          ['Energi potensial $E_p$', 'Skalar', '$kq_1q_2/r$', 'Aljabar (semua pasangan)'],
          ['Usaha $W$', 'Skalar', '$q\\Delta V$', 'Aljabar'],
          ['Torka $\\vec\\tau$', 'Vektor (aksial)', '$\\vec p \\times \\vec E$', 'Vektor'],
        ],
      },
      {
        type: 'note',
        text: 'Coba latih: jika tiga muatan membentuk segitiga, selalu uraikan medan ke x,y; potensial cukup dijumlahkan nilainya. Tanda muatan dan tanda hasil perkalian menentukan tarik/tolak (gaya) dan positif/negatif (potensial).',
        variant: 'tip',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tugas Latihan (Self-Check)',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          { text: 'Dua muatan $+4$ dan $-1$ $\\mu$C terpisah 6 cm. Hitung E dan V di titik 2 cm dari muatan positif (dalam arah menuju negatif). Pastikan medan vektor, potensial skalar.' },
          { text: 'Tiga muatan sama besar $+q$ di sudut segitiga sama sisi. Tunjukkan medan di pusat segitiga = 0, tetapi potensial di pusat ≠ 0.' },
          { text: 'Kapasitor planar tanpa dielektrik: C = 10 pF, V = 50 V. Hitung energi. Jika celah diisi dielektrik $\\epsilon_r=2$ tetap terhubung ke baterai, hitung C dan energi baru.' },
          { text: 'Elektron bergerak horizontal melalui medan seragam 500 N/C vertikal (panjang daerah medan 2 cm). Hitung defleksi vertikal bila kecepatan awal $2\\times10^6$ m/s.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Latihan ini melatih pembedaan medan (vektor) dan potensial (skalar), serta aplikasi kinematika dalam medan listrik seragam.',
      },
    ],
  },
  {
    slug: 'rangkaian-dc',
    no: 16,
    title: 'Rangkaian Arus Searah',
    category: 'Listrik',
    summary: 'Arus listrik, hambatan dan Hukum Ohm, daya listrik, rangkaian seri dan paralel, jembatan Wheatstone, serta transien pada rangkaian RC.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Berbeda dengan listrik statis yang muatannya diam, listrik dinamis (listrik arus) mempelajari aliran muatan pada konduktor. Agar muatan terus mengalir, harus ada beda potensial (tegangan) yang mempertahankan arus sepanjang rangkaian. Sifat mendasar: arus hanya mengalir pada lintasan tertutup (rangkuman), bukan pada konduktor yang ujungnya terputus.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Arus Listrik',
      },
      {
        type: 'paragraph',
        text: 'Arus listrik adalah besar muatan listrik yang melewati suatu penampang konduktor per satuan waktu. Arus besar bila banyak muatan melewati penampang dalam waktu yang singkat.',
      },
      {
        type: 'formula',
        latex: 'I = \\frac{Q}{t}',
        description: 'Besar arus listrik, di mana Q adalah muatan yang melewati penampang dalam waktu t.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$I$', meaning: 'Besar arus listrik', unit: 'A (ampere)' },
          { symbol: '$Q$', meaning: 'Muatan listrik yang lewat', unit: 'C (coulomb)' },
          { symbol: '$t$', meaning: 'Waktu tempuh', unit: 's' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Satuan: $1\\ \\mathrm{A} = 1\\ \\mathrm{C/s}$, jadi muatan sebanding dengan arus dikali waktu.' },
          { text: 'Satuan lain yang sering muncul di soal: $1\\ \\mathrm{mAh}$ (miliampere-hour) sebagai kapasitas baterai, dengan $1\\ \\mathrm{Ah} = 3600\\ \\mathrm{C}$.' },
          { text: 'Arus hanya mengalir pada rangkuman tertutup; konduktor yang digantung bebas tidak dialiri arus.' },
        ],
      },
      {
        type: 'note',
        variant: 'warning',
        text: 'Arah arus listrik: dari kutub positif ke kutub negatif melalui kawat luar. Arah gerak elektron justru berlawanan, dari negatif ke positif. Jangan tertukar saat menggambar rangkaian atau menentukan arah gaya pada muatan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hambatan Listrik',
      },
      {
        type: 'paragraph',
        text: 'Hambatan adalah hamperan listrik pada penghantar. Besarnya ditentukan oleh bahan, panjang, dan luas penampang kawat.',
      },
      {
        type: 'formula',
        latex: 'R = \\rho\\frac{l}{A}',
        description: 'Hambatan kawat: sebanding dengan panjang kawat dan berbanding terbalik dengan luas penampangnya.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$R$', meaning: 'Hambatan listrik', unit: '$\\Omega$ (ohm)' },
          { symbol: '$\\rho$', meaning: 'Resistivitas bahan', unit: '$\\Omega\\cdot\\mathrm{m}$' },
          { symbol: '$l$', meaning: 'Panjang kawat', unit: 'm' },
          { symbol: '$A$', meaning: 'Luas penampang kawat', unit: '$\\mathrm{m}^2$' },
        ],
      },
      {
        type: 'note',
        variant: 'info',
        text: 'Resistivitas bergantung pada bahan: perak dan tembaga paling kecil (penghantar terbaik), sedangkan nikel krom (nichrome) cukup besar dan dipakai pada elemen pemanas. Pada logam, hambatan naik ketika suhu naik - inilah sebabnya lampu pijar paling terang sesaat setelah dinyalakan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hukum Ohm',
      },
      {
        type: 'paragraph',
        text: 'Hukum Ohm menyatakan hubungan langsung antara tegangan, arus, dan hambatan pada penghantar ohmik pada suhu tetap.',
      },
      {
        type: 'formula',
        latex: 'V = I R',
        description: 'Hukum Ohm: tegangan sebanding dengan arus pada penghantar ohmik dengan hambatan tetap.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$V$', meaning: 'Tegangan atau beda potensial', unit: 'volt (V)' },
          { symbol: '$I$', meaning: 'Arus listrik', unit: 'A' },
          { symbol: '$R$', meaning: 'Hambatan listrik', unit: '$\\Omega$' },
        ],
      },
      {
        type: 'note',
        variant: 'info',
        text: 'Hukum Ohm hanya berlaku untuk penghantar ohmik, terutama kawat logam pada suhu tetap. Lampu pijar, diode, dan termistor bukan penghantar ohmik karena grafik tegangan terhadap arusnya tidak berupa garis lurus.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Daya Listrik',
      },
      {
        type: 'paragraph',
        text: 'Daya listrik adalah laju perubahan energi listrik menjadi energi lain (panas, cahaya, bunyi, atau gerak). Pada resistor, daya selalu berubah menjadi kalor.',
      },
      {
        type: 'formula',
        latex: 'P = V I = I^2 R = \\frac{V^2}{R}',
        description: 'Tiga bentuk ekuivalen untuk daya listrik; pilih sesuai besaran yang diketahui pada soal.',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$P$', meaning: 'Daya listrik', unit: 'watt (W)' },
          { symbol: '$V$', meaning: 'Tegangan', unit: 'V' },
          { symbol: '$I$', meaning: 'Arus', unit: 'A' },
          { symbol: '$R$', meaning: 'Hambatan', unit: '$\\Omega$' },
        ],
      },
      {
        type: 'list',
        items: [
          { text: 'Jika diketahui $V$ dan $I$, pakai $P = VI$. Jika diketahui $I$ dan $R$, pakai $P = I^2R$.' },
          { text: 'Satuan: $1\\ \\mathrm{W} = 1\\ \\mathrm{J/s} = 1\\ \\mathrm{V}\\cdot\\mathrm{A}$.' },
          { text: 'Pakai bentuk yang tidak memuat pangkat agar mudah dihitung manual; $P = VI$ hampir selalu paling aman bila $V$ dan $I$ tersedia.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Rangkaian Seri',
      },
      {
        type: 'image',
        src: '/diagrams/rangkaian-seri.svg',
        alt: 'Rangkaian seri dengan baterai dan dua hambatan R1 dan R2 disusun berurutan pada satu loop, arus I sama di semua bagian',
        caption: 'Pada rangkaian seri semua hambatan disusun berurutan pada satu jalur. Karena hanya ada satu jalur, arus yang mengalir di setiap titik sama besar.',
      },
      {
        type: 'formula',
        latex: 'R_{total} = R_1 + R_2 + R_3 + \\dots',
        description: 'Hambatan total rangkaian seri adalah jumlah dari seluruh hambatannya.',
      },
      {
        type: 'table',
        headers: ['Besaran', 'Perilaku pada Rangkaian Seri'],
        rows: [
          ['Arus $I$', 'Sama di semua titik: $I_1 = I_2 = I_{total}$'],
          ['Tegangan $V$', 'Terbagi: $V_{total} = V_1 + V_2 + V_3$'],
          ['Hambatan $R$', 'Dijumlahkan: $R_{total} = R_1 + R_2 + R_3$'],
          ['Ukuran $R_{total}$', 'Selalu lebih besar dari tiap hambatan penyusunnya'],
        ],
      },
      {
        type: 'example',
        title: 'Contoh: tiga hambatan seri',
        blocks: [
          { type: 'paragraph', text: 'Tiga hambatan $R_1 = 2\\ \\Omega$, $R_2 = 4\\ \\Omega$, dan $R_3 = 6\\ \\Omega$ disusun seri pada sebuah baterai $12\\ \\mathrm{V}$. Tentukan hambatan total, arus listrik, dan tegangan pada $R_2$.' },
          { type: 'formula', latex: 'R_{total} = 2 + 4 + 6 = 12\\ \\Omega' },
          { type: 'formula', latex: 'I = \\frac{V_{total}}{R_{total}} = \\frac{12}{12} = 1\\ \\mathrm{A}' },
          { type: 'paragraph', text: 'Karena seri, tegangan pada $R_2$ diperoleh dari hukum Ohm: $V_2 = I R_2 = (1)(4) = 4\\ \\mathrm{V}$.' },
          { type: 'paragraph', text: 'Cek: $V_1 + V_2 + V_3 = 2 + 4 + 6 = 12\\ \\mathrm{V}$, sama dengan tegangan baterai. Kekekalan tegangan harus selalu terpenuhi - jika tidak, berarti ada salah perhitungan.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Rangkaian Paralel',
      },
      {
        type: 'image',
        src: '/diagrams/rangkaian-paralel.svg',
        alt: 'Rangkaian paralel dengan baterai dan dua cabang hambatan R1 dan R2, arus I bercabang menjadi I1 dan I2',
        caption: 'Pada rangkaian paralel setiap hambatan memiliki jalur sendiri yang terhubung langsung ke kedua kutub baterai.',
      },
      {
        type: 'formula',
        latex: '\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots',
        description: 'Hambatan total adalah kebalikan dari jumlah kebalikan setiap hambatan.',
      },
      {
        type: 'formula',
        latex: 'R_{total} = \\frac{R_1 R_2}{R_1 + R_2}',
        description: 'Bentuk khusus untuk tepat dua hambatan yang paralel.',
      },
      {
        type: 'table',
        headers: ['Besaran', 'Perilaku pada Rangkaian Paralel'],
        rows: [
          ['Tegangan $V$', 'Sama pada semua cabang: $V_1 = V_2 = V_{total}$'],
          ['Arus $I$', 'Terbagi: $I_{total} = I_1 + I_2$'],
          ['Hambatan $R$', 'Dijumlahkan secara resiprokal: $\\frac{1}{R_{total}} = \\sum \\frac{1}{R_n}$'],
          ['Ukuran $R_{total}$', 'Selalu lebih kecil dari tiap hambatan penyusunnya'],
        ],
      },
      {
        type: 'example',
        title: 'Contoh: dua hambatan paralel',
        blocks: [
          { type: 'paragraph', text: 'Dua hambatan $R_1 = 6\\ \\Omega$ dan $R_2 = 3\\ \\Omega$ disusun paralel pada tegangan $12\\ \\mathrm{V}$. Tentukan hambatan total dan arus pada tiap cabang.' },
          { type: 'formula', latex: 'R_{total} = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2\\ \\Omega' },
          { type: 'formula', latex: 'I_1 = \\frac{V}{R_1} = \\frac{12}{6} = 2\\ \\mathrm{A},\\quad I_2 = \\frac{V}{R_2} = \\frac{12}{3} = 4\\ \\mathrm{A}' },
          { type: 'paragraph', text: 'Arus totalnya $I = 2 + 4 = 6\\ \\mathrm{A}$. Cek dengan hukum Ohm: $I = \\frac{V}{R_{total}} = \\frac{12}{2} = 6\\ \\mathrm{A}$.' },
          { type: 'paragraph', text: 'Perhatikan polanya: $R_2$ lebih kecil daripada $R_1$, sehingga arus pada $R_2$ justru lebih besar. Ini kebalikan dari rangkaian seri.' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Rangkaian Gabungan',
      },
      {
        type: 'paragraph',
        text: 'Rangkaian nyata hampir selalu gabungan. Ruas yang seri dijumlahkan hambatannya, ruas yang paralel memakai rumus resiprokal. Strategi penyederhanaan: kerjakan ruas paling dalam terlebih dahulu, lalu bergerak ke arah sumber tegangan.',
      },
      {
        type: 'formula',
        latex: 'R_{total} = \\frac{R_1 R_2}{R_1 + R_2} + R_3',
        description: 'Contoh pola kombinasi: dua hambatan paralel, lalu disambung seri dengan sebuah hambatan ketiga.',
      },
      {
        type: 'note',
        variant: 'tip',
        text: 'Pengaman hasil: pada setiap rangkaian seri, jumlah tegangan pada tiap hambatan harus sama dengan tegangan sumber. Pada rangkaian paralel, jumlah arus tiap cabang harus sama dengan arus total. Gunakan aturan ini untuk memeriksa hasil perhitungan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Jembatan Wheatstone',
      },
      {
        type: 'paragraph',
        text: 'Jembatan Wheatstone terdiri dari empat hambatan $R_1, R_2, R_3,$ dan $R_4$ yang membentuk bentuk belah ketupat, ditambah sebuah galvanometer pada salah satu diagonalnya. Jembatan disebut seimbang bila galvanometer tidak menunjukkan simpangan.',
      },
      {
        type: 'formula',
        latex: '\\frac{R_1}{R_2} = \\frac{R_3}{R_4}',
        description: 'Syarat jembatan Wheatstone seimbang, yaitu tidak ada arus yang mengalir melalui galvanometer.',
      },
      {
        type: 'note',
        variant: 'tip',
        text: 'TKA sering memuat soal penentuan arus atau tegangan pada jembatan yang tidak seimbang. Setelah hubungan seimbang diketahui, gunakan aturan pembagi tegangan pada tiap cabang untuk memperoleh besaran yang ditanyakan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Rangkaian RC (Keadaan Transien)',
      },
      {
        type: 'paragraph',
        text: 'Jika sebuah kapasitor berada dalam rangkaian arus searah, tegangan pada kapasitor tidak dapat berubah seketika. Tegangan berubah secara eksponensial menuju tegangan sumber, dengan konstanta waktu yang menentukan kecepatan prosesnya.',
      },
      {
        type: 'formula',
        latex: 'V_C(t) = V\\left(1 - e^{-t/RC}\\right)',
        description: 'Tegangan kapasitor saat sedang diisi (pengisian).',
      },
      {
        type: 'formula',
        latex: 'V_C(t) = V e^{-t/RC}',
        description: 'Tegangan kapasitor saat sedang dikosongkan (pelepasan).',
      },
      {
        type: 'formula',
        latex: '\\tau = R C',
        description: 'Konstanta waktu; saat t = RC, tegangan sudah mencapai sekitar 63% nilai akhir (saat pengisian) atau tersisa sekitar 37% (saat pelepasan).',
      },
      {
        type: 'glossary',
        title: 'Keterangan Simbol',
        items: [
          { symbol: '$R$', meaning: 'Hambatan total yang seri dengan kapasitor', unit: '$\\Omega$' },
          { symbol: '$C$', meaning: 'Kapasitansi', unit: 'F' },
          { symbol: '$t$', meaning: 'Waktu sejak saklar ditutup', unit: 's' },
          { symbol: '$\\tau$', meaning: 'Konstanta waktu', unit: 's' },
        ],
      },
      {
        type: 'note',
        variant: 'info',
        text: 'Kebanyakan soal TKA berada pada keadaan tunak (steady state), yaitu setelah waktu yang sangat lama. Dalam keadaan tunak, arus pada kapasitor bernilai nol sehingga kapasitor dapat dianggap sebagai penghambat (open circuit).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Alat Ukur Listrik',
      },
      {
        type: 'table',
        headers: ['Alat', 'Penempatan', 'Sifat'],
        rows: [
          ['Ammeter', 'Seri dengan komponen', 'Hambatan sangat kecil (idealnya nol) agar tidak mengubah arus'],
          ['Voltmeter', 'Paralel dengan komponen', 'Hambatan sangat besar (idealnya tak hingga) agar tidak menarik arus'],
          ['Ohm meter', 'Seri, tanpa baterai', 'Mengalirkan arus kecil untuk mengukur hambatan komponen'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Ringkasan Seri dan Paralel',
      },
      {
        type: 'table',
        headers: ['Besaran', 'Rangkaian Seri', 'Rangkaian Paralel'],
        rows: [
          ['Hambatan total', 'Jumlah: $R_1 + R_2$', 'Resiprokal: $\\frac{1}{R_1} + \\frac{1}{R_2}$'],
          ['Tegangan', 'Terbagi: $V_1 + V_2 = V$', 'Sama: $V_1 = V_2 = V$'],
          ['Arus', 'Sama: $I_1 = I_2 = I$', 'Terbagi: $I_1 + I_2 = I$'],
          ['Ukuran $R_{total}$', 'Lebih besar dari tiap $R$', 'Lebih kecil dari tiap $R$'],
          ['Daya pada tiap $R$', 'Sebanding dengan $R$', 'Berbanding terbalik dengan $R$'],
        ],
      },
      {
        type: 'note',
        variant: 'tip',
        text: 'Strategi cepat: hanya dua besaran yang menentukan keadaan sebuah rangkaian arus searah, yaitu tegangan dan arus (atau tegangan dan hambatan). Setelah keduanya diketahui, besaran lain dapat dihitung. Mulailah dari ruas yang paling dekat dengan sumber tegangan, lalu bergerak menuju beban.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tugas Latihan (Self-Check)',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          { text: 'Tiga hambatan $2\\ \\Omega$, $3\\ \\Omega$, dan $6\\ \\Omega$ disusun seri pada baterai $24\\ \\mathrm{V}$. Tentukan hambatan total, arus listrik, dan tegangan pada tiap hambatan.' },
          { text: 'Dua hambatan $4\\ \\Omega$ dan $12\\ \\Omega$ disusun paralel pada tegangan $12\\ \\mathrm{V}$. Tentukan hambatan total dan arus pada tiap cabang.' },
          { text: 'Sebuah lampu berlabel $60\\ \\mathrm{W}$ dipasang pada tegangan $220\\ \\mathrm{V}$. Tentukan arus listrik dan hambatan lampu tersebut.' },
          { text: 'Jembatan Wheatstone dengan $R_1 = 10\\ \\Omega$, $R_2 = 20\\ \\Omega$, dan $R_3 = 30\\ \\Omega$. Tentukan $R_4$ agar jembatan seimbang, lalu hitung hambatan total yang dilihat oleh baterai.' },
          { text: 'Sebuah kapasitor $100\\ \\mu\\mathrm{F}$ disambung seri dengan hambatan $2\\ \\mathrm{k}\\Omega$. Tentukan konstanta waktu, dan tegangan kapasitor pada saat $t = \\tau$ ketika dikosongkan dari tegangan awal $10\\ \\mathrm{V}$.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Latihan ini melatih pemilihan rumus yang tepat antara seri dan paralel, pembacaan diagram rangkaian, serta pembedaan besaran yang tetap sama dengan yang terbagi.',
      },
    ],
  },
];
