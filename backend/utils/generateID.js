const generateID = () => {
  const length = 6;
  const charaset = "0123456789";

  let id = "SSGI2023";
  for (let i = 0; i < length; i++) {
    id += charaset.charAt(Math.floor(Math.random() * charaset.length));
  }
  console.log(id);
};

generateID();
