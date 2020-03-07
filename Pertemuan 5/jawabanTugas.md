# Jawaban Pertanyaan Pertemuan 5

## Pertanyaan Praktikum 1
a. 1. perbedaan container dan container-fluid
    *container
    <img src="src/img/container.png">
    *container-fluid
    <img src="src/img/container_fuild.png">

    2. container-fluid, maka akan menggunakan max-width 100% meskipun ukuran browser dirubah, maka ukuran konten akan penuh 100% ukuran browser sedangkan container akan ada space di kanan kiri dan ketika ukuran browser dirubah, maka tampilan akan tetap sama seperti ukuran normal

b. untuk penggunakan framework CSS seperti boostrap, bulma, tailwind bisa menggunakan CDN atau bisa import dengan NPM, tetapi ketika ingin mengimport komponen react seperti react-router-dom maka harus import dengan NPM, cara import yaitu " NPM i 'nama module' "

## Pertanyaan Praktikum 2
a. agar server-json dan project reactJS bisa berjalan bersama
b. maka project reactJS tidak akan berjalan / tertimpa dengan server-json tersebut

## Pertanyaan Praktikum 3
a. Data akan terhapus
b. Data yang dihapus pada website akan menghilang, karena data yang ada pada listArtikel.json sudah seperti pada database biasa, maka data yang dihapus akan menghilang
c. fungsi untuk menghapus data sesuai dengan ID data
d. untuk gambar 1.18 syntax get datanya langsung pada fungsi ComponentDidMount() tetapi pada gambar 3.2 fungsi ComponentDidMount() memanggil fungsi yang isinya sama seperti pada gambar 1.18

## Pertanyaan Praktikum 4
a. Akan muncul data baru yang ditambahkan pada browser
b. karena pada fungsi ambilDataDariServerAPI() terdapat fungsi order pada fetch yaitu "_sort=id&_order=desc" yang berarti diurutkan sesuai dengan ID dengan desc / dari angkat terbesar
