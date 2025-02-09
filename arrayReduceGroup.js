/*Sort each food by it's type and return an object in the format shown above.
No hardcoding string values!*/
        function group(foods){
            return foods.reduce((acc,curr) => {
                acc[curr.type] = acc[curr.type] || [];
                acc[curr.type].push(curr.food);
                return acc;
                
            }, {});

        }
        module.exports = group;