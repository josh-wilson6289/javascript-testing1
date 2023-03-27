const {Builder} = require("selenium-webdriver");

async function example() {
  // launch the browser
  let driver = await new Builder().forBrowser("firefox").build();
  
  // navigate to application
  await driver.get("https://lambdatest.github.io/sample-todo-app/")
  //add a to-do

  // close the browser

}

example();