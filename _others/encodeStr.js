const string = "aaaabccaadeeee";
/*
* expected output like.. [[a,4],[b,1],[c,2],[a,2][d,1],[e,4]]
*
*/

function encodeString(str){
    let res =[]
    let i =0 ;
    while(i<str.length){

        const char =str[i];

        let count = 1;

        let j = i+1;
        
        while(char == str[j]){
            count++;
            i++;
            j++
        }
        res.push([count,char])
        i++
    }
    return res;
}

console.log(encodeString(string));
