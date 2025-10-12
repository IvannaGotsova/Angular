function sayHello(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 10000); 
  });
}


async function sayHelloAsync() {
  console.log("Hello Async");
  const sayHelloResult = await sayHello();
  console.log(sayHelloResult);
}

sayHelloAsync();