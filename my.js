const value1 = Number (prompt('v1')) || 0;

const value2 = Number (prompt('v2')) || 0;

const value3 = Number (prompt('v3')) || 0;




if (value1 <= value2 && value2  <= value3) {
    alert(value1 + ','  + value2 +  ','  + value3);
}else if (value3 <= value2 && value2  <= value1) {
    alert(value3 + ','  + value2 +  ','  + value1);
}else if (value2 <= value3 && value3  <= value1) {
    alert(value2 + ','  + value3 +  ','  + value1);
}else if (value1 <= value3 && value3  <= value2) {
    alert(value1 + ','  + value3 +  ','  + value2);
}else if (value2 <= value1 && value1  <= value3) {
    alert(value2 + ','  + value1 +  ','  + value3);
}else if (value3 <= value1 && value1  <= value2) {
    alert(value3 + ','  + value1 +  ','  + value2);
}