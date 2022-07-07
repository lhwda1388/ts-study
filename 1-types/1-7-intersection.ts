{
  /**
   * Intersection Types: AND - &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  interWork({
    name: "hw",
    score: 1,
    empolyeeId: 1231,
    work: () => {},
  });
}
