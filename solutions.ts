
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
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(result);
