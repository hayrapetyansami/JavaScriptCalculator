window.addEventListener('load', function () {
    var inp1 = document.querySelector('.inp1');
    var inp2 = document.querySelector('.inp2');
    var btn = document.querySelector('.btn');
    var res = document.querySelector('.res');
    var sel = document.querySelector('.sel');
    var refresh = [inp1, inp2, sel];
    
    btn.addEventListener('click', function () {
        var num1 = parseFloat(inp1.value);
        var num2 = parseFloat(inp2.value);
        var sum;

        switch(sel.value){
            case '+':
                sum = num1 + num2;
            break;
            case '-':
                sum = num1 - num2;
            break;
            case '/':
                sum = num1 / num2;

                if(num2 === 0){
                    sum = 'Թիվը չի արելի բաժանել 0Ի';
                }
            break;
            case '*':
                sum = num1 * num2;
            break;
        }

        res.innerHTML = sum;
        this.disabled = true;
    });

    for(var i = 0; i < refresh.length; i++){
        refresh[i].addEventListener('input', function () {
            btn.disabled = false;
        });
    };
});