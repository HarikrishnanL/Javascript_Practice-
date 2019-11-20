let arr = [5, 3, 8, 1],arr1=[];

var filteredArray = (arr,a,b)=>{
  for(var ab=0 ; ab<b ; ab++){
    if(arr[ab]>a && arr[ab]<b){
       arr1.push(arr[ab]);
    }
    
  }
  return arr1
}
console.log(filteredArray(arr,1,10))