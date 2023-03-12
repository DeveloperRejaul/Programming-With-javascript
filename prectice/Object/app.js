



const object01 = {

    name : 'Rejsul Karim',
    age : '22',
    propetion : 'Student',

    programer : function prog( e) {
    
        return this.myName + " " +this.nickName
    },

    programer02 : function prog() {
       return this.programer()


    },
     
    myName  : "Rahul",
    nickName : 'Ramjan'
}
console.log(object01.programer())

console.log(object01.programer02())






