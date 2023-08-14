it("Sem testes", () => {});

const getSomethig = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Respondendo...");
      resolve(11);
    }, 1000);
  });
};

const system = () => {
  console.log("init");
  const prom = getSomethig();
  prom.then((some) => {
    getSomethig(`Somenthing is ${some}`);
  });
  console.log("end");
};

system();
