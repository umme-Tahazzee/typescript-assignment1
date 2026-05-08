
// Problem 1:
const filterEvenNumbers = (arr: number[] ):number[] =>{
        return (
            arr.filter((item:number)=>{
                return (
                    item%2===0
                )
            })
        )
}
 filterEvenNumbers([1, 2, 3, 4, 5, 6])



// Problem 2:

const reverseString = (str: string):string => {
     return str.split('').reverse().join('')
}

reverseString("typescript")

// Problem 3:

type stringOrNumber = string | number

const checkType = (input:stringOrNumber):string => {
     if(typeof input === 'string' ){
              return 'String'
         }

        else{
             return 'Number'
        }
}

checkType('Hello')

// problem 4 

const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <T , K extends keyof T>(obj: T, key: K) => {
     return obj[key]
}
getProperty(user, 'name');

//problem 5


interface IBook  {
      title : string
      author :  string
      publishedYear: number
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const toggleReadStatus = (book: IBook) => {
     const copiedBook = {...book, isread : true}
     return copiedBook
     
}

toggleReadStatus(myBook);


//Problem 6:


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


const student = new Student("Alice", 20, "A");
student.getDetails()


// problem 7 

const getIntersection = (arr1:number[], arr2:number[]):number[]  => {
   return (
      arr1.filter((item)=> arr2.includes(item))
    )
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);