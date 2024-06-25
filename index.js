/*
class App {
  constructor(){
    this.navbar = document.querySelector("#navbar");
    this.initEvents();
  }
  initEvents(){
    this.navbar.addEventListener("click", () => {
      console.log(this.navbar);
      this.navbar.remove();
    });
  }
}

class User {
  constructor(age){
    this.age = age;
  }
  getInfo(){
    const isLeagl = () => {
      return this.age >= 18;
    }
    return {
      age: this.age,
      isLeagl: isLeagl()
    };
  }
}
const user = new User(20);
console.log(user.getInfo());



const delay = (callback, milliseconds) => {
  setTimeout(callback, milliseconds);
};

delay(() => {
  console.log("this will be delayed 1 secand")
}, 3_000);


const canVote = age => {
  if (!age) {
    throw new Error(" age is required")
  }
  return age >= 18;
}
console.log(canVote(20));
try {
  canVote();
} catch (error) {
  console.error(error);
}
 const botton = document.querySelector("#app-button");
 botton.addEventListener("click", () => {
  try {
    document.querySelector("h1").remove();
  } catch (error) {
    console.error(error);
  }
 });
 */
const geetUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}
geetUser();

const get2 = async () => {
  const response = await
   fetch("https://jsonplaceholder.typicode.com/users")
   const data = await response.json();
   console.log(data)
}
get2();

const number = async () => {
  return 42;
}
number().then(value => {
  console.log(value)
});

const randoma = async () => {
  const rendNumber = Math.floor(Math.random() * 10);
  return rendNumber;
}
randoma().then(value => {
  console.log(value)
});

const getMini = async () => {
  return 18;
}
getMini().then(value => {
  console.log(value)
});

async function getValue() {
  return 240;
}
getValue().then(value => {
  console.log(value)
});

const getValue2 = async () => {
  return 240;
}
getValue2().then(value => {
  console.log(value)
});

const isAdmin = async type => {
  return type === "admin";
}
isAdmin("admin").then(value => {
  console.log(value)
})

class User22 {
  async isAdmin(type){
    return type === "admin";
  }
}
const user = new User22;
user.isAdmin("admin").then(value => {
  console.log(value)
})