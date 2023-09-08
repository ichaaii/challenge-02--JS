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
  if ( typeof givenNumber === "undefined") {
    return "Error : Bro where is the parameter?";
  } else if ( typeof (givenNumber) !== "number") {
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
function getAngkaTerbesarKedua (dataAngka){
  if (typeof dataAngka === "undefined") {
    return "Error : Bro where is the parameter?";
  }
  if (!dataAngka){
    return "Error : The values entered do not match"
  }
  const sorting = dataAngka.sort(function(a,b){
    return b-a
  })
  return sorting[1]
}
const dataAngka = [9,4,7,7,4,3,2,2,8];

console.log("\nSoal 3")
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())

//soal no 4
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

  // function getTotalPenjualan(dataPenjualanSepatu){
  //   if(!Array.isArray(dataPenjualanSepatu)){
  //     return "Harus berupa array";
  //   }

  //   const totalPenjualan = dataPenjualanSepatu.reduce((total, sepatu) => {
  //     if(sepatu.totalTerjual && typeof sepatu.totalTerjual === "number"){
  //       return total + sepatu.toatalTerjual;
  //     }
  //     else {
  //       return total;
  //     }
  //   }, 0);

  //   return totalPenjualan;
  // }


  function getTotalPenjualan(dataPenjualanSepatu){
    return dataPenjualanSepatu.reduce((a, b) => {
      return {
        totalTerjual : a.totalTerjual + b.totalTerjual
      }
    })
  }
  console.log("\nSoal 4");
  console.log(getTotalPenjualan(dataPenjualanPakAldi))

  //soal no 5
  const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

  function getInfoPenjualan(dataPenjualanBuku){

  }

  console