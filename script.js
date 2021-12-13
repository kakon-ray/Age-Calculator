
 
// console.log(dateOfBirthYear,dateOfBirthMonth,dateOfBirthDay);
// console.log(todayYear,todayMonth,todayDate);



 function printValue() {

        let date = document.querySelector('#dateofbirth').value;
        // let demo = document.getElementById('demo');
        // let demo1 = document.getElementById('demo1');
        // let demo2 = document.getElementById('demo1');
        // let demo3 = document.getElementById('demo1');
        // let demo4 = document.getElementById('demo1');

        // Start DateofBirth Value
        date = new Date(date);
        let dateOfBirthYear = date.getFullYear();
        let dateOfBirthMonth = date.getMonth();
        let dateOfBirthDay  = date.getDate();

        
        let ageSeconds = date.getTime() / 1000; 
        let ageMunite = ageSeconds / 60;
        let ageHour = ageMunite / 60;
        let ageDay = ageHour / 24;
        let ageMonth = Math.floor(ageDay / 30);
        
        

        today = new Date();
        let todayYear = today.getFullYear();
        let todayMonth = today.getMonth();
        let todayDate = today.getDate();


        if((dateOfBirthDay<1 || dateOfBirthDay >31) || (todayDate<1 || todayDate>31) ||(dateOfBirthMonth<1 || dateOfBirthMonth>12) || (todayMonth<1 || todayMonth>12) || (dateOfBirthYear<0 && todayYear<0)  ){
                document.getElementById('demo').style.display = 'block';
        }

        else{


       var year = todayYear - dateOfBirthYear;

        if(todayDate >= dateOfBirthDay) {
            var day = todayDate - dateOfBirthDay;
        }
        
        else {
            todayMonth = todayMonth - 1;
            todayDate = todayDate + 30;
            day = todayDate - dateOfBirthDay;

        }

        if(todayMonth >= dateOfBirthMonth) {
             var month = todayMonth - dateOfBirthMonth;
        }
        else{
            year = year - 1;
            todayMonth = todayMonth + 12;
            month = todayMonth - dateOfBirthMonth;
        }
    
        document.getElementById('demo1').innerHTML = "Your Age " +  year + " Year "  + month + " Month " + day + " Day";
        document.getElementById('demo2').innerHTML = "Your Age " + ageMonth + " Month";
        document.getElementById('demo3').innerHTML = "Your Age " + ageDay + " Day";
        document.getElementById('demo4').innerHTML = "Your Age " + ageHour + " Hour";
        document.getElementById('demo5').innerHTML = "Your Age " + ageMunite + " Minutes";
        document.getElementById('demo6').innerHTML = "Your Age " + ageSeconds + " Seconds";
    
    
    }
}



  
   

  

