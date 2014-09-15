function CustomAlert(){
    
    //dialog passes in from Alert.render(here)
    this.render = function(dialog){
        //sizes window for overlay
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        //gets html elements
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        
        //formats overlay
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        
        //formats dialog box on screen
        dialogbox.style.left = (winW/2) - (550 * .5) + "px";
        dialogbox.style.top = "250px";
        dialogbox.style.display = "block";
        
        //target the header and add dynamically
        document.getElementById('dialogboxhead').innerHTML = "Mortgage Calculator";
        document.getElementById('dialogboxfoot').innerHTML = '<button id="okbtn" onclick="Alert.ok()">OK</button>';
        
    }//end this.render
    
    this.ok = function(){
        //remove dialog box/overlay from visibility on OK
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        
        //clear out calculator values
        $('#rate').val("");
        $('#term').val("");
        $('#pmt').val("");
        
    }//end this.ok
    
}//end custom alert for index.html

//initiates dialog
var Alert = new CustomAlert();

//mortgage calculation
function calcMort(){    
    
    this.payments = function(){
    //pulls values from user input, turns numeric    
    var p =  750000;
    var r = parseFloat(($('#rate').val()/100)/12);
    var t = parseFloat($('#term').val()*12);
    
    //verifies user input is numeric
    if ($.isNumeric(p) && $.isNumeric(r) && $.isNumeric(t)) {
        
    //calculates monthly mortgage payments
        var r2 = r + 1;
        var exponent = Math.pow(r2,t);
        var top = exponent * r;
        var bottom = exponent - 1;
        var N = top/bottom;
        var pmts = (N * p).toFixed(2);;
    
    //displays payment in input box
    $('#pmt').val(pmts);
        
    } else {
        
        alert('A value is not a number. Please enter all numbers and try again!');
    }
      
    }
    
}//end calculator for index.html

//runs calculation
var Calc = new calcMort();

function clearBox() {
    
    this.cleared = function(){
    //clear out calculator values
        $('#rate').val("");
        $('#term').val("");
        $('#pmt').val("");
    }
    
}//end clear box for index.html

//empties box of all values
var Clear = new clearBox();
