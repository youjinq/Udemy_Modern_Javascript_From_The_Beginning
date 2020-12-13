// character set

let re;

re=/gre?a?y\?/i;

// bracket [] - must be any character within the bracket; but blank not accepted to match

re=/gr[ae]y/i;
re=/[GF]rey/i; //must be g or f
re=/[^GF]rey/i; //match anything except g or f
re=/^[GF]rey/i; //start with ^ (dont confused)
re=/^[A-Z]rey/; //match any uppercase letter or just put /i
re=/^[a-z]rey/; //match any uppercase letter
re=/^[A-Za-z]rey/; //match any letter

re=/[0-9]ray/; //match any digit


// Quantifiers - specific certain number of character
re=/He{2}o/i; //must occur exactly {m} amount of times exp two "ll" in Hello
re=/He{2,4}o/i; //must occur exactly {m to n} amount of times
re=/He{2,}o/i; //must occur at least {m} amount of times


// parethesis()- grouping
re=/([0-9]x{3})/;

re=/[Gr]ey/i; //any number in blanket

// shorthand character class-part 4
re=/\w/; //word character-alphanumeric or _  output 3
re=/\w+/; //word character-alphanumeric or _ output 3x3x3x
re=/\W+/; // NON word character-alphanumeric exp. ! ; "";

re=/\d+/; // match any digit and plus   output 3x3x3x
re=/\D+/; // match non any digit and plus  exp. e; h; ...


re=/\s/; // match whitespace char only
re=/\S/; // match whitespace char only

re=/Hell\b/i; // word boundary  -find the world exatacly if found many word are abit similar *


// assertions

re=/x(?=y)/;  // match x only if followed by y    *
re=/x(?=!y)/;  // match x only if not followed by y    *


 






// string to match
const str='Hello xy';
// const str = 'Grey';
// const str='3x3x3x';



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