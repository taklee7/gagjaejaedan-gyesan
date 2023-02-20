var num1 = [[],[]];
var sub1= 0;

    function doAdd() {
        var $num1 = document.getElementById("length");
        var $num2 = document.getElementById("Quantity");
        // table element 찾기
       if($num1.value == '' || $num2.value == '') { alert('길이 및 수량을 입력 해주세여~')}
       else{
        num1[0].push($num1.value);
        num1[1].push($num2.value);
        //var selEle = document.querySelector("select");
        let selEle = document.mForm.sel;
        selEle.options.length = 0;

 for (let i = 0; i < num1[0].length; i++) {
        selEle.options[selEle.options.length] = new Option(num1[0][i]+"mm\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"+num1[1][i], "100");
    };
    $num1.value='';
    $num2.value='';
}
}
 
function doDel() {
    var sel = document.mForm.sel;
    // 마지막 option 삭제
    sel.options[sel.options.length-1] = null;
    // 전부 삭제
   // sel.options.length = 1;
   num1[0].pop();
   num1[1].pop();
}
   function sub(){
       let selEle = document.mForm.sel;
       const $Thickness = document.getElementById('Thickness').value;
       const $center = document.getElementById('center').value;
       if($Thickness == '' || $center == '') { alert('기준치 및 칼날두께를 입력 해주세여~')}
      else if(selEle.options.length == 0) { alert('각재재단 할 목록을 추가 해주세여~')}
       else{
           sub1= 0;
           let $result = document.getElementById('result');
           let $rest = document.getElementById('rest');
           for (let i = 0; i < num1[0].length; i++) {
               sub1+=Number(num1[0][i])*Number(num1[1][i])+Number($Thickness*num1[1][i]);
            };
            sub1-=Number($Thickness);
            for (var i = 1; $center <= sub1; i++) {
                sub1-=Number($center);
                
            };
            $result.value=Number(i);
            $rest.value=Number(sub1)+'mm';
        }
}

function reset() {
    let selEle = document.mForm.sel;
     for (let i = 0; i < sel.options.length; i++) {
        selEle.options[i] = null;
        selEle.options.length = 0;
}
sub1= 0;
num1 = [[],[]];
}