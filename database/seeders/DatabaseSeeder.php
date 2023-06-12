<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Achievement;
use App\Models\Education;
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


        Experiences::create([
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

        Experiences::create([
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
            'slug' => 'politeknik-negeri-lhokseumawe',
            'department' => 'Teknik Informatika',
            'location' => 'Lhokseumawe',
            'status' => 'Mahasiswa',
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
            'title' => 'React JS',
            'slug' => 'react-js',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto unde voluptatibus facilis facere culpa. Est unde asperiores, dolore maxime aliquam, quam aut totam inventore sint, accusamus molestiae fugiat cupiditate!',
            'level' => 'Intermidiate',
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-react" width={180} height={180} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
            <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
            <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
            <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
            <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
            <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
            <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
          </svg>'
        ]);
    }
}
