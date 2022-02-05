(() => {
  const person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
  };

  // let favoriteActivities: string[];
  // favoriteActivities = ["Sports"];

  // let favoriteActivities: any[];
  // favoriteActivities = ["Sports", 1];

  console.log(person.name);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // Property 'map' does not exist on type 'string'.ts(2339)
    // console.log(hobby.map());
  }
})();
