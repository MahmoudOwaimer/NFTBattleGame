const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Wolf", "Cow", "Monkey", "Dog", "Lion"],
    [
      "https://image.shutterstock.com/image-vector/wolf-head-color-glowing-artwork-600w-1517648312.jpg",
      "https://image.shutterstock.com/image-vector/cow-head-artwork-illustration-glow-600w-1517650835.jpg",
      "https://image.shutterstock.com/image-vector/monkey-artwork-glow-dark-600w-1517951807.jpg",
      "https://image.shutterstock.com/image-vector/glow-color-gradation-ethnic-dog-600w-1518846761.jpg",
      "https://image.shutterstock.com/image-vector/glow-color-lion-head-artwork-600w-1517955278.jpg"
    ],
    [100, 200, 300, 400, 500],
    [100, 50, 25, 70, 80],
    "Thanos", // Boss name
    "https://bbts1.azureedge.net/images/p/full/2019/06/ab1b90f3-8669-47e4-83ed-e02b53f624a2.jpg", // Boss image
    100000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  txn = await gameContract.attackBoss();
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
