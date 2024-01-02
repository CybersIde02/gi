document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('contentContainer');
    const nextButton = document.getElementById('nextButton');

    const pesan1 = "Heiii, kamuu...";
    const pesan2 = "Selamat Hari Berojol yahhh....";
    const pesan3 = "Jangan Kebanyakan Makan Seblak";
    const pesan4 = "Panjang Umur,... panjang panjang pokonya mah wkwkwk";
    const pesan5 = "Makin Dewasa dan Semoga Yang di Semogakan Tersemogakan";
    const pesan6 = "HBD ke 20 yahhhh....  Sorry ga bisa ngasih apa apa";
    const pesan7 = "Apa yang terlewat di 19 bisa tercapai di 20 ini aminnn....";
    // Lanjutkan dengan pesan-pesan untuk konten ke-3 hingga ke-7

    const contents = [
        { body: pesan1 },
        { body: pesan2 },
        { body: pesan3 },
        { body: pesan4 },
        { body: pesan5 },
        { body: pesan6 },
        { body: pesan7 },
        // Lanjutkan dengan pesan-pesan untuk konten ke-3 hingga ke-7
    ];

    let currentIndex = 0;

    function showContent(index) {
        const currentContent = contents[index];
        const contentBoxes = document.querySelectorAll('.content-box');

        contentBoxes.forEach((box, i) => {
            box.classList.remove('active');
            if (i === index) {
                const img = box.querySelector('img');
                img.src = `image${index + 1}.gif`; // Nama file gambar disesuaikan
                img.alt = `Image ${index + 1}`;
                box.querySelector('p').textContent = currentContent.body;
                box.classList.add('active');
            }
        });

        // Sembunyikan tombol "Selanjutnya" ketika mencapai Title 7
        nextButton.style.display = index === contents.length - 1 ? 'none' : 'block';
    }

    function nextContent() {
        if (currentIndex < contents.length - 1) {
            currentIndex++;
            showContent(currentIndex);
        }
    }

    nextButton.addEventListener('click', nextContent);

    // Tampilkan konten pertama saat halaman dimuat
    showContent(currentIndex);
});
