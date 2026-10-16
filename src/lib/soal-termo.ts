import { LatihanSet } from "./types";

export const soalTermo: LatihanSet[] = [
  {
    slug: "kalor",
    title: "Latihan Soal: Kalor",
    category: "Termodinamika",
    description: "Kalor, perubahan wujud, pemuaian, perpindahan kalor, asas Black",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Berapa kalor yang dibutuhkan untuk memanaskan 0,5 kg air dari 20°C sampai 80°C? ($c = 4200$ J/kg°C)",
        formulaLatex: "Q = mc\\Delta T",
        options: ["42 kJ", "84 kJ", "126 kJ", "168 kJ", "252 kJ"],
        answerIndex: 2,
        explanation:
          "$Q = mc\\Delta T = 0{,}5 \\times 4200 \\times (80-20) = 0{,}5 \\times 4200 \\times 60 = 126000$ J = 126 kJ. Jawaban: C.",
      },
      {
        no: 2,
        question:
          "Suhu 40°C sama dengan berapa Fahrenheit?",
        formulaLatex: "\\frac{T_C}{5} = \\frac{T_F - 32}{9}",
        options: ["72°F", "88°F", "104°F", "113°F", "140°F"],
        answerIndex: 2,
        explanation:
          "$T_F = (9/5)T_C + 32 = (9/5)(40) + 32 = 72 + 32 = 104$°F. Jawaban: C.",
      },
      {
        no: 3,
        question:
          "Sebuah batang logam panjang 1 m dipanaskan dari 20°C ke 70°C. Jika $\\alpha = 2 \\times 10^{-5}$/°C, berapa pertambahan panjangnya?",
        formulaLatex: "\\Delta L = L_0 \\alpha \\Delta T",
        options: ["0,5 mm", "1 mm", "1,5 mm", "2 mm", "5 mm"],
        answerIndex: 1,
        explanation:
          "$\\Delta L = L_0 \\alpha \\Delta T = 1 \\times 2 \\times 10^{-5} \\times 50 = 100 \\times 10^{-5} = 10^{-3}$ m = 1 mm. Jawaban: B.",
      },
      {
        no: 4,
        question:
          "100 g air suhu 80°C dicampur dengan 200 g air suhu 20°C. Berapa suhu akhir campuran?",
        formulaLatex: "T_c = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}",
        options: ["30°C", "40°C", "50°C", "60°C", "70°C"],
        answerIndex: 1,
        explanation:
          "Asas Black: $T_c = (m_1T_1 + m_2T_2)/(m_1+m_2) = (100 \\times 80 + 200 \\times 20)/300 = (8000 + 4000)/300 = 12000/300 = 40$°C. Jawaban: B.",
      },
      {
        no: 5,
        question:
          "Sebuah benda hitam bersuhu 5800 K (mirip permukaan matahari). Berapa panjang gelombang puncak radiasinya?",
        formulaLatex: "\\lambda_{maks} = \\frac{2{,}9 \\times 10^{-3}}{T}",
        options: ["50 nm", "100 nm", "500 nm", "1000 nm", "5000 nm"],
        answerIndex: 2,
        explanation:
          "Hukum Wien: $\\lambda_{maks} = 2{,}9 \\times 10^{-3}/T = 2{,}9 \\times 10^{-3}/5800 = 5 \\times 10^{-7}$ m = 500 nm (cahaya tampak hijau-kuning). Jawaban: C.",
      },
    ],
  },
  {
    slug: "pemanasan-global",
    title: "Latihan Soal: Pemanasan Global",
    category: "Termodinamika",
    description: "Efek rumah kaca, gas rumah kaca, dampak, dan solusi",
    difficulty: "Mudah",
    soalList: [
      {
        no: 1,
        question:
          "Pernyataan berikut yang BENAR tentang efek rumah kaca adalah...",
        options: [
          "Efek rumah kaca sepenuhnya merugikan dan harus dihilangkan",
          "Efek rumah kaca alami diperlukan untuk menjaga suhu bumi layak huni",
          "Efek rumah kaca terjadi karena bumi memancarkan gelombang radio",
          "Gas rumah kaca memantulkan radiasi matahari gelombang pendek",
          "Efek rumah kaca hanya disebabkan oleh aktivitas manusia",
        ],
        answerIndex: 1,
        explanation:
          "Efek rumah kaca ALAMI diperlukan — tanpanya suhu bumi ±−18°C. Yang berbahaya adalah PENINGKATAN efek rumah kaca akibat aktivitas manusia. Gas rumah kaca menyerap inframerah (gelombang panjang) yang dipancarkan bumi, bukan radiasi matahari gelombang pendek. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Gas rumah kaca yang berasal dari aktivitas peternakan dan sawah adalah...",
        options: ["CO₂", "CH₄", "N₂O", "CFC", "O₃"],
        answerIndex: 1,
        explanation:
          "Metana (CH₄) dihasilkan dari fermentasi anaerobik pada peternakan (sapi), sawah, dan TPA. CO₂ dari pembakaran fosil, N₂O dari pupuk, CFC dari AC/kulkas. Jawaban: B.",
      },
      {
        no: 3,
        question:
          "Berikut adalah dampak pemanasan global, KECUALI...",
        options: [
          "Es kutub mencair",
          "Permukaan laut naik",
          "Lapisan ozon menebal",
          "Cuaca ekstrem meningkat",
          "Terumbu karang memutih",
        ],
        answerIndex: 2,
        explanation:
          "Pemanasan global tidak menyebabkan lapisan ozon menebal. Justru CFC merusak ozon. Pengurasan ozon dan pemanasan global adalah masalah terpisah meskipun CFC berkontribusi pada keduanya. Jawaban: C.",
      },
      {
        no: 4,
        question:
          "Perjanjian internasional tentang perubahan iklim yang disepakati pada 2015 adalah...",
        options: [
          "Protokol Kyoto",
          "Perjanjian Paris",
          "Konvensi Wina",
          "Protokol Montreal",
          "Deklarasi Rio",
        ],
        answerIndex: 1,
        explanation:
          "Perjanjian Paris (2015) adalah kesepakatan iklim global untuk membatasi kenaikan suhu di bawah 2°C. Protokol Kyoto (1997) adalah pendahulunya. Protokol Montreal khusus untuk CFC/lapisan ozon. Jawaban: B.",
      },
      {
        no: 5,
        question:
          "Urutan proses terjadinya efek rumah kaca yang BENAR adalah...",
        options: [
          "Matahari memancarkan IR → gas menyerap → bumi panas",
          "Matahari radiasi gelombang pendek → bumi serap → bumi pancar IR → gas serap IR → panas terperangkap",
          "Gas rumah kaca memancarkan radiasi → bumi menyerap → suhu naik",
          "Bumi memantulkan sinar matahari → gas memerangkap → suhu naik",
          "Matahari memanaskan gas rumah kaca langsung → gas panaskan bumi",
        ],
        answerIndex: 1,
        explanation:
          "Urutan yang benar: (1) Matahari memancarkan radiasi gelombang pendek yang menembus atmosfer, (2) Bumi menyerap dan memancarkan kembali sebagai inframerah/gelombang panjang, (3) Gas rumah kaca menyerap inframerah dan memantulkannya kembali, (4) Panas terperangkap → suhu naik. Jawaban: B.",
      },
    ],
  },
  {
    slug: "gas-ideal",
    title: "Latihan Soal: Gas Ideal",
    category: "Termodinamika",
    description: "Hukum gas, persamaan gas ideal, teori kinetik",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Gas mula-mula memiliki tekanan 2 atm dan volume 3 L pada suhu tetap. Jika volume diperbesar menjadi 6 L, berapa tekanan akhirnya?",
        formulaLatex: "P_1 V_1 = P_2 V_2",
        options: ["0,5 atm", "1 atm", "2 atm", "4 atm", "6 atm"],
        answerIndex: 1,
        explanation:
          "Hukum Boyle (T tetap): $P_2 = P_1V_1/V_2 = 2 \\times 3/6 = 6/6 = 1$ atm. Jawaban: B. Volume naik 2× → tekanan turun 2×.",
      },
      {
        no: 2,
        question:
          "Gas dalam wadah 2 L memiliki tekanan 3 atm pada suhu 27°C. Jika suhu dinaikkan menjadi 127°C (volume tetap), berapa tekanan akhir?",
        formulaLatex: "\\frac{P_1}{T_1} = \\frac{P_2}{T_2}",
        options: ["3 atm", "4 atm", "5 atm", "6 atm", "12 atm"],
        answerIndex: 1,
        explanation:
          "Gay-Lussac (V tetap). SUHU DALAM KELVIN: $T_1 = 300$ K, $T_2 = 400$ K. $P_2 = P_1 T_2/T_1 = 3 \\times 400/300 = 4$ atm. Jawaban: B. Jebakan: jangan pakai Celcius!",
      },
      {
        no: 3,
        question:
          "Berapa jumlah mol gas dalam wadah 22,4 L pada suhu 273 K dan tekanan 1 atm? ($R = 0{,}082$ L·atm/mol·K)",
        formulaLatex: "n = \\frac{PV}{RT}",
        options: ["0,5 mol", "1 mol", "2 mol", "10 mol", "22,4 mol"],
        answerIndex: 1,
        explanation:
          "$n = PV/(RT) = (1 \\times 22{,}4)/(0{,}082 \\times 273) = 22{,}4/22{,}39 \\approx 1$ mol. Jawaban: B. Ini volume molar gas di STP.",
      },
      {
        no: 4,
        question:
          "Energi kinetik rata-rata molekul gas pada suhu 300 K adalah... ($k = 1{,}38 \\times 10^{-23}$ J/K)",
        formulaLatex: "\\overline{E_k} = \\frac{3}{2}kT",
        options: [
          "$2{,}07 \\times 10^{-21}$ J",
          "$4{,}14 \\times 10^{-21}$ J",
          "$6{,}21 \\times 10^{-21}$ J",
          "$1{,}38 \\times 10^{-23}$ J",
          "$4{,}14 \\times 10^{-23}$ J",
        ],
        answerIndex: 2,
        explanation:
          "$\\overline{E_k} = \\frac{3}{2}kT = \\frac{3}{2}(1{,}38 \\times 10^{-23})(300) = \\frac{3}{2}(4{,}14 \\times 10^{-21}) = 6{,}21 \\times 10^{-21}$ J. Jawaban: C. Tidak bergantung jenis gas!",
      },
      {
        no: 5,
        question:
          "Energi dalam 2 mol gas monoatomik pada suhu 300 K adalah... ($R = 8{,}314$ J/mol·K)",
        formulaLatex: "U = \\frac{3}{2}nRT",
        options: ["3,74 kJ", "7,48 kJ", "11,22 kJ", "15,0 kJ", "22,4 kJ"],
        answerIndex: 1,
        explanation:
          "Monoatomik: $U = \\frac{3}{2}nRT = \\frac{3}{2}(2)(8{,}314)(300) = 3 \\times 8{,}314 \\times 300 = 7482{,}6$ J ≈ 7,48 kJ. Jawaban: B.",
      },
    ],
  },
  {
    slug: "termodinamika",
    title: "Latihan Soal: Termodinamika",
    category: "Termodinamika",
    description: "Proses termodinamika, hukum I, mesin kalor, Carnot",
    difficulty: "Sulit",
    soalList: [
      {
        no: 1,
        question:
          "Gas monoatomik 2 mol mengalami proses isobarik pada tekanan 1 atm, volume berubah dari 2 L menjadi 4 L. Berapa usaha yang dilakukan gas? (1 atm·L = 101,3 J)",
        formulaLatex: "W = P\\Delta V",
        options: ["101,3 J", "202,6 J", "405,2 J", "810,4 J", "1013 J"],
        answerIndex: 1,
        explanation:
          "Isobarik: $W = P\\Delta V = 1 \\times (4-2) = 2$ atm·L = $2 \\times 101{,}3 = 202{,}6$ J. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Mesin Carnot bekerja antara reservoir panas 500 K dan reservoir dingin 300 K. Berapa efisiensi maksimumnya?",
        formulaLatex: "\\eta = 1 - \\frac{T_2}{T_1}",
        options: ["20%", "33%", "40%", "60%", "67%"],
        answerIndex: 2,
        explanation:
          "$\\eta = 1 - T_2/T_1 = 1 - 300/500 = 1 - 0{,}6 = 0{,}4 = 40\\%$. Jawaban: C. Tidak ada mesin yang bisa lebih efisien dari Carnot untuk selisih suhu ini.",
      },
      {
        no: 3,
        question:
          "Gas menyerap kalor 600 J dan melakukan usaha 200 J. Berapa perubahan energi dalam gas?",
        formulaLatex: "\\Delta U = Q - W",
        options: ["−400 J", "+200 J", "+400 J", "+600 J", "+800 J"],
        answerIndex: 2,
        explanation:
          "Hukum I: $\\Delta U = Q - W = 600 - 200 = 400$ J. Jawaban: C. $Q$ positif (terima kalor), $W$ positif (lakukan usaha), $\\Delta U$ positif (energi dalam naik).",
      },
      {
        no: 4,
        question:
          "Mesin menyerap kalor 1000 J dari reservoir panas dan membuang 600 J ke reservoir dingin. Berapa efisiensi mesin?",
        formulaLatex: "\\eta = 1 - \\frac{Q_2}{Q_1}",
        options: ["20%", "40%", "60%", "67%", "80%"],
        answerIndex: 1,
        explanation:
          "$\\eta = 1 - Q_2/Q_1 = 1 - 600/1000 = 1 - 0{,}6 = 0{,}4 = 40\\%$. Jawaban: B. Usaha yang dihasilkan $W = Q_1 - Q_2 = 400$ J.",
      },
      {
        no: 5,
        question:
          "Mesin pendingin Carnot bekerja antara suhu cold reservoir 270 K dan hot reservoir 300 K. Berapa COP-nya?",
        formulaLatex: "COP = \\frac{T_2}{T_1 - T_2}",
        options: ["3", "6", "9", "10", "30"],
        answerIndex: 2,
        explanation:
          "$COP = T_2/(T_1 - T_2) = 270/(300 - 270) = 270/30 = 9$. Jawaban: C. COP bisa > 1 (tidak seperti efisiensi mesin kalor).",
      },
    ],
  },
  {
    slug: "listrik-statis",
    title: "Latihan Soal: Listrik Statis",
    category: "Listrik",
    description: "Coulomb, medan listrik, potensial, dan energi potensial",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Dua muatan masing-masing $2\\,\\mu$C dan $8\\,\\mu$C terpisah sejauh 30 cm. Berapa gaya Coulomb antara keduanya? ($k = 9 \\times 10^9$)",
        formulaLatex: "F = k\\frac{q_1 q_2}{r^2}",
        options: ["0,16 N", "1,6 N", "16 N", "160 N", "1600 N"],
        answerIndex: 1,
        explanation:
          "$F = kq_1q_2/r^2 = 9\\times10^9 \\times 2\\times10^{-6} \\times 8\\times10^{-6}/(0{,}3)^2 = 9\\times10^9 \\times 16\\times10^{-12}/0{,}09 = 144\\times10^{-3}/0{,}09 = 1{,}6$ N. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Medan listrik pada jarak 0,3 m dari muatan titik $6\\,\\mu$C adalah... ($k = 9 \\times 10^9$)",
        formulaLatex: "E = k\\frac{Q}{r^2}",
        options: [
          "$2 \\times 10^5$ V/m",
          "$6 \\times 10^5$ V/m",
          "$1{,}8 \\times 10^5$ V/m",
          "$6 \\times 10^4$ V/m",
          "$2 \\times 10^4$ V/m",
        ],
        answerIndex: 1,
        explanation:
          "$E = kQ/r^2 = 9\\times10^9 \\times 6\\times10^{-6}/(0{,}3)^2 = 54\\times10^3/0{,}09 = 6\\times10^5$ V/m. Jawaban: B.",
      },
      {
        no: 3,
        question:
          "Dua muatan $+4\\,\\mu$C dan $+9\\,\\mu$C terpisah 12 cm. Pada jarak berapa dari muatan $+4\\,\\mu$C medan listrik totalnya nol?",
        formulaLatex: "E_1 = E_2 \\implies \\frac{kQ_1}{x^2} = \\frac{kQ_2}{(d-x)^2}",
        options: ["3 cm", "4,8 cm", "5,4 cm", "6 cm", "7,2 cm"],
        answerIndex: 1,
        explanation:
          "Titik $E=0$ berada di antara dua muatan sejenis. $kQ_1/x^2 = kQ_2/(d-x)^2 \\Rightarrow Q_1/x^2 = Q_2/(d-x)^2 \\Rightarrow 4/x^2 = 9/(12-x)^2 \\Rightarrow 2/x = 3/(12-x) \\Rightarrow 2(12-x) = 3x \\Rightarrow 24 = 5x \\Rightarrow x = 4{,}8$ cm. Jawaban: B.",
      },
      {
        no: 4,
        question:
          "Potensial listrik pada jarak 0,1 m dari muatan $5\\,\\mu$C adalah... ($k = 9 \\times 10^9$)",
        formulaLatex: "V = k\\frac{Q}{r}",
        options: [
          "$4{,}5 \\times 10^4$ V",
          "$9 \\times 10^4$ V",
          "$4{,}5 \\times 10^5$ V",
          "$9 \\times 10^5$ V",
          "$5 \\times 10^5$ V",
        ],
        answerIndex: 2,
        explanation:
          "$V = kQ/r = 9\\times10^9 \\times 5\\times10^{-6}/0{,}1 = 45\\times10^3/0{,}1 = 4{,}5 \\times 10^5$ V. Jawaban: C. Potensial adalah besaran skalar.",
      },
      {
        no: 5,
        question:
          "Elektron (massa $9 \\times 10^{-31}$ kg, muatan $-1{,}6 \\times 10^{-19}$ C) dipercepat melalui beda potensial 100 V. Berapa kecepatannya? (Gunakan $qV = \\frac{1}{2}mv^2$)",
        formulaLatex: "v = \\sqrt{\\frac{2qV}{m}}",
        options: [
          "$3{,}77 \\times 10^6$ m/s",
          "$5{,}96 \\times 10^6$ m/s",
          "$1{,}33 \\times 10^7$ m/s",
          "$1{,}89 \\times 10^7$ m/s",
          "$2{,}67 \\times 10^7$ m/s",
        ],
        answerIndex: 1,
        explanation:
          "$v = \\sqrt{2qV/m} = \\sqrt{2 \\times 1{,}6 \\times 10^{-19} \\times 100/(9 \\times 10^{-31})} = \\sqrt{320 \\times 10^{-19}/9 \\times 10^{-31}} = \\sqrt{3{,}56 \\times 10^{13}} \\approx 5{,}96 \\times 10^6$ m/s. Jawaban: B.",
      },
    ],
  },
  {
    slug: "rangkaian-dc",
    title: "Latihan Soal: Rangkaian Arus Searah",
    category: "Listrik",
    description:
      "Hukum Ohm, daya listrik, rangkaian seri dan paralel, jembatan Wheatstone, dan konstanta waktu RC",
    difficulty: "Sedang",
    soalList: [
      {
        no: 1,
        question:
          "Tiga hambatan $2\\ \\Omega$, $4\\ \\Omega$, dan $6\\ \\Omega$ disusun seri pada baterai $24\\ \\mathrm{V}$. Berapa arus listrik pada rangkaian tersebut?",
        formulaLatex: "R_{total} = R_1 + R_2 + R_3,\\quad I = \\frac{V}{R_{total}}",
        options: ["1 A", "2 A", "3 A", "4 A", "6 A"],
        answerIndex: 1,
        explanation:
          "Seri berarti hambatan dijumlahkan: $R_{total} = 2 + 4 + 6 = 12\\ \\Omega$. Arus $I = V/R_{total} = 24/12 = 2\\ \\mathrm{A}$. Jawaban: B.",
      },
      {
        no: 2,
        question:
          "Dua hambatan $6\\ \\Omega$ dan $3\\ \\Omega$ disusun paralel pada tegangan $12\\ \\mathrm{V}$. Berapa besar hambatan totalnya?",
        formulaLatex: "R_{total} = \\frac{R_1 R_2}{R_1 + R_2}",
        options: ["1 Ω", "2 Ω", "3 Ω", "4,5 Ω", "9 Ω"],
        answerIndex: 1,
        explanation:
          "Paralel: $R_{total} = (6 \\times 3)/(6 + 3) = 18/9 = 2\\ \\Omega$. Ingat, hambatan total paralel selalu lebih kecil dari tiap hambatan penyusunnya, sehingga $2\\ \\Omega$ masuk akal. Jawaban: B.",
      },
      {
        no: 3,
        question:
          "Sebuah lampu berlabel $60\\ \\mathrm{W}$ dipasang pada tegangan $220\\ \\mathrm{V}$. Berapa besar hambatan lampu tersebut?",
        formulaLatex: "P = \\frac{V^2}{R}",
        options: ["120 Ω", "400 Ω", "807 Ω", "13200 Ω", "3,67 Ω"],
        answerIndex: 2,
        explanation:
          "Daya expressed lewat tegangan: $R = V^2/P = 220^2/60 = 48400/60 \\approx 807\\ \\Omega$. Pemeriksaan: arus $I = P/V = 60/220 \\approx 0{,}27$ A, sesuai dengan lampu berdaya kecil pada tegangan listrikrumah. Jawaban: C.",
      },
      {
        no: 4,
        question:
          "Pada rangkaian seri, tiga hambatan $2\\ \\Omega$, $4\\ \\Omega$, dan $6\\ \\Omega$ dialiri arus $1\\ \\mathrm{A}$. Berapa tegangan pada hambatan $4\\ \\Omega$?",
        formulaLatex: "V = I R",
        options: ["2 V", "4 V", "6 V", "10 V", "12 V"],
        answerIndex: 1,
        explanation:
          "Hukum Ohm: $V_2 = I R_2 = (1)(4) = 4\\ \\mathrm{V}$. Pada seri arus sama di semua titik, jadi tegangan pada hambatan $6\\ \\Omega$ adalah $6$ V dan totalnya $2 + 4 + 6 = 12$ V. Jawaban: B.",
      },
      {
        no: 5,
        question:
          "Jembatan Wheatstone seimbang dengan $R_1 = 10\\ \\Omega$, $R_2 = 20\\ \\Omega$, dan $R_3 = 30\\ \\Omega$. Berapa nilai $R_4$?",
        formulaLatex: "\\frac{R_1}{R_2} = \\frac{R_3}{R_4}",
        options: ["10 Ω", "20 Ω", "30 Ω", "45 Ω", "60 Ω"],
        answerIndex: 4,
        explanation:
          "Syarat seimbang adalah $R_1/R_2 = R_3/R_4$, yaitu $10/20 = 30/R_4$. Maka $R_4 = (30 \\times 20)/10 = 60\\ \\Omega$. Cara cepatnya: $R_1:R_2 = 1:2$, jadi $R_3:R_4$ harus $1:2$ juga, sehingga $R_4 = 2 \\times 30 = 60\\ \\Omega$. Jawaban: E.",
      },
      {
        no: 6,
        question:
          "Dua hambatan $4\\ \\Omega$ dan $12\\ \\Omega$ disusun paralel pada tegangan $12\\ \\mathrm{V}$. Berapa besar arus total pada rangkaian tersebut?",
        formulaLatex: "I_{total} = I_1 + I_2",
        options: ["1 A", "2 A", "3 A", "4 A", "6 A"],
        answerIndex: 3,
        explanation:
          "Paralel berarti tegangan sama pada kedua cabang: $I_1 = 12/4 = 3\\ \\mathrm{A}$ dan $I_2 = 12/12 = 1\\ \\mathrm{A}$. Arus total $I = 3 + 1 = 4\\ \\mathrm{A}$. Cek lain: $R_{total} = (4 \\times 12)/(4 + 12) = 3\\ \\Omega$, sehingga $I = 12/3 = 4\\ \\mathrm{A}$. Jawaban: D.",
      },
      {
        no: 7,
        question:
          "Sebuah kapasitor $100\\ \\mu\\mathrm{F}$ disambung seri dengan hambatan $2\\ \\mathrm{k}\\Omega$. Berapa konstanta waktunya?",
        formulaLatex: "\\tau = R C",
        options: ["0,05 s", "0,2 s", "2 s", "20 s", "200 s"],
        answerIndex: 1,
        explanation:
          "Konstanta waktu $\\tau = R C = (2 \\times 10^3)(100 \\times 10^{-6}) = 0{,}2$ s. Cara cepatnya: $1\\ \\mathrm{k}\\Omega \\times 1\\ \\mu\\mathrm{F} = 10^{-3}$ s, sehingga $2000 \\times 100 \\times 10^{-6} = 0{,}2$ s. Jawaban: B.",
      },
    ],
  },
];
