var pos=0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;
var questions = [

    ["Who directed The Space Odyssey?","Stanley Kubrick","Steven Speilberg","Martin Scorcese","James Cameroon","A"],
    ["x(2y)+3/6 is ? if x= 3 , y=2.","11","12","2.5","12.5","D"],
    ["In which year did India get independence ?","1950","1947","1962","1885","B"],
    ["Telangana lo land rate ela undi ?","naku thelidu","nenu cheppanu","kontava peekuthava?", "aduka thinu","C"]
];


function renderQuestion() {
    test = document.getElementById('test');
    if(pos>=questions.length){
        test.innerHTML = '<h2>'+correct+' correct out of'+questions.length +'</h2>';
        document.getElementById('test_status').innerHTML = "పరీక్ష అయిపోయింది";
        pos=0;
        correct=0;
        return false;

    }

    document.getElementById('test_status').innerHTML = "Question"+(pos+1)+"of"+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML =  '<h3>'+question+'</h3>';
    test.innerHTML +=  '<input type="radio" name="choices" value="A">'+chA+'<br>';
    test.innerHTML +=  '<input type="radio" name="choices" value="B">'+chB+'<br>';
    test.innerHTML +='<input type="radio" name="choices" value="C">'+chC+'<br>';
    test.innerHTML +='<input type="radio" name="choices" value="D">'+chD+'<br><br>';
    test.innerHTML +='<button  class="btn btn-primary" onclick="checkAnswer()">Submit</button>';


};

function checkAnswer() {
 choices = document.getElementsByName("choices");
 for (var i=0 ; i < choices.length ; i++){
     if (choices[i].checked){
         choice = choices[i].value;
     }
 }
    if(choice == questions[pos][5]){
        correct++
    }
    pos++;
    renderQuestion();
}

window.addEventListener('load',renderQuestion,false);