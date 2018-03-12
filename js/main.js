/* Tworzę klasę pageUser, która w konstruktorze tworzy dwie właściwosci - wzrost i wage */


/*---------------Start klasy--------------------------*/

class PageUser {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    };
        
    /* Metoda, ktory liczy wskaznik BMI dla instancji klasy PageUser */
    countBmi() {
        var bmi = this.weight/Math.pow(this.height, 2);  
        return  parseFloat(bmi.toFixed(2));
        
    };
    /* ----------------------Koniec metody------------------------*/
    
    /* Metoda, ktora zawraca informacje, czy bmi jest w normie, ponizej normy itd. */
    bmiInfo() {
        if( this.countBmi() < 18.5 ) {
            return ' masz niedowagę';
        }else if ( this.countBmi() >= 25) {
            return ' masz nadwagę';
        }else {
            return ' jesteś w normie';
        };
    };
    /* ----------------------Koniec metody------------------------*/
    
    /* Metoda, ktora zwaraca tekst rekomendacji */
    printInfo() {
         if( this.countBmi() < 18.5 ) {
            return ' Twój wskaźnik BMI to: ' + this.countBmi() + ' - diagnoza: ' + this.bmiInfo() + ' - to znaczy, że musisz przytyć.';
        }else if ( this.countBmi() >= 25) {
            return ' Twój wskaźnik BMI to: ' + this.countBmi() + ' - diagnoza: ' + this.bmiInfo() + ' - to znaczy, że musisz schudnąć.';
        }else {
            return ' Twój wskaźnik BMI to: ' + this.countBmi() + ' - diagnoza: ' + this.bmiInfo() + ' - to znaczy, że jesteś w normie.';
        };
    }
    /* ----------------------Koniec metody------------------------*/
};

/*------------------Koniec klasy-----------------------*/

var count = document.getElementById('count-bmi'); //Zdefiniowany przycisk BMI


/* Dodane zdarzenie 'click' na przycisku BMI */
count.addEventListener('click', function(){
    var heightValue = parseFloat(document.getElementById('user-height').value);
    var weightValue = parseFloat(document.getElementById('user-weight').value);
    var printResoult = document.createElement('p');
    var currentUser = new PageUser(heightValue, weightValue);
    printResoult.innerHTML = currentUser.printInfo();
    this.parentElement.insertBefore(printResoult, this.nextSibling);
    
});

















