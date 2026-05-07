
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

type guards = 'string' | 'number'

const checkType = (input:guards):string => {
     if(typeof(input) === 'string' ){
              return 'String'
         }

        else{
             return 'Number'
        }
}


console.log(checkType('karia'));