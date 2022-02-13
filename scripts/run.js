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
    [100, 50, 25, 70, 80]
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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
