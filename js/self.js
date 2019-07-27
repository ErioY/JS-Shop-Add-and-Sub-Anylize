/*
 * @Author: ErioY
 * @Email: 1973545559@qq.com
 * @Date: 2019-07-27 09:35:17
 * @Last Modified by:   ErioY
 * @Last Modified time: 2019-07-27 09:35:17
 * @Description: Description
 */

var aLi = document.getElementsByTagName("li");
var oP = document.getElementsByTagName("p")[0];
var aSpan = oP.getElementsByTagName("span");
var iSum1 = 0;
var iPrice = 0;
// var iMax = 0;
var arr = [];

for(var i=0;i<aLi.length;i++){
    sum(aLi[i]);
}

function sum (aLi){
    var aBtn = aLi.getElementsByTagName("input");
    var oStr = aLi.getElementsByTagName("strong")[0];
    var oEm = aLi.getElementsByTagName("em")[0];
    var oSpan = aLi.getElementsByTagName("span")[0];

    //减法
    aBtn[0].onclick = function (){
        if(oStr.innerHTML>0){
            oStr.innerHTML--;
            oSpan.innerHTML = oStr.innerHTML * parseFloat(oEm.innerHTML) + "元";
            aSpan[0].innerHTML = --iSum1;
            iPrice -= parseFloat(oEm.innerHTML);
            aSpan[1].innerHTML = iPrice;
            // arr.push(parseFloat(oEm.innerHTML));
            for(var i=0;i<arr.length;i++){
                if(arr[i] == parseFloat(oEm.innerHTML)){
                    console.log(arr[i]);
                    arr[i] = 0;
                    break;
                }
            }
            console.log(arr);
            aSpan[2].innerHTML = max();
        }
    }
    //加法
    aBtn[1].onclick = function (){
        oStr.innerHTML++;
        oSpan.innerHTML = oStr.innerHTML * parseFloat(oEm.innerHTML) + "元";
        aSpan[0].innerHTML = ++iSum1;
        iPrice += parseFloat(oEm.innerHTML);
        aSpan[1].innerHTML = iPrice;
        arr.push(parseFloat(oEm.innerHTML));
        aSpan[2].innerHTML = max();
    }
    
}

//最大值
function max(){
    var iMax = 0;
    for(var i=0;i<arr.length;i++){
        if(iMax<arr[i]){
            iMax = arr[i];
        }
    }
    return iMax;
}