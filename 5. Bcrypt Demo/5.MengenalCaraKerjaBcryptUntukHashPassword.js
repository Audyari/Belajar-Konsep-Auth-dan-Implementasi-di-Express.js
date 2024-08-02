// 5. Mengenal Cara Kerja Bcrypt Untuk Hash Password

const bcrypt = require("bcrypt");

// const salt = bcrypt.genSaltSync(10);

// const hash = bcrypt.hashSync('password', salt);

// console.log(bcrypt)
// console.log(salt)
// console.log(hash)

const hashPassword = async (password ) => {
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  console.log(salt);
  console.log(hash);
};

// hashPassword("password")

const login = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);

  console.log(result); // $2b$10$rLji23J/PpJYNDPMfvDGOepjK9wtMUSh87uniiKuQT4ydo2zGFZwG

  if (result) {
    console.log("Login Berhasil");
  } else {
    console.log("Login Gagal");
  }
};

hashPassword("password")
login("password", "$2b$10$WT8BY.pd04vkz3CDIJe36Oix6IfMMx8zug8tvo/C36oDuWZtnk3ye")



