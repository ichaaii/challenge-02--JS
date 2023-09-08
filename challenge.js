// Soal no 1
function changeWord(selectedText, changedText, text) {
  const newText = text.replace(selectedText, changedText);
  return newText;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log("Soal 1");
console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));

//soal no 2
const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "undefined") {
    return "Error : Bro where is the parameter?";
  } else if (typeof givenNumber !== "number") {
    return "Error : Invalid data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log("\nSoal 2");
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("n"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

//soal no 3
function getAngkaTerbesarKedua(dataAngka) {
  if (typeof dataAngka === "undefined") {
    return "Error : Bro where is the parameter?";
  }
  if (!dataAngka) {
    return "Error : The values entered do not match";
  }
  const sorting = dataAngka.sort(function (a, b) {
    return b - a;
  });
  return sorting[1];
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log("\nSoal 3");
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

//soal no 4
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualanSepatu) {
  if (typeof dataPenjualanSepatu === "undefined") {
    return "Error : Bro where is the parameter?";
  }
  let totalpenjualan = 0;

  dataPenjualanSepatu.forEach((data) => {
    totalpenjualan += data.totalTerjual;
  });
  return totalpenjualan;
}

console.log("\nSoal 4");
console.log(getTotalPenjualan(dataPenjualanPakAldi));

//soal no 5
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualanBuku) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let bukuTerlaris = 0;
  let persentaseKeuntungan = 0;

  dataPenjualanBuku.forEach((data) => {

    //Perhitungan keuntungan dan Modal hari ini saja
    const keuntungan = (data.hargaJual - data.hargaBeli) * data.totalTerjual;
    totalKeuntungan += keuntungan;

    totalModal += data.hargaBeli * data.totalTerjual;

    //Perhitungan keuntungan dan Modal semuanya bersama sisa stok
    // const keuntungan = data.hargaJual * data.totalTerjual -
    // data.hargaBeli * (data.sisaStok + data.totalTerjual)
    // totalKeuntungan += keuntungan;
    // totalModal += data.hargaBeli * (data.sisaStok + data.totalTerjual);

    if (data.totalTerjual > bukuTerlaris) {
      bukuTerlaris = data.totalTerjual;
      produkBukuTerlaris = data.namaProduk;
      penulisTerlaris = data.penulis;
    }
  });

  // Menghitung persentase keuntungan
  persentaseKeuntungan =
    ((totalKeuntungan / totalModal) * 100).toFixed(2) + " %";

  // Membuat objek hasil
  const hasil = {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    persentaseKeuntungan,
    produkBukuTerlaris,
    penulisTerlaris,
  };
  return hasil;
}

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

console.log("\nSoal 5");
console.log(getInfoPenjualan(dataPenjualanNovel));
