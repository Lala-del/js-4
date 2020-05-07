

function filterBy(arraySet,dataSet) {
     let newArraySet = [];
     arraySet.forEach((e)=>{
         // console.log(e);
         if (typeof(e) === dataSet){
         }
         else {
             newArraySet.push(e);
         }

     });
    return newArraySet;

}

console.log(filterBy(['lala',1998,'not happy',2020], 'number'));