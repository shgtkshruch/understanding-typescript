(() => {
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };

  // person.role.push('admin');
  // Type 'number' is not assignable to type 'string'.ts(2322)
  // person.role[1] = 10;

  // Type '[]' is not assignable to type '[number, string]'.
  // Source has 0 element(s) but target requires 2.
  // person.role = []

  // Type '[number, string, string]' is not assignable to type '[number, string]'.
  // Source has 3 element(s) but target allows only 2.
  // person.role = [0, 'admin', 'user']

  console.log(person.name);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }
})();
