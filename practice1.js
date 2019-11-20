var str1 = "background-color";
var rec1=[]
function camelize(str1){
  var rec = str1.split("-");
//   console.log(rec);
 rec1 = rec.map((item,index)=>{
   if(index === 0){
     return item;
   }
    return item[0].toUpperCase()+item.slice(1); 
  })
   .join('');
  console.log(rec1)
 
}

camelize(str1);