var num1 = [[],[]];
var sub1= 0;

function addRow() {
        var $num1 = document.getElementById("length");
        var $num2 = document.getElementById("Quantity");
        // table element 찾기
       if($num1.value == '' || $num2.value == '') { alert('길이 및 수량을 입력 해주세여~')}
       else{
        num1[0].push($num1.value);
        num1[1].push($num2.value);
    let le = num1[0].at(-1);
    let qu = num1[1].at(-1);
    // table element 찾기
    const table = document.getElementById('fruits');
    
    // 새 행(Row) 추가 (테이블 중간에)
    const newRow = table.insertRow();
    
    // 새 행(Row)에 Cell 추가
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    
    // Cell에 텍스트 추가
    newCell1.innerText = le;
    newCell2.innerText = qu;
    $num1.value='';
    $num2.value='';
  }
}
function deleteRow(rownum) {
    if(num1[0].length>0){
    // table element 찾기
    const table = document.getElementById('fruits');
    
    // 행(Row) 삭제
    const newRow = table.deleteRow(rownum);
    
   num1[0].pop();
   num1[1].pop();
}
}
   function sub(){
       const $center = document.getElementById('center').value;
       if( $center == '') { alert('기준치를 입력 해주세여~')}
      else if(num1[0].length == 0) { alert('각재재단 할 목록을 추가 해주세여~')}
       else{
           sub1= 0;
           let $result = document.getElementById('result');
           for (let i = 0; i < num1[0].length; i++) {
               sub1+=Number(num1[0][i])*Number(num1[1][i]);
            };
            for (var i = 1; $center <= sub1; i++) {
            sub1-=Number($center);
                
            };
            if($center>sub1){sub1=Number($center)-sub1;};
            $result.value=Number(i);
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