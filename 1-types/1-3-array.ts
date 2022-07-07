{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class 등으로 대체 하는게 좋음
  // 서로다른 타입을 함꼐 가질수 있는 배열
  // 사용 권장 하지 않으나 사용처에 따라 잘사용하면 사용가능 -> 리액트 useState등에선 사용
  let students: [string, number];
  students = ["name", 123];
  console.log(students[0]); // name
  console.log(students[1]); // 123
  // 비구조적 할당(destruct)
  const [name, age] = students;
  // ex) [name, setName] = useState<string>();
}
