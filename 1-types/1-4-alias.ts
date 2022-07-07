{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "henry";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hw",
    age: 1,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let henryName: Name;
  // henryName = "hi"; // X
  henryName = "name"; // O
  type Bool = true;
  const isCat: Bool = true; // O
  // const isCat: Bool = false; // X
}
