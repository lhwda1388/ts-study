{
  /**
   * Enum 여러상수값들을 한곳에 모아놓는 타입
   * Javascript 에선 존재하지 않음
   */
  // Javascript style
  const MAX_NUM = 6;
  const MAX_STUDENTS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY, TUESDAY, WEDNESDAY });

  // Typescript

  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
  }

  console.log(Days);
  console.log(Days.Monday);
  let day: Days = Days.Wednesday;
  day = Days.Tuesday;
  day = 10; // 숫자가 할당이 가능함 타입이 정확하게 보장되지 않음.. 😡

  // Union으로 대체
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  const daysOfWeek: DaysOfWeek = "Tuesday";
}
