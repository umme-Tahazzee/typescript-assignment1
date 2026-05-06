// Problem 1:
const filterEvenNumbers =(arr) =>{
        return (
            arr.filter((item)=>{
                return (
                    item%2===0
                )
            })
        )
}
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(result);
