
//the following is an algorithm which lowers the rank of an array to 1
function ReduceToRankOne(arr) {
  var result=[];
  var temp;
  for(var i=0; i<arr.length; i++){
    temp=arr[i];
    if(!Array.isArray(arr[i])){
      result= result.concat(arr[i]);
    }
    else{
      result = result.concat(ReduceToRankOne(arr[i]));
    }
  }
  return result;
}

ReduceToRankOne(["a", [["b"]]]);
