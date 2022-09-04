/* You are given a set of five people with their names and age. */
const people = {
    '1' : {
        'name' : 'Rohan',
        'age' : 24
    },

    '2' : {
        'name' : 'Ujjwal',
        'age' : 27
    },
    '3' : {
        'name' : 'Tara',
        'age' : 18
    },
    '4' : {
        'name' : 'Sagar',
        'age' : 20
    },

    '5' : {
        'name' : 'Kumar',
        'age' : 21
    }
}

/* You need to make an array of names from people. Names should be arranged in ascending order of their age.*/
/* Write a function for the same. Hardcoding is not allowed. */
/* Write your code here.*/

var Aage = new Array(5);
const l=Object.keys(people).length;
for(var i=0 ; i<l; i++)
{
    Aage[i]=people[i+1].age;
}

Aage.sort();

var nam = new Array(5);

for(var i=0 ; i< l; i++)
{
    for(var j=1; j<=l; j++){
        if(people[j].age==Aage[i]){
            nam[i]=people[j].name;
        }
    }
}



/* You need to log the array of nams using console.log().*/
console.log(nam);
