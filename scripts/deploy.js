const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["CryptoCat", "CryptoDog", "CryptoWolf"],
    ["https://imgur.com/YMrN1eM.jpeg",
    "https://imgur.com/fHY5p43.jpeg",
    "https://imgur.com/NcGGoxh.jpeg"],
    [100, 200, 300],
    [100, 50, 25],
    "Thanos", // Boss name
    "https://bbts1.azureedge.net/images/p/full/2019/06/ab1b90f3-8669-47e4-83ed-e02b53f624a2.jpg", // Boss image
    100000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);


  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  console.log("Done deploying and minting!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
