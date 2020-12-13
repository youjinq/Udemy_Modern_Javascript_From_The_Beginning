// try catch to come neat error

const user = { email: "jdgo@gmail.com" };

try {
  //   reference error
  // myFunction();


  // typeerror
  // null.myFunction();

  //  syntaxerror
  // eval('Hello World!!"');


  // URIErrror

  // will produce a  URIError
  // decodeURIComponent('%');

  if(!user.name) {
    //   throw string by clg
    //throw 'User has no name';
    
    throw new SyntaxError('User has no name');
  }

} catch (error) {
    console.log(`User Error: ${error.message}`);
//   console.log(error);

  // // get msg of error
  // console.log(error.message);

  // // error name
  // console.log(error.name);
  // console.log(error instanceof TypeError);
//   console.log(` ${error.name} stupid!!`);
} finally {
  console.log("FInally run regardless of result....");
}
