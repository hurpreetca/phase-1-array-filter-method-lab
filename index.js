// Code your solution here
const drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(array, string)
{
   return array.filter(array => array.toUpperCase()=== string.toUpperCase())
}


function fuzzyMatch(array, string)
{
    return array.filter(function (name){
        if(name[0]===string[0])
        {
            return name;
        }
    })
}
function matchName(array, string)
{
   
    return array.filter(array=> array.name === string)
     
}
