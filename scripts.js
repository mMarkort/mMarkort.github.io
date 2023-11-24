document.getElementById("68zad").onclick = function () 
{
    let intarray = [1, 2, 3];
    let array = ['a', 'b', 'c'];
    alert(array + "\n" + intarray);
}

document.getElementById("69zad").onclick = function() {
    let arrstr = ['a', 'b', 'c', 'd'];
    let arrint = [1, 2, 3];
    let sum = 0;
    let string = "";

    for(let i = 0; i < arrint.length; i++){
        alert(arrint[i]);
        sum += arrint[i]; 
    }
    for(let i = 0; i < arrstr.length; i++){
        
        if(i != arrstr.length-1){
            string += arrstr[i] + "+";
        } 
        else{
            string += arrstr[i]
        }
    }
    alert(sum);
    alert(string);

}

document.getElementById("70zad").onclick = function() {
    let arrstr = ['a', 'b', 'c', 'd'];
    alert(arrstr.length);
    alert(arrstr[arrstr.length-1])
}

document.getElementById("71zad").onclick = function() {
    let arrstr = ['a', 'b', 'c'];
    alert(arrstr);
    for(let i = 0; i < arrstr.length; i++){
        arrstr[i] = i+1;
    }
    alert(arrstr);
}

document.getElementById("72zad").onclick = function() {
    let arrstr = [1, 2, 3, 4];
    alert(arrstr);
    for(let i = 0; i < arrstr.length; i++){
        arrstr[i] += 3;
    }
    alert(arrstr);
}

document.getElementById("73zad").onclick = function() {
    let arrstr = [1, 2, 3, 4];
    alert(arrstr);
    for(let i = 0; i < arrstr.length; i++){
        arrstr[i]++;
    }
    alert(arrstr);
}

document.getElementById("74zad").onclick = function() {
    let arrstr = [];
    alert(arrstr);
    for(let i = 0; i < 3; i++){
        arrstr[i] = i+1;
    }
    alert(arrstr);

    arrstr[3] = 4;
    arrstr[4] = 5;
    alert(arrstr);
}

document.getElementById("75zad").onclick = function() {
    let arrstr = [];
    arrstr[3] = 2
    arrstr[8] = 7
    alert(arrstr + "\n" + arrstr.length);
}

document.getElementById("76zad").onclick = function() {
    let arrstr = [];
    alert(arrstr);
    for(let i = 0; i < 3; i++){
        arrstr.push(i+1);
    }
    alert(arrstr);

    for(let i = 0; i < 2; i++){
        arrstr.push(i+4);
    }
    alert(arrstr);
}

document.getElementById("77zad").onclick = function() {
    let arr = [1, 2, 3, 4, 5];
    let key1 = 1;
    let key2 = 2;
    alert(arr + "\n" + arr[key1] + "\n" + arr[key2]);
}

document.getElementById("78zad").onclick = function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let arr2 = ['a', 'b', 'c', 'd', 'e'];
    delete arr2[2];
    delete arr2[0];
    alert(arr+ "\n" + arr2 + "\n" + arr.length);
}

document.getElementById("79zad").onclick = function() {
    let array = [1, 2, 3, 4, 5];
   let arrayString = "Task 79 part 1"+"\n"+JSON.stringify(array);
   arrayString += "\n" +"Ошибка в том что индекс!=длина, индекс идет с нуля, исправленный код:\nconsole.log(arr[arr.length]-1)\nРезультат:\n"+array[array.length-1];

   alert(arrayString);
   

   let array1 = [1, 2, 3, 4, 5];
   let arrayString1 = "Task 79 part 2"+"\n"+JSON.stringify(array1);
   arrayString1 += "\n" +"Ошибка в том что индексы массивов идут с нуля, он не берет первый и выходит за пределы, исправленный код:\nconsole.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])\nРезультат:\n"+(array1[0] + array1[1] + array1[2] + array1[3] + array1[4]);

   alert(arrayString1);


   let array2 = [1, 2, 3, 4, 5];
   let arrayString2 = "Task 79 part 3"+"\n"+JSON.stringify(array2);
   arrayString2 += "\n" +"Код работает корректно:\n"+(array2.length);

   alert(arrayString2);

}

