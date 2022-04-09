function fruitsIterator(values)
{
    let nextIndex=0;
// we will retunr an object
    return {
        next:function(){
            if (nextIndex<values.length){
                //we will return this object   
               return {
                    value:values[nextIndex++],
                    done:false

                }
            }
                else{
                    //we will return below object with inly done
                   return {
                        done:true

                    }
                }
            }

    }
}

const myarray=['apples','grapes','oranges']

//using the iterator

const fruits=fruitsIterator(myarray)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)