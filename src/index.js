
// You should implement your task here.

module.exports = function towelSort (matrix) {
var newarr=[];
//for (let k=0; k<arr.length;k=k+1)
let x = 1;
let y = 0;
for (let l=1;l<arr.length;l+=2) {
for (let k=0; k<arr[y].length;k++)
newarr.push(arr[y][k]);
y +=2;
for (let i=arr[x].length-1; i>=0; i--)
newarr.push(arr[x][i]);
x +=2;
}
return newarr;
}
