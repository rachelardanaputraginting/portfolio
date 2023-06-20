<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Achievement;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Experiences;
use App\Models\Product;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::Create([
            'name' => 'Rachel Ardana Putra Ginting',
            'status' => 'Youtuber | Web Developer',
            'github' => 'https://www.github.com/rachelardanaputraginting',
            'location' => 'Lhokseumawe, Aceh',
            'email' => 'rachelardanaputraginting@gmail.com',
            'password' => bcrypt('password'),
        ]);

        Achievement::create([
            'user_id' => 1,
            'title' => 'Web Design Technology',
            'slug' => 'web-design-technology',
            'ranking' => 3,
            'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem debitis porro quaerat minus optio voluptas, eligendi alias sit iure voluptatem repellat illo eaque necessitatibus incidunt nulla amet eveniet, ullam obcaecati possimus, et ratione voluptatum modi dolorem pariatur? Eos, in voluptate.',
            'year' => 2021,
            'location' => 'Aceh',
            'division' => 'Web Design',
        ]);


        Experience::create([
            'user_id' => 1,
            'name' => "Kejaksaan Negeri Langsa",
            'slug' => 'kejaksaan-negeri-langsa',
            'position' => 'Operator',
            'description' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At suscipit aperiam quia totam doloremque voluptas quam aliquid provident inventore harum similique ex aliquam natus, minus soluta voluptate vitae! Temporibus, deserunt.',
            'entry_year' => '2021',
            'out_year' => '2021',
            'location' => 'Langsa',
            'status' => 'Intership',
            'picture' => 'https://flowbite.com/docs/images/blog/image-1.jpg',
        ]);

        Experience::create([
            'user_id' => 1,
            'name' => "Sari Roti Aceh Utara",
            'slug' => 'sari-roti-aceh-utara',
            'position' => 'Web Developer',
            'description' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At suscipit aperiam quia totam doloremque voluptas quam aliquid provident inventore harum similique ex aliquam natus, minus soluta voluptate vitae! Temporibus, deserunt.',
            'entry_year' => '2022',
            'out_year' => '2023',
            'location' => 'Lhokseumawe',
            'status' => 'Employee',
            'picture' => 'https://flowbite.com/docs/images/blog/image-1.jpg',
        ]);

        Education::create([
            'user_id' => 1,
            'name' => 'SMK Negeri 2 Langsa',
            'category' => 'informal',
            'slug' => 'smk-negeri-2-langsa',
            'department' => 'Rekayasa Perangkat Lunak',
            'year' => '2021',
            'location' => 'Langsa',
            'status' => 'Siswa',
            'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptates molestias expedita et porro, quasi odio exercitationem eum magni dolor deleniti consequuntur blanditiis similique veritatis facilis vero sed quia? Reprehenderit.',
            'picture' => 'https://flowbite.com/docs/images/blog/image-1.jpg',
        ]);

        Education::create([
            'user_id' => 1,
            'name' => 'Politeknik Negeri Lhokseumawe',
            'category' => 'formal',
            'slug' => 'politeknik-negeri-lhokseumawe',
            'department' => 'Teknik Informatika',
            'location' => 'Lhokseumawe',
            'status' => 'Mahasiswa',
            'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptates molestias expedita et porro, quasi odio exercitationem eum magni dolor deleniti consequuntur blanditiis similique veritatis facilis vero sed quia? Reprehenderit.',
            'picture' => 'https://flowbite.com/docs/images/blog/image-1.jpg',
        ]);

        Education::create([
            'user_id' => 1,
            'name' => 'Universitas Gadjah Mada',
            'category' => 'formal',
            'slug' => 'universitas-gadjah-mada',
            'department' => 'Teknik Informatika',
            'location' => 'Yogyakarta',
            'status' => 'Mahasiswa Non-Degree',
            'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptates molestias expedita et porro, quasi odio exercitationem eum magni dolor deleniti consequuntur blanditiis similique veritatis facilis vero sed quia? Reprehenderit.',
            'picture' => 'https://flowbite.com/docs/images/blog/image-1.jpg',
        ]);

        Product::create([
            'user_id' => 1,
            'title' => 'Aplikasi QR Cafe',
            'slug' => 'aplikasi-qr-cafe',
            'link' => 'https://qr_cafe.co.id',
            'description' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, quo autem! Ullam et dolorum necessitatibus iusto ab esse dolores quo nisi placeat amet repellat eos, sed pariatur corrupti? Vitae provident animi voluptas! Nulla reprehenderit nostrum ad harum, atque consequatur. Minus!',
            'picture' => Storage::url('https://flowbite.com/docs/images/blog/image-1.jpg'),
        ]);

        Skill::create([
            'user_id' => 1,
            'title' => 'HTML',
            'slug' => 'html',
            'category' => 'hard',
            'description' => 'Saya adalah seorang pengembang web yang telah menguasai HTML dengan pengalaman 3 tahun. Saya memiliki pengetahuan mendalam tentang bahasa markup HTML dan keahlian yang solid dalam membangun struktur halaman web yang kokoh. Selama 3 tahun, saya telah mengembangkan keterampilan dalam menggunakan tag-tag HTML dengan tepat, mengatur tata letak, menyisipkan gambar dan multimedia, serta membuat tautan dan formulir interaktif. Saya juga mampu menggabungkan HTML dengan CSS untuk menciptakan tampilan yang menarik dan responsif. Dalam perjalanan pengembangan web saya, saya telah menghadapi berbagai tantangan dan mempelajari praktik terbaik yang diperlukan untuk menciptakan situs web yang profesional dan sesuai dengan standar industri. Saya terus berkembang dan memiliki motivasi yang tinggi untuk terus memperluas pengetahuan dan keterampilan dalam bidang pengembangan web.',
            'level' => 3,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-html5" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />         <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />       </svg>'
        ]);

        Skill::create([
            'user_id' => 1,
            'title' => 'CSS3',
            'slug' => 'css',
            'category' => 'hard',
            'description' => 'Saya adalah seorang pengembang web profesional yang sangat terampil dalam penggunaan CSS untuk mengatur tampilan dan tata letak halaman web. Dengan pengalaman sebagai seorang profesional di bidang ini, saya memiliki pemahaman yang mendalam tentang properti CSS, termasuk selektor, pemformatan teks, pengaturan warna, tata letak responsif, dan animasi.

            Saya memiliki keahlian yang sangat mahir dalam memanfaatkan konsep kelas, id, dan hierarki dalam CSS untuk memberikan gaya yang konsisten dan profesional pada halaman web. Saya juga mampu menggabungkan CSS dengan HTML secara efektif, sehingga menciptakan tampilan yang menarik dan estetis.

            Dalam karir saya sebagai pengembang web profesional, saya telah menghasilkan efek visual yang memukau dengan menggunakan properti CSS secara cermat. Saya selalu mengoptimalkan pengalaman pengguna dan menciptakan desain yang responsif agar sesuai dengan kebutuhan proyek.

            Sebagai seorang profesional, saya memiliki pengetahuan mendalam tentang tren dan praktik terbaik dalam pengembangan web menggunakan CSS. Saya selalu mengikuti perkembangan terbaru dalam industri ini dan terus memperbarui keterampilan saya untuk menciptakan desain web yang modern dan menarik.',
            'level' => 3,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-css3" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />         <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />       </svg>'
        ]);

        Skill::create([
            'user_id' => 1,
            'title' => 'Javascript',
            'slug' => 'javascript',
            'category' => 'hard',
            'description' => 'Saya juga telah menguasai JavaScript di tingkat menengah. Dengan pengetahuan dan keterampilan saya dalam JavaScript, saya dapat membuat interaksi dan fungsionalitas dinamis pada halaman web.

            Sebagai seorang pengembang web yang menguasai JavaScript di tingkat menengah, saya memahami konsep dasar JavaScript, seperti variabel, tipe data, operator, pengulangan, dan pengkondisian. Saya juga mampu membuat fungsi untuk menjalankan tugas-tugas tertentu dan mengorganisasi kode dengan baik.

            Saya dapat menggunakan JavaScript untuk mengelola peristiwa (event) pada halaman web, menangani input pengguna, dan memberikan respons dinamis terhadap interaksi pengguna. Saya juga mampu memanipulasi elemen-elemen HTML dan CSS melalui JavaScript, mengubah konten halaman secara dinamis, atau membuat animasi dan efek visual.

            Dengan pemahaman tingkat menengah JavaScript, saya juga telah mengenal beberapa konsep yang lebih lanjut, seperti objek, metode, array, dan DOM (Document Object Model). Saya dapat memanfaatkan fitur-fitur ini untuk membuat aplikasi web yang lebih kompleks dan interaktif.

            Meskipun saya masih berada di tingkat menengah, saya telah membangun fondasi yang kuat dalam pemrograman JavaScript. Dengan pengalaman dan latihan yang lebih lanjut, saya dapat terus mengembangkan keterampilan saya dalam menguasai JavaScript dan menjadikannya alat yang lebih kuat dalam pengembangan web.',
            'level' => 2,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-javascript" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />         <path d="M7.5 8h3v8l-2 -1" />         <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />       </svg>'
        ]);

        Skill::create([
            'user_id' => 1,
            'title' => 'Bootstrap',
            'slug' => 'bootstrap',
            'category' => 'hard',
            'description' => 'Saya juga mahir dalam menggunakan framework Bootstrap. Dengan pengetahuan dan keterampilan saya dalam Bootstrap, saya dapat mengembangkan tampilan yang responsif dan estetis untuk aplikasi web.

            Sebagai seorang pengembang web yang mahir dalam Bootstrap, saya memahami struktur dasar Bootstrap dan bagaimana mengintegrasikannya dengan HTML dan CSS. Saya bisa dengan mudah memanfaatkan komponen-komponen Bootstrap, seperti grid system, navigasi, tombol, formulir, jumbotron, dan banyak lagi, untuk membangun tampilan yang konsisten dan modern.

            Saya juga mampu menggunakan fitur responsif Bootstrap untuk memastikan bahwa halaman web yang saya kembangkan dapat menyesuaikan dengan berbagai perangkat dan ukuran layar. Saya dapat membuat tata letak yang responsif dengan mudah menggunakan kelas-kelas yang disediakan oleh Bootstrap.

            Selain itu, saya juga memahami cara menyesuaikan dan menyesuaikan gaya Bootstrap sesuai dengan kebutuhan proyek. Saya dapat menggunakan Sass atau variabel kustom Bootstrap untuk membuat tampilan yang unik dan sesuai dengan brand atau desain yang diinginkan.

            Dengan kemahiran saya dalam Bootstrap, saya dapat menghemat waktu dan usaha dalam pengembangan tampilan web yang responsif dan modern. Saya terus mengikuti perkembangan terbaru dalam framework ini dan mencari cara untuk memanfaatkannya secara efektif dalam pengembangan web saya.',
            'level' => 3,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bootstrap" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />         <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />         <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />       </svg>'
        ]);
        Skill::create([
            'user_id' => 1,
            'title' => 'PHP',
            'slug' => 'php',
            'category' => 'hard',
            'description' => 'Selain menguasai HTML, CSS, dan JavaScript, saya juga mahir dalam bahasa pemrograman PHP. Dengan pengetahuan dan keterampilan saya dalam PHP, saya dapat mengembangkan aplikasi web yang dinamis dan interaktif.

            Sebagai seorang pengembang web yang mahir dalam PHP, saya memahami konsep dasar pemrograman seperti variabel, tipe data, pengulangan, pengkondisian, dan fungsi. Saya juga memiliki pemahaman yang kuat tentang manipulasi string, pengelolaan file, dan pengolahan formulir dalam PHP.

            Saya dapat membuat koneksi ke database menggunakan PHP dan mengambil data dari database untuk ditampilkan dalam halaman web. Saya juga bisa menyimpan data yang dikirimkan oleh pengguna ke dalam database dan melakukan operasi CRUD (Create, Read, Update, Delete) pada data.

            Dalam pengembangan web, saya menggunakan kerangka kerja PHP seperti Laravel atau CodeIgniter untuk mempercepat proses pengembangan dan memanfaatkan fitur-fitur yang tersedia dalam kerangka kerja tersebut.

            Dengan kemahiran saya dalam PHP, saya dapat mengembangkan aplikasi web yang kompleks, seperti sistem manajemen konten (CMS), aplikasi e-commerce, atau aplikasi berbasis database lainnya.

            Saya terus memperbarui pengetahuan saya tentang PHP dengan mengikuti perkembangan terbaru dalam bahasa ini dan selalu mencari cara untuk meningkatkan keterampilan pemrograman saya dalam PHP.',
            'level' => 3,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-php" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />         <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />         <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />         <path d="M12 7.5l-1 5.5" />         <path d="M11.6 10h2.4l-.5 3" />       </svg>'
        ]);
        Skill::create([
            'user_id' => 1,
            'title' => 'Team Work',
            'slug' => 'team-work',
            'category' => 'soft',
            'description' => 'Selain menguasai HTML, CSS, dan JavaScript, saya juga mahir dalam bahasa pemrograman PHP. Dengan pengetahuan dan keterampilan saya dalam PHP, saya dapat mengembangkan aplikasi web yang dinamis dan interaktif.

            Sebagai seorang pengembang web yang mahir dalam PHP, saya memahami konsep dasar pemrograman seperti variabel, tipe data, pengulangan, pengkondisian, dan fungsi. Saya juga memiliki pemahaman yang kuat tentang manipulasi string, pengelolaan file, dan pengolahan formulir dalam PHP.

            Saya dapat membuat koneksi ke database menggunakan PHP dan mengambil data dari database untuk ditampilkan dalam halaman web. Saya juga bisa menyimpan data yang dikirimkan oleh pengguna ke dalam database dan melakukan operasi CRUD (Create, Read, Update, Delete) pada data.

            Dalam pengembangan web, saya menggunakan kerangka kerja PHP seperti Laravel atau CodeIgniter untuk mempercepat proses pengembangan dan memanfaatkan fitur-fitur yang tersedia dalam kerangka kerja tersebut.

            Dengan kemahiran saya dalam PHP, saya dapat mengembangkan aplikasi web yang kompleks, seperti sistem manajemen konten (CMS), aplikasi e-commerce, atau aplikasi berbasis database lainnya.

            Saya terus memperbarui pengetahuan saya tentang PHP dengan mengikuti perkembangan terbaru dalam bahasa ini dan selalu mencari cara untuk meningkatkan keterampilan pemrograman saya dalam PHP.',
            'level' => 3,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-php" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />         <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />         <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />         <path d="M12 7.5l-1 5.5" />         <path d="M11.6 10h2.4l-.5 3" />       </svg>'
        ]);
        Skill::create([
            'user_id' => 1,
            'title' => 'Public Speaking',
            'slug' => 'public-speaking',
            'category' => 'soft',
            'description' => 'Selain menguasai HTML, CSS, dan JavaScript, saya juga mahir dalam bahasa pemrograman PHP. Dengan pengetahuan dan keterampilan saya dalam PHP, saya dapat mengembangkan aplikasi web yang dinamis dan interaktif.

            Sebagai seorang pengembang web yang mahir dalam PHP, saya memahami konsep dasar pemrograman seperti variabel, tipe data, pengulangan, pengkondisian, dan fungsi. Saya juga memiliki pemahaman yang kuat tentang manipulasi string, pengelolaan file, dan pengolahan formulir dalam PHP.

            Saya dapat membuat koneksi ke database menggunakan PHP dan mengambil data dari database untuk ditampilkan dalam halaman web. Saya juga bisa menyimpan data yang dikirimkan oleh pengguna ke dalam database dan melakukan operasi CRUD (Create, Read, Update, Delete) pada data.

            Dalam pengembangan web, saya menggunakan kerangka kerja PHP seperti Laravel atau CodeIgniter untuk mempercepat proses pengembangan dan memanfaatkan fitur-fitur yang tersedia dalam kerangka kerja tersebut.

            Dengan kemahiran saya dalam PHP, saya dapat mengembangkan aplikasi web yang kompleks, seperti sistem manajemen konten (CMS), aplikasi e-commerce, atau aplikasi berbasis database lainnya.

            Saya terus memperbarui pengetahuan saya tentang PHP dengan mengikuti perkembangan terbaru dalam bahasa ini dan selalu mencari cara untuk meningkatkan keterampilan pemrograman saya dalam PHP.',
            'level' => 3,
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-php" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">         <path stroke="none" d="M0 0h24v24H0z" fill="none" />         <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />         <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />         <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />         <path d="M12 7.5l-1 5.5" />         <path d="M11.6 10h2.4l-.5 3" />       </svg>'
        ]);
    }
}
