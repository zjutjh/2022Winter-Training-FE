interface Lesson<T> {
  name: string;
  beforeThis?: T | undefined
}


const arr: Lesson<any>[] = [];
const arr1: Array<Lesson<any>> = [];

function lesson(T: any) {

}

const chinese: BixiuLesson = {
  name: "chinese",
  score: 4
}

const pe: Lesson<any> = {
  name: "pe",
}

const math: Lesson<BixiuLesson> = {
  name: "math",
  beforeThis: chinese
}

interface BixiuLesson {
  name: string;
  score: number;
}


export default Lesson;

/*

struct Lesson {
  string name;
  string getName();
}

string Lesson::getName() {
  return this->name;
}

Lesson math;

*/