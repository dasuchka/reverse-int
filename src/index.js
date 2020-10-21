module.exports = function reverse(number){
    let str_number=String(number);
    if (number<0){
        str_number=String(-number);
    }
    let reverse_number='';
    for (let i=str_number.length-1; i>=0; i--){
        reverse_number=reverse_number+str_number[i];
    }
    return Number(reverse_number);
}
