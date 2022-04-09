class employee{
    constructor(getname,getexperience,getDivision)
    {
        this.name=getname;
        this.experience=getexperience;
        this.division=getDivision;
    }
     slogan(){
         return `i am ${this.name} amd thhis is companh`
     }
        experience(){
            return 2022-this.experience
        }
        static add(a,b){
            return a+b
        }
}

class programmer extends employee{
    constructor(getname,getexperience,getDivision,language,github)
    {
        super(getname,getexperience,getDivision)
        this.language=language
        this.github=github
    }
    fromexperience()
    {
        if(this.language=="python")
        return "python"
        else
        return "javascript"
    }
    static multiply(a,b){
        return a*b
    }

}
harsh=new programmer("harsh",3,"lays","python","rohan20")

console.log(harsh)
console.log(harsh.fromexperience())
console.log(programmer.multiply(3,4))


// harry=new employee("harry",56,"division")

// console.log(harry)
// console.log(employee.add(34,5))