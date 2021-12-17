var dateelement = document.createElement('input');
dateelement.setAttribute('type', 'date');
dateelement.setAttribute('id', 'date');
document.body.append(dateelement);

var button = document.createElement('button');
button.innerHTML = "Display data";
button.className = "btn btn-primary";
button.setAttribute('type', 'button');
button.addEventListener('click', displaydata);
document.body.append(button);

function displaydata(){
    let input = document.getElementById("date").value;
    if(Date.parse(input)){
        var inputdate = new Date(input);
        var currentdate = new Date();
        console.log(inputdate, currentdate);
        var millidiff = currentdate.getTime() - inputdate.getTime();
        console.log(millidiff);

        var seconds = millidiff / 1000;
        console.log(Math.floor(seconds));

        var minutes = seconds / 60;
        console.log(Math.floor(minutes));

        var hour = minutes / 60;
        console.log(Math.floor(hour));

        var day = hour / 24;
        console.log(Math.floor(day));

        var year = currentdate.getFullYear() - inputdate.getFullYear();
        console.log(year);

        var month = (year * 12) + (currentdate.getMonth() - inputdate.getMonth());
        console.log(month);

        var week = day / 7;
        console.log(Math.floor(week));
    }
    else{
        console.log("Give a proper valid date");
    }

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "Given Inputdate is " + inputdate + " and the current date is " + currentdate;
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total milli seconds are " + millidiff;
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total seconds are " + (Math.floor(seconds));
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total minutes are " + (Math.floor(minutes));
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total hours are " + (Math.floor(hour));
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total days are " + (Math.floor(day));
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total years are " + (Math.floor(year));
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total months are " + (Math.floor(month));
    p.setAttribute('id', 'output');
    document.body.append(p);

    var p = document.createElement('p');
    p.style.textAlign = "center";
    p.innerHTML = "The total weeks are " + (Math.floor(week));
    p.setAttribute('id', 'output');
    document.body.append(p);
}




