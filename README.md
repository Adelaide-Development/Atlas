# Atlas  
Cupertino's Node.js API.    
[Documentation](https://github.com/Cupertino-Development/docs/tree/master/Atlas)    
# NOTE:  
Every class method must return a value, like so:  
```
const Base = require("./base")

class example extends Base {

    constructor() {
        super(Base)
    }

    test(number, result) {
        if (result) {
            return result(number)
        } else {
            return console.log(number)
        }
    }

}

module.exports = example
```
