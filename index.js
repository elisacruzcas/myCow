const information = require ('./information');
const cowsay = require ('cowsay');

const myCow = information.objet

console.log(cowsay.say ({
text: `Hello I'm ${myCow.name} from ${myCow.campus}  campus`    
}))
