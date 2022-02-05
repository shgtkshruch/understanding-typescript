(() => {
  enum Role2 {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR,
  }

  enum Role3 {
    ADMIN = 'Admin',
    READ_ONLY = 100,
    AUTHOR = 200,
  }

  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }
  const person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };

  console.log(person.name);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }

  if (person.role === Role.ADMIN) {
    console.log("管理者ユーザーです");
  }
})();

