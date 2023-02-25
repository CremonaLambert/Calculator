(function(){
    //get element from html file

    let display = document.getElementById('display');
    // console.log(display.value);
    let buttons = document.querySelectorAll('.btnv');
    let del = document.querySelector('#delete');
    let clear = document.querySelector('#clear');
    let equal = document.querySelector('#equal');
    let answer = document.querySelector('#ans');
    let divBy = document.querySelector('#div_by');

    //how to get all the values per click

    buttons.forEach(function(btn){
        btn.addEventListener('click', function(e){
            onScreen = e.target.dataset.val;
            display.value = display.value + onScreen;
        })
    })

    // how to setup equal button

    equal.addEventListener('click', function(e){
        if(display.value === ''){
                display.value = "";
        }else{
            let result = eval(display.value);
            display.value = result;
        }
    })

    // how to clear value on the screen 

    clear.addEventListener('click', function(e){
        display.value = "";
    })

    //how to delete one number at a time on the screen

    del.addEventListener('click', function(e){
        display.value = display.value.slice(0,-1);
    })

    // how to display previous operation on screen

    answer.addEventListener('click', function(e){
        let ans = eval(display.value)
        display.value = ans;
    })

})();

/*
 <div class="innercontainer">
        <div class="display">
            <input type="text" id="display" value="">
        </div>
       
        <div class="keyboard">
            <div class="buttons">
                <button id="delete">DEL</button>
                <button id="clear">AC</button> 
                <button id="div_by">%</button>
                <button class="btn" data-val="/">/</button>
                <button class="btn" data-val="7">7</button>
                <button class="btn" data-val="8">8</button>
                <button class="btn" data-val="9">9</button>
                <button class="btn" data-val="*">*</button>
                <button class="btn" data-val="4">4</button>
                <button class="btn" data-val="5">5</button>
                <button class="btn" data-val="6">6</button>
                <button class="btn" data-val="-">-</button>
                <button class="btn" data-val="1">1</button>
                <button class="btn" data-val="2">2</button>
                <button class="btn" data-val="3">3</button>
                <button class="btn" data-val="+">+</button>
                <button class="btn" data-val="0">0</button>
                <button class="btn" data-val=".">.</button>
                <button id="ans">Ans</button>
                <button id="equal">=</button>
                            
            </div>
        </div>
</div>
*/

/*<div class="innercontainer">*/
const innercontainer = document.createElement('div');
innercontainer.className = 'innercontainer';
//---------------------
/*
    <div class="display">
        <input type="text" id="display" value="">
    </div>
*/
const display = document.createElement('div');
display.className = 'display';

const screenDisplay = document.createElement('input');
screenDisplay.type = 'text';
screenDisplay.id = 'display';
screenDisplay.value = '';
//------------------------