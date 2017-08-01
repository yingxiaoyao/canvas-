
/**
 * Created by ying on 2016/8/22.
 */
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 500;
var RADIUS = 8;
var MAEFIN_TOP = 60;
var MARFIN_LEFT = 30;

window.onload = function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(ctx);


};

function render(ctx) {
    var hours = 12;
    var minutes = 34;
    var seconds = 56;

    renderDigit( MARFIN_LEFT , MAEFIN_TOP ,parseInt(hours/10) , ctx);
    renderDigit( MARFIN_LEFT + 15*(RADIUS+1) , MAEFIN_TOP ,parseInt(hours%10) , ctx);
    renderDigit( MARFIN_LEFT + 30*(RADIUS+1) , MAEFIN_TOP ,10 , ctx);
    renderDigit( MARFIN_LEFT + 39*(RADIUS+1) , MAEFIN_TOP ,parseInt(minutes/10) , ctx);
    renderDigit( MARFIN_LEFT + 54*(RADIUS+1) , MAEFIN_TOP ,parseInt(minutes%10) , ctx);
    renderDigit( MARFIN_LEFT + 69*(RADIUS+1) , MAEFIN_TOP ,10 , ctx);
    renderDigit( MARFIN_LEFT + 78*(RADIUS+1) , MAEFIN_TOP ,parseInt(seconds/10) , ctx);
    renderDigit( MARFIN_LEFT + 93*(RADIUS+1) , MAEFIN_TOP ,parseInt(seconds%10) , ctx);
}

function renderDigit (x , y , num , ctx) {
    ctx.fillStyle = 'teal';

    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if(digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1),y + i * 2 * (RADIUS + 1) + (RADIUS + 1) , RADIUS , 0 , 2 * Math.PI );
                ctx.closePath();

                ctx.fill();
            }

        }

    }
}