import { LatihanSet } from "./types";

export const soalGelombang: LatihanSet[] = [
  {
    slug: "momentum-impuls",
    title: "Latihan Soal: Momentum dan Impuls",
    category: "Mekanika",
    description: "Kekekalan momentum, tumbukan, koefisien restitusi, dan impuls",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Bola bermassa 0,5 kg bergerak dengan kecepatan 4 m/s dipukul sehingga berbalik arah dengan kecepatan 6 m/s. Berapa impuls yang diberikan pemukul?",
        formulaLatex: "I = \\Delta p = m(v_2 - v_1)",
        options: ["1 kg·m/s", "3 kg·m/s", "5 kg·m/s", "7 kg·m/s", "11 kg·m/s"],
        answerIndex: 2,
        explanation:
          "Tentukan arah positif = arah awal. $v_1 = +4$ m/s, $v_2 = -6$ m/s (berbalik). $I = m(v_2 - v_1) = 0{,}5(-6 - 4) = 0{,}5(-10) = -5$ kg·m/s. Besar impuls = 5 kg·m/s. Jawaban: C.",
      },
      {
        no: 2,
        question:
          "Bola A (2 kg, 6 m/s) menumbuk bola B (4 kg, diam) secara lenting sempurna. Berapa kecepatan B setelah tumbukan?",
        formulaLatex: "m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2', \\quad e = 1",
        options: ["1 m/s", "2 m/s", "3 m/s", "4 m/s", "6 m/s"],
        answerIndex: 3,
        explanation:
          "Lenting sempurna ($e=1$) + momentum kekal. Dua persamaan: (1) $12 = 2v_1' + 4v_2'$, (2) $v_2' - v_1' = 6$ → $v_1' = v_2' - 6$. Substitusi: $12 = 2(v_2'-6) + 4v_2' = 6v_2' - 12 \\Rightarrow 24 = 6v_2' \\Rightarrow v_2' = 4$ m/s. Jawaban: D.",
      },
      {
        no: 3,
        question:
          "Bola jatuh dari ketinggian 5 m dan memantul setinggi 1,25 m. Berapa koefisien restitusinya? ($g = 10$ m/s²)",
        formulaLatex: "e = \\sqrt{\\frac{h'}{h}}",
        options: ["0,25", "0,50", "0,75", "0,80", "1,00"],
        answerIndex: 1,
        explanation:
          "$e = \\sqrt{h'/h} = \\sqrt{1{,}25/5} = \\sqrt{0{,}25} = 0{,}5$. Jawaban: B. Tumbukan lenting sebagian.",
      },
      {
        no: 4,
        question:
          "Sebuah peluru 20 g ditembakkan dari senapan 4 kg. Peluru keluar dengan kecepatan 400 m/s. Berapa kecepatan rekoil senapan?",
        formulaLatex: "m_1v_1 + m_2v_2 = 0",
        options: ["1 m/s", "2 m/s", "4 m/s", "20 m/s", "400 m/s"],
        answerIndex: 1,
        explanation:
          "Momentum awal = 0 (senapan + peluru diam). Kekekalan: $m_p v_p + m_s v_s = 0 \\Rightarrow 0{,}02 \\times 400 + 4 \\times v_s = 0 \\Rightarrow v_s = -8/4 = -2$ m/s. Jawaban: B. Tanda negatif = berlawanan arah peluru.",
      },
      {
        no: 5,
        question:
          "Truk 3000 kg bergerak 10 m/s menabrak mobil 1000 kg yang diam. Tumbukan tidak lenting ($e = 0$). Berapa kecepatan keduanya setelah tumbukan?",
        formulaLatex: "v' = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}",
        options: ["2,5 m/s", "5 m/s", "7,5 m/s", "10 m/s", "15 m/s"],
        answerIndex: 2,
        explanation:
          "Tidak lenting → menyatu: $v' = (m_1v_1 + m_2v_2)/(m_1+m_2) = (3000 \\times 10 + 0)/4000 = 30000/4000 = 7{,}5$ m/s. Jawaban: C.",
      },
    ],
  },
  {
    slug: "dinamika-rotasi",
    title: "Latihan Soal: Dinamika Rotasi",
    category: "Mekanika",
    description: "Momen inersia, torsi, momentum sudut, dan menggelinding",
    difficulty: "Sulit",
    soalList: [
      {
        no: 1,
        question:
          "Cakram pejal bermassa 2 kg, jari-jari 0,5 m. Berapa momen inersianya jika berputar pada sumbu pusat?",
        formulaLatex: "I = \\frac{1}{2}MR^2",
        options: ["0,25 kg·m²", "0,50 kg·m²", "1,00 kg·m²", "2,00 kg·m²", "4,00 kg·m²"],
        answerIndex: 0,
        explanation:
          "Cakram pejal: $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0{,}5^2) = \\frac{1}{2}(2)(0{,}25) = 0{,}25$ kg·m². Jawaban: A.",
      },
      {
        no: 2,
        question:
          "Torsi 12 N·m bekerja pada roda dengan momen inersia 3 kg·m². Berapa percepatan sudut roda?",
        formulaLatex: "\\tau = I\\alpha",
        options: ["2 rad/s²", "4 rad/s²", "9 rad/s²", "15 rad/s²", "36 rad/s²"],
        answerIndex: 1,
        explanation:
          "$\\alpha = \\tau/I = 12/3 = 4$ rad/s². Jawaban: B. Analogi dengan $a = F/m$.",
      },
      {
        no: 3,
        question:
          "Penari es berputar dengan tangan terentang ($I_1 = 6$ kg·m², $\\omega_1 = 4$ rad/s). Saat tangan ditarik, $I_2 = 2$ kg·m². Berapa $\\omega_2$?",
        formulaLatex: "I_1\\omega_1 = I_2\\omega_2",
        options: ["4 rad/s", "8 rad/s", "12 rad/s", "16 rad/s", "24 rad/s"],
        answerIndex: 2,
        explanation:
          "Kekekalan momentum sudut: $I_1\\omega_1 = I_2\\omega_2 \\Rightarrow 6 \\times 4 = 2 \\times \\omega_2 \\Rightarrow \\omega_2 = 24/2 = 12$ rad/s. Jawaban: C. Saat $I$ berkurang, $\\omega$ naik.",
      },
      {
        no: 4,
        question:
          "Batang homogen massa 4 kg, panjang 2 m, berputar pada sumbu di ujungnya. Berapa momen inersianya?",
        formulaLatex: "I = \\frac{1}{3}ML^2",
        options: ["1,33 kg·m²", "2,67 kg·m²", "5,33 kg·m²", "8,00 kg·m²", "16,0 kg·m²"],
        answerIndex: 2,
        explanation:
          "Batang, sumbu di ujung: $I = \\frac{1}{3}ML^2 = \\frac{1}{3}(4)(2^2) = \\frac{1}{3}(4)(4) = 16/3 \\approx 5{,}33$ kg·m². Jawaban: C.",
      },
      {
        no: 5,
        question:
          "Bola pejal menggelinding tanpa slip. Berapa perbandingan energi kinetik translasi terhadap energi kinetik total?",
        formulaLatex: "\\frac{E_{k,trans}}{E_{k,total}} = \\frac{\\frac{1}{2}mv^2}{\\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2}",
        options: ["2/7", "5/7", "2/5", "5/2", "7/10"],
        answerIndex: 1,
        explanation:
          "Bola pejal: $I = \\frac{2}{5}mR^2$, $\\omega = v/R$. $E_{k,total} = \\frac{1}{2}mv^2 + \\frac{1}{2} \\cdot \\frac{2}{5}mR^2 \\cdot v^2/R^2 = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$. Rasio translasi/total = $\\frac{1/2}{7/10} = \\frac{5}{7}$. Jawaban: B.",
      },
    ],
  },
  {
    slug: "fluida",
    title: "Latihan Soal: Fluida",
    category: "Mekanika",
    description: "Tekanan, hidrostatis, Pascal, Archimedes, Bernoulli",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Berapa tekanan hidrostatis pada kedalaman 3 m di dalam air? ($\\rho = 1000$ kg/m³, $g = 10$ m/s²)",
        formulaLatex: "P_h = \\rho g h",
        options: ["3.000 Pa", "10.000 Pa", "30.000 Pa", "100.000 Pa", "300.000 Pa"],
        answerIndex: 2,
        explanation:
          "$P_h = \\rho gh = 1000 \\times 10 \\times 3 = 30000$ Pa = 30 kPa. Jawaban: C. Ini tekanan tambahan, tekanan mutlak = $P_0 + P_h$.",
      },
      {
        no: 2,
        question:
          "Dongkrak hidrolik: penampang kecil 4 cm², penampang besar 100 cm². Gaya pada penampang kecil 20 N. Berapa gaya angkat?",
        formulaLatex: "\\frac{F_1}{A_1} = \\frac{F_2}{A_2}",
        options: ["80 N", "200 N", "500 N", "1000 N", "2000 N"],
        answerIndex: 2,
        explanation:
          "Hukum Pascal: $F_2 = F_1 \\times A_2/A_1 = 20 \\times 100/4 = 20 \\times 25 = 500$ N. Jawaban: C.",
      },
      {
        no: 3,
        question:
          "Benda bermassa 0,8 kg, volume 1000 cm³ dimasukkan dalam air ($\\rho = 1$ g/cm³). Apa yang terjadi?",
        formulaLatex: "\\rho_b = \\frac{m}{V}",
        options: [
          "Terapung",
          "Melayang",
          "Tenggelam",
          "Mengapung sebagian",
          "Tidak dapat ditentukan",
        ],
        answerIndex: 0,
        explanation:
          "$\\rho_b = m/V = 0{,}8 \\text{ kg} / 1000 \\text{ cm}³ = 0{,}8$ g/cm³. Karena $\\rho_b < \\rho_f$ ($0{,}8 < 1$), benda terapung. Jawaban: A. Fraksi tercelup = $0{,}8/1 = 80\\%$.",
      },
      {
        no: 4,
        question:
          "Air mengalir dalam pipa. Penampang 1: luas 6 cm², kecepatan 4 m/s. Penampang 2: luas 2 cm². Berapa kecepatan di penampang 2?",
        formulaLatex: "A_1v_1 = A_2v_2",
        options: ["4 m/s", "6 m/s", "8 m/s", "12 m/s", "24 m/s"],
        answerIndex: 3,
        explanation:
          "Kontinuitas: $v_2 = A_1 v_1 / A_2 = 6 \\times 4 / 2 = 24/2 = 12$ m/s. Jawaban: D. Pipa menyempit → aliran lebih cepat.",
      },
      {
        no: 5,
        question:
          "Air memancar dari lubang kebocoran tangki pada kedalaman 1,25 m dari permukaan air. Berapa kecepatan air keluar? ($g = 10$ m/s²)",
        formulaLatex: "v = \\sqrt{2gh}",
        options: ["2,5 m/s", "5 m/s", "12,5 m/s", "25 m/s", "125 m/s"],
        answerIndex: 1,
        explanation:
          "Torricelli: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 1{,}25} = \\sqrt{25} = 5$ m/s. Jawaban: B.",
      },
    ],
  },
  {
    slug: "bunyi",
    title: "Latihan Soal: Bunyi",
    category: "Gelombang",
    description: "Gelombang, sumber bunyi, intensitas, Doppler, dan pelayangan",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Pipa organa terbuka panjang 85 cm. Jika cepat rambat bunyi 340 m/s, berapa frekuensi nada dasar?",
        formulaLatex: "f_1 = \\frac{v}{2L}",
        options: ["100 Hz", "200 Hz", "340 Hz", "400 Hz", "800 Hz"],
        answerIndex: 1,
        explanation:
          "Pipa terbuka, nada dasar: $f_1 = v/(2L) = 340/(2 \\times 0{,}85) = 340/1{,}7 = 200$ Hz. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Sumber bunyi daya 0,8 W terdengar dengan taraf intensitas 60 dB pada jarak $r$. Berapa taraf intensitas pada jarak $10r$?",
        formulaLatex: "TI_2 = TI_1 - 20\\log\\frac{r_2}{r_1}",
        options: ["20 dB", "30 dB", "40 dB", "50 dB", "60 dB"],
        answerIndex: 2,
        explanation:
          "Jarak naik 10×: $TI_2 = TI_1 - 20\\log(r_2/r_1) = 60 - 20\\log(10) = 60 - 20 \\times 1 = 40$ dB. Jawaban: C.",
      },
      {
        no: 3,
        question:
          "Sumber bunyi 680 Hz mendekati pendengar diam dengan kecepatan 20 m/s. Cepat rambat bunyi 340 m/s. Berapa frekuensi terdengar?",
        formulaLatex: "f_p = f_s \\frac{v}{v - v_s}",
        options: ["640 Hz", "680 Hz", "720 Hz", "765 Hz", "850 Hz"],
        answerIndex: 2,
        explanation:
          "Sumber mendekati pendengar diam: $f_p = f_s \\cdot v/(v - v_s) = 680 \\times 340/(340-20) = 680 \\times 340/320 = 680 \\times 1{,}0625 = 722{,}5 \\approx 720$ Hz. Jawaban: C.",
      },
      {
        no: 4,
        question:
          "Dua nada dengan frekuensi 256 Hz dan 260 Hz dibunyikan bersamaan. Berapa frekuensi pelayangan?",
        formulaLatex: "f_{layang} = |f_1 - f_2|",
        options: ["2 Hz", "4 Hz", "8 Hz", "128 Hz", "258 Hz"],
        answerIndex: 1,
        explanation:
          "$f_{layang} = |f_1 - f_2| = |256 - 260| = 4$ Hz. Jawaban: B. Pelayanan terdengar sebagai denyut 4 kali per detik.",
      },
      {
        no: 5,
        question:
          "Kapal mengirimkan sonar ke dasar laut. Pantulan diterima setelah 4 detik. Jika cepat rambat bunyi dalam air 1500 m/s, berapa kedalaman laut?",
        formulaLatex: "d = \\frac{vt}{2}",
        options: ["1500 m", "2000 m", "3000 m", "6000 m", "12000 m"],
        answerIndex: 2,
        explanation:
          "$d = vt/2 = 1500 \\times 4 / 2 = 3000$ m. Jawaban: C. Dibagi 2 karena bunyi pergi-pulang.",
      },
    ],
  },
  {
    slug: "cahaya",
    title: "Latihan Soal: Cahaya dan Optik",
    category: "Gelombang",
    description: "Pembiasan, cermin, lensa, interferensi, dan alat optik",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Benda setinggi 3 cm berada 30 cm di depan cermin cekung dengan jari-jari 40 cm. Berapa jarak bayangan?",
        formulaLatex: "\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}, \\quad f = \\frac{R}{2}",
        options: ["15 cm", "30 cm", "60 cm", "120 cm", "nyata tak hingga"],
        answerIndex: 2,
        explanation:
          "$f = R/2 = 40/2 = 20$ cm. $1/s' = 1/f - 1/s = 1/20 - 1/30 = (3-2)/60 = 1/60 \\Rightarrow s' = 60$ cm. Jawaban: C. Bayangan nyata (s' positif).",
      },
      {
        no: 2,
        question:
          "Sinar datang dari air ($n_1 = 1{,}33$) ke udara ($n_2 = 1$) dengan sudut datang 48,75°. Jika sudut kritis air ke udara ≈ 48,6°, apa yang terjadi?",
        formulaLatex: "\\sin\\theta_c = \\frac{n_2}{n_1}",
        options: [
          "Bias mendekati normal",
          "Bias menjauhi normal",
          "Pemantulan sempurna",
          "Sinar diteruskan lurus",
          "Dispersi",
        ],
        answerIndex: 2,
        explanation:
          "Sudut datang (48,75°) lebih besar dari sudut kritis (48,6°), sehingga terjadi pemantulan sempurna (total internal reflection). Jawaban: C. Prinsip serat optik.",
      },
      {
        no: 3,
        question:
          "Percobaan Young: celah ganda dengan jarak celah 0,2 mm, layar 1 m dari celah, panjang gelombang 500 nm. Berapa jarak antar pita terang?",
        formulaLatex: "\\Delta p = \\frac{\\lambda L}{d}",
        options: ["0,5 mm", "1,0 mm", "2,5 mm", "5,0 mm", "10 mm"],
        answerIndex: 2,
        explanation:
          "$\\Delta p = \\lambda L/d = (500 \\times 10^{-9})(1)/(0{,}2 \\times 10^{-3}) = 5 \\times 10^{-7}/2 \\times 10^{-4} = 2{,}5 \\times 10^{-3}$ m = 2,5 mm. Jawaban: C.",
      },
      {
        no: 4,
        question:
          "Lup dengan fokus 5 cm digunakan oleh mata tak berakomodasi. Berapa perbesarannya? (titik dekat normal 25 cm)",
        formulaLatex: "M = \\frac{25}{f}",
        options: ["2×", "5×", "6×", "10×", "25×"],
        answerIndex: 1,
        explanation:
          "Tak berakomodasi: $M = 25/f = 25/5 = 5\\times$. Jawaban: B. Akomodasi maks: $M = 25/f + 1 = 6\\times$.",
      },
      {
        no: 5,
        question:
          "Seseorang menderita miopi dengan titik jauh 50 cm. Berapa kekuatan lensa yang diperlukan?",
        formulaLatex: "P = \\frac{100}{-PR}",
        options: ["−2 dioptri", "−0,5 dioptri", "+2 dioptri", "+0,5 dioptri", "−5 dioptri"],
        answerIndex: 0,
        explanation:
          "Miopi → lensa cekung (negatif). $P = 100/f = 100/(-50) = -2$ dioptri. Jawaban: A. Lensa divergen.",
      },
    ],
  },
];
