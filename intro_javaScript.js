document.write("Hello! JavaScript! <br><br>");

var cnt = 10;
for (var i = 1; i <= cnt; i++) { //반복문 활용
  document.write(i, "<br>");
}
document.write("<br>"); //띄어쓰기

var str = "<table border='1'>"; //테이블 생성
str += "<tr>"; //row
for (var i = 1; i <= cnt/2; i++) {
  str += "<td>"; //각 테이블 데이터
  str += i;
  str += "</td>";
}
str += "</tr><tr>";
for (var i = cnt/2+1; i <= cnt; i++) {
  str += "<td>";
  str += i;
  str += "</td>";
}
str += "</tr></table>"; //end of table

document.write(str, "<br><br>"); //str 출력시 테이블 표현

var input = prompt("Input the number", ""); //사용자에게 입력받는 팝업창 출력
document.write("The number you inputed is = ", input);
