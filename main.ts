basic.forever(function () {
    let x = 0;
    let y=0;
    let i=0;
    for (y=0;y<=4;y++){
        for (i=0; i<=4; i++ ) {           
            if (y % 2 ==0) { x=i;
            } else { x=4 - i; }
        basic.pause(200)
        led.plot(x, y);          
        }
    }
    basic.pause(200)
    basic.clearScreen()
})
