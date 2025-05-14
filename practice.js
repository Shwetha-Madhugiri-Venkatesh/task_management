var object = {
    "shwetha": 1,
    "manu": 2,
};
var User = /** @class */ (function () {
    function User(obj) {
        this.item = [];
        this.index = [];
        this.value = [];
        this.index = Object.keys(obj);
        this.value = Object.values(obj);
        for (var x = 0; x < this.index.length; x++) {
            this.item[this.index[x]] = this.value[x];
        }
    }
    return User;
}());
var user = new User(object);
console.log(user);
