// for the assignment we need a timer to count down from 50 to 0 in 5 second increments and show "blastoff" at 0
// for my example we are going to count down from 20 to 0 in 2 second increments and show "blastoff" at 0
function blastOffTimer(){
    console.log("blastOffTimer() started");
    var currTime = 50;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log("50");
    currTime = currTime -5
    setTimeout(function(){
console.log(currTime);
document.getElementById("blastOffText").innerHTML = currTime;
currTime = currTime -5
    }, 5000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime -5
            }, 10000);
            setTimeout(function(){
                console.log(currTime);
                document.getElementById("blastOffText").innerHTML = currTime;
                currTime = currTime -5
                    }, 15000);
                    setTimeout(function(){
                        console.log(currTime);
                        document.getElementById("blastOffText").innerHTML = currTime;
                        currTime = currTime -5
                            }, 20000);
                            setTimeout(function(){
                                console.log(currTime);
                                document.getElementById("blastOffText").innerHTML = currTime;
                                currTime = currTime -5
                                    }, 25000);
                                    setTimeout(function(){
                                        console.log(currTime);
                                        document.getElementById("blastOffText").innerHTML = currTime;
                                        currTime = currTime -5
                                            }, 30000);
                                            setTimeout(function(){
                                                console.log(currTime);
                                                document.getElementById("blastOffText").innerHTML = currTime;
                                                currTime = currTime -5
                                                    }, 35000);
                                                    setTimeout(function(){
                                                        console.log(currTime);
                                                        document.getElementById("blastOffText").innerHTML = currTime;
                                                        currTime = currTime -5
                                                            }, 40000);
                                                            setTimeout(function(){
                                                                console.log(currTime);
                                                                document.getElementById("blastOffText").innerHTML = currTime;
                                                                currTime = currTime -5
                                                                    }, 45000);
                                                                    setTimeout(function(){
                                                                        console.log("Blast OFF!");
                                                                        document.getElementById("blastOffText").innerHTML = currTime;
                                                                        currTime = currTime -5
                                                                            }, 50000);
}
