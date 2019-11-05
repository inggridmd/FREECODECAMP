function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
      case 1 && "a":
        answer = "apple";
        break;
      case 2 && "b":
        answer = "bird";
        break;
      case 3 && "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  switchOfStuff("b");
  