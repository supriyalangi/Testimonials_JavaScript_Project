
const customerImage = document.querySelector('#customer-img');
const customerName = document.querySelector('.customer-name');
const customerText = document.querySelector('#customer-text');
const prevbtn = document.querySelector('.previous');
const nextbtn = document.querySelector('.next');


var user = [
    {
        customerImage: 'img\/1.png',
        customerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque adipisci unde placeat ex laudantium doloribus quis, explicabo accusamus culpa.',
        customerName: 'SANDY',
    },
    {
        customerImage: 'img\/2.png',
        customerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque adipisci unde placeat ex laudantium doloribus quis, explicabo accusamus culpa.',
        customerName: 'TYRELL',
    },
    {
        customerImage: 'img\/3.png',
        customerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque adipisci laudantium doloribus quis, explicabo accusamus culpa.',
        customerName: 'EMLI',
    },
    {
        customerImage: 'img\/4.png',
        customerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium doloribus quis, explicabo accusamus culpa.',
        customerName: 'WANDA',
    }
];



var i = 0;
function myfunction1() {
    i++;
    if (i > user.length - 1) {
        i = 0;
    }
    customerImage.src = user[i].customerImage;
    customerText.innerHTML = user[i].customerText;
    customerName.innerHTML = user[i].customerName;


}
nextbtn.addEventListener('click', myfunction1);

function myfunction2() {
    i--;
    if (i<0) {
        i = user.length - 1;
    }
    customerImage.src = user[i].customerImage;
    customerText.innerHTML = user[i].customerText;
    customerName.innerHTML = user[i].customerName;
}
prevbtn.addEventListener('click', myfunction2);




