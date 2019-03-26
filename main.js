// function arrayOfNumbers(b) {
//     var levelArrayNumber = []
//     for(i=0; i<b; i++){
//         levelArrayNumber.push(i) 
//     }
//     return levelArrayNumber
// }

// //Shuffle function of an array
// function shuffle(a,arrayOfNumbers) {
//     b = arrayOfNumbers(a)
//     var j, x, i;
//     for (i = b.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = b[i];
//         b[i] = b[j];
//         b[j] = x;
//     }
//     return b;
// }


// console.log(shuffle(8,arrayOfNumbers))



// function repeatImage(timesOfRepeat, imageArray){ //imageArray has the links from API after cut it
//     let imageArrayRepeated = []
// for(i=0; i< timesOfRepeat; i++){
//     for(j=0; j< imageArray.length; j++){
//         imageArrayRepeated.push(imageArray[j])
//     }
// }
// return imageArrayRepeated
// }
// console.log(repeatImage(3, ['uuu', 'fff', 'sss', 'kkk']))



// document.querySelector('.cash-memory').addEventListener('click', function(e){
//     e.preventDefault();
    
//     $(document).ready(function(){
//         if(document.querySelector('.cat').textContent == 'cat'){
//             const Url = 'https://newsapi.org/v2/top-headlines?country=sa&apiKey=db51dfda8508451f93cae2929f2dc4be';
//             // $('.btn').click(function(){
//             $.ajax({
//                 url: Url,
//                 // data:{api: 'db51dfda8508451f93cae2929f2dc4be'},
//                 type: "GET",
//                 success: function(result){
//                 mainSection.innerHTML = ""

//                 }
    
//             })
//         }
//         if(document.querySelector('.easy').checked == true){
//             b = 8;
    
//         }
    
//     })
    
// })