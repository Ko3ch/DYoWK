function checkDay(){

    var c = parseInt(document.getElementById("b-day").value.slice(0,2));
    var y = parseInt(document.getElementById("b-day").value.slice(2,4));
    var mm = parseInt(document.getElementById("b-day").value.slice(5,7));
    var d = parseInt(document.getElementById("b-day").value.slice(8));

    var m = mm - 2;

    if(m === 0 || m === -1) { 
    var m1 = m + 12;
    var y1 = y - 1; 
    var dayOfTheWeek = Math.trunc(( d + ((13*m1-1)/5) + y1 + (y1/4) +(c/4)-2*c ) % 7);
    }
    else if(m !== 0 || m !== -1){
        dayOfTheWeek = Math.trunc(( d + ((13*m-1)/5) + y + (y/4) +(c/4)-2*c ) % 7);
    }
        

    var arrMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var arrFemale = ['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama'];

    if(document.getElementById('ak-radio').checked === false && document.getElementById('ak-radio-1').checked === false)
    alert("Empty field!!");

    else if(document.getElementById('ak-radio').checked === true) 
        for(var i = 0; i <= arrMale.length; i++){
            if(dayOfTheWeek === i) alert("Hey " + arrMale[i] + ".");
        }
    else if(document.getElementById('ak-radio-1').checked === true)
        for(var j = 0; j <= arrFemale.length; j++){
                if(dayOfTheWeek === j)
                    alert("Hello " + arrFemale[j] + ".");
                        } 
};
