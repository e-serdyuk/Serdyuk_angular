/*###Задача 2 
Создайте пустой(неинициализированный) буфер длиной 100 байт, заполните его байтами со значениями от 0 до 99 и выведите в консоль его содержимое.  */
const buf = Buffer.alloc(100);
var string = '';
for (var i = 0; i < 100; i++) {
    string += i;
}
buf.write(string,0);
console.log('Buffer is: ', buf.toString());
