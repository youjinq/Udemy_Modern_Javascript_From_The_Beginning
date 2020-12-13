// metacharacter symbol

let re;
// literal characters
re= /hello/i;   

// metacharacter symbol
// ^ -must start with
// $- must end with
// . - match any one character
// *- match any character 0 ore more times

// ?- optional character
// y\?-  escape character in str
re= /^h/i;
re=/world$/i;
re=/^h.llo/i;
re=/^h*llo/i;
re=/gre?a?y/i;
re=/gre?a?y\?/i;




// string to match
const str = 'Grey?';



// log result
const result = re.exec(str);
console.log(result);

function reTest(re,str){
    if (re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} doest not matched ${re.source}`);
        
    }
}

reTest(re,str);