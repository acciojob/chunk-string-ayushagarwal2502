function stringChop(str, size) {
  // your code here
	  // your code here
 let ans=[];
     if(str==='' || str===null){
	return [];
  }
  for (let i = 0; i < str.length; i += size) {
     let sliced = str.slice(i, i+size);
     ans.push(sliced);
  }

  return ans;
} 


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
