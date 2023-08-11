it("Sem testes", () => {});

const getSomethig = () => {
    setTimeout(() => {
        console.log('Respondendo...')
        return 11;
    }, 1000)
}

const system = () => {
  console.log("init");
  const something = getSomethig();
  console.log(`Somenthing is ${something}`);
  console.log("end");
};

system();
