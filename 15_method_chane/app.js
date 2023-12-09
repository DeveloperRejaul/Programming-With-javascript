function Validation (value){
    this.value = value;
};

Validation.prototype = {
    string:function(){return this},
    object:function(){return this},
    array:function(){return this},
    boolean:function(){return this},
    email:function(){return this},
    number:function(){return this},
}
const validation = new Validation();
validation.email().array().string();