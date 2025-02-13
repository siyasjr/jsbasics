//Create a function which retrieves the property name on this.

You can expect the property to exist.function thisName(){
    return this.name;
}
const newFunction = thisName.bind({name: "Bob"});
module.exports = newFunction;