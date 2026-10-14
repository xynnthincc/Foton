import { Materi } from "./types";

export const materiGelombang: Materi[] = [
  {
    slug: "momentum-impuls",
    no: 6,
    title: "Momentum dan Impuls",
    category: "Mekanika",
    summary: "Momentum, impuls, hukum kekekalan momentum, tumbukan beserta koefisien restitusi, dan aplikasinya.",
    blocks: [
      {
        type: "paragraph",
        text: "Momentum adalah besaran vektor yang menyatakan kuantitas gerak suatu benda. Impuls adalah perubahan momentum akibat gaya yang bekerja selama selang waktu tertentu. Keduanya merupakan konsep central dalam dinamika, terutama untuk sistem yang saling berinteraksi seperti tumbukan dan ledakan.",
      },
      {
        type: "definition",
        term: "Momentum linear ($\\vec p$)",
        definition: "Hasil kali massa dan kecepatan benda, $\\vec p = m\\vec v$, dengan arah sama dengan arah kecepatan.",
      },
      {
        type: "note",
        text: "Momentum selalu vektor. Pada soal satu dimensi, tentukan arah positif terlebih dahulu agar tanda kecepatan konsisten.",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Momentum",
      },
      {
        type: "paragraph",
        text: "Momentum bergantung pada dua faktor: massa dan kecepatan. Benda masif yang bergerak lambat dapat memiliki momentum besar, begitu juga benda ringan yang bergerak sangat cepat. Satuan momentum adalah kg m/s.",
      },
      {
        type: "formula",
        latex: "p = m v",
        description: "Momentum = massa $\\times$ kecepatan (besaran skalar pada gerak satu dimensi; vektor pada umumnya).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$p$", meaning: "momentum linear", unit: "kg m/s" },
          { symbol: "$m$", meaning: "massa benda", unit: "kg" },
          { symbol: "$v$", meaning: "kecepatan benda", unit: "m/s", note: "bernilai vektor, perhatikan tanda" },
        ],
      },
      {
        type: "paragraph",
        text: "Energi kinetik $E_k = \\tfrac12 m v^2$ juga bergantung pada $m$ dan $v$, tetapi momentum linear dalam kuasa satu velocity, sedangkan energi kuasa dua. Karena itu hubungan $p$ dan $E_k$ sering digunakan untuk menghubungkan kedua besaran.",
      },
      {
        type: "formula",
        latex: "E_k = \\frac{p^2}{2m}",
        description: "Energi kinetik dinyatakan dalam momentum.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$E_k$", meaning: "energi kinetik", unit: "J (kg m^2/s^2)" },
          { symbol: "$p$", meaning: "momentum linear", unit: "kg m/s" },
          { symbol: "$m$", meaning: "massa benda", unit: "kg" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Impuls",
      },
      {
        type: "paragraph",
        text: "Impuls didefinisikan sebagai gaya rata-rata yang bekerja pada benda dikali selang waktu kerjanya. Besarnya selalu sama dengan perubahan momentum (teorema impuls--momentum), tidak peduli bagaimana gaya bekerja (besar maupun lama).",
      },
      {
        type: "formula",
        latex: "I = F \\cdot \\Delta t = \\Delta p = m(v_2 - v_1)",
        description: "Impuls = perubahan momentum.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I$", meaning: "impuls", unit: "N s = kg m/s" },
          { symbol: "$F$", meaning: "gaya rata-rata yang bekerja", unit: "N" },
          { symbol: "$\\Delta t$", meaning: "selang waktu kerja gaya", unit: "s" },
          { symbol: "$\\Delta p$", meaning: "perubahan momentum", unit: "kg m/s" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan awal dan akhir", unit: "m/s" },
        ],
      },
      {
        type: "paragraph",
        text: "Pada grafik gaya $F$ terhadap waktu $t$, luas di bawah kurva sama dengan impuls. Jika gaya tidak konstan (misal gaya pegas, tabrakan), tetap berlaku $I = \\int F\\,dt = \\Delta p$.",
      },
      {
        type: "formula",
        latex: "F_{\\text{rata}} = \\frac{\\Delta p}{\\Delta t}",
        description: "Gaya rata-rata = perubahan momentum per selang waktu.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$F_{\\text{rata}}$", meaning: "gaya rata-rata", unit: "N" },
          { symbol: "$\\Delta p$", meaning: "perubahan momentum", unit: "kg m/s" },
          { symbol: "$\\Delta t$", meaning: "selang waktu interaksi", unit: "s" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Impuls masa tabrakan kecil → gaya besar: $F = \\Delta p/\\Delta t$. Maka pelan-pelan (memperbesar $\\Delta t$) meredam gaya (airbag, karpet, menekuk lutut)." },
          { text: "Impuls masa tabrakan cepat → gaya raksasa: palu, tumbukan." },
          { text: "Impuls positif menambah momentum; impuls negatif mengurangi." },
        ],
      },
      {
        type: "note",
        text: "Jangan bingung impuls (besaran) dengan momentum (keadaan). Impuls = usaha gaya terhadap waktu; besaran yang dipindahkan adalah momentum.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Hukum Kekekalan Momentum",
      },
      {
        type: "image",
        src: "/diagrams/momentum-tumbukan.svg",
        alt: "Tumbukan satu dimensi sebelum dan sesudah tumbukan",
        caption: "Panjang panah menyatakan besar momentum, sehingga momentum total tetap kekal pada tumbukan tanpa gaya luar.",
      },
      {
        type: "paragraph",
        text: "Jika gaya luar pada sistem total bernilai nol (sistem tertutup), total momentum sebelum dan sesudah interaksi adalah sama. Gaya internal (aksi-reaksi antar anggota sistem) saling meniadakan.",
      },
      {
        type: "formula",
        latex: "m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'",
        description: "Kekekalan momentum total pada sistem dua benda (satu dimensi).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$m_i$", meaning: "massa benda ke-$i$", unit: "kg" },
          { symbol: "$v_i$", meaning: "kecepatan benda ke-$i$ sebelum", unit: "m/s" },
          { symbol: "$v_i'$", meaning: "kecepatan benda ke-$i$ sesudah", unit: "m/s", note: "tanda menunjukkan arah" },
        ],
      },
      {
        type: "paragraph",
        text: "Dalam bentuk vektor, hukum ini berlaku di setiap sumbu secara independen. Untuk sistem banyak benda: $\\sum m_i \\vec v_i = \\text{konstan}$.",
      },
      {
        type: "formula",
        latex: "\\sum m_i \\vec v_i \\; (\\text{awal}) = \\sum m_i \\vec v_i \\; (\\text{akhir})",
        description: "Kekekalan momentum total (vektor, banyak benda).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\sum m_i \\vec v_i$", meaning: "total momentum sistem", unit: "kg m/s" },
          { symbol: "$i$", meaning: "indeks benda dalam sistem", unit: "tanpa satuan" },
        ],
      },
      {
        type: "note",
        text: "Gaya luar non-nol (gesekan, gravitasi eksternal yang tidak terimbangi) membuat momentum total tidak kekal. Namun pada waktu interaksi sangat singkat, gaya luar sering diabaikan.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Tumbukan dan Koefisien Restitusi",
      },
      {
        type: "paragraph",
        text: "Tumbukan adalah interaksi singkat antara dua benda (atau lebih) dengan gaya sangat besar. Momentum selalu kekal pada tumbukan (tanpa gaya luar), tetapi energi kinetik mungkin berkurang tergantung jenis tumbukan.",
      },
      {
        type: "table",
        headers: ["Jenis Tumbukan", "Nilai $e$", "Momentum", "Energi Kinetik"],
        rows: [
          ["Lenting sempurna", "$e = 1$", "kekal", "kekal"],
          ["Lenting sebagian", "$0 < e < 1$", "kekal", "tidak kekal (berkurang)"],
          ["Tidak lenting", "$e = 0$", "kekal", "tidak kekal (banyak berkurang)"],
        ],
      },
      {
        type: "paragraph",
        text: "Koefisien restitusi $e$ menyatakan seberapa 'lenting' tumbukan, didefinisikan sebagai perbandingan (negatif) kecepatan pemisahan terhadap kecepatan pendekatan.",
      },
      {
        type: "formula",
        latex: "e = -\\frac{v_2' - v_1'}{v_2 - v_1} = \\frac{\\text{kecepatan pemisahan}}{\\text{kecepatan pendekatan}}",
        description: "$0 \\le e \\le 1$; $e=1$ elastis sempurna, $e=0$ tidak lenting.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$e$", meaning: "koefisien restitusi", unit: "tanpa satuan (0--1)" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan benda 1 dan 2 sebelum", unit: "m/s" },
          { symbol: "$v_1', v_2'$", meaning: "kecepatan benda 1 dan 2 sesudah", unit: "m/s", note: "tanda menunjukkan arah" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Tumbukan Lenting Sempurna ($e = 1$)",
      },
      {
        type: "paragraph",
        text: "Baik momentum maupun energi kinetik kekal. Penyelesaian simultan memberikan kecepatan akhir yang sangat berguna.",
      },
      {
        type: "formula",
        latex: "v_1' = \\frac{m_1 - m_2}{m_1 + m_2} v_1 + \\frac{2 m_2}{m_1 + m_2} v_2",
        description: "Kecepatan akhir benda 1 (elastis).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_1'$", meaning: "kecepatan akhir benda 1", unit: "m/s" },
          { symbol: "$m_1, m_2$", meaning: "massa benda 1 dan 2", unit: "kg" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan awal", unit: "m/s" },
        ],
      },
      {
        type: "formula",
        latex: "v_2' = \\frac{2 m_1}{m_1 + m_2} v_1 + \\frac{m_2 - m_1}{m_1 + m_2} v_2",
        description: "Kecepatan akhir benda 2 (elastis).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_2'$", meaning: "kecepatan akhir benda 2", unit: "m/s" },
          { symbol: "$m_1, m_2$", meaning: "massa benda", unit: "kg" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan awal", unit: "m/s" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Kasus khusus: $m_1 = m_2$ elastis → kecepatan saling bertukar ($v_1' = v_2$, $v_2' = v_1$)." },
          { text: "Kasus khusus: $m_2$ sangat besar/diam → benda 1 pantul dengan kecepatan $-v_1$." },
          { text: "Kasus khusus: $m_1$ sangat besar → benda 2 terlempar dengan $2v_1$." },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Tumbukan Tidak Lenting Sempurna ($e = 0$)",
      },
      {
        type: "paragraph",
        text: "Setelah tumbukan kedua benda menyatu (bergerak bersama) dengan kecepatan bersama $v'$. Kehilangan energi kinetik maksimum.",
      },
      {
        type: "formula",
        latex: "v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}",
        description: "Kecepatan bersama setelah tumbukan tak lenting.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v'$", meaning: "kecepatan bersama setelah", unit: "m/s" },
          { symbol: "$m_1, m_2$", meaning: "massa", unit: "kg" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan awal", unit: "m/s" },
        ],
      },
      {
        type: "formula",
        latex: "\\Delta E_k = \\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(v_1 - v_2)^2 \\left(1 - e^2\\right)",
        description: "Kehilangan energi kinetik pada tumbukan (umum).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\Delta E_k$", meaning: "kehilangan energi kinetik", unit: "J" },
          { symbol: "$e$", meaning: "koefisien restitusi", unit: "tanpa satuan" },
          { symbol: "$m_1, m_2$", meaning: "massa", unit: "kg" },
          { symbol: "$v_1, v_2$", meaning: "kecepatan relatif awal", unit: "m/s" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Tumbukan Lenting Sebagian (umum)",
      },
      {
        type: "paragraph",
        text: "Kombinasikan persamaan momentum dan koefisien restitusi, lalu selesaikan sistem dua persamaan. Rumus final (standar) sering keluar soal.",
      },
      {
        type: "formula",
        latex: "v_1' = \\frac{(m_1 - e m_2) v_1 + (1+e) m_2 v_2}{m_1 + m_2}",
        description: "Kecepatan akhir benda 1 (lenting sebagian).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_1'$", meaning: "kecepatan akhir benda 1", unit: "m/s" },
          { symbol: "$e$", meaning: "koefisien restitusi", unit: "tanpa satuan" },
          { symbol: "$m_1, m_2$", meaning: "massa", unit: "kg" },
        ],
      },
      {
        type: "formula",
        latex: "v_2' = \\frac{(1+e) m_1 v_1 + (m_2 - e m_1) v_2}{m_1 + m_2}",
        description: "Kecepatan akhir benda 2 (lenting sebagian).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_2'$", meaning: "kecepatan akhir benda 2", unit: "m/s" },
          { symbol: "$e$", meaning: "koefisien restitusi", unit: "tanpa satuan" },
          { symbol: "$m_1, m_2$", meaning: "massa", unit: "kg" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Aplikasi Momentum dan Impuls",
      },
      {
        type: "list",
        items: [
          { text: "Bola jatuh-pantul: $e = \\sqrt{h'/h}$ dan ketinggian pantulan $h' = e^2 h$, dengan $h, h'$ tinggi jatuh dan pantul." },
          { text: "Ledakan/tembakan: momentum awal nol, sehingga $m_1 \\vec v_1 + m_2 \\vec v_2 = 0$ (berlawanan arah)." },
          { text: "Roket: dorongan berasal dari gas yang dikeluarkan ke belakang; roket ke depan (momentum kekal sistem roket+gas)." },
          { text: "Pendulum balistik: proyektil menabrak balok yang bergantung; momentum kekal saat tumbukan, energi kekal saat ayunan." },
          { text: "Keamanan: airbag memperpanjang $\\Delta t$ untuk mengurangi gaya pada penumpang pada perubahan momentum yang sama." },
        ],
      },
      {
        type: "definition",
        term: "Frasa kunci TKA",
        definition: "Momentum total selalu kekal pada tumbukan (tanpa gaya luar). Energi kinetik hanya kekal jika $e = 1$.",
      },
      {
        type: "note",
        text: "Tips TKA: soal tumbukan tidak lenting sering menanyakan kehilangan energi kinetik. Hitung $\\Delta E_k = E_k(\\text{awal}) - E_k(\\text{akhir})$ langsung, atau pakai rumus umum di atas.",
        variant: "tip",
      },
      {
        type: "example",
        title: "Tumbukan Tidak Lenting",
        blocks: [
          {
            type: "paragraph",
            text: "Bola $m_1 = 2$ kg dengan $v_1 = 6$ m/s menabrak bola $m_2 = 4$ kg yang diam. Tumbukan tidak lenting ($e = 0$). Berapa kecepatan setelah tumbukan?",
          },
          {
            type: "formula",
            latex: "v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\frac{2(6)+4(0)}{2+4} = \\frac{12}{6} = 2 \\text{ m/s}",
            description: "Kecepatan bersama.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$v'$", meaning: "kecepatan setelah", unit: "m/s" },
              { symbol: "$m_1,m_2$", meaning: "massa", unit: "kg" },
              { symbol: "$v_1,v_2$", meaning: "kecepatan awal", unit: "m/s" },
            ],
          },
          {
            type: "paragraph",
            text: "Energi kinetik sebelum = $\\tfrac12(2)(36)+0 = 36$ J. Energi sesudah = $\\tfrac12(6)(2^2) = 12$ J. Hilang = 24 J (kehilangan maksimum untuk parameter ini).",
          },
        ],
      },
      {
        type: "example",
        title: "Tumbukan Lenting Sempurna",
        blocks: [
          {
            type: "paragraph",
            text: "Bola $m_1 = 3$ kg bergerak $v_1 = 4$ m/s menabrak bola $m_2 = 1$ kg yang diam. Tumbukan elastis ($e=1$). Tentukan kecepatan akhir keduanya.",
          },
          {
            type: "formula",
            latex: "v_1' = \\frac{m_1 - m_2}{m_1+m_2} v_1 = \\frac{3-1}{3+1}(4) = 2 \\text{ m/s}",
            description: "Kecepatan akhir benda 1.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$v_1'$", meaning: "kecepatan akhir benda 1", unit: "m/s" },
              { symbol: "$m_1,m_2$", meaning: "massa", unit: "kg" },
              { symbol: "$v_1$", meaning: "kecepatan awal benda 1", unit: "m/s" },
            ],
          },
          {
            type: "formula",
            latex: "v_2' = \\frac{2 m_1}{m_1+m_2} v_1 = \\frac{2(3)}{4}(4) = 6 \\text{ m/s}",
            description: "Kecepatan akhir benda 2.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$v_2'$", meaning: "kecepatan akhir benda 2", unit: "m/s" },
              { symbol: "$m_1,m_2$", meaning: "massa", unit: "kg" },
              { symbol: "$v_1$", meaning: "kecepatan awal benda 1", unit: "m/s" },
            ],
          },
          { type: "paragraph", text: "Momentum awal = 12 kg m/s. Momentum akhir = 3(2)+1(6)=12 kg m/s. Energi awal = $\\tfrac12(3)(16)=24$ J. Energi akhir = $\\tfrac12(3)(4)+\\tfrac12(1)(36)=6+18=24$ J. Terbukti kekal." },
        ],
      },
      {
        type: "example",
        title: "Bola Jatuh-Pantul dan Koefisien Restitusi",
        blocks: [
          {
            type: "paragraph",
            text: "Sebuah bola dijatuhkan dari ketinggian $h = 80$ cm dan memantul setinggi $h' = 20$ cm. Hitung (a) koefisien restitusi, (b) kehilangan energi (dalam persen) tiap tumbukan.",
          },
          {
            type: "formula",
            latex: "e = \\sqrt{\\frac{h'}{h}} = \\sqrt{\\frac{20}{80}} = \\sqrt{0{,}25} = 0{,}5",
            description: "Koefisien restitusi dari ketinggian.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$e$", meaning: "koefisien restitusi", unit: "tanpa satuan" },
              { symbol: "$h$", meaning: "ketinggian jatuh", unit: "m (atau cm)" },
              { symbol: "$h'$", meaning: "ketinggian pantul", unit: "m (atau cm)" },
            ],
          },
          {
            type: "formula",
            latex: "\\frac{E_{\\text{hilang}}}{E_{\\text{awal}}} = 1 - e^2 = 1 - 0{,}25 = 0{,}75 = 75\\%",
            description: "Persen kehilangan energi.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$E_{\\text{hilang}}$", meaning: "energi yang hilang", unit: "J" },
              { symbol: "$E_{\\text{awal}}$", meaning: "energi awal", unit: "J" },
              { symbol: "$e$", meaning: "koefisien restitusi", unit: "tanpa satuan" },
            ],
          },
          { type: "paragraph", text: "Jadi 75% energi mekanik hilang pada tiap tumbukan (menjadi panas/bunyi), dan $e=0{,}5$." },
        ],
      },
      {
        type: "example",
        title: "Ledakan (Momentum Awal Nol)",
        blocks: [
          {
            type: "paragraph",
            text: "Sebuah meriam bermassa 300 kg menembakkan peluru 1,5 kg dengan kecepatan 200 m/s. Berapa kecepatan tolak (recoil) meriam? Abaikan gesekan.",
          },
          {
            type: "paragraph",
            text: "Momentum awal = 0, jadi momentum akhir juga nol.",
          },
          {
            type: "formula",
            latex: "m_{\\text{meriam}} v_{\\text{meriam}} + m_{\\text{peluru}} v_{\\text{peluru}} = 0",
            description: "Kekekalan momentum dengan momentum awal nol.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$m_{\\text{meriam}}$", meaning: "massa meriam", unit: "kg" },
              { symbol: "$v_{\\text{meriam}}$", meaning: "kecepatan tolak meriam", unit: "m/s" },
              { symbol: "$m_{\\text{peluru}}$", meaning: "massa peluru", unit: "kg" },
              { symbol: "$v_{\\text{peluru}}$", meaning: "kecepatan peluru", unit: "m/s" },
            ],
          },
          {
            type: "formula",
            latex: "v_{\\text{meriam}} = -\\frac{m_{\\text{peluru}} v_{\\text{peluru}}}{m_{\\text{meriam}}} = -\\frac{1{,}5 \\times 200}{300} = -1 \\text{ m/s}",
            description: "Kec. meriam = -1 m/s (arah berlawanan peluru).",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$v_{\\text{meriam}}$", meaning: "kecepatan meriam", unit: "m/s" },
              { symbol: "$m_{\\text{peluru}}, m_{\\text{meriam}}$", meaning: "massa", unit: "kg" },
              { symbol: "$v_{\\text{peluru}}$", meaning: "kecepatan peluru", unit: "m/s" },
            ],
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Tumbukan Dua Dimensi (Tambahan)",
      },
      {
        type: "paragraph",
        text: "Bila tumbukan tidak satu dimensi (misal bola bilyar), gunakan kekekalan momentum tiap sumbu secara independen. Energi tetap kekal jika $e=1$.",
      },
      {
        type: "formula",
        latex: "m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}'",
        description: "Kekekalan momentum pada sumbu $x$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$m_i$", meaning: "massa benda ke-$i$", unit: "kg" },
          { symbol: "$v_{ix}, v_{ix}'$", meaning: "komponen $x$ kecepatan awal/akhir", unit: "m/s" },
        ],
      },
      {
        type: "formula",
        latex: "m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}'",
        description: "Kekekalan momentum pada sumbu $y$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_{iy}, v_{iy}'$", meaning: "komponen $y$ kecepatan awal/akhir", unit: "m/s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Pendulum Balistik",
      },
      {
        type: "paragraph",
        text: "Peluru menabrak balok kayu yang tergantung dan menempel (tumbukan tak lenting). Dua tahap: (1) momentum kekal (tumbukan singkat), (2) energi kekal (ayunan).",
      },
      {
        type: "formula",
        latex: "m v_0 = (m+M) V",
        description: "Tahap 1: momentum kekal, $V$ kecepatan bersama setelah tumbukan.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$m$", meaning: "massa proyektil", unit: "kg" },
          { symbol: "$v_0$", meaning: "kecepatan awal proyektil", unit: "m/s" },
          { symbol: "$M$", meaning: "massa balok", unit: "kg" },
          { symbol: "$V$", meaning: "kecepatan bersama setelah", unit: "m/s" },
        ],
      },
      {
        type: "formula",
        latex: "h_{\\text{maks}} = \\frac{V^2}{2g}",
        description: "Tahap 2: kekekalan energi menghitung tinggi ayunan.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$h_{\\text{maks}}$", meaning: "ketinggian maksimum ayunan", unit: "m" },
          { symbol: "$V$", meaning: "kecepatan bersama setelah tumbukan", unit: "m/s" },
          { symbol: "$g$", meaning: "percepatan gravitasi (10)", unit: "m/s^2" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Roket dan Massa Berubah",
      },
      {
        type: "paragraph",
        text: "Roket merupakan sistem dengan massa berubah. Dorongan (thrust) terjadi karena gas dikeluarkan dengan kecepatan $u$ relatif roket. Momentum sistem (roket+gas) kekal.",
      },
      {
        type: "formula",
        latex: "M \\frac{dv}{dt} = -u \\frac{dM}{dt}",
        description: "Persamaan gerak roket (massa berkurang, $dM/dt$ negatif).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$M$", meaning: "massa roket saat itu", unit: "kg" },
          { symbol: "$dv/dt$", meaning: "percepatan roket", unit: "m/s^2" },
          { symbol: "$u$", meaning: "kecepatan gas buang relatif roket", unit: "m/s" },
          { symbol: "$dM/dt$", meaning: "laju perubahan massa roket (negatif)", unit: "kg/s" },
        ],
      },
      {
        type: "formula",
        latex: "v_f - v_i = u \\ln\\left(\\frac{M_i}{M_f}\\right)",
        description: "Tsiolkovsky: perubahan kecepatan roket (abaikan gravitasi dan gesekan).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_f, v_i$", meaning: "kecepatan akhir/awal", unit: "m/s" },
          { symbol: "$u$", meaning: "kecepatan gas buang", unit: "m/s" },
          { symbol: "$M_i, M_f$", meaning: "massa awal/akhir roket", unit: "kg" },
        ],
      },
      {
        type: "note",
        text: "Strategi TKA: (1) tentukan arah positif, (2) pilih rumus tumbukan sesuai $e$, (3) tulis persamaan momentum terlebih dahulu, (4) gabungkan dengan $e$ bila perlu, (5) cek dimensi dan tanda hasil.",
        variant: "tip",
      },
    ],
  },
  {
    slug: "dinamika-rotasi",
    no: 7,
    title: "Dinamika Rotasi",
    category: "Mekanika",
    summary: "Momen gaya, momen inersia, hukum Newton rotasi, energi dan momentum sudut, serta gerak menggelinding.",
    blocks: [
      {
        type: "paragraph",
        text: "Dinamika rotasi adalah analogi dinamika translasi untuk benda yang berputar. Konsep kuncinya adalah momen gaya (torsi) sebagai penyebab perubahan rotasi dan momen inersia sebagai ukuran kelembaman rotasi.",
      },
      {
        type: "definition",
        term: "Sudut (rad)",
        definition: "Ukuran rotasi berbasis panjang busur: $\\theta = s/r$. Satu putaran penuh = $2\\pi$ rad = 360 derajat.",
      },
      {
        type: "note",
        text: "Gunakan satuan radian pada semua rumus rotasi (bukan derajat), kecuali ditanya sudut dalam derajat.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Momen Gaya (Torsi)",
      },
      {
        type: "image",
        src: "/diagrams/dinamika-rotasi.svg",
        alt: "Roda berputar dengan kecepatan sudut, kecepatan linier tangensial, dan momen gaya",
        caption: "Kecepatan linier tegak lurus jari-jari, sedangkan momen gaya mempercepat putaran.",
      },
      {
        type: "paragraph",
        text: "Torsi adalah ukuran kemampuan gaya untuk memutar benda terhadap sumbu. Torsi bergantung pada besar gaya, jarak dari sumbu, dan sudut antara vektor posisi dan gaya. Torsi adalah besaran vektor (arah sumbu putar).",
      },
      {
        type: "formula",
        latex: "\\tau = r \\, F \\, \\sin\\theta",
        description: "Torsi = lengan gaya $\\times$ gaya; $\\theta$ sudut antara $\\vec r$ dan $\\vec F$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\tau$", meaning: "torsi (momen gaya)", unit: "N m" },
          { symbol: "$r$", meaning: "jarak titik gaya ke sumbu putar", unit: "m" },
          { symbol: "$F$", meaning: "besar gaya", unit: "N" },
          { symbol: "$\\theta$", meaning: "sudut antara $\\vec r$ dan $\\vec F$", unit: "rad atau derajat", note: "sin90=1 maksimum" },
        ],
      },
      {
        type: "paragraph",
        text: "Bentuk ekivalen: $\\tau = F \\, d_{\\perp}$, dengan $d_{\\perp}$ = lengan momen (jarak tegak lurus dari sumbu ke garis kerja gaya). Jika gaya sejajar $\\vec r$ atau melewati sumbu, torsinya nol.",
      },
      {
        type: "formula",
        latex: "\\tau = F \\, d_{\\perp}",
        description: "Torsi = gaya $\\times$ lengan momen (jarak tegak lurus).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\tau$", meaning: "torsi", unit: "N m" },
          { symbol: "$F$", meaning: "gaya yang bekerja", unit: "N" },
          { symbol: "$d_{\\perp}$", meaning: "lengan momen (jarak tegak lurus)", unit: "m" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Konvensi tanda: CCW (berlawanan arah jarum jam) biasanya positif, CW (searah jarum jam) negatif." },
          { text: "Kesetimbangan rotasi: $\\Sigma \\tau = 0$ (benda tidak berputar atau putar dengan $\\alpha=0$)." },
          { text: "Kopel: dua gaya sama besar berlawanan arah pada jarak $d$ memberikan torsi $\\tau = F d$ tanpa resultan gaya." },
        ],
      },
      {
        type: "note",
        text: "Bedakan momen gaya ($N m$) dengan usaha ($J = N m$). Satuannya sama secara dimensi tetapi makna fisika berbeda.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Momen Inersia",
      },
      {
        type: "paragraph",
        text: "Momen inersia adalah ukuran kesulitan memutar suatu benda. Bergantung pada distribusi massa terhadap sumbu putar, bukan hanya total massanya. Momen inersia selalu non-negatif.",
      },
      {
        type: "formula",
        latex: "I = \\sum_i m_i r_i^2",
        description: "Momen inersia = jumlah $m r^2$ semua elemen massa.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I$", meaning: "momen inersia", unit: "kg m^2" },
          { symbol: "$m_i$", meaning: "massa elemen ke-$i$", unit: "kg" },
          { symbol: "$r_i$", meaning: "jarak elemen ke-$i$ ke sumbu putar", unit: "m" },
        ],
      },
      {
        type: "table",
        headers: ["Benda", "Sumbu", "Momen Inersia"],
        rows: [
          ["Batang panjang $L$, massa $M$", "tengah (tegak lurus)", "$\\frac{1}{12} M L^2$"],
          ["Batang panjang $L$, massa $M$", "ujung", "$\\frac{1}{3} M L^2$"],
          ["Silinder pejal / cakram", "pusat (sumbu simetri)", "$\\frac{1}{2} M R^2$"],
          ["Silinder berongga / cincin", "pusat", "$M R^2$"],
          ["Bola pejal", "diameter", "$\\frac{2}{5} M R^2$"],
          ["Bola berongga", "diameter", "$\\frac{2}{3} M R^2$"],
          ["Keping tipis (piring)", "pusat (sumbu simetri)", "$\\frac{1}{2} M R^2$"],
          ["Titik massa $m$", "jarak $r$ dari sumbu", "$m r^2$"],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Teorema Sumbu Sejajar",
      },
      {
        type: "paragraph",
        text: "Momen inersia terhadap sumbu paralel sembarang dapat diperoleh dari momen inersia pusat massa ditambah $M d^2$.",
      },
      {
        type: "formula",
        latex: "I = I_{\\text{cm}} + M d^2",
        description: "$d$ = jarak sumbu paralel baru dari pusat massa.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I$", meaning: "momen inersia terhadap sumbu baru", unit: "kg m^2" },
          { symbol: "$I_{\\text{cm}}$", meaning: "momen inersia terhadap pusat massa", unit: "kg m^2" },
          { symbol: "$M$", meaning: "massa total", unit: "kg" },
          { symbol: "$d$", meaning: "jarak sumbu baru ke pusat massa", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Teorema Sumbu Tegak Lurus (Bidang Datar)",
      },
      {
        type: "paragraph",
        text: "Untuk benda pipih (lamina), momen inersia terhadap sumbu tegak lurus bidang sama dengan jumlah momen inersia terhadap dua sumbu di bidang yang tegak lurus dan berpotongan di titik yang sama.",
      },
      {
        type: "formula",
        latex: "I_z = I_x + I_y",
        description: "Teorema sumbu tegak lurus (perpendicular axis theorem).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I_z$", meaning: "momen inersia sumbu tegak lurus bidang", unit: "kg m^2" },
          { symbol: "$I_x, I_y$", meaning: "momen inersia sumbu-sumbu di bidang", unit: "kg m^2" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Hukum Newton Rotasi",
      },
      {
        type: "paragraph",
        text: "Analogi langsung Hukum Newton II translasi: torsi total sama dengan momen inersia dikali percepatan sudut. Jika $\\Sigma \\tau = 0$, maka $\\alpha = 0$ (rotasi konstan atau diam).",
      },
      {
        type: "formula",
        latex: "\\Sigma \\tau = I \\, \\alpha",
        description: "Hukum Newton II rotasi (analog $\\Sigma F = m a$).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\Sigma \\tau$", meaning: "torsi total", unit: "N m" },
          { symbol: "$I$", meaning: "momen inersia terhadap sumbu putar", unit: "kg m^2" },
          { symbol: "$\\alpha$", meaning: "percepatan sudut", unit: "rad/s^2" },
        ],
      },
      {
        type: "paragraph",
        text: "Kinematika rotasi berlaku serupa GLBB: $\\omega = \\omega_0 + \\alpha t$, $\\theta = \\omega_0 t + \\tfrac12 \\alpha t^2$, dan $\\omega^2 = \\omega_0^2 + 2 \\alpha \\theta$.",
      },
      {
        type: "heading",
        level: 2,
        text: "Energi dan Momentum Sudut",
      },
      {
        type: "paragraph",
        text: "Benda yang berputar memiliki energi kinetik rotasi. Daya untuk memutar benda: $P = \\tau \\omega$. Pada rotasi murni, kerja = torsi $\\times$ sudut putar.",
      },
      {
        type: "formula",
        latex: "E_{k,\\text{rot}} = \\frac{1}{2} I \\omega^2",
        description: "Energi kinetik rotasi (analog $\\tfrac12 m v^2$).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$E_{k,\\text{rot}}$", meaning: "energi kinetik rotasi", unit: "J" },
          { symbol: "$I$", meaning: "momen inersia", unit: "kg m^2" },
          { symbol: "$\\omega$", meaning: "kecepatan sudut", unit: "rad/s" },
        ],
      },
      {
        type: "formula",
        latex: "L = I \\omega",
        description: "Momentum sudut (analog $p = m v$).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$L$", meaning: "momentum sudut", unit: "kg m^2/s" },
          { symbol: "$I$", meaning: "momen inersia", unit: "kg m^2" },
          { symbol: "$\\omega$", meaning: "kecepatan sudut", unit: "rad/s" },
        ],
      },
      {
        type: "paragraph",
        text: "Momentum sudut kekal jika torsi total luar nol: $I_1 \\omega_1 = I_2 \\omega_2$. Ini menjelaskan penari es yang menarik tangan (mengurangi $I$ sehingga $\\omega$ naik) dan kucing yang memutar tubuh di udara.",
      },
      {
        type: "formula",
        latex: "I_1 \\omega_1 = I_2 \\omega_2 \\quad (\\text{jika } \\Sigma\\tau_{\\text{luar}}=0)",
        description: "Kekekalan momentum sudut.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I_1, I_2$", meaning: "momen inersia awal/akhir", unit: "kg m^2" },
          { symbol: "$\\omega_1, \\omega_2$", meaning: "kecepatan sudut awal/akhir", unit: "rad/s" },
          { symbol: "$\\Sigma\\tau_{\\text{luar}}$", meaning: "torsi luar total", unit: "N m" },
        ],
      },
      {
        type: "formula",
        latex: "\\tau = \\frac{dL}{dt}",
        description: "Torsi luar = laju perubahan momentum sudut.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\tau$", meaning: "torsi luar", unit: "N m" },
          { symbol: "$dL/dt$", meaning: "turunan momentum sudut terhadap waktu", unit: "kg m^2/s^2" },
          { symbol: "$L$", meaning: "momentum sudut", unit: "kg m^2/s" },
          { symbol: "$t$", meaning: "waktu", unit: "s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Benda Menggelinding",
      },
      {
        type: "paragraph",
        text: "Benda yang menggelinding (tanpa slip) memiliki energi kinetik translasi dan rotasi sekaligus. Syarat tidak slip: $v = \\omega R$ (pusat massa) dan $a = \\alpha R$.",
      },
      {
        type: "formula",
        latex: "E_k = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2, \\qquad v = \\omega R",
        description: "Energi kinetik benda menggelinding.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$E_k$", meaning: "energi kinetik total", unit: "J" },
          { symbol: "$m$", meaning: "massa", unit: "kg" },
          { symbol: "$v$", meaning: "kecepatan pusat massa", unit: "m/s" },
          { symbol: "$I$", meaning: "momen inersia", unit: "kg m^2" },
          { symbol: "$\\omega$", meaning: "kecepatan sudut", unit: "rad/s" },
          { symbol: "$R$", meaning: "jari-jari", unit: "m" },
        ],
      },
      {
        type: "paragraph",
        text: "Percepatan benda menggelinding di bidang miring (sudut $\\theta$) diperoleh dengan menggabungkan Hukum Newton translasi, rotasi, dan syarat tidak slip.",
      },
      {
        type: "formula",
        latex: "a = \\frac{g \\sin\\theta}{1 + \\frac{I}{m R^2}}",
        description: "Percepatan benda menggelinding di bidang miring kasar (tanpa slip).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$a$", meaning: "percepatan pusat massa", unit: "m/s^2" },
          { symbol: "$g$", meaning: "percepatan gravitasi (10 m/s^2)", unit: "m/s^2" },
          { symbol: "$\\theta$", meaning: "sudut bidang miring", unit: "rad/derajat" },
          { symbol: "$I$", meaning: "momen inersia", unit: "kg m^2" },
          { symbol: "$m$", meaning: "massa", unit: "kg" },
          { symbol: "$R$", meaning: "jari-jari", unit: "m" },
        ],
      },
      {
        type: "table",
        headers: ["Benda (menggelinding)", "$I/(mR^2)$", "$a$"],
        rows: [
          ["Silinder pejal", "$1/2$", "$\\frac{2}{3} g\\sin\\theta$"],
          ["Silinder berongga", "$1$", "$\\frac{1}{2} g\\sin\\theta$"],
          ["Bola pejal", "$2/5$", "$\\frac{5}{7} g\\sin\\theta$"],
          ["Bola berongga", "$2/3$", "$\\frac{3}{5} g\\sin\\theta$"],
        ],
      },
      {
        type: "note",
        text: "Urutan kecepatan benda menggelinding dari yang tercepat: bola pejal, silinder pejal, bola berongga, silinder berongga. Semakin kecil $I/(mR^2)$, semakin cepat (massa lebih terkonsentrasi ke pusat).",
        variant: "info",
      },
      {
        type: "paragraph",
        text: "Benda yang menggelinding (tanpa slip) pada bidang miring kasar (koefisien gesek memenuhi syarat) akan bergerak lebih lambat daripada benda yang meluncur tanpa rotasi (licin), karena sebagian energi menjadi energi rotasi.",
      },
      {
        type: "formula",
        latex: "m g h = \\frac{1}{2} m v^2 \\left(1 + \\frac{I}{mR^2}\\right)",
        description: "Kekekalan energi untuk menggelinding dari ketinggian $h$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$m$", meaning: "massa", unit: "kg" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$h$", meaning: "ketinggian awal", unit: "m" },
          { symbol: "$v$", meaning: "kecepatan akhir pusat massa", unit: "m/s" },
          { symbol: "$I$", meaning: "momen inersia", unit: "kg m^2" },
          { symbol: "$R$", meaning: "jari-jari", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Analogi Translasi – Rotasi",
      },
      {
        type: "table",
        headers: ["Translasi", "Rotasi"],
        rows: [
          ["$s$ (posisi)", "$\\theta$ (sudut)"],
          ["$v = ds/dt$ (kecepatan)", "$\\omega = d\\theta/dt$ (kec. sudut)"],
          ["$a = dv/dt$ (percepatan)", "$\\alpha = d\\omega/dt$ (perc. sudut)"],
          ["$m$ (massa)", "$I$ (momen inersia)"],
          ["$F = ma$ (gaya)", "$\\tau = I\\alpha$ (torsi)"],
          ["$p = mv$ (momentum)", "$L = I\\omega$ (momentum sudut)"],
          ["$E_k = \\tfrac12 m v^2$", "$E_k = \\tfrac12 I \\omega^2$"],
          ["$W = F s$", "$W = \\tau \\theta$"],
          ["$P = F v$", "$P = \\tau \\omega$"],
        ],
      },
      {
        type: "note",
        text: "Setiap besaran translasi memiliki pasangan rotasi. Ini membantu mengingat rumus: ganti $m \\to I$, $F \\to \\tau$, $v \\to \\omega$, $s \\to \\theta$.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 3,
        text: "Kesetimbangan Benda Tegar",
      },
      {
        type: "paragraph",
        text: "Untuk benda diam atau bergerak dengan kecepatan konstan (translasi dan rotasi), berlaku $\\Sigma F = 0$ dan $\\Sigma \\tau = 0$. Ini dipakai untuk mencari gaya reaksi pada tumpuan (jembatan, tangga bersandar).",
      },
      {
        type: "formula",
        latex: "\\Sigma F_x = 0, \\quad \\Sigma F_y = 0, \\quad \\Sigma \\tau = 0",
        description: "Syarat kesetimbangan benda tegar (statika).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\Sigma F_x, \\Sigma F_y$", meaning: "gaya total pada sumbu x dan y", unit: "N" },
          { symbol: "$\\Sigma \\tau$", meaning: "torsi total terhadap titik putar", unit: "N m" },
        ],
      },
      {
        type: "example",
        title: "Penari Es (Kekkalan Momentum Sudut)",
        blocks: [
          {
            type: "paragraph",
            text: "Penari berputar dengan tangan terentang memiliki $I_1 = 4$ kg m^2 dan $\\omega_1 = 3$ rad/s. Saat tangan ditarik, $I_2 = 1$ kg m^2. Berapa $\\omega_2$?",
          },
          {
            type: "formula",
            latex: "I_1 \\omega_1 = I_2 \\omega_2",
            description: "Kekekalan momentum sudut.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$I_1,I_2$", meaning: "momen inersia awal/akhir", unit: "kg m^2" },
              { symbol: "$\\omega_1,\\omega_2$", meaning: "kecepatan sudut awal/akhir", unit: "rad/s" },
            ],
          },
          {
            type: "formula",
            latex: "4 \\times 3 = 1 \\times \\omega_2 \\implies \\omega_2 = 12 \\text{ rad/s}",
            description: "Hasil.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$\\omega_2$", meaning: "kecepatan sudut akhir", unit: "rad/s" },
            ],
          },
          { type: "paragraph", text: "Kecepatan putar naik 4 kali karena momen inersia turun 4 kali (energi kinetik rotasi juga naik, berasal dari usaha penari menarik tangan)." },
        ],
      },
      {
        type: "example",
        title: "Bola Menggelinding di Bidang Miring",
        blocks: [
          {
            type: "paragraph",
            text: "Bola pejal bermassa 2 kg, jari-jari 0,1 m, dilepas dari puncak bidang miring sudut 30 derajat, panjang 7 m (tinggi h = 3,5 m). Hitung (a) percepatan, (b) kecepatan di dasar. ($g=10$ m/s^2)",
          },
          {
            type: "formula",
            latex: "a = \\frac{5}{7} g \\sin\\theta = \\frac{5}{7}(10)(0{,}5) = \\frac{25}{7} \\approx 3{,}57 \\text{ m/s}^2",
            description: "Percepatan bola pejal menggelinding.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$a$", meaning: "percepatan", unit: "m/s^2" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$\\theta$", meaning: "sudut bidang miring", unit: "derajat/rad" },
            ],
          },
          {
            type: "formula",
            latex: "v = \\sqrt{\\frac{10}{7} g h} = \\sqrt{\\frac{10}{7}(10)(3{,}5)} = \\sqrt{50} \\approx 7{,}07 \\text{ m/s}",
            description: "Kecepatan akhir di dasar via energi.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$v$", meaning: "kecepatan akhir", unit: "m/s" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$h$", meaning: "ketinggian", unit: "m" },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Torque dari Kunci Inggris",
        blocks: [
          {
            type: "paragraph",
            text: "Seorang mekanik mengerjakan baut dengan kunci sepanjang 0,25 m, menarik gaya 40 N secara tegak lurus. Berapa torsi yang diberikan? Jika pusat massa kunci? (abaikan massa kunci)",
          },
          {
            type: "formula",
            latex: "\\tau = r F \\sin 90^\\circ = 0{,}25 \\times 40 \\times 1 = 10 \\text{ N m}",
            description: "Torsi maksimum (gaya tegak lurus).",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$\\tau$", meaning: "torsi", unit: "N m" },
              { symbol: "$r$", meaning: "panjang kunci", unit: "m" },
              { symbol: "$F$", meaning: "gaya tarik", unit: "N" },
            ],
          },
          { type: "paragraph", text: "Jika gaya diberikan pada sudut 30 derajat, torsinya = 10 * sin30 = 5 N m. Mekanik memerlukan dua kali gaya untuk torsi sama." },
        ],
      },
      {
        type: "definition",
        term: "Syarat tidak slip",
        definition: "Benda menggelinding tanpa slip bila titik kontak dengan permukaan sesaat diam, yaitu $v_{\\text{pusat}} = \\omega R$ dan $a = \\alpha R$.",
      },
      {
        type: "heading",
        level: 2,
        text: "Tenaga Rotasi pada Katrol (Atwood Rotasi)",
      },
      {
        type: "paragraph",
        text: "Massa tergantung pada kedua ujung tali yang melilit katrol (massa $M$, jari-jari $R$, momen inersia $I=\\tfrac12 M R^2$ untuk silinder pejal). Gabungkan $\\Sigma F=ma$ dan $\\Sigma\\tau=I\\alpha$ dengan syarat $a=\\alpha R$.",
      },
      {
        type: "formula",
        latex: "a = \\frac{(m_2 - m_1)g}{m_1 + m_2 + I/R^2}",
        description: "Percepatan sistem Atwood dengan katrol bermassa.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$a$", meaning: "percepatan sistem", unit: "m/s^2" },
          { symbol: "$m_1,m_2$", meaning: "massa beban", unit: "kg" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$I$", meaning: "momen inersia katrol", unit: "kg m^2" },
          { symbol: "$R$", meaning: "jari-jari katrol", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Precesi dan Giroskop (Tambahan)",
      },
      {
        type: "paragraph",
        text: "Pada benda yang berputar dengan momentum sudut $L$, torsi luar yang tegak lurus menyebabkan precesi (perubahan arah sumbu putar) dengan laju sudut precesi.",
      },
      {
        type: "formula",
        latex: "\\Omega = \\frac{\\tau}{L \\sin\\theta} = \\frac{\\tau}{I\\omega\\sin\\theta}",
        description: "Laju precesi akibat torsi luar (gyroskop).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\Omega$", meaning: "laju precesi", unit: "rad/s" },
          { symbol: "$\\tau$", meaning: "torsi luar", unit: "N m" },
          { symbol: "$L$", meaning: "momentum sudut", unit: "kg m^2/s" },
          { symbol: "$\\theta$", meaning: "sudut antara sumbu putar dan vertikal", unit: "rad" },
          { symbol: "$I,\\omega$", meaning: "momen inersia dan kecepatan sudut", unit: "kg m^2, rad/s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Penerapan: Benda Komposit (Mom. Inersia)",
      },
      {
        type: "paragraph",
        text: "Mom. inersia benda komposit = jumlah mom. inersia komponen terhadap sumbu yang sama (gunakan sumbu sejajar bila perlu).",
      },
      {
        type: "formula",
        latex: "I_{\\text{total}} = \\sum I_i + \\sum M_i d_i^2",
        description: "Penjumlahan kontribusi komponen via sumbu sejajar.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I_{\\text{total}}$", meaning: "momen inersia total", unit: "kg m^2" },
          { symbol: "$I_i$", meaning: "momen inersia komponen i", unit: "kg m^2" },
          { symbol: "$M_i$", meaning: "massa komponen i", unit: "kg" },
          { symbol: "$d_i$", meaning: "jarak pusat komponen i ke sumbu putar", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Kerja Rotasi dan Daya",
      },
      {
        type: "formula",
        latex: "W = \\tau \\, \\theta, \\qquad P = \\tau \\, \\omega",
        description: "Kerja torsi dan daya mekanis rotasi.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$W$", meaning: "kerja", unit: "J (N m)" },
          { symbol: "$\\tau$", meaning: "torsi konstan", unit: "N m" },
          { symbol: "$\\theta$", meaning: "sudut putar", unit: "rad" },
          { symbol: "$P$", meaning: "daya", unit: "W" },
          { symbol: "$\\omega$", meaning: "kecepatan sudut", unit: "rad/s" },
        ],
      },
      {
        type: "note",
        text: "Pada permukaan licin (tanpa gesekan), benda tidak berputar meski meluncur. Gesekan statislah (bukan kinetis) yang menyebabkan rotasi menggelinding.",
        variant: "info",
      },
    ],
  },
  {
    slug: "fluida",
    no: 8,
    title: "Fluida Statis dan Dinamis",
    category: "Mekanika",
    summary: "Tekanan, hidrostatis, hukum Pascal, Archimedes, kontinuitas, Bernoulli, dan aplikasinya.",
    blocks: [
      {
        type: "paragraph",
        text: "Fluida adalah zat yang dapat mengalir, meliputi cairan dan gas. Fluida statis mempelajari fluida dalam keadaan diam; fluida dinamis mempelajari fluida yang bergerak. Tekanan dan kekekalan massa/energi menjadi konsep utama.",
      },
      {
        type: "definition",
        term: "Fluida ideal",
        definition: "Fluida tidak kental (viskositas nol), tidak termampatkan (incompressible), aliran tunak (laminar, steady), dan tanpa turbulensi.",
      },
      {
        type: "note",
        text: "Pada TKA, gravitasi diambil $g = 10$ m/s^2 dan tekanan atmosfer $P_0 \\approx 10^5$ Pa (1 atm), kecuali soal menyebut lain.",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Fluida Statis",
      },
      {
        type: "paragraph",
        text: "Tekanan adalah gaya per satuan luas yang bekerja tegak lurus permukaan. Tekanan bersifat skalar namun gaya akibatnya vektor (arah ke dalam permukaan).",
      },
      {
        type: "formula",
        latex: "P = \\frac{F}{A}",
        description: "Tekanan = gaya per luas (Pa = N/m^2).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$P$", meaning: "tekanan", unit: "Pa = N/m^2" },
          { symbol: "$F$", meaning: "gaya yang bekerja tegak lurus", unit: "N" },
          { symbol: "$A$", meaning: "luas permukaan", unit: "m^2" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Tekanan Hidrostatis",
      },
      {
        type: "image",
        src: "/diagrams/fluida-bejana.svg",
        alt: "Tekanan hidrostatis pada kedalaman h dan mekanisme dongkar hidrolik",
        caption: "Tekanan bertambah seiring kedalaman, dan tekanan yang sama diteruskan ke seluruh permukaan fluida.",
      },
      {
        type: "paragraph",
        text: "Pada fluida diam, tekanan bertambah dengan kedalaman akibat berat fluida di atasnya. Tekanan hidrostatis tidak bergantung pada bentuk wadah, hanya pada kedalaman vertikal (paradoks hidrostatis).",
      },
      {
        type: "formula",
        latex: "P_h = \\rho \\, g \\, h",
        description: "Tekanan hidrostatis pada kedalaman $h$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$P_h$", meaning: "tekanan hidrostatis", unit: "Pa" },
          { symbol: "$\\rho$", meaning: "massa jenis fluida", unit: "kg/m^3" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$h$", meaning: "kedalaman vertikal dari permukaan", unit: "m" },
        ],
      },
      {
        type: "formula",
        latex: "P_{\\text{mutlak}} = P_0 + \\rho g h",
        description: "Tekanan mutlak = tekanan atmosfer + tekanan hidrostatis.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$P_{\\text{mutlak}}$", meaning: "tekanan absolut", unit: "Pa" },
          { symbol: "$P_0$", meaning: "tekanan atmosfer ($\\approx 10^5$ Pa)", unit: "Pa" },
          { symbol: "$\\rho$", meaning: "massa jenis", unit: "kg/m^3" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$h$", meaning: "kedalaman", unit: "m" },
        ],
      },
      {
        type: "paragraph",
        text: "Tekanan gauge (terukur) = $P_{\\text{mutlak}} - P_0$. Manometer dan barometer mengukur perbedaan tekanan relatif atmosfer.",
      },
      {
        type: "heading",
        level: 3,
        text: "Hukum Pascal",
      },
      {
        type: "paragraph",
        text: "Pada fluida tertutup tak termampatkan, tekanan yang dikenakan diteruskan sama besar ke segala arah (ke semua bagian fluida). Ini dasar dongkrak hidrolik dan rem hidrolik.",
      },
      {
        type: "formula",
        latex: "\\frac{F_1}{A_1} = \\frac{F_2}{A_2}",
        description: "Tekanan sama di dua piston; $F_2/F_1 = A_2/A_1$ (pengali gaya).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$F_1,F_2$", meaning: "gaya pada piston 1 dan 2", unit: "N" },
          { symbol: "$A_1,A_2$", meaning: "luas penampang piston 1 dan 2", unit: "m^2" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Bejana Berhubungan",
      },
      {
        type: "paragraph",
        text: "Pada bejana berhubungan berisi fluida (homogen atau heterogen), tekanan di dasar sama. Untuk dua fluida tidak bercampur: ketinggian berbanding terbalik dengan massa jenis.",
      },
      {
        type: "formula",
        latex: "\\rho_1 h_1 = \\rho_2 h_2",
        description: "Ketinggian berbanding terbalik dengan massa jenis (bejana berhubungan).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\rho_1,\\rho_2$", meaning: "massa jenis fluida 1 dan 2", unit: "kg/m^3" },
          { symbol: "$h_1,h_2$", meaning: "ketinggian kolom fluida 1 dan 2", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Hukum Archimedes",
      },
      {
        type: "paragraph",
        text: "Benda yang tercelup (sebagian atau seluruhnya) dalam fluida mengalami gaya angkat ke atas (buoyancy) sama dengan berat fluida yang dipindahkan. Ini adalah konsekuensi perbedaan tekanan hidrostatis.",
      },
      {
        type: "formula",
        latex: "F_A = \\rho_{\\text{fluida}} \\, g \\, V_{\\text{tercelup}}",
        description: "Gaya angkat ke atas = berat fluida yang dipindahkan.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$F_A$", meaning: "gaya angkat ke atas (buoyant force)", unit: "N" },
          { symbol: "$\\rho_{\\text{fluida}}$", meaning: "massa jenis fluida", unit: "kg/m^3" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$V_{\\text{tercelup}}$", meaning: "volume benda yang tercelup", unit: "m^3" },
        ],
      },
      {
        type: "table",
        headers: ["Kondisi", "Hubungan Massa Jenis", "Gaya / Posisi"],
        rows: [
          ["Terapung", "$\\rho_b < \\rho_f$", "$F_A = w$ (sebagian tercelup)"],
          ["Melayang", "$\\rho_b = \\rho_f$", "$F_A = w$ (seluruhnya tercelup, diam di tengah)"],
          ["Tenggelam", "$\\rho_b > \\rho_f$", "$F_A < w$ (berakselerasi ke dasar)"],
        ],
      },
      {
        type: "list",
        items: [
          { text: "Berat semu (benda dalam fluida): $w' = w - F_A$." },
          { text: "Fraksi tercelup (benda terapung): $V_{\\text{celup}}/V_{\\text{total}} = \\rho_b/\\rho_f$." },
          { text: "Benda yang mengapung memiliki volume celup = $(\\rho_b/\\rho_f)V_{\\text{total}}$." },
          { text: "Massa jenis relatif: $SG = \\rho_b/\\rho_{\\text{air}}$ (tanpa satuan)." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Fluida Dinamis",
      },
      {
        type: "paragraph",
        text: "Fluida ideal yang mengalir tanpa kekentalan dan tanpa turbulensi. Dua persamaan utama: kontinuitas (kekekalan massa) dan Bernoulli (kekekalan energi).",
      },
      {
        type: "heading",
        level: 3,
        text: "Persamaan Kontinuitas",
      },
      {
        type: "image",
        src: "/diagrams/fluida-pipa.svg",
        alt: "Aliran fluida melalui pipa yang menyempit beserta perubahan kecepatan dan tekanan",
        caption: "Di bagian yang menyempit aliran lebih cepat dan tekanannya lebih kecil, sesuai asas Bernoulli.",
      },
      {
        type: "paragraph",
        text: "Debit aliran (volume per satuan waktu) konstan sepanjang pipa. Pipa menyempit menyebabkan aliran mempercepat, dan sebaliknya.",
      },
      {
        type: "formula",
        latex: "Q = A_1 v_1 = A_2 v_2 = \\frac{dV}{dt}",
        description: "Debit konstan sepanjang pipa.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$Q$", meaning: "debit (laju volume)", unit: "m^3/s" },
          { symbol: "$A_1,A_2$", meaning: "luas penampang 1 dan 2", unit: "m^2" },
          { symbol: "$v_1,v_2$", meaning: "kecepatan aliran di 1 dan 2", unit: "m/s" },
          { symbol: "$V,t$", meaning: "volume fluida dan waktu", unit: "m^3, s" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Persamaan Bernoulli",
      },
      {
        type: "paragraph",
        text: "Kekekalan energi mekanik untuk fluida yang mengalir sepanjang garis arus. Semakin cepat aliran, semakin rendah tekanannya (selama ketinggian sama).",
      },
      {
        type: "formula",
        latex: "P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}",
        description: "Bernoulli: tekanan + energi kinetik per volume + energi potensial per volume konstan.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$P$", meaning: "tekanan fluida", unit: "Pa" },
          { symbol: "$\\rho$", meaning: "massa jenis fluida", unit: "kg/m^3" },
          { symbol: "$v$", meaning: "kecepatan aliran", unit: "m/s" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$h$", meaning: "ketinggian dari acuan", unit: "m" },
        ],
      },
      {
        type: "paragraph",
        text: "Antara dua titik sepanjang garis arus: $P_1 + \\tfrac12 \\rho v_1^2 + \\rho g h_1 = P_2 + \\tfrac12 \\rho v_2^2 + \\rho g h_2$.",
      },
      {
        type: "heading",
        level: 3,
        text: "Aplikasi Bernoulli",
      },
      {
        type: "list",
        items: [
          { text: "Torricelli (bocoran tangki): $v = \\sqrt{2 g h}$, di mana $h$ kedalaman permukaan ke lobang; jangkauan horizontal $x = 2\\sqrt{h(H-h)}$ dengan $H$ tinggi total tangki." },
          { text: "Venturimeter: mengukur kecepatan aliran lewat perbedaan tekanan pada bagian sempit." },
          { text: "Tabung Pitot: mengukur kecepatan aliran fluida (kapal terbang) dari perbedaan tekanan stagnasi dan statis." },
          { text: "Gaya angkat sayap pesawat: udara di atas sayap lebih cepat → tekanan lebih rendah → ada gaya angkat." },
          { text: "Penyemprot, filter (karburator): tekanan rendah di celah sempit menyedot cairan." },
          { text: "Atwood? Tidak terkait." },
        ],
      },
      {
        type: "note",
        text: "Hindari salah tandai: pada Bernoulli, titik dengan aliran lebih cepat selalu bertekanan lebih rendah (untuk ketinggian sama). Ini sering ditanyakan soal 'sayap pesawat'.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Viskositas (Lebih Lanjut)",
      },
      {
        type: "paragraph",
        text: "Fluida nyata memiliki kekentalan (viskositas) yang menyebabkan gaya gesek internal. Aliran bisa laminar atau turbulen ditentukan bilangan Reynolds ($Re = \\rho v D/\\eta$).",
      },
      {
        type: "formula",
        latex: "F_{\\eta} = \\eta \\, A \\, \\frac{dv}{dy}",
        description: "Gaya viskos (Hukum Newton viskositas) untuk aliran laminar.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$F_{\\eta}$", meaning: "gaya viskos", unit: "N" },
          { symbol: "$\\eta$", meaning: "koefisien viskositas dinamis", unit: "Pa s" },
          { symbol: "$A$", meaning: "luas area", unit: "m^2" },
          { symbol: "$dv/dy$", meaning: "gradien kecepatan", unit: "1/s" },
        ],
      },
      {
        type: "formula",
        latex: "R_e = \\frac{\\rho v D}{\\eta}",
        description: "Bilangan Reynolds; $Re < \\sim 2000$ laminar, $Re > \\sim 4000$ turbulen.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$R_e$", meaning: "bilangan Reynolds", unit: "tanpa satuan" },
          { symbol: "$\\rho$", meaning: "massa jenis fluida", unit: "kg/m^3" },
          { symbol: "$v$", meaning: "kecepatan aliran rata-rata", unit: "m/s" },
          { symbol: "$D$", meaning: "diameter pipa", unit: "m" },
          { symbol: "$\\eta$", meaning: "viskositas dinamis", unit: "Pa s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Hukum Poiseuille (debit pipa dengan viskositas)",
      },
      {
        type: "paragraph",
        text: "Untuk aliran laminar dalam pipa silindris, debit bergantung pada pangkat empat radius dan gradien tekanan. Ini menjelaskan mengapa pembuluh darah sedikit menyempit berdampak besar.",
      },
      {
        type: "formula",
        latex: "Q = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}",
        description: "Hukum Poiseuille untuk aliran laminar.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$Q$", meaning: "debit", unit: "m^3/s" },
          { symbol: "$R$", meaning: "radius pipa", unit: "m" },
          { symbol: "$\\Delta P$", meaning: "perbedaan tekanan", unit: "Pa" },
          { symbol: "$\\eta$", meaning: "viskositas", unit: "Pa s" },
          { symbol: "$L$", meaning: "panjang pipa", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Tegangan Permukaan dan Kapilaritas (Tambahan)",
      },
      {
        type: "paragraph",
        text: "Fluida memiliki tegangan permukaan akibat gaya kohesi antar molekul. Kapilaritas (naik/turun cairan dalam pipa sempit) bergantung pada wetting.",
      },
      {
        type: "formula",
        latex: "h = \\frac{2 \\gamma \\cos\\theta}{\\rho g r}",
        description: "Ketinggian kapiler (tanda $\\cos\\theta$ menentukan naik/turun).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$h$", meaning: "ketinggian kapiler", unit: "m" },
          { symbol: "$\\gamma$", meaning: "tegangan permukaan", unit: "N/m" },
          { symbol: "$\\theta$", meaning: "sudut kontak", unit: "rad" },
          { symbol: "$\\rho$", meaning: "massa jenis", unit: "kg/m^3" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$r$", meaning: "radius pipa", unit: "m" },
        ],
      },
      {
        type: "example",
        title: "Gaya Archimedes dan Fraksi Tercelup",
        blocks: [
          {
            type: "paragraph",
            text: "Balok bermassa 200 g ($\\rho_b = 0{,}8$ g/cm^3) dimasukkan ke air ($\\rho = 1$ g/cm^3). Berapa persen volume yang tercelup?",
          },
          {
            type: "paragraph",
            text: "Karena $\\rho_b < \\rho_f$, balok terapung.",
          },
          {
            type: "formula",
            latex: "\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_b}{\\rho_f} = \\frac{0{,}8}{1} = 0{,}8",
            description: "Fraksi tercelup.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$V_{\\text{celup}}$", meaning: "volume tercelup", unit: "cm^3 / m^3" },
              { symbol: "$V_{\\text{total}}$", meaning: "volume total benda", unit: "cm^3 / m^3" },
              { symbol: "$\\rho_b$", meaning: "massa jenis benda", unit: "g/cm^3 / kg/m^3" },
              { symbol: "$\\rho_f$", meaning: "massa jenis fluida", unit: "g/cm^3 / kg/m^3" },
            ],
          },
          { type: "paragraph", text: "Jadi 80% volume balok tercelup dalam air." },
        ],
      },
      {
        type: "example",
        title: "Dongkrak Hidrolik",
        blocks: [
          {
            type: "paragraph",
            text: "Dongkrak hidrolik memiliki piston kecil luas 2 cm^2 dan piston besar luas 200 cm^2. Jika gaya masukan 50 N, berapa gaya keluaran (abaikan berat piston)?",
          },
          {
            type: "formula",
            latex: "F_2 = F_1 \\frac{A_2}{A_1} = 50 \\times \\frac{200}{2} = 5000 \\text{ N}",
            description: "Gaya keluaran.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$F_2$", meaning: "gaya keluaran", unit: "N" },
              { symbol: "$F_1$", meaning: "gaya masukan", unit: "N" },
              { symbol: "$A_2,A_1$", meaning: "luas piston besar/kecil", unit: "cm^2 / m^2" },
            ],
          },
          { type: "paragraph", text: "Jadi dongkrak memperbesar gaya 100 kali, tetapi jarak yang ditempuh piston kecil 100 kali lebih panjang (kekekalan energi/kerja)." },
        ],
      },
      {
        type: "example",
        title: "Torricelli: Kebocoran Tangki",
        blocks: [
          {
            type: "paragraph",
            text: "Tangki air tinggi $H = 1{,}25$ m memiliki lobang kecil pada ketinggian $h = 0{,}45$ m dari dasar. Hitung kecepatan air keluar dan jangkauan horizontal.",
          },
          {
            type: "formula",
            latex: "v = \\sqrt{2 g (H-h)} = \\sqrt{2(10)(1{,}25-0{,}45)} = \\sqrt{16} = 4 \\text{ m/s}",
            description: "Kecepatan eflluks (Torricelli).",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$v$", meaning: "kecepatan keluar air", unit: "m/s" },
              { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
              { symbol: "$H-h$", meaning: "kedalaman permukaan ke lobang", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "x = 2\\sqrt{h(H-h)} = 2\\sqrt{0{,}45 \\times 0{,}80} = 2\\sqrt{0{,}36} = 1{,}2 \\text{ m}",
            description: "Jangkauan horizontal.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$x$", meaning: "jangkauan horizontal", unit: "m" },
              { symbol: "$h$", meaning: "tinggi lobang dari dasar", unit: "m" },
              { symbol: "$H$", meaning: "tinggi total tangki", unit: "m" },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Bernoulli: Sayap Pesawat",
        blocks: [
          {
            type: "paragraph",
            text: "Kecepatan udara di atas sayap 50 m/s, di bawah sayap 40 m/s. Perbedaan tinggi diabaikan. Massa jenis udara 1,2 kg/m^3. Berapa perbedaan tekanan? Jika luas sayap 20 m^2, berapa gaya angkat?",
          },
          {
            type: "formula",
            latex: "\\Delta P = P_{\\text{bawah}} - P_{\\text{atas}} = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) = \\frac{1}{2}(1{,}2)(2500-1600) = 540 \\text{ Pa}",
            description: "Perbedaan tekanan via Bernoulli.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$\\Delta P$", meaning: "perbedaan tekanan", unit: "Pa" },
              { symbol: "$\\rho$", meaning: "massa jenis udara", unit: "kg/m^3" },
              { symbol: "$v_{\\text{atas/bawah}}$", meaning: "kecepatan aliran", unit: "m/s" },
            ],
          },
          {
            type: "formula",
            latex: "F_{\\text{angkat}} = \\Delta P \\cdot A = 540 \\times 20 = 10800 \\text{ N}",
            description: "Gaya angkat.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$F_{\\text{angkat}}$", meaning: "gaya angkat", unit: "N" },
              { symbol: "$\\Delta P$", meaning: "perbedaan tekanan", unit: "Pa" },
              { symbol: "$A$", meaning: "luas sayap", unit: "m^2" },
            ],
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Venturimeter Lengkap (Bernoulli + Kontinuitas)",
      },
      {
        type: "paragraph",
        text: "Bernoulli horizontal antara penampang lebar 1 dan sempit 2 (z sama): $P_1 - P_2 = \\tfrac12 \\rho(v_2^2 - v_1^2)$. Kontinuitas $v_2 = v_1 A_1/A_2$. Eliminasi $v_2$ memberi rumus praktis.",
      },
      {
        type: "formula",
        latex: "v_1 = \\sqrt{\\frac{2(P_1-P_2)}{\\rho\\left(\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right)}}",
        description: "Kecepatan aliran di penampang lebar.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_1$", meaning: "kecepatan di penampang lebar", unit: "m/s" },
          { symbol: "$P_1,P_2$", meaning: "tekanan di titik 1 dan 2", unit: "Pa" },
          { symbol: "$\\rho$", meaning: "massa jenis fluida", unit: "kg/m^3" },
          { symbol: "$A_1,A_2$", meaning: "luas penampang 1 dan 2", unit: "m^2" },
        ],
      },
      {
        type: "formula",
        latex: "Q = A_1 v_1 = A_2 v_2",
        description: "Debit (konsistensi dengan kontinuitas).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$Q$", meaning: "debit", unit: "m^3/s" },
          { symbol: "$A_i,v_i$", meaning: "luas dan kecepatan di titik i", unit: "m^2, m/s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Hukum Stokes dan Gerak Jatuh dalam Fluida",
      },
      {
        type: "paragraph",
        text: "Bola kecil yang jatuh dalam fluida kental mengalami gaya gesek viscous $F = 6\\pi \\eta r v$ (Stokes). Pada kecepatan terminal, berat = gaya apung + gaya gesek.",
      },
      {
        type: "formula",
        latex: "F_{\\text{gesek}} = 6\\pi \\eta r v",
        description: "Gaya Stokes pada bola radius $r$ bergerak dengan kecepatan $v$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$F_{\\text{gesek}}$", meaning: "gaya gesek viskos", unit: "N" },
          { symbol: "$\\eta$", meaning: "viskositas dinamis", unit: "Pa s" },
          { symbol: "$r$", meaning: "jari-jari bola", unit: "m" },
          { symbol: "$v$", meaning: "kecepatan", unit: "m/s" },
        ],
      },
      {
        type: "formula",
        latex: "v_t = \\frac{2(\\rho_b-\\rho_f) g r^2}{9 \\eta}",
        description: "Kecepatan terminal bola dalam fluida viskos.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v_t$", meaning: "kecepatan terminal", unit: "m/s" },
          { symbol: "$\\rho_b,\\rho_f$", meaning: "massa jenis bola/fluida", unit: "kg/m^3" },
          { symbol: "$g$", meaning: "percepatan gravitasi", unit: "m/s^2" },
          { symbol: "$r$", meaning: "jari-jari bola", unit: "m" },
          { symbol: "$\\eta$", meaning: "viskositas dinamis", unit: "Pa s" },
        ],
      },
      {
        type: "note",
        text: "Strategi TKA fluida: (1) identifikasi statis/dinamis; (2) pilih rumus ($P_h$, Pascal, Archimedes, kontinuitas, Bernoulli); (3) perhatikan satuan dan konversi; (4) untuk Bernoulli pilih dua titik yang diketahui.",
        variant: "tip",
      },
    ],
  },
  {
    slug: "bunyi",
    no: 9,
    title: "Bunyi",
    category: "Gelombang",
    summary: "Gelombang mekanik, sumber bunyi, intensitas, efek Doppler, interferensi bunyi, dan gema.",
    blocks: [
      {
        type: "paragraph",
        text: "Bunyi adalah gelombang mekanik longitudinal yang merambat melalui medium (padat/cair/gas). Bunyi tidak dapat merambat di ruang hampa. Kecepatan bunyi bergantung pada medium dan suhu: padat > cair > gas (di udara sekitar 340 m/s pada 20 derajat C).",
      },
      {
        type: "definition",
        term: "Gelombang longitudinal",
        definition: "Gelombang yang arah getarnya sejajar dengan arah rambatan; merambat sebagai rapatan dan renggangan.",
      },
      {
        type: "note",
        text: "Cepat rambat bunyi di udara kira-kira bertambah 0,6 m/s per derajat Celcius: $v \\approx 331 + 0{,}6 T$ (m/s).",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Besaran Dasar Gelombang",
      },
      {
        type: "image",
        src: "/diagrams/bunyi-gelombang.svg",
        alt: "Gelombang bunyi longitudinal dengan daerah kompresi dan rarefaksi",
        caption: "Partikel medium bergerak sejajar arah rambat bunyi, sementara mediumnya sendiri tidak ikut merambat.",
      },
      {
        type: "paragraph",
        text: "Tiga besaran dasar gelombang saling terkait: panjang gelombang $\\lambda$, frekuensi $f$, dan cepat rambat $v$. Serta amplitudo sebagai ukuran energi.",
      },
      {
        type: "formula",
        latex: "v = \\lambda \\, f = \\frac{\\lambda}{T}",
        description: "Cepat rambat gelombang mekanik (relasi dasar).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v$", meaning: "cepat rambat", unit: "m/s" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang", unit: "m" },
          { symbol: "$f$", meaning: "frekuensi", unit: "Hz (s^{-1})" },
          { symbol: "$T$", meaning: "periode", unit: "s" },
        ],
      },
      {
        type: "formula",
        latex: "y = A \\sin(\\omega t - k x)",
        description: "Persamaan gelombang berjalan ke arah +x; $\\omega=2\\pi/T$, $k=2\\pi/\\lambda$, $v=\\omega/k$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$y$", meaning: "simpangan pada posisi $x$ dan waktu $t$", unit: "m" },
          { symbol: "$A$", meaning: "amplitudo", unit: "m" },
          { symbol: "$\\omega$", meaning: "frekuensi sudut", unit: "rad/s" },
          { symbol: "$t$", meaning: "waktu", unit: "s" },
          { symbol: "$k$", meaning: "bilangan gelombang vektor", unit: "rad/m" },
          { symbol: "$x$", meaning: "posisi", unit: "m" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Audiosonik: 20–20000 Hz (rentang pendengaran manusia)." },
          { text: "Infrasonik: < 20 Hz (digunakan gajah, gempa)." },
          { text: "Ultrasonik: > 20000 Hz (kelelawar, USG, SONAR)." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sumber Bunyi: Dawai dan Pipa Organa",
      },
      {
        type: "image",
        src: "/diagrams/bunyi-resonansi.svg",
        alt: "Resonansi pada tabung tertutup dan tabung terbuka untuk beberapa harmoni",
        caption: "Tabung tertutup memiliki panjang efektif seperempat panjang gelombang, sedangkan tabung terbuka setengah panjang gelombang.",
      },
      {
        type: "paragraph",
        text: "Bunyi dihasilkan oleh getaran (sumber). Pada dawai, frekuensi bergantung pada panjang, tegangan, dan massa per satuan panjang. Pada kolom udara (pipa organa), frekuensi bergantung pada panjang kolom dan cepat rambat bunyi.",
      },
      {
        type: "table",
        headers: ["Sumber", "Rumus Frekuensi (Harmonik ke-n)", "Rasio Harmonik"],
        rows: [
          ["Dawai (kedua ujung bebas)", "$f_n = \\frac{n}{2L}\\sqrt{\\frac{F}{\\mu}}$", "$1:2:3:\\ldots$ (semua)"],
          ["Pipa organa terbuka (kedua ujung terbuka)", "$f_n = \\frac{n v}{2 L}$", "$1:2:3:\\ldots$ (semua)"],
          ["Pipa organa tertutup (satu ujung tertutup)", "$f_n = \\frac{(2n-1) v}{4 L}$", "$1:3:5:\\ldots$ (ganjil saja)"],
        ],
      },
      {
        type: "formula",
        latex: "f_1^{\\text{dawai}} = \\frac{1}{2L}\\sqrt{\\frac{F}{\\mu}}",
        description: "Frekuensi nada dasar dawai.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f_1$", meaning: "frekuensi nada dasar", unit: "Hz" },
          { symbol: "$L$", meaning: "panjang dawai yang bergetar", unit: "m" },
          { symbol: "$F$", meaning: "gaya tegang dawai", unit: "N" },
          { symbol: "$\\mu$", meaning: "massa per panjang dawai", unit: "kg/m" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Pada dawai: frekuensi naik jika $L$ dipendek, $F$ diperbesar, atau $\\mu$ diperkecil." },
          { text: "Pipa tertutup hanya memiliki harmonik ganjil (1, 3, 5, ...). Pipa terbuka memiliki semua harmonik." },
          { text: "Dua kali panjang pipa → frekuensi turun separuh." },
          { text: "Suhu udara naik → $v$ naik → frekuensi pipa naik (dawai tidak terpengaruh langsung)." },
        ],
      },
      {
        type: "note",
        text: "Perhatian TKA: pipa tertutup hanya harmonik ganjil! Soal sering membandingkan frekuensi nada dasar pipa terbuka dan tertutup dengan panjang sama.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Intensitas dan Taraf Intensitas",
      },
      {
        type: "paragraph",
        text: "Intensitas bunyi adalah daya per satuan luas yang ditangkap permukaan. Oleh karena bunyi menyebar secara sferis dari sumber titik, intensitas berbanding terbalik dengan kuadrat jarak (hukum kuadrat terbalik).",
      },
      {
        type: "formula",
        latex: "I = \\frac{P}{A} = \\frac{P}{4\\pi r^2}",
        description: "Intensitas bunyi pada jarak $r$ dari sumber daya $P$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I$", meaning: "intensitas bunyi", unit: "W/m^2" },
          { symbol: "$P$", meaning: "daya sumber", unit: "W" },
          { symbol: "$A$", meaning: "luas permukaan penyerap", unit: "m^2" },
          { symbol: "$r$", meaning: "jarak dari sumber", unit: "m" },
        ],
      },
      {
        type: "formula",
        latex: "\\frac{I_1}{I_2} = \\left( \\frac{r_2}{r_1} \\right)^2",
        description: "Hukum kuadrat terbalik untuk intensitas.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I_1,I_2$", meaning: "intensitas pada jarak 1 dan 2", unit: "W/m^2" },
          { symbol: "$r_1,r_2$", meaning: "jarak dari sumber", unit: "m" },
        ],
      },
      {
        type: "formula",
        latex: "TI = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)",
        description: "Taraf intensitas (Sound Pressure Level) dalam dB, $I_0=10^{-12}$ W/m^2 (ambang dengar).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$TI$", meaning: "taraf intensitas", unit: "dB" },
          { symbol: "$I$", meaning: "intensitas bunyi", unit: "W/m^2" },
          { symbol: "$I_0$", meaning: "intensitas acuan (ambang dengar)", unit: "W/m^2" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "$n$ sumber identik: $TI_n = TI_1 + 10\\log_{10} n$." },
          { text: "Jarak berubah: $TI_2 = TI_1 - 20 \\log_{10}(r_2/r_1)$." },
          { text: "Tambahan 3 dB → intensitas menjadi $2\\times$; tambahan 10 dB → intensitas menjadi $10\\times$." },
          { text: "Bunyi sehari-hari: percakapan ~60 dB, musik ~80–100 dB, pesawat ~120–140 dB." },
        ],
      },
      {
        type: "note",
        text: "Logaritma basis 10: $TI$ naik 10 dB gdy intensitas naik 10 kali, bukan 3 dB. Ingat $10\\log$, bukan $20\\log$ (kecuali tekanan).",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Efek Doppler",
      },
      {
        type: "paragraph",
        text: "Frekuensi bunyi yang diterima pendengar berbeda dari frekuensi sumber jika sumber dan/atau pendengar bergerak relatif. Ini sebabnya sirine ambulans berubah nada saat mendekat/menjauh.",
      },
      {
        type: "formula",
        latex: "f_p = f_s \\frac{v \\pm v_p}{v \\pm v_s}",
        description: "Frekuensi pendengar. $f_s$ frekuensi sumber, $v$ cepat rambat bunyi, $v_p, v_s$ kecepatan pendengar/sumber relatif medium.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f_p$", meaning: "frekuensi terdengar pendengar", unit: "Hz" },
          { symbol: "$f_s$", meaning: "frekuensi sumber", unit: "Hz" },
          { symbol: "$v$", meaning: "cepat rambat bunyi di medium", unit: "m/s" },
          { symbol: "$v_p$", meaning: "kecepatan pendengar", unit: "m/s" },
          { symbol: "$v_s$", meaning: "kecepatan sumber", unit: "m/s" },
        ],
      },
      {
        type: "table",
        headers: ["Arah Gerak", "Tanda", "Efek (Frekuensi Terdengar)"],
        rows: [
          ["Pendengar mendekati sumber", "$+v_p$ (pembilang)", "naik"],
          ["Pendengar menjauhi sumber", "$-v_p$", "turun"],
          ["Sumber mendekati pendengar", "$-v_s$ (penyebut)", "naik"],
          ["Sumber menjauhi pendengar", "$+v_s$", "turun"],
        ],
      },
      {
        type: "note",
        text: "Aturan cepat: jika saling mendekat → frekuensi naik; saling menjauh → frekuensi turun. Berlaku untuk semua kasus.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Pelayangan (Beats)",
      },
      {
        type: "paragraph",
        text: "Dua gelombang dengan frekuensi sedikit berbeda yang dijumlahkan menghasilkan amplitude yang bermodulasi, terdengar sebagai 'wah-wah' dengan frekuensi pelayangan sama dengan selisih frekuensi.",
      },
      {
        type: "formula",
        latex: "f_{\\text{layang}} = |f_1 - f_2|",
        description: "Frekuensi pelayangan = selisih mutlak frekuensi.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f_{\\text{layang}}$", meaning: "frekuensi pelayangan/amplitudo modulasi", unit: "Hz" },
          { symbol: "$f_1, f_2$", meaning: "frekuensi dua sumber", unit: "Hz" },
        ],
      },
      {
        type: "formula",
        latex: "f_{\\text{layang}}^{\\text{detak}} = \\frac{|f_1 - f_2|}{2}? \\text{ (salah)}",
        description: "Catatan: detak yang terdengar per detik = $|f_1-f_2|$ (bukan dibagi 2).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f_{\\text{layang}}$", meaning: "detak per sekon", unit: "Hz" },
          { symbol: "$f_1, f_2$", meaning: "frekuensi sumber", unit: "Hz" },
        ],
      },
      {
        type: "note",
        text: "Recal: pelayangan frekuensi dasar = $|f_1 - f_2|$ bukan $|f_1 - f_2|/2$. Beberapa buku menghitung intensitas (kuadrat) sehingga modulasi intensitas dua kali, tetapi telinga mendeteksi amplitude envelope sehingga frekuensi detak = $|f_1-f_2|$.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Gema dan Sonar",
      },
      {
        type: "paragraph",
        text: "Gema adalah bunyi yang dipantulkan dari permukaan jauh dan terdengar terpisah. Sonar (Sound Navigation and Ranging) memanfaatkan gema ultrasonik untuk mengukur jarak bawah laut atau kecepatan.",
      },
      {
        type: "formula",
        latex: "d = \\frac{v \\, t}{2}",
        description: "Jarak ke pantulan = cepat rambat $\\times$ waktu total pergi-pulang dibagi 2.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$d$", meaning: "jarak ke permukaan pantul", unit: "m" },
          { symbol: "$v$", meaning: "cepat rambat bunyi di medium", unit: "m/s" },
          { symbol: "$t$", meaning: "waktu total pergi-pulang", unit: "s" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Superposisi dan Interferensi (Tambahan)",
      },
      {
        type: "paragraph",
        text: "Dua atau lebih gelombang bunyi dapat bertemu dan menjumlahkan (prinsip superposisi). Interferensi konstruktif (mantap) jika beda fase 0, 2π, ...; destruktif jika π, 3π, ...",
      },
      {
        type: "formula",
        latex: "\\Delta x = \\frac{n \\lambda}{2}?",
        description: "Catatan: interferensi konstruktif bila beda jarak lintasan = $n\\lambda$; destruktif bila $(m+\\tfrac12)\\lambda$.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\Delta x$", meaning: "beda jarak sumber-ke-titik", unit: "m" },
          { symbol: "$n,m$", meaning: "bilangan bulat (0,1,2,...)", unit: "tanpa satuan" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang", unit: "m" },
        ],
      },
      {
        type: "example",
        title: "Efek Doppler Mobil Ambulans",
        blocks: [
          {
            type: "paragraph",
            text: "Sirene ambulans $f_s = 680$ Hz bergerak menjauhi pendengar diam dengan $v_s = 20$ m/s. Cepat rambat bunyi $v = 340$ m/s. Berapa frekuensi yang terdengar?",
          },
          {
            type: "formula",
            latex: "f_p = f_s \\frac{v}{v + v_s} = 680 \\times \\frac{340}{340 + 20} = 680 \\times \\frac{340}{360} \\approx 642{,}2 \\text{ Hz}",
            description: "Pendengar diam, sumber menjauh.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$f_p$", meaning: "frekuensi terdengar", unit: "Hz" },
              { symbol: "$f_s$", meaning: "frekuensi sumber", unit: "Hz" },
              { symbol: "$v$", meaning: "cepat rambat bunyi", unit: "m/s" },
              { symbol: "$v_s$", meaning: "kecepatan sumber", unit: "m/s" },
            ],
          },
          { type: "paragraph", text: "Frekuensi terdengar lebih rendah (nada rendah) karena sumber menjauh." },
        ],
      },
      {
        type: "example",
        title: "Frekuensi Nada Dasar Pipa",
        blocks: [
          {
            type: "paragraph",
            text: "Sebuah pipa organa tertutup panjang 0,425 m (cepat rambat bunyi 340 m/s) menghasilkan nada dasar. Berapa frekuensi nada dasar pipa terbuka dengan panjang sama?",
          },
          {
            type: "formula",
            latex: "f_{\\text{tertutup}} = \\frac{v}{4L} = \\frac{340}{4 \\times 0{,}425} = 200 \\text{ Hz}",
            description: "Nada dasar pipa tertutup.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$f_{\\text{tertutup}}$", meaning: "frekuensi nada dasar tertutup", unit: "Hz" },
              { symbol: "$v$", meaning: "cepat rambat bunyi", unit: "m/s" },
              { symbol: "$L$", meaning: "panjang pipa", unit: "m" },
            ],
          },
          {
            type: "formula",
            latex: "f_{\\text{terbuka}} = \\frac{v}{2L} = \\frac{340}{2 \\times 0{,}425} = 400 \\text{ Hz}",
            description: "Nada dasar pipa terbuka = 2 x tertutup.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$f_{\\text{terbuka}}$", meaning: "frekuensi nada dasar terbuka", unit: "Hz" },
              { symbol: "$v$", meaning: "cepat rambat bunyi", unit: "m/s" },
              { symbol: "$L$", meaning: "panjang pipa", unit: "m" },
            ],
          },
          { type: "paragraph", text: "Pipa terbuka nada dasarnya satu oktaf lebih tinggi (400 = 2 x 200) dibanding tertutup panjang sama." },
        ],
      },
      {
        type: "example",
        title: "Taraf Intensitas Beberapa Sumber",
        blocks: [
          {
            type: "paragraph",
            text: "Taraf intensitas satu pabrik = 80 dB. Jika beroperasi 5 pabrik identik bersamaan, berapa taraf intensitas total?",
          },
          {
            type: "formula",
            latex: "TI_5 = TI_1 + 10 \\log_{10} 5 = 80 + 10(0{,}699) = 80 + 6{,}99 \\approx 86{,}99 \\text{ dB}",
            description: "Tambahan dari 5 sumber.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$TI_5$", meaning: "taraf intensitas 5 sumber", unit: "dB" },
              { symbol: "$TI_1$", meaning: "taraf intensitas satu sumber", unit: "dB" },
            ],
          },
          { type: "paragraph", text: "Jadi total ~87 dB. (Bukan 400 dB! Karena logaritmik.)" },
        ],
      },
      {
        type: "example",
        title: "Gema Sonar",
        blocks: [
          {
            type: "paragraph",
            text: "Pulsa ultrasonik dikirimkan dari kapal ke dasar laut dan diterima kembali 4 s kemudian. Cepat rambat bunyi di air laut 1500 m/s. Berapa kedalaman laut?",
          },
          {
            type: "formula",
            latex: "d = \\frac{v t}{2} = \\frac{1500 \\times 4}{2} = 3000 \\text{ m}",
            description: "Kedalaman laut.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$d$", meaning: "kedalaman laut", unit: "m" },
              { symbol: "$v$", meaning: "cepat rambat bunyi", unit: "m/s" },
              { symbol: "$t$", meaning: "waktu pulang-pergi", unit: "s" },
            ],
          },
          { type: "paragraph", text: "Laut sedalam 3 km (contoh Samudra). Sonar ultrasonik dimanfaatkan karena tidak didengar ikan/penumpang dan daya tinggi." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Koreksi Ujung Pipa Resonansi (End Correction)",
      },
      {
        type: "paragraph",
        text: "Pada resonansi kolom udara dalam pipa, antinode tekanan/simpangan sedikit keluar dari ujung geometrik. Koreksi ujung $e \\approx 0{,}6 r$ (pipa terbuka) atau $0{,}4 r$ (tertutup) harus ditambahkan ke panjang efektif.",
      },
      {
        type: "formula",
        latex: "L_{\\text{eff}} = L + 0{,}6 r \\quad (\\text{pipa terbuka}), \\qquad L_{\\text{eff}} = L + 0{,}4 r \\quad (\\text{tertutup})",
        description: "Panjang efektif kolom udara dengan koreksi ujung.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$L_{\\text{eff}}$", meaning: "panjang efektif kolom", unit: "m" },
          { symbol: "$L$", meaning: "panjang geometrik pipa", unit: "m" },
          { symbol: "$r$", meaning: "jari-jari pipa", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Doppler dengan Pantulan (Sonar/Doppler Shift)",
      },
      {
        type: "paragraph",
        text: "Ketika bunyi memantul dari benda bergerak (atau pengirim dan penerima bergerak), terjadi dua tahap Doppler. Shift frekuensi berbanding dengan kecepatan relatif.",
      },
      {
        type: "formula",
        latex: "f' = f \\frac{v \\pm v_{\\text{p}}}{v \\mp v_{\\text{s}}}",
        description: "Aplikasikan dua kali untuk pantulan (ganti tanda sesuai arah).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f_{\\text{terima}}$", meaning: "frekuensi akhir", unit: "Hz" },
          { symbol: "$f_s$", meaning: "frekuensi sumber", unit: "Hz" },
          { symbol: "$v$", meaning: "cepat rambat bunyi", unit: "m/s" },
          { symbol: "$v_{\\text{obs}}, v_s$", meaning: "kecepatan pendengar/sumber", unit: "m/s" },
        ],
      },
      {
        type: "note",
        text: "Gunakan aturan: mendekat → tanda yang membuat frekuensi naik; menjauh → sebaliknya. Hitung dua tahap jika pantulan (reflektor bergerak).",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Daya dan Intensitas dari Sumber Berputar/Arahan",
      },
      {
        type: "paragraph",
        text: "Untuk sumber bunyi terarah (bukan isotropik), intensitas pada jarak $r$ arah $\\phi$ adalah $I = \\frac{P}{4\\pi r^2}\\,D(\\phi)$, dengan $D$ directivity factor. Pada TKA cukup asumsi isotropik ($D=1$) kecuali soal menyebut pola.",
      },
      {
        type: "note",
        text: "Bila atenuasi udara signifikan (jarak jauh), intensitas berkurang lebih cepat dari kuadrat terbalik; pada TKA diabaikan.",
        variant: "info",
      },
      {
        type: "note",
        text: "Strategi TKA bunyi: (1) baca frekuensi ke Hz konsisten; (2) untuk Doppler, pilih tanda sesuai tabel (saling mendekat → naik); (3) untuk TI gunakan log dan I0=1e-12; (4) untuk gema bagi waktu dengan 2.",
        variant: "tip",
      },
    ],
  },
  {
    slug: "cahaya",
    no: 10,
    title: "Cahaya dan Optik",
    category: "Gelombang",
    summary: "Gelombang elektromagnetik, pemantulan, pembiasan, cermin, lensa, dan alat optik.",
    blocks: [
      {
        type: "paragraph",
        text: "Cahaya adalah gelombang elektromagnetik transversal yang tidak memerlukan medium untuk merambat. Di ruang hampa, cepat rambat cahaya $c = 3 \\times 10^8$ m/s. Cahaya merupakan bukti sifat gelombang (interferensi, difraksi, polarisasi) sekaligus foton (efek fotolistrik).",
      },
      {
        type: "definition",
        term: "Cahaya (optik geometrik)",
        definition: "Dalam optik geometrik, cahaya dianggap sebagai sinar yang merambat lurus dalam medium homogen dan isotrop.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sifat Rambat Cahaya",
      },
      {
        type: "paragraph",
        text: "Sebelum memakai rumus optik, kita perlu menghafal sifat dasar rambat cahaya. Sifat inilah yang membuat optik geometrik bisa disederhanakan: cahaya dianggap sebagai sinar berupa garis lurus, bukan bola cahaya yang menyebar ke segala arah.",
      },
      {
        type: "table",
        headers: ["Sifat", "Arti", "Konsekuensi pada optik"],
        rows: [
          [
            "Rambat lurus",
            "Dalam medium homogen cahaya merambat pada garis lurus",
            "Sinar bisa digambar sebagai garis berpanah, sehingga rumus optik geometrik berlaku",
          ],
          [
            "Tidak bergantung pada sumber",
            "Laju, intensitas, dan warna cahaya tidak dipengaruhi sumber",
            "Dua sumber berbeda dapat berinterferensi tanpa saling memengaruhi",
          ],
          [
            "Tidak memerlukan medium",
            "Cahaya merambat di ruang hampa",
            "Berbeda dengan bunyi, tidak ada medium yang wajib ada",
          ],
          [
            "Laju bergantung medium",
            "Berbeda dari medium ke medium, $v = c/n$",
            "Menyebabkan pembiasan dan pemantulan sempurna",
          ],
          [
            "Indeks bias bergantung warna",
            "$n$ berbeda untuk tiap panjang gelombang",
            "Menyebabkan dispersi pada prisma dan pelangi",
          ],
        ],
      },
      {
        type: "formula",
        latex: "v = \\frac{c}{n} = \\frac{c \\, \\lambda_{\\text{vak}}}{n \\, \\lambda_{\\text{med}}}",
        description:
          "Laju cahaya di dalam medium. Perhatikan: yang berubah adalah panjang gelombang, bukan frekuensi.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$v$", meaning: "laju cahaya di dalam medium", unit: "m/s" },
          { symbol: "$c$", meaning: "laju cahaya di ruang hampa", unit: "m/s ($3 \\times 10^8$)" },
          { symbol: "$n$", meaning: "indeks bias medium", unit: "tanpa satuan", note: "$n \\ge 1$; ruang hampa $n = 1$" },
          { symbol: "$\\lambda_{\\text{vak}}$", meaning: "panjang gelombang di ruang hampa", unit: "m" },
          { symbol: "$\\lambda_{\\text{med}}$", meaning: "panjang gelombang di dalam medium", unit: "m" },
        ],
      },
      {
        type: "note",
        text: "Yang berubah saat cahaya masuk medium adalah panjang gelombang, BUKAN frekuensi. Frekuensi ditentukan oleh sumber dan tetap ketika cahaya berpindah medium. Itulah sebabnya $v = f \\lambda$ tetap berlaku: $v$ turun, maka $\\lambda$ ikut turun.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 3,
        text: "Indeks Bias dan Laju Cahaya pada Beberapa Material",
      },
      {
        type: "paragraph",
        text: "Nilai indeks bias inilah yang sering muncul di soal TKA, baik untuk pembiasan, pemantulan sempurna, maupun untuk menghitung laju cahaya pada suatu medium.",
      },
      {
        type: "table",
        headers: ["Medium", "$n$", "$v = c/n$", "Catatan"],
        rows: [
          ["Ruang hampa", "$1{,}00$", "$3{,}00 \\times 10^8$ m/s", "acuan semua perhitungan"],
          ["Udara", "$1{,}0003$", "$\\approx 3{,}00 \\times 10^8$ m/s", "dianggap sama dengan hampa"],
          ["Es", "$1{,}31$", "$2{,}29 \\times 10^8$ m/s", "lebih rapat dari air"],
          ["Air", "$1{,}33$", "$2{,}26 \\times 10^8$ m/s", "sudut kritis ke udara $\\approx 48{,}6^\\circ$"],
          ["Minyak zaitun", "$1{,}47$", "$2{,}04 \\times 10^8$ m/s", "dipakai pada soal lapisan"],
          ["Kaca biasa (crown)", "$1{,}50$", "$2{,}00 \\times 10^8$ m/s", "sudut kritis ke udara $\\approx 42^\\circ$"],
          ["Kaca dispersif (flint)", "$1{,}62$", "$1{,}85 \\times 10^8$ m/s", "dispersi besar, dipakai prisma"],
          ["Intan", "$2{,}42$", "$1{,}24 \\times 10^8$ m/s", "sudut kritis ke udara $\\approx 24{,}4^\\circ$"],
        ],
      },
      {
        type: "note",
        text: "Semakin besar indeks bias, semakin lambat cahaya merambat di medium tersebut, dan semakin kecil sudut kritisnya ke udara.",
        variant: "tip",
      },
      {
        type: "note",
        text: "Untuk semua soal optik geometrik, gunakan $c = 3\\times 10^8$ m/s dan (bila perlu) frekuensi cahaya tampak sekitar $4\\times 10^{14}$ - $7{,}5\\times 10^{14}$ Hz.",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Spektrum Elektromagnetik",
      },
      {
        type: "paragraph",
        text: "Spektrum elektromagnetik diurutkan menurut frekuensi (atau panjang gelombang). Semakin tinggi frekuensi, semakin besar energi per foton ($E = hf$) dan semakin potensial berbahaya.",
      },
      {
        type: "list",
        items: [
          { text: "Urutan frekuensi naik (panjang gelombang turun): Radio, Mikro, Inframerah, Cahaya tampak (merah→ungu), Ultraviolet, Sinar-X, Sinar Gamma." },
          { text: "Cahaya tampak: merah ($\\lambda$ terpanjang, $f$ terendah) hingga ungu ($\\lambda$ terpendek, $f$ tertinggi)." },
          { text: "Merah ~700 nm, hijau ~550 nm, biru/ungu ~400 nm." },
          { text: "Infra merah dipakai remote/termovisi, UV sterilisasi, sinar-X foto medis/CT, gamma sterilisasi radioterapi." },
        ],
      },
      {
        type: "formula",
        latex: "c = \\lambda \\, f",
        description: "Relasi dasar gelombang EM di ruang hampa ($c$ konstan).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$c$", meaning: "cepat rambat cahaya di ruang hampa", unit: "m/s ($3\\times 10^8$)" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang", unit: "m (sering nm)" },
          { symbol: "$f$", meaning: "frekuensi", unit: "Hz" },
        ],
      },
      {
        type: "formula",
        latex: "E = h \\, f = \\frac{h c}{\\lambda}",
        description: "Energi foton (kuantum), $h = 6{,}63\\times 10^{-34}$ J s.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$E$", meaning: "energi foton", unit: "J" },
          { symbol: "$h$", meaning: "konstanta Planck", unit: "J s" },
          { symbol: "$f$", meaning: "frekuensi", unit: "Hz" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Pemantulan",
      },
      {
        type: "paragraph",
        text: "Pemantulan terjadi ketika cahaya menumbuk permukaan. Permukaan licin dan datar menghasilkan pemantulan teratur sehingga terbentuk bayangan yang tajam. Permukaan kasar menghasilkan pemantulan difus: cahaya mengalami hamburan ke segala arah sehingga benda tidak lagi memiliki bayangan yang jelas.",
      },
      {
        type: "formula",
        latex: "\\theta_i = \\theta_r",
        description: "Hukum pemantulan: sudut datang sama dengan sudut pantul, keduanya diukur terhadap garis normal.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\theta_i$", meaning: "sudut datang, antara sinar datang dan garis normal", unit: "derajat/rad" },
          { symbol: "$\\theta_r$", meaning: "sudut pantul, antara sinar pantul dan garis normal", unit: "derajat/rad" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Sudut selalu diukur dari **garis normal**, bukan dari permukaan. Kalau diukur dari permukaan, sudut datang ditambah sudut pantul sama dengan $180^\\circ$." },
          { text: "Cahaya yang datang tegak lurus permukaan ($\\theta_i = 0^\\circ$) dipantulkan tepat kembali ke arah semula." },
          { text: "Permukaan yang licin (cermin) pantulannya teratur; permukaan kasar pantulannya tersebar ke segala arah sehingga bayangan menjadi kabur." },
          { text: "Pada permukaan logam, besar sudut pantul tidak bergantung panjang gelombang. Pada permukaan nonlogam seperti kaca dan plastik, besar sudut pantul **bergantung panjang gelombang**, sehingga muncul warna." },
        ],
      },
      {
        type: "note",
        text: "Kesalahan klasik TKA: menghitung sudut datang dari permukaan. Selalu tarik garis normal lebih dulu, baru ukur sudut terhadap garis itu.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 3,
        text: "Pembiasan (Hukum Snell)",
      },
      {
        type: "image",
        src: "/diagrams/cahaya-dispersi.svg",
        alt: "Dispersi cahaya putih menjadi spektrum warna saat melewati prisma",
        caption: "Indeks biais berbeda untuk tiap warna, sehingga cahaya menyimpang dengan sudut yang berbeda.",
      },
      {
        type: "paragraph",
        text: "Pembiasan terjadi karena kecepatan cahaya berubah saat memasuki medium lain, sehingga arahnya dibelokkan. Penting: pembiasan BUKAN akibat gaya yang menarik cahaya, melainkan akibat perbedaan laju rambat.",
      },
      {
        type: "formula",
        latex: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2, \\qquad n = \\frac{c}{v}",
        description: "Hukum Snell (pembiasan) beserta definisi indeks bias.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$n_1,n_2$", meaning: "indeks bias medium asal (1) dan medium tujuan (2)", unit: "tanpa satuan" },
          { symbol: "$\\theta_1,\\theta_2$", meaning: "sudut datang dan sudut bias, keduanya dari garis normal", unit: "derajat/rad" },
          { symbol: "$c$", meaning: "laju cahaya di ruang hampa", unit: "m/s" },
          { symbol: "$v$", meaning: "laju cahaya di medium", unit: "m/s" },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Arah Pembiasan: Empat Kasus Penting",
      },
      {
        type: "table",
        headers: ["Kasus", "Syarat", "Sifat Pembiasan"],
        rows: [
          ["Masuk medium lebih rapat", "$n_2 > n_1$", "Sinar mendekati normal ($\\theta_2 < \\theta_1$)"],
          ["Masuk medium lebih renggang", "$n_2 < n_1$", "Sinar menjauhi normal ($\\theta_2 > \\theta_1$)"],
          ["Datang tegak lurus", "$\\theta_1 = 0^\\circ$", "Tidak dibelokkan, $\\theta_2 = 0^\\circ$"],
          ["Dua medium sama", "$n_1 = n_2$", "Tidak ada pembiasan, cahaya terus lurus"],
        ],
      },
      {
        type: "note",
        text: "Ingat arahnya: cahaya yang bergerak dari udara ke air (benda di dasar kolam terlihat lebih dangkal) MENDEKATI normal. Cahaya dari air ke udara MENJAUHI normal. Dua arah ini sering tertukar.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 3,
        text: "Sudut Bias Relatif",
      },
      {
        type: "paragraph",
        text: "Ketika cahaya melewati lempengan kaca yang kedua sisinya sejajar, arah cahaya hanya berubah pada permukaan pertama dan terakhir, karena sudut keluar dari lempeng sama dengan sudut masuknya. Sudut antara arah cahaya sebelum dan sesudah melewati lempengan disebut sudut bias relatif, dan tidak bergantung pada ketebalan lempengan.",
      },
      {
        type: "formula",
        latex: "\\theta_{\\text{rel}} = \\theta_1 - \\theta_2 = \\arcsin\\left(\\frac{n_2}{n_1} \\sin\\theta_1\\right) - \\theta_2",
        description: "Sudut bias relatif untuk lempengan paralel dengan medium di sekitarnya.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\theta_{\\text{rel}}$", meaning: "sudut bias relatif (selisih arah keluar dan masuk)", unit: "derajat/rad" },
          { symbol: "$\\theta_1$", meaning: "sudut datang pada permukaan pertama", unit: "derajat/rad" },
          { symbol: "$\\theta_2$", meaning: "sudut bias pada permukaan pertama sekaligus sudut datang pada permukaan kedua", unit: "derajat/rad" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Sudut bias relatif **tidak bergantung pada ketebalan** lempeng. Makin tebal lempeng, makin jauh pergeserannya, tetapi sudutnya sama." },
          { text: "Jika kedua permukaan lempeng tidak sejajar (wedge/prisma), sudut bias relatif menjadi sudut deviasi dan bergantung pada sudut wedgenya." },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Pemantulan Sempurna (Total Internal Reflection)",
      },
      {
        type: "paragraph",
        text: "Pemantulan sempurna hanya mungkin pada peralihan dari medium rapat ke medium renggang, yaitu ketika $n_1 > n_2$. Pada sudut datang tertentu, cahaya yang biasanya mengalami pembiasan. Ini adalah dasar serat optik, prisma pembias total, dan kilau pada berlian.",
      },
      {
        type: "formula",
        latex: "\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)",
        description: "Sudut kritis untuk pemantulan sempurna.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\theta_c$", meaning: "sudut kritis, batas antara pembiasan dan pemantulan sempurna", unit: "derajat/rad" },
          { symbol: "$n_1$", meaning: "indeks bias medium asal (rapat)", unit: "tanpa satuan" },
          { symbol: "$n_2$", meaning: "indeks bias medium tujuan (renggang)", unit: "tanpa satuan", note: "harus berlaku $n_1 > n_2$" },
        ],
      },
      {
        type: "table",
        headers: ["Peralihan", "$n_1$", "$n_2$", "Sudut kritis"],
        rows: [
          ["Kaca → udara", "$1{,}50$", "$1{,}00$", "$\\approx 41{,}8^\\circ$"],
          ["Air → udara", "$1{,}33$", "$1{,}00$", "$\\approx 48{,}6^\\circ$"],
          ["Kaca flint → udara", "$1{,}62$", "$1{,}00$", "$\\approx 38{,}1^\\circ$"],
          ["Intan → udara", "$2{,}42$", "$1{,}00$", "$\\approx 24{,}4^\\circ$"],
          ["Kaca → air", "$1{,}50$", "$1{,}33$", "$\\approx 62{,}5^\\circ$"],
        ],
      },
      {
        type: "list",
        items: [
          { text: "Jika $\\theta_i < \\theta_c$ → terjadi **pembiasan** (cahaya menembus)." },
          { text: "Jika $\\theta_i = \\theta_c$ → sinar refract keluar tepat menyusuri permukaan (tembusTipis dan pantul)." },
          { text: "Jika $\\theta_i > \\theta_c$ → terjadi **pemantulan sempurna**, tidak ada cahaya yang tembus." },
          { text: "Pemantulan sempurna **tidak mungkin** dari medium renggang ke medium rapat. Ingat: harus $n_1 > n_2$." },
          { text: "Semakin besar $n_1$, semakin kecil sudut kritisnya. Berlian yang dipoles memiliki sudut kritis sangat kecil sehingga cahaya banyak terpantulkan ke arah mata dan tampak berkilau." },
        ],
      },
      {
        type: "image",
        src: "/diagrams/prisma-deviasi.svg",
        alt: "Deviasi cahaya pada prisma dengan sudut datang i, sudut bias r1 dan r2, sudut keluar e, dan sudut deviasi D",
        caption: "Hubungan pada prisma: A = r1 + r2 dan D = i + e - A. Deviasi terjadi karena cahaya keluar tidak sejajar dengan arah masuknya.",
      },
      {
        type: "heading",
        level: 2,
        text: "Dispersi Cahaya",
      },
      {
        type: "paragraph",
        text: "Dispersi adalah penguraian cahaya putih menjadi-spectrum warna karena indeks bias tiap warna berbeda. Cahaya ungu memiliki $\\lambda$ paling pendek sehingga $n$-nya paling besar dan paling banyak dibelokkan; cahaya merah $|\U0001d514$ paling panjang sehingga paling sedikit dibelokkan.",
      },
      {
        type: "formula",
        latex: "n = A + \\frac{B}{\\lambda^2} \\quad (\\text{persamaan Cauchy})",
        description: "Indeks bias sebagai fungsi panjang gelombang vakum pada cahaya tampak.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$n$", meaning: "indeks bias material pada panjang gelombang tertentu", unit: "tanpa satuan" },
          { symbol: "$A,B$", meaning: "konstanta khas bahan (hasil pengukuran)", unit: "tanpa satuan" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang cahaya di ruang hampa", unit: "m" },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Prisma memakai kaca dispersif (flint) karena perbedaan indeks biasnya antarwarna lebih besar, sehingga pemisahan warnanya lebih jelas." },
          { text: "Pelangi primer terjadi karena cahaya putih terdispersi oleh tetes air hujan yang berfungsi sebagai prisma alami. Urutannya merah di bagian luar, ungu di bagian dalam." },
          { text: "Pelangi sekunder (warna-warna yang berbalik urutan) muncul karena cahaya mengalami dua kali pembiasan plus satu kali pemantulan di dalam tetes air." },
          { text: "Kaca jendela biasa tidak terlihat berwarna karena perbedaan indeks bias antarwarnanya sangat kecil." },
        ],
      },
      {
        type: "note",
        text: "Semua rumus optik geometrik TKA memakai $n$ untuk cahaya kuning (tengah spektrum) kecuali bila soal menyebut panjang gelombang atau warna secara eksplisit.",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Cermin dan Lensa",
      },
      {
        type: "paragraph",
        text: "Cermin (reflektor) dan lensa (refraktor) membentuk bayangan dengan aturan optik geometrik. Persamaan cermin dan lensa sama (persamaan pembentuk bayangan), yang membedakan adalah konvensi tanda fokus.",
      },
      {
        type: "formula",
        latex: "\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}, \\qquad M = \\left|\\frac{s'}{s}\\right| = \\frac{h'}{h}",
        description: "Persamaan cermin/lensa dan perbesaran lateral (tetap).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f$", meaning: "jarak fokus (focal length)", unit: "m (atau cm)" },
          { symbol: "$s$", meaning: "jarak benda dari cermin/lensa", unit: "m (atau cm)", note: "selalu positif untuk benda nyata" },
          { symbol: "$s'$", meaning: "jarak bayangan dari cermin/lensa", unit: "m (atau cm)", note: "+ nyata, - maya" },
          { symbol: "$M$", meaning: "perbesaran lateral", unit: "tanpa satuan" },
          { symbol: "$h, h'$", meaning: "tinggi benda dan bayangan", unit: "m/cm", note: "tanda menunjukkan tegak/terbalik" },
        ],
      },
      {
        type: "table",
        headers: ["Tipe", "Tanda $f$", "Karakteristik Bayangan"],
        rows: [
          ["Cermin cekung (konkaf)", "positif ($+$)", "mengumpulkan; bisa nyata/maya, terbalik/tegak tergantung s"],
          ["Cermin cembung (konveks)", "negatif ($-$)", "menyebar; selalu maya, tegak, diperkecil"],
          ["Lensa cembung (konveks)", "positif ($+$)", "mengumpulkan; bisa nyata/maya"],
          ["Lensa cekung (konkaf)", "negatif ($-$)", "menyebar; selalu maya, tegak, diperkecil"],
        ],
      },
      {
        type: "list",
        items: [
          { text: "$s'$ positif → bayangan nyata (dapat ditangkap layar); $s'$ negatif → maya." },
          { text: "Cermin datar: maya, tegak, sama besar, $s' = -s$ (f = Â∞)." },
          { text: "Dua cermin membentuk sudut $\\theta$: jumlah bayangan $n = 360^\\circ/\\theta - 1$ (untuk $\\theta$ pembagi 360)." },
          { text: "Kekuatan lensa: $P = 1/f$ (dioptri) dengan $f$ dalam meter; atau $P = 100/f(\\text{cm})$." },
          { text: "Kombinasi lensa berdekatan: $1/f = 1/f_1 + 1/f_2$ (kekuatan bertambah)." },
        ],
      },
      {
        type: "image",
        src: "/diagrams/cermin-cekung.svg",
        alt: "Diagram cermin cekung dengan sinar utama dan bayangan",
        caption: "Cermin cekung mengumpulkan sinar sejajar ke titik fokus; bayangan nyata jika benda di luar fokus.",
      },
      {
        type: "image",
        src: "/diagrams/cermin-cembung.svg",
        alt: "Diagram cermin cembung",
        caption: "Cermin cembung selalu menghasilkan bayangan maya, tegak, dan diperkecil di belakang cermin.",
      },
      {
        type: "image",
        src: "/diagrams/lensa-cembung.svg",
        alt: "Diagram lensa cembung",
        caption: "Lensa cembung mengumpulkan sinar sejajar; fokus positif, bayangan nyata/maya tergantung posisi benda.",
      },
      {
        type: "image",
        src: "/diagrams/lensa-cekung.svg",
        alt: "Diagram lensa cekung",
        caption: "Lensa cekung menyebar sinar; fokus negatif, bayangan selalu maya dan diperkecil.",
      },
      {
        type: "heading",
        level: 2,
        text: "Aturan Tanda Cermin/Lensa Lengkap",
      },
      {
        type: "table",
        headers: ["Pernyataan", "Tanda", "Makna"],
        rows: [
          ["$s > 0$", "selalu", "Benda nyata di depan optik"],
          ["$s' > 0$", "nyata", "Bayangan nyata (dapat ditangkap layar)"],
          ["$s' < 0$", "maya", "Bayangan maya (tidak dapat ditangkap layar)"],
          ["$f > 0$", "cermin cekung, lensa cembung", "Bersifat mengumpulkan"],
          ["$f < 0$", "cermin cembung, lensa cekung", "Bersifat menyebar"],
          ["$M > 0$", "tegak", "$M < 0$ terbalik; $|M|>1$ diperbesar"],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sinar Istimewa untuk Menentukan Posisi Bayangan",
      },
      {
        type: "paragraph",
        text: "Untuk menentukan letak bayangan, kita tidak perlu menghitung seluruh sinar. Cukup gunakan tiga sinar utama berikut. Kalau tiga sinar ini digambar, titik potongnya adalah ujung bayangan.",
      },
      {
        type: "image",
        src: "/diagrams/cermin-sinar-istimewa.svg",
        alt: "Tiga sinar utama pada cermin cekung: sejajar sumbu, melalui fokus, dan melalui pusat kelengkungan",
        caption: "Ketiga sinar utama berpotongan di satu titik yang merupakan ujung bayangan.",
      },
      {
        type: "table",
        headers: ["Sinar datang", "Dipantulkan menjadi", "Dasar hukum"],
        rows: [
          ["Sejajar sumbu utama", "Melewati titik fokus $F$", "Sinar sejajar yang mengenai cermin cekung selalu melewati fokus setelah dipantul"],
          ["Melewati titik fokus $F$", "Sejajar sumbu utama", "Kebalikan dari aturan pertama"],
          ["Melewati pusat kelengkungan $C$", "Kembali pada dirinya sendiri", "Sudut datang sama dengan sudut pantul terhadap normal"],
        ],
      },
      {
        type: "note",
        text: "Pada cermin cembung aturannya dibalik: sinar sejajar dipantulkan seempar dari fokus, dan sinar yang menuju pusat kelengkungan dipantulkan sejajar sumbu utama.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Kasus pada Cermin",
      },
      {
        type: "heading",
        level: 3,
        text: "Cermin Cekung (Konkaf)",
      },
      {
        type: "paragraph",
        text: "Cermin cekung memiliki permukaan yang melengkung ke dalam, sehingga bersifat mengumpulkan cahaya. Focal panjangnya positip dan titik fokus berada di depan cermin. Ingat bahwa jari-jari kelengkungan selalu dua kali fokus: $R = 2f$.",
      },
      {
        type: "formula",
        latex: "R = 2f",
        description: "Hubungan jari-jari kelengkungan busur dengan jarak fokus.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$R$", meaning: "jari-jari kelengkungan cermin", unit: "m/cm" },
          { symbol: "$f$", meaning: "jarak fokus cermin", unit: "m/cm" },
        ],
      },
      {
        type: "image",
        src: "/diagrams/cermin-posisi-benda.svg",
        alt: "Panduan lima posisi benda terhadap cermin cekung dan sifat bayangan masing-masing",
        caption: "Gunakan tabel ini sebagai panduan cepat membaca sifat bayangan cermin cekung.",
      },
      {
        type: "table",
        headers: ["Posisi Benda", "Jarak Benda", "Posisi Bayangan", "Sifat Bayangan"],
        rows: [
          ["Di luar pusat kelengkungan", "$s > 2f$", "$f < s' < 2f$", "Nyata, terbalik, diperkecil"],
          ["Tepat di pusat kelengkungan", "$s = 2f$", "$s' = 2f$", "Nyata, terbalik, sama besar"],
          ["Antara fokus dan kelengkungan", "$f < s < 2f$", "$s' > 2f$", "Nyata, terbalik, diperbesar"],
          ["Tepat di fokus", "$s = f$", "$s' \\to \\infty$", "Sinar pantul sejajar, bayangan di tak hingga"],
          ["Di dalam fokus", "$s < f$", "$s' < 0$", "Maya, tegak, diperbesar"],
        ],
      },
      {
        type: "note",
        text: "Perhatikan polanya: begitu benda masuk ke dalam fokus, bayangan berubah dari nyata terbalik menjadi maya tegak. Inilah perubahan yang paling sering ditanyakan di TKA.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 3,
        text: "Cermin Cembung (Konveks)",
      },
      {
        type: "paragraph",
        text: "Cermin cembung melengkung ke luar sehingga bersifat menyebarkan cahaya. Berapa pun posisi benda, hasilnya selalu sama: bayangan maya, tegak, dan diperkecil di belakang cermin.",
      },
      {
        type: "table",
        headers: ["Posisi Benda", "Jarak Benda", "Sifat Bayangan"],
        rows: [
          ["Benda di luar pusat kelengkungan", "$s > 2f$", "Maya, tegak, diperkecil"],
          ["Benda di pusat kelengkungan", "$s = 2f$", "Maya, tegak, diperkecil"],
          ["Benda di antara fokus dan kelengkungan", "$f < s < 2f$", "Maya, tegak, diperkecil"],
          ["Benda di fokus", "$s = f$", "Maya, tegak, diperkecil"],
          ["Benda di dalam fokus", "$s < f$", "Maya, tegak, diperkecil"],
        ],
      },
      {
        type: "list",
        items: [
          { text: "Fokus cermin cembung bersifat maya (di belakang cermin) sehingga jaraknya selalu negatif." },
          { text: "Cermin cembung selalu digunakan pada cermin 러시아 di bengkel, karena sudut pandang yang luas memberi pandangan jalan yang lebih baik." },
          { text: "Tidak ada posisi benda yang membuat bayangan nyata pada cermin cembung." },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Cermin Datar dan Cermin dalam Air",
      },
      {
        type: "list",
        items: [
          { text: "Cermin datar ($f \\to \\infty$): bayangan maya, tegak, sama besar, dengan jarak bayangan sama dengan jarak benda ($|s'| = s$)." },
          { text: "Jumlah bayangan dua cermin yang membentuk sudut $\\alpha$: $n = \\frac{360^\\circ}{\\alpha} - 1$ jika $360^\\circ/\\alpha$ bulat, dan $n = \\lfloor \\frac{360^\\circ}{\\alpha} \\rfloor$ jika bukan." },
          { text: "Cermin yang dicelupkan ke dalam air **tidak berubah** jarak fokusnya. Pantulan dipantulkan di permukaan, bukan di medium, sehingga keliling optiknya tetap sama. Ukuran bayangan di dalam air juga tetap sama karena sudut datang dan sudut pantul sama." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Rumus Pembuat Lensa",
      },
      {
        type: "paragraph",
        text: "Persamaan pembentuk bayangan untuk cermin dan lensa sama-sama $1/f = 1/s + 1/s'$. Yang membedakan hanya asal nilai fokusnya. Untuk cermin, fokusnya langsung bisa dibaca dari kelengkungan ($R = 2f$). Untuk lensa, fokus ditentukan oleh rumus pembuat lensa yang melibatkan indeks bias bahan dan dua jari-jari kelengkungan permukaannya.",
      },
      {
        type: "formula",
        latex: "\\frac{1}{f} = \\left( n_{\\text{rel}} - 1 \\right) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right), \\qquad n_{\\text{rel}} = \\frac{n_{\\text{lensa}}}{n_{\\text{medium}}}",
        description: "Rumus pembuat lensa untuk lensa tipis di dalam medium.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$f$", meaning: "jarak fokus lensa", unit: "m/cm" },
          { symbol: "$n_{\\text{lensa}}$", meaning: "indeks bias bahan lensanya", unit: "tanpa satuan" },
          { symbol: "$n_{\\text{medium}}$", meaning: "indeks bias medium di sekitar lensa", unit: "tanpa satuan", note: "di udara nilainya 1" },
          { symbol: "$n_{\\text{rel}}$", meaning: "indeks bias relatif terhadap medium", unit: "tanpa satuan" },
          { symbol: "$R_1$", meaning: "jari-jari kelengkungan permukaan pertama", unit: "m/cm", note: "bertanda jika pusat kelengkungannya di kanan" },
          { symbol: "$R_2$", meaning: "jari-jari kelengkungan permukaan kedua", unit: "m/cm", note: "bertanda jika pusat kelengkungannya di kanan" },
        ],
      },
      {
        type: "image",
        src: "/diagrams/lensa-rumus-pembuat.svg",
        alt: "Empat bentuk lensa dengan jari-jari kelengkungan R1 dan R2 beserta tanda masing-masing",
        caption: "Tanda R1 dan R2 ditentukan oleh letak pusat kelengkungan, bukan oleh bentuk kubahnya.",
      },
      {
        type: "table",
        headers: ["Bentuk Lensa", "Tanda $R_1$", "Tanda $R_2$", "Sifat", "Kekuatan"],
        rows: [
          ["Bikonvex (dua kubah keluar)", "$+$", "$-$", "mengumpulkan", "positif"],
          ["Planokonvex (satu bidang, satu kubah)", "$+$", "tak hingga", "mengumpulkan", "positif, separuh bikonvex"],
          ["Bikonkaf (dua cekungan masuk)", "$-$", "$+$", "menyebar", "negatif"],
          ["Planokonkaf (satu bidang, satu cekungan)", "tak hingga", "$+$", "menyebar", "negatif"],
        ],
      },
      {
        type: "note",
        text: "Cara cepat menentukan tanda: buat garis horizontal melewati pusat optik. Bila pusat kelengkungan terletak di kanan titik, R positif; bila di kiri, R negatif. Untuk permukaan bidang, R-nya tak hingga sehingga suku 1/R = 0.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Kasus pada Lensa",
      },
      {
        type: "heading",
        level: 3,
        text: "Lensa Cembung (Konveks)",
      },
      {
        type: "paragraph",
        text: "Lensa cembung bersifat mengumpulkan cahaya dan fokusnya positif. Kelima posisi benda berikut wajib dihafal karena hampir selalu muncul di soal TKA.",
      },
      {
        type: "table",
        headers: ["Posisi Benda", "Jarak Benda", "Posisi Bayangan", "Sifat Bayangan"],
        rows: [
          ["Di luar dua fokus", "$s > 2f$", "$f < s' < 2f$", "Nyata, terbalik, diperkecil"],
          ["Tepat di dua fokus", "$s = 2f$", "$s' = 2f$", "Nyata, terbalik, sama besar"],
          ["Antara fokus dan dua fokus", "$f < s < 2f$", "$s' > 2f$", "Nyata, terbalik, diperbesar"],
          ["Tepat di fokus", "$s = f$", "$s' \\to \\infty$", "Sinar keluar sejajar, bayangan di tak hingga"],
          ["Di dalam fokus", "$s < f$", "$s' < 0$", "Maya, tegak, diperbesar"],
        ],
      },
      {
        type: "image",
        src: "/diagrams/lensa-cembung.svg",
        alt: "Diagram lensa cembung dengan titik fokus dan sinar utama",
        caption: "Lensa cembung mengumpulkan sinar sejajar ke titik fokus di sisi berlawanan.",
      },
      {
        type: "note",
        text: "Perhatikan bahwa tabel kasus cermin cekung dan lensa cembung **sama persis**. Perbedaannya hanya pada letak titik fokus: pada cermin fokus di depan cermin, pada lensa fokus di belakang lensa.",
        variant: "info",
      },
      {
        type: "heading",
        level: 3,
        text: "Lensa Cekung (Konkaf)",
      },
      {
        type: "paragraph",
        text: "Lensa cekung bersifat menyebarkan cahaya dengan fokus negatif di sisi yang sama dengan benda. Hasilnya seragam untuk semua posisi benda.",
      },
      {
        type: "table",
        headers: ["Posisi Benda", "Jarak Benda", "Sifat Bayangan"],
        rows: [
          ["Benda di luar fokus", "$s > f$", "Maya, tegak, diperkecil"],
          ["Benda di fokus", "$s = f$", "Bayangan di titik fokus, maya, tegak, diperkecil"],
          ["Benda di dalam fokus", "$s < f$", "Maya, tegak, diperkecil"],
        ],
      },
      {
        type: "image",
        src: "/diagrams/lensa-cekung.svg",
        alt: "Diagram lensa cekung dengan sinar yang menyebar dan fokus maya",
        caption: "Lensa cekung selalu menghasilkan bayangan maya, tegak, dan diperkecil.",
      },
      {
        type: "heading",
        level: 3,
        text: "Lensa di Dalam Medium Lain",
      },
      {
        type: "paragraph",
        text: "Jika sebuah lensa dari kaca dicelupkan ke dalam air, indeks bias relatifnya mengecil sehingga lensa menjadi lebih lemah dan fokusnya lebih jauh.",
      },
      {
        type: "image",
        src: "/diagrams/lensa-dalam-air.svg",
        alt: "Perbandingan titik fokus lensa yang sama di udara dan di dalam air",
        caption: "Lensa yang sama menjadi lebih lemah di dalam air, sehingga titik fokusnya menjauh.",
      },
      {
        type: "formula",
        latex: "n_{\\text{rel, udara}} = n_{\\text{lensa}}, \\qquad n_{\\text{rel, air}} = \\frac{n_{\\text{lensa}}}{n_{\\text{air}}} = \\frac{1{,}5}{1{,}33} \\approx 1{,}13",
        description: "Indeks bias relatif lensanya di udara dibanding di dalam air.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$n_{\\text{lensa}}$", meaning: "indeks bias bahan lensanya, misal kaca $1{,}5$", unit: "tanpa satuan" },
          { symbol: "$n_{\\text{air}}$", meaning: "indeks bias air", unit: "tanpa satuan", note: "$1{,}33$" },
          { symbol: "$f_{\\text{udara}}$", meaning: "fokus di udara", unit: "cm", note: "lebih pendek" },
          { symbol: "$f_{\\text{air}}$", meaning: "fokus di dalam air", unit: "cm", note: "lebih panjang" },
        ],
      },
      {
        type: "note",
        text: "Ingat: cermin tidak berubah di dalam air, tetapi lensa berubah. Cermin bekerja lewat pantulan, lensa bekerja lewat pembiasan yang bergantung medium.",
        variant: "warning",
      },
      {
        type: "heading",
        level: 2,
        text: "Alat Optik",
      },
      {
        type: "table",
        headers: ["Alat", "Rumus Perbesaran", "Keterangan"],
        rows: [
          ["Mata normal", "titik dekat $PP \\approx 25$ cm, titik jauh $PR = \\infty$", "Miopi/hipermetropi dikoreksi dengan lensa"],
          ["Lup (kaca pembesar)", "$M = 25/f$ (tak berakomodasi), $M = 25/f + 1$ (akomodasi maks)", "Bayangan maya, tegak, diperbesar dekat mata"],
          ["Mikroskop", "$M = M_{ob} \\times M_{ok}$", "Tubus $d \\approx s'_{ob} + f_{ok}$ (panjang tabung)"],
          ["Teleskop bintang", "$M = f_{ob}/f_{ok}$", "$d = f_{ob}+f_{ok}$ (tak berakomodasi)"],
          ["Teleskop terestrial", "lensa pembalik tambahan", "bayangan akhir tegak"],
        ],
      },
      {
        type: "list",
        items: [
          { text: "Miopi (rabun jauh): titik jauh berhingga, dikoreksi dengan lensa cekung. Kekuatan lensa $P = -1/PR$ (dengan PR dalam meter) atau $P = -100/PR(\\text{cm})$." },
          { text: "Hipermetropi (rabun dekat): titik dekat >25 cm, dikoreksi lensa cembung. $P = (1/f) = (1/0{,}25) - (1/PP) = 4 - 100/PP(\\text{cm})$." },
          { text: "Presbiopi: sulit fokus dekat akibat penuaan; astigmatisma: kornea/lensa tidak sferis." },
          { text: "Mata emetrop (normal): dapat melihat jelas benda 25 cm - $\\infty$." },
        ],
      },
      {
        type: "formula",
        latex: "M_{\\text{lup}} = \\frac{25}{f} \\quad (\\text{tak berakomodasi}), \\qquad M_{\\text{lup}} = \\frac{25}{f} + 1 \\quad (\\text{akomodasi maks})",
        description: "Perbesaran lup (sudut) untuk mata normal ($PP=25$ cm).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$M_{\\text{lup}}$", meaning: "perbesaran sudut lup", unit: "tanpa satuan" },
          { symbol: "$f$", meaning: "jarak fokus lup", unit: "cm" },
          { symbol: "$25$", meaning: "jarak baca (titik dekat mata normal)", unit: "cm" },
        ],
      },
      {
        type: "formula",
        latex: "M_{\\text{mikroskop}} = \\frac{d \\cdot 25}{f_{ob} \\, f_{ok}}",
        description: "Perbesaran mikroskop (tak berakomodasi), d = panjang tubus.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$M_{\\text{mikroskop}}$", meaning: "perbesaran total mikroskop", unit: "tanpa satuan" },
          { symbol: "$d$", meaning: "panjang tubus (jarak antara fokus)", unit: "cm" },
          { symbol: "$f_{ob}, f_{ok}$", meaning: "jarak fokus obyektif dan okuler", unit: "cm" },
          { symbol: "$25$", meaning: "jarak baca mata normal", unit: "cm" },
        ],
      },
      {
        type: "example",
        title: "Lensa Cembung: Bayangan Nyata",
        blocks: [
          {
            type: "paragraph",
            text: "Benda setinggi 4 cm diletakkan 15 cm di depan lensa cembung $f = 10$ cm. Tentukan jarak bayangan, tinggi bayangan, dan besaran perbesaran.",
          },
          {
            type: "formula",
            latex: "\\frac{1}{10} = \\frac{1}{15} + \\frac{1}{s'}",
            description: "Persamaan pembentuk bayangan.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$f$", meaning: "jarak fokus", unit: "cm" },
              { symbol: "$s$", meaning: "jarak benda", unit: "cm" },
              { symbol: "$s'$", meaning: "jarak bayangan", unit: "cm" },
            ],
          },
          {
            type: "formula",
            latex: "\\frac{1}{s'} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30} \\implies s' = 30 \\text{ cm (nyata)}",
            description: "Jarak bayangan.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$s'$", meaning: "jarak bayangan", unit: "cm", note: "positif → nyata" },
            ],
          },
          {
            type: "formula",
            latex: "M = \\left|\\frac{s'}{s}\\right| = \\frac{30}{15} = 2, \\quad h' = M h = 2 \\times 4 = 8 \\text{ cm}",
            description: "Perbesaran dan tinggi bayangan.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$M$", meaning: "perbesaran lateral", unit: "tanpa satuan" },
              { symbol: "$h'$", meaning: "tinggi bayangan", unit: "cm", note: "terbalik (negatif jika diperhatikan tanda)" },
              { symbol: "$h$", meaning: "tinggi benda", unit: "cm" },
            ],
          },
          { type: "paragraph", text: "Bayangan nyata, terbalik, diperbesar 2x, terletak 30 cm di belakang lensa." },
        ],
      },
      {
        type: "example",
        title: "Cermin Cekung: Benda di Atas Pusat Kelengkungan",
        blocks: [
          {
            type: "paragraph",
            text: "Cermin cekung memiliki jari-jari kelengkungan $R = 40$ cm ($f = 20$ cm). Benda diletakkan 60 cm di depan cermin. Tentukan posisi dan sifat bayangan.",
          },
          {
            type: "formula",
            latex: "\\frac{1}{20} = \\frac{1}{60} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{20} - \\frac{1}{60} = \\frac{3-1}{60} = \\frac{1}{30}",
            description: "Persamaan cermin.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$f$", meaning: "jarak fokus", unit: "cm" },
              { symbol: "$R$", meaning: "jari-jari kelengkungan", unit: "cm" },
              { symbol: "$s, s'$", meaning: "jarak benda/bayangan", unit: "cm" },
            ],
          },
          {
            type: "formula",
            latex: "s' = 30 \\text{ cm (nyata)}, \\quad M = \\frac{30}{60} = 0{,}5",
            description: "Hasil.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$s'$", meaning: "jarak bayangan", unit: "cm" },
              { symbol: "$M$", meaning: "perbesaran", unit: "tanpa satuan", note: "<1 diperkecil" },
            ],
          },
          { type: "paragraph", text: "Bayangan nyata, terbalik, diperkecil setengah, terletak 30 cm di depan cermin." },
        ],
      },
      {
        type: "example",
        title: "Miopi dan Kekuatan Lensa Koreksi",
        blocks: [
          {
            type: "paragraph",
            text: "Seorang penderita miopi memiliki titik jauh 50 cm (tak dapat melihat jauh dengan jelas). Tentukan kekuatan lensa koreksi (kacamata) agar dapat melihat tak hingga.",
          },
          {
            type: "paragraph",
            text: "Lensa cekung dengan fokus negatif; bayangan maya pada titik jauh agar mata dapat memfokuskan.",
          },
          {
            type: "formula",
            latex: "P = -\\frac{1}{PR} = -\\frac{1}{0{,}50} = -2 \\text{ dioptri}",
            description: "Kekuatan lensa koreksi miopi ($PR$ dalam meter).",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$P$", meaning: "kekuatan lensa", unit: "dioptri (m^{-1})" },
              { symbol: "$PR$", meaning: "titik jauh penderita miopi", unit: "m", note: "harus dalam meter" },
            ],
          },
          { type: "paragraph", text: "Jadi diperlukan lensa cekung -2 dioptri. (Kacamata miopi bertanda negatif.)" },
        ],
      },
      {
        type: "example",
        title: "Lensa Cembung: Hipermetropi",
        blocks: [
          {
            type: "paragraph",
            text: "Penderita hipermetropi memiliki titik dekat 100 cm. Tentukan kekuatan lensa cembung agar titik dekat menjadi 25 cm.",
          },
          {
            type: "formula",
            latex: "P = \\frac{1}{0{,}25} - \\frac{1}{1{,}00} = 4 - 1 = 3 \\text{ dioptri}",
            description: "Kekuatan lensa koreksi hipermetropi.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$P$", meaning: "kekuatan lensa", unit: "dioptri" },
              { symbol: "$0{,}25,1{,}00$", meaning: "jarak baca normal dan titik dekat penderita", unit: "m" },
            ],
          },
          { type: "paragraph", text: "Jadi diperlukan lensa cembung +3 dioptri." },
        ],
      },
      {
        type: "definition",
        term: "Persamaan Pembentuk Bayangan (ringkasan)",
        definition: "Gunakan $1/f = 1/s + 1/s'$ dengan konvensi tanda sesuai tabel. Perbesaran $M = -s'/s$ (tanda membedakan tegak/terbalik); besar perbesaran $|M|$.",
      },
      {
        type: "note",
        text: "Strategi TKA optik: (1) tentukan jenis cermin/lensa → tanda $f$; (2) tulis persamaan; (3) selesaikan $s'$; (4) tentukan sifat bayangan (nyata/maya, tegak/terbalik, diperbesar/diperkecil) lewat tanda dan $|M|$; (5) untuk mata, hitung dioptri dengan $f$ dalam meter.",
        variant: "tip",
      },
      {
        type: "heading",
        level: 2,
        text: "Interferensi Celah Ganda (Young) - Tambahan",
      },
      {
        type: "paragraph",
        text: "Dua celah sempit berjarak $d$ dari layar/layar jauh $L$ menghasilkan pola terang-gelap. Jarak antar pita terang (fringe spacing) terukur di layar.",
      },
      {
        type: "formula",
        latex: "\\Delta y = \\frac{\\lambda L}{d}, \\qquad y_m = m \\frac{\\lambda L}{d}",
        description: "Jarak antar pita terang; posisi pita terang ke-$m$.",
      },
      {
        type: "formula",
        latex: "d\\sin\\theta = m\\lambda\\ (\text{terang}), \qquad d\sin\theta = \left(m - \tfrac{1}{2}\right)\lambda \; (\text{gelap})",
        description: "Syarat pita terang dan pita gelap pada interferensi celah ganda. Perhatikan bedanya setengah panjang gelombang.",
      },
      {
        type: "note",
        text: "Pita gelap pada celah ganda berbeda dari pita terang sebesar setengah panjang gelombang. Inilah kesalahan yang paling sering terjadi di soal TKA: memakai rumus yang sama untuk kedua jenis pita.",
        variant: "warning",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$\\Delta y$", meaning: "jarak antar pita terang", unit: "m" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang", unit: "m" },
          { symbol: "$L$", meaning: "jarak celah ke layar", unit: "m" },
          { symbol: "$d$", meaning: "jarak antar celah", unit: "m" },
          { symbol: "$m$", meaning: "orde pita (0, ±1, ...)", unit: "tanpa satuan" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Difraksi Celah Tunggal dan Grating (Kisi)",
      },
      {
        type: "formula",
        latex: "d \\sin\\theta = m \\lambda \\quad (\\text{kisi, terang}), \\qquad a \\sin\\theta = m \\lambda \\quad (\\text{celah tunggal, gelap})",
        description: "Kisi: interferensi (terang). Celah tunggal: difraksi (minimum/gelap).",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$d$", meaning: "jarak antar garis kisi", unit: "m" },
          { symbol: "$a$", meaning: "lebar celah tunggal", unit: "m" },
          { symbol: "$\\theta$", meaning: "sudut terhadap normal", unit: "derajat/rad" },
          { symbol: "$m$", meaning: "orde", unit: "tanpa satuan (m=1,2,...)" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang", unit: "m" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Interferensi Lapisan Tipis (Thin Film)",
      },
      {
        type: "paragraph",
        text: "Pada lapisan tipis (film minyak, gelembung sabun), interferensi antara sinar pantul depan dan belakang menyebabkan warna-warni. Syarat konstruktif tergantung perubahan fase saat pemantulan.",
      },
      {
        type: "formula",
        latex: "2 n t \\cos r = (m+\\tfrac12)\\lambda_{\\text{film?}} \\text{ atau } m\\lambda",
        description: "Teori umum: beda lintasan $2nt\\cos r$ plus fase pemantulan $\\pi$ menentukan terang/gelap.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$n$", meaning: "indeks bias film", unit: "tanpa satuan" },
          { symbol: "$t$", meaning: "ketebalan film", unit: "m" },
          { symbol: "$r$", meaning: "sudut pembiassan dalam film", unit: "derajat/rad" },
          { symbol: "$m$", meaning: "orde", unit: "tanpa satuan" },
          { symbol: "$\\lambda$", meaning: "panjang gelombang (di udara)", unit: "m" },
        ],
      },
      {
        type: "note",
        text: "Perhatian: lapisan tipis sering diminta kualitatif di TKA (warna akibat interferensi), rumus detail jarang diuji.",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Polarisasi dan Hukum Malus",
      },
      {
        type: "formula",
        latex: "I = I_0 \\cos^2\\theta",
        description: "Hukum Malus: intensitas setelah polarisator terhadap polarisator analisator.",
      },
      {
        type: "glossary",
        title: "Keterangan Simbol/Variabel",
        items: [
          { symbol: "$I$", meaning: "intensitas tertransmit", unit: "W/m^2" },
          { symbol: "$I_0$", meaning: "intensitas masuk", unit: "W/m^2" },
          { symbol: "$\\theta$", meaning: "sudut antar sumbu polarisasi", unit: "derajat/rad" },
        ],
      },
      {
        type: "note",
        text: "Polarisasi membuktikan cahaya bersifat gelombang transversal. Polarisoid pada kacamata hitam mengurangi silau horizontal.",
        variant: "info",
      },
      {
        type: "heading",
        level: 2,
        text: "Contoh Soal Campuran Optik (Lanjutan)",
      },
      {
        type: "example",
        title: "Perbesaran Mikroskop",
        blocks: [
          {
            type: "paragraph",
            text: "Mikroskop memiliki obyektif $f_{ob}=4$ mm dan okuler $f_{ok}=25$ mm, panjang tubus $d=16$ cm. Berapa perbesaran total (mata normal, tak berakomodasi)?",
          },
          {
            type: "formula",
            latex: "M = \\frac{d \\cdot 25}{f_{ob} \\, f_{ok}} = \\frac{160 \\cdot 25}{0{,}4 \\cdot 2{,}5} = \\frac{4000}{1} = 4000",
            description: "Perbesaran mikroskop.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$M$", meaning: "perbesaran total", unit: "tanpa satuan" },
              { symbol: "$d$", meaning: "panjang tubus", unit: "mm" },
              { symbol: "$f_{ob},f_{ok}$", meaning: "jarak fokus obyektif/okuler", unit: "mm" },
              { symbol: "$25$", meaning: "jarak baca mata normal", unit: "mm" },
            ],
          },
          { type: "paragraph", text: "Jadi perbesaran total 4000x." },
        ],
      },
      {
        type: "example",
        title: "Teleskop dan Resolusi",
        blocks: [
          {
            type: "paragraph",
            text: "Teleskop astronomi memiliki obyektif $f_{ob}=100$ cm dan okuler $f_{ok}=2{,}5$ cm. Tentukan perbesaran angular dan panjang teleskop tak berakomodasi.",
          },
          {
            type: "formula",
            latex: "M = \\frac{f_{ob}}{f_{ok}} = \\frac{100}{2{,}5} = 40",
            description: "Perbesaran teleskop bintang.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$M$", meaning: "perbesaran angular", unit: "tanpa satuan" },
              { symbol: "$f_{ob},f_{ok}$", meaning: "jarak fokus obyektif/okuler", unit: "cm" },
            ],
          },
          {
            type: "formula",
            latex: "d = f_{ob} + f_{ok} = 100 + 2{,}5 = 102{,}5 \\text{ cm}",
            description: "Panjang teleskop tak berakomodasi.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$d$", meaning: "panjang teleskop", unit: "cm" },
              { symbol: "$f_{ob},f_{ok}$", meaning: "jarak fokus", unit: "cm" },
            ],
          },
          { type: "paragraph", text: "Jadi perbesaran 40x dan panjang tabung 102,5 cm." },
        ],
      },
      {
        type: "example",
        title: "Sudut Kritis Serat Optik",
        blocks: [
          {
            type: "paragraph",
            text: "Serat optik memiliki inti indeks bias $n_1=1{,}48$ dan selubung $n_2=1{,}46$. Hitung sudut kritis untuk pemantulan sempurna.",
          },
          {
            type: "formula",
            latex: "\\theta_c = \\arcsin\\left(\\frac{n_2}{n_1}\\right) = \\arcsin\\left(\\frac{1{,}46}{1{,}48}\\right) = \\arcsin(0{,}9865) \\approx 80{,}6^\\circ",
            description: "Sudut kritis.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$\\theta_c$", meaning: "sudut kritis", unit: "derajat" },
              { symbol: "$n_1,n_2$", meaning: "indeks bias inti/selubung", unit: "tanpa satuan" },
            ],
          },
          { type: "paragraph", text: "Cahaya yang datang dengan sudut (terhadap sumbu) lebih besar dari 9,4 derajat terhadap sumbu inti akan dipantulkan sempurna." },
        ],
      },
      {
        type: "example",
        title: "Pembiasan Snell: Sudut Bias",
        blocks: [
          {
            type: "paragraph",
            text: "Sinar datang dari udara ($n_1=1$) ke air ($n_2=1{,}33$) dengan sudut datang 40 derajat terhadap normal. Berapa sudut bias?",
          },
          {
            type: "formula",
            latex: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1\\cdot \\sin 40^\\circ}{1{,}33} = \\frac{0{,}6428}{1{,}33} = 0{,}4833",
            description: "Hukum Snell.",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$n_1,n_2$", meaning: "indeks bias udara/air", unit: "tanpa satuan" },
              { symbol: "$\\theta_1$", meaning: "sudut datang", unit: "derajat" },
              { symbol: "$\\theta_2$", meaning: "sudut bias", unit: "derajat" },
            ],
          },
          {
            type: "formula",
            latex: "\\theta_2 = \\arcsin(0{,}4833) \\approx 28{,}9^\\circ",
            description: "Hasil sudut bias (mendekati normal).",
          },
          {
            type: "glossary",
            title: "Keterangan Simbol/Variabel",
            items: [
              { symbol: "$\\theta_2$", meaning: "sudut bias", unit: "derajat" },
            ],
          },
          { type: "paragraph", text: "Sudut bias 28,9 derajat (lebih kecil dari sudut datang) karena ke medium rapat." },
        ],
      },
      {
        type: "definition",
        term: "Optik geometrik vs fisis",
        definition: "Optik geometrik memperlakukan cahaya sebagai sinar lurus (cermin, lensa, pembiasan). Optik fisis memperlakukan cahaya sebagai gelombang (interferensi, difraksi, polarisasi). Keduanya saling melengkapi.",
      },
      {
        type: "paragraph",
        text: "Rangkuman optik: pemantulan $\\theta_i=\\theta_r$; pembiasan Snell $n_1\\sin\\theta_1=n_2\\sin\\theta_2$; cermin/lensa $1/f=1/s+1/s'$; perbesaran $M=|s'/s|$; kekuatan lensa $P=1/f$ dioptri. Kuasai konvensi tanda untuk menyelesaikan soal.",
      },
      {
        type: "list",
        items: [
          { text: "Cermin cekung: $f>0$; cembung: $f<0$." },
          { text: "Lensa cembung: $f>0$; cekung: $f<0$." },
          { text: "Bayangan nyata $s'>0$; maya $s'<0$." },
          { text: "Tegak $M>0$; terbalik $M<0$; diperbesar $|M|>1$." },
        ],
      },
      { type: "paragraph", text: "Dengan merangkum asas pemantulan, pembiasan, dan persamaan cermin/lensa, mayoritas soal optik dapat diselesaikan secara sistematis." },
      {
        type: "note",
        text: "Perhatian: Pada pembiasan (Snell), sudut dihitung terhadap GARIS NORMAL, bukan terhadap permukaan. Kesalahan umum TKA adalah memakai sudut terhadap permukaan.",
        variant: "warning",
      },
    ],
  },
];
