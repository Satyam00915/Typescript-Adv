// interface Config {
//   endpoint: string;
//   apikey: string;
// }

// const config: Readonly<Config> = {
//   endpoint: "https://api.example.com",
//   apikey: "sdajsndnas  dl",
// };

// // config.endpoint = "asbdaskj kjnj";

// console.log(config.endpoint);

//Records

// Not so good way of doing it
interface User {
  name: string;
  age: number;
}

// interface Users {
//   [key: string]: User;
// }

const users: Users = {
  lucifer915: {
    name: "satyam",
    age: 20,
  },
  absdjab: {
    name: "asds",
    age: 45,
  },
};

// Perfect way of doing it is using records

type Users = Record<string, User>;

//THis tells that the key is a string and value is a type User.
// This is how u handle types of Objects.
