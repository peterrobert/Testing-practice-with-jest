const checkString = (data) => {

    let check = typeof data;


    return {
        check,
    };

}


const reverseString = (string) => {

    let arr = [];

    for (let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }

    let reverseAns = arr.reverse();
    let ans = reverseAns.join(" ");

    return ans

}


checkString('hey there am using whats app.');
reverseString('hey there am using whats app.');


module.exports = {
    checkString,
    reverseString
}