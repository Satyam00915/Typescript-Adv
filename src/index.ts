interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

//PICK

type UpdateProps = Pick<User, "name" | "age" | "password">;

function updateUser(updatedProps: UpdateProps) {
  //hit the database to update the user
  console.log(updatedProps.age);
}

updateUser({
  name: "",
  age: 20,
  password: "",
});


