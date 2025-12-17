const articleData = {
    id: 1,
    title: "Museum Mandala Wangsit Siliwangi",
    excerpt: "Pengalaman jalan-jalan di Museum Mandala Wangsit Siliwangi yang berada di Bandung dan mempelajari sejarahnya.",
    category: "Sejarah",
    date: "14 November 2025",
    author: {
        name: "Sammy",
        avatar: "./Penulis/Sammy.jpg",
        bio: "Perjalanan di Museum Mandala Wangsit Siliwangi"
    },
    heroImage: "./images/Foto 1.jpg",
    tags: ["Sejarah", "Jalan-jalan", "Museum"],
    content: [
        {
            type: "section",
            id: "pendahuluan",
            title: "Apa itu Museum Mandala Wangsit Siliwangi?",
            content: `
                <p>Museum Mandala Wangsit adalah museum yang menyimpan sejarah Bandung. Museum ini berada di Jl. Lembong, No.38 Braga, Bandung. Museum Mandala Wangsit Siliwangi berarti Mandala artinya tempat, Wangsit artinya pesan dan Siliwangi yang diambil dari Raja Padjajaran yaitu Prabu Siliwangi atau Kodam III Siliwangi.</p>
            `
        },
        {
            type: "section", 
            id: "peninggalan",
            title: "Apa saja peninggalan yang ada di Museum Mandala Wangsit Siliwangi?",
            content: `
                <p>Musuem Mandala Wangsit memiliki peninggalan berupa senjata (Contohnya. Badig, Keris, Kujang, Tombak), pakaian para pahlawan (Contohnya. H.Asan Arif, Kiai Agung Caringin, H. Jaenal Mustofa), alat kode (Contohnya. Bedug, Kentungan) dan lukisan yang beberapa diantaranya adalah lukisan yang dibuat oleh Bapak Endang Karmas.</p>
                
            `
        },
        {
            type: "section",
            id: "tujuan",
            title: "Tujuan Museum Mandala Wangsit Siliwangi?", 
            content: `
                <p>Museum Mandala Wangsit ini dibangun untuk mengabadikan sejarah perjuangan Komando Daerah Militer (Kodam) III yang beroperasi di Jawa Barat. Secara arsitektur Museum Mandala Wangsit dulunya adalah rumah seorang perwira pada masa pemerintahan kolonial Belanda. Museum Mandala Wangsit diresmikan oleh Presiden Soeharto pada 10 November 1980.</p>
            `
        },
        {
            type: "section",
            id: "manfaat",
            title: "Apa yang dapat dipelajari dari Museum Mandala Wangsit Siliwangi?", 
            content: `
                <p>Di dalam Museum Mandala Wangsit Siliwangi kita dapat mempelajari bahwa betapa sulitnya mereka untuk memperjuangkan tanah air kita dari para penjajah dan melindungi rakyat. Mereka rela berkorban meninggalkan semua kenyamanan mereka untuk tanah air kita. Mereka rela mempertaruhkan nyawa mereka untuk tanah air kita. Bahkan ada foto di museum yang menunjukkan wajah seorang pahlawan yang sudah tidak terbentuk itu semua hanya untuk tanah air kita. Jadi kita harus menghargai jasa para pahlawan bangsa yang gugur untuk btanah air kita.</p>
            `
        },
        {
            type: "section",
            id: "aturan",
            title: "Aturan khusus di Museum Mandala wangsit Siliwangi", 
            content: `
                <p>Aturan tambahan di Museum Mandala Wangsit Siliwangi adalah tidak boleh sembarangan memotret peninggalan yang ada di sana sehingga harus datang untuk bisa melihatnya. Hanya beberapa tempat tertentu yang di izinkan oleh pemandu museum untuk memotret.</p>
            `
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Micro Library Alun-alun Bandung?",
        date: "14 November 2025", 
        image: "./../Micro Library Bandung/images/Foto 1.jpg",
        href : "https://m-icro-library-alun-alun-bandung.vercel.app/"
    }
];
