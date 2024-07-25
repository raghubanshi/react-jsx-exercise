function App() {
  return (
    <div>
      <Person
        name="Praveen"
        age={25}
        hobbies={["gaming", "watching", "reading"]}
      />
      <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Lisa"
        age={8}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
  );
}
