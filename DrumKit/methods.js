function employee( name,age,location,language){
    this.name=name;
    this.age=age;
    this.language=language;
    this.location=location;
}
var employee1=new employee('Mihir',44,'Bangalore','English')
console.log(employee1)