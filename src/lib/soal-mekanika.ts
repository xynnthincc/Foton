import { LatihanSet } from "./types";

export const soalMekanika: LatihanSet[] = [
  {
    slug: "pengukuran",
    title: "Latihan Soal: Pengukuran",
    category: "Mekanika",
    description: "Jangka sorong, mikrometer, angka penting, dan ketidakpastian",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Sebuah kawat diukur diameternya menggunakan mikrometer sekrup. Skala tetap menunjukkan 1,5 mm dan skala putar menunjukkan garis ke-28. Berapakah diameter kawat tersebut?",
        options: [
          "1,28 mm",
          "1,78 mm",
          "1,82 mm",
          "2,78 mm",
          "4,30 mm",
        ],
        answerIndex: 1,
        explanation:
          "Diameter = skala tetap + (skala putar × ketelitian) = $1{,}5 + 28 \\times 0{,}01 = 1{,}5 + 0{,}28 = 1{,}78$ mm. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Hasil pengukuran jangka sorong menunjukkan skala utama 2,3 cm dan skala nonius ke-7 yang berhimpit. Jika ketelitian jangka sorong 0,01 cm, berapakah hasil pengukurannya?",
        options: [
          "2,30 cm",
          "2,37 cm",
          "2,73 cm",
          "3,07 cm",
          "9,30 cm",
        ],
        answerIndex: 1,
        explanation:
          "Hasil = skala utama + (skala nonius × ketelitian) = $2{,}3 + 7 \\times 0{,}01 = 2{,}3 + 0{,}07 = 2{,}37$ cm. Jawaban: B.",
      },
      {
        no: 3,
        question:
          "Sebuah benda diukur massanya menggunakan neraca tiga lengan. Lengan belakang menunjukkan 100 g, lengan tengah 20 g, dan lengan depan 3,5 g. Berapakah massa benda?",
        formulaLatex: "m = 100 + 20 + 3{,}5",
        options: ["123 g", "123,5 g", "130 g", "123,50 g", "113,5 g"],
        answerIndex: 1,
        explanation:
          "Massa total = jumlah ketiga pembacaan lengan = $100 + 20 + 3{,}5 = 123{,}5$ g. Jawaban: B.",
      },
      {
        no: 4,
        question:
          "Hasil operasi berikut: $2{,}50 \\times 4{,}2$ dengan aturan angka penting adalah...",
        options: ["10,5", "10,50", "11", "10", "10,500"],
        answerIndex: 0,
        explanation:
          "Pada perkalian, hasil memiliki angka penting sebanyak angka penting paling sedikit. $2{,}50$ = 3 AP, $4{,}2$ = 2 AP. Hasil harus 2 AP. $2{,}50 \\times 4{,}2 = 10{,}5$ → 2 AP. Jawaban: A.",
      },
      {
        no: 5,
        question:
          "Besaran yang dimensinya $ML^{-1}T^{-2}$ adalah...",
        options: [
          "Gaya",
          "Tekanan",
          "Energi",
          "Daya",
          "Momentum",
        ],
        answerIndex: 1,
        explanation:
          "Cek dimensi tekanan: $P = F/A = ma/(L^2) = MLT^{-2}/L^2 = ML^{-1}T^{-2}$. Jawaban: B. Gaya = $MLT^{-2}$, Energi = $ML^2T^{-2}$, Daya = $ML^2T^{-3}$, Momentum = $MLT^{-1}$.",
      },
    ],
  },
  {
    slug: "gerak-lurus",
    title: "Latihan Soal: Gerak Lurus",
    category: "Mekanika",
    description: "GLB, GLBB, gerak vertikal, dan kejar-kejaran",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Sebuah mobil bergerak dengan kecepatan 20 m/s lalu direm dengan perlambatan 4 m/s². Berapa jarak tempuh mobil hingga berhenti?",
        formulaLatex: "v_t^2 = v_0^2 + 2as",
        options: ["25 m", "50 m", "80 m", "100 m", "200 m"],
        answerIndex: 1,
        explanation:
          "Saat berhenti $v_t = 0$. $0 = 20^2 + 2(-4)s \\Rightarrow 8s = 400 \\Rightarrow s = 50$ m. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Bola dilempar vertikal ke atas dengan kecepatan awal 30 m/s. Jika $g = 10$ m/s², berapa ketinggian maksimum yang dicapai?",
        formulaLatex: "h_{maks} = \\frac{v_0^2}{2g}",
        options: ["30 m", "45 m", "60 m", "90 m", "150 m"],
        answerIndex: 1,
        explanation:
          "Ketinggian maksimum: $h = v_0^2/(2g) = 30^2/(2 \\times 10) = 900/20 = 45$ m. Jawaban: B. Waktu naik: $t = v_0/g = 3$ s.",
      },
      {
        no: 3,
        question:
          "Benda jatuh bebas dari ketinggian 20 m tanpa kecepatan awal. Berapa kecepatan benda saat menyentuh tanah? ($g = 10$ m/s²)",
        formulaLatex: "v = \\sqrt{2gh}",
        options: ["10 m/s", "14 m/s", "20 m/s", "40 m/s", "200 m/s"],
        answerIndex: 2,
        explanation:
          "Kecepatan saat sampai: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20$ m/s. Jawaban: C. Catatan: waktu jatuh $t = \\sqrt{2h/g} = 2$ s.",
      },
      {
        no: 4,
        question:
          "Sebuah motor dipercepat dari diam dengan percepatan 2 m/s² selama 10 detik. Berapa jarak yang ditempuh?",
        formulaLatex: "s = \\frac{1}{2}at^2",
        options: ["10 m", "20 m", "50 m", "100 m", "200 m"],
        answerIndex: 3,
        explanation:
          "Karena $v_0 = 0$: $s = \\frac{1}{2}at^2 = \\frac{1}{2}(2)(10^2) = \\frac{1}{2}(2)(100) = 100$ m. Jawaban: D.",
      },
      {
        no: 5,
        question:
          "Mobil A dan B bergerak saling berhadapan. Mobil A 72 km/jam dari barat, mobil B 36 km/jam dari timur, jarak awal 540 m. Setelah berapa detik mereka bertemu?",
        formulaLatex: "v_A + v_B = 20 + 10 = 30 \\text{ m/s}, \\quad t = \\frac{540}{30}",
        options: ["9 s", "12 s", "15 s", "18 s", "27 s"],
        answerIndex: 3,
        explanation:
          "Konversi: $72$ km/jam $= 20$ m/s, $36$ km/jam $= 10$ m/s. Karena saling mendekapat: $v_{rel} = 20 + 10 = 30$ m/s. Waktu: $t = 540/30 = 18$ s. Jawaban: D.",
      },
    ],
  },
  {
    slug: "gerak-lengkung",
    title: "Latihan Soal: Gerak Lengkung",
    category: "Mekanika",
    description: "Gerak parabola, gerak melingkar, dan roda",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Sebuah peluru ditembakkan dengan kecepatan 20 m/s pada sudut elevasi 30°. Berapa jangkauan maksimumnya? ($g = 10$ m/s²)",
        formulaLatex: "R = \\frac{v_0^2 \\sin 2\\alpha}{g}",
        options: [
          "10 m",
          "17,3 m",
          "20 m",
          "34,6 m",
          "40 m",
        ],
        answerIndex: 3,
        explanation:
          "$R = v_0^2 \\sin 2\\alpha / g = 20^2 \\times \\sin 60° / 10 = 400 \\times 0{,}866 / 10 = 34{,}64$ m. Jawaban: D. Tips: sudut pelengkap (60°) akan menghasilkan jangkauan yang sama.",
      },
      {
        no: 2,
        question:
          "Benda dilempar horizontal dari ketinggian 45 m dengan kecepatan 10 m/s. Berapa jangkauan horizontal? ($g = 10$ m/s²)",
        formulaLatex: "t = \\sqrt{\\frac{2h}{g}}, \\quad x = v_0 t",
        options: ["10 m", "20 m", "30 m", "45 m", "90 m"],
        answerIndex: 2,
        explanation:
          "Waktu jatuh: $t = \\sqrt{2h/g} = \\sqrt{2 \\times 45/10} = \\sqrt{9} = 3$ s. Jangkauan: $x = v_0 t = 10 \\times 3 = 30$ m. Jawaban: C. Waktu jatuh tidak bergantung $v_0$!",
      },
      {
        no: 3,
        question:
          "Sebuah roda berputar dengan frekuensi 5 Hz. Jika jari-jari roda 14 cm, berapa kecepatan linear suatu titik di tepi roda? ($\\pi = 22/7$)",
        formulaLatex: "v = \\omega r = 2\\pi f r",
        options: [
          "2,2 m/s",
          "4,4 m/s",
          "8,8 m/s",
          "22 m/s",
          "44 m/s",
        ],
        answerIndex: 1,
        explanation:
          "$v = 2\\pi f r = 2 \\times (22/7) \\times 5 \\times 0{,}14 = 2 \\times 22 \\times 0{,}1 = 4{,}4$ m/s. Jawaban: B.",
      },
      {
        no: 4,
        question:
          "Dua roda dihubungkan dengan sabuk. Roda A jari-jari 20 cm berputar 600 rpm, roda B jari-jari 5 cm. Berapa frekuensi roda B?",
        formulaLatex: "v_A = v_B \\implies \\omega_A r_A = \\omega_B r_B",
        options: [
          "150 rpm",
          "600 rpm",
          "1200 rpm",
          "2400 rpm",
          "3000 rpm",
        ],
        answerIndex: 3,
        explanation:
          "Sabuk → kecepatan linear sama: $v_A = v_B \\Rightarrow \\omega_A r_A = \\omega_B r_B \\Rightarrow f_A r_A = f_B r_B$. $600 \\times 20 = f_B \\times 5 \\Rightarrow f_B = 12000/5 = 2400$ rpm. Jawaban: D.",
      },
      {
        no: 5,
        question:
          "Benda bergerak melingkar dengan kecepatan 10 m/s dan jari-jari 5 m. Berapa percepatan sentripetalnya?",
        formulaLatex: "a_s = \\frac{v^2}{r}",
        options: [
          "2 m/s²",
          "5 m/s²",
          "10 m/s²",
          "20 m/s²",
          "50 m/s²",
        ],
        answerIndex: 3,
        explanation:
          "$a_s = v^2/r = 10^2/5 = 100/5 = 20$ m/s². Jawaban: D. Percepatan sentripetal selalu mengarah ke pusat lingkaran.",
      },
    ],
  },
  {
    slug: "hukum-newton",
    title: "Latihan Soal: Hukum Newton",
    category: "Mekanika",
    description: "Hukum Newton, bidang miring, katrol, lift, dan gesekan",
    difficulty: "Sulit",
    soalList: [
      {
        no: 1,
        question:
          "Benda bermassa 4 kg didorong dengan gaya 20 N pada lantai kasar dengan koefisien gesek kinetis 0,25. Berapa percepatan benda? ($g = 10$ m/s²)",
        formulaLatex: "\\Sigma F = ma, \\quad f_k = \\mu_k N",
        options: [
          "1,5 m/s²",
          "2,5 m/s²",
          "3,0 m/s²",
          "5,0 m/s²",
          "7,5 m/s²",
        ],
        answerIndex: 1,
        explanation:
          "Gaya gesek: $f_k = \\mu_k N = 0{,}25 \\times 40 = 10$ N. Gaya netto: $\\Sigma F = F - f_k = 20 - 10 = 10$ N. Percepatan: $a = \\Sigma F/m = 10/4 = 2{,}5$ m/s². Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Sistem katrol: $m_1 = 2$ kg dan $m_2 = 3$ kg ($m_2 > m_1$). Berapa tegangan tali? ($g = 10$ m/s²)",
        formulaLatex: "T = \\frac{2m_1 m_2 g}{m_1 + m_2}",
        options: ["12 N", "20 N", "24 N", "30 N", "50 N"],
        answerIndex: 2,
        explanation:
          "Tegangan: $T = 2m_1 m_2 g/(m_1+m_2) = 2(2)(3)(10)/(2+3) = 120/5 = 24$ N. Jawaban: C. Percepatan: $a = (3-2)10/5 = 2$ m/s².",
      },
      {
        no: 3,
        question:
          "Orang bermassa 60 kg berdiri di dalam lift yang dipercepat ke atas dengan $a = 2$ m/s². Berapa bacaan timbangan? ($g = 10$ m/s²)",
        formulaLatex: "N = m(g + a)",
        options: ["480 N", "500 N", "600 N", "720 N", "1200 N"],
        answerIndex: 3,
        explanation:
          "Lift naik dipercepat → berat semu naik: $N = m(g+a) = 60(10+2) = 60 \\times 12 = 720$ N. Jawaban: D. Berat semu > berat sebenarnya.",
      },
      {
        no: 4,
        question:
          "Benda bermassa 5 kg di bidang miring licin bersudut 37°. Berapa percepatan benda? ($g = 10$ m/s², $\\sin 37° = 0{,}6$)",
        formulaLatex: "a = g\\sin\\theta",
        options: ["3 m/s²", "4 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
        answerIndex: 2,
        explanation:
          "Bidang miring licin: $a = g\\sin\\theta = 10 \\times 0{,}6 = 6$ m/s². Jawaban: C. Massa tidak memengaruhi percepatan di bidang miring licin!",
      },
      {
        no: 5,
        question:
          "Dua kotak bersentuhan, $m_1 = 3$ kg di depan $m_2 = 2$ kg. Gaya 10 N mendorong $m_1$. Berapa gaya kontak antara kedua kotak?",
        formulaLatex: "a = \\frac{F}{m_1 + m_2}, \\quad F_{kontak} = m_2 a",
        options: ["2 N", "4 N", "5 N", "6 N", "10 N"],
        answerIndex: 1,
        explanation:
          "Percepatan bersama: $a = F/(m_1+m_2) = 10/5 = 2$ m/s². Gaya kontak pada $m_2$: $F_{kontak} = m_2 \\times a = 2 \\times 2 = 4$ N. Jawaban: B.",
      },
    ],
  },
  {
    slug: "usaha-energi",
    title: "Latihan Soal: Usaha dan Energi",
    category: "Mekanika",
    description: "Usaha, energi kinetik, potensial, kekekalan energi, dan daya",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Benda bermassa 2 kg meluncur dari bidang miring licin dari ketinggian 5 m. Berapa kecepatan benda di dasar? ($g = 10$ m/s²)",
        formulaLatex: "v = \\sqrt{2gh}",
        options: ["5 m/s", "10 m/s", "20 m/s", "50 m/s", "100 m/s"],
        answerIndex: 1,
        explanation:
          "Kekekalan energi: $mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10$ m/s. Jawaban: B. Tidak bergantung sudut bidang miring!",
      },
      {
        no: 2,
        question:
          "Berapa usaha yang dilakukan gaya 50 N yang membentuk sudut 60° terhadap horizontal pada benda yang berpindah 10 m?",
        formulaLatex: "W = Fs\\cos\\theta",
        options: ["50 J", "100 J", "250 J", "433 J", "500 J"],
        answerIndex: 2,
        explanation:
          "$W = Fs\\cos\\theta = 50 \\times 10 \\times \\cos 60° = 500 \\times 0{,}5 = 250$ J. Jawaban: C.",
      },
      {
        no: 3,
        question:
          "Benda bermassa 4 kg bergerak dengan kecepatan 5 m/s. Berapa energi kinetik benda?",
        formulaLatex: "E_k = \\frac{1}{2}mv^2",
        options: ["10 J", "20 J", "25 J", "50 J", "100 J"],
        answerIndex: 3,
        explanation:
          "$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(5^2) = \\frac{1}{2}(4)(25) = 50$ J. Jawaban: D.",
      },
      {
        no: 4,
        question:
          "Benda 2 kg meluncur dari ketinggian 2 m di bidang miring kasar dan sampai di bawah dengan kecepatan 6 m/s. Berapa usaha gaya gesek? ($g = 10$ m/s²)",
        formulaLatex: "W_{gesek} = \\Delta E_m",
        options: ["−4 J", "−8 J", "−16 J", "−32 J", "−64 J"],
        answerIndex: 0,
        explanation:
          "Energi mekanik awal: $E_{m1} = mgh = 2 \\times 10 \\times 2 = 40$ J. Akhir: $E_{m2} = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(36) = 36$ J. $W_{gesek} = E_{m2} - E_{m1} = 36 - 40 = -4$ J. Jawaban: A. Tanda negatif = energi mekanik berkurang akibat gesekan.",
      },
      {
        no: 5,
        question:
          "Sebuah mesin memiliki daya input 500 W dan daya output 400 W. Berapa efisiensi mesin?",
        formulaLatex: "\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%",
        options: ["20%", "50%", "75%", "80%", "125%"],
        answerIndex: 3,
        explanation:
          "$\\eta = P_{out}/P_{in} \\times 100\\% = 400/500 \\times 100\\% = 80\\%$. Jawaban: D. Efisiensi tidak pernah lebih dari 100%.",
      },
    ],
  },
];
