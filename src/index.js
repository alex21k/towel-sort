module.exports = function towelSort (matrix) {
var newarr=[];

let x = 1;
let y = 0;
for (let l=1;l<matrix.length;l+=2) {
for (let k=0; k<matrix[y].length;k++)
newarr.push(matrix[y][k]);
y +=2;
for (let i=matrix[x].length-1; i>=0; i--)
newarr.push(matrix[x][i]);
x +=2;
}
return newarr;
}
