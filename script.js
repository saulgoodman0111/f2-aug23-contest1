let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    function myFunc1(arrObject) {
        if(arrObject.profession == 'developer')
        return arrObject;
    }
    let newArr = arr.map(myFunc1);
    console.log(newArr);
  }

  
  function addData() {
    //Write your code here, just console.log
    let newObj = {
        id:4,
        name:"susan",
        age:"20",
        profession:"intern"
    };
    arr.push(newObj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    function myFunc2(arrObject){
        if(arrObject.profession != 'admin')
        return arrObject;
    }
    let newArr2 = arr.filter(myFunc2);
    console.log(newArr2);
  }

  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        {id: 5, name: 'rocky', age: 26, profession: 'boxer'},
        {id: 6, name: 'michael scott', age: 40, profession: 'regional manager'},
        {id: 7, name: 'walter white', age: 52, profession: 'teacher'}
    ];
    const ans = arr.concat(arr2);
    console.log(ans);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }