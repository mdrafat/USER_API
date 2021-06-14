let insertData = document.querySelector('.data');
let insertSelector = document.querySelector('.user_selector');







fetch('https://api.github.com/users')
.then((response) => response.json())
.then((data) => {

        let dataLength = data.length;

        for(i=0; i<dataLength; i++){
                let htmlData = `<option value="${i}">${data[i].login} </option>`

                insertSelector.innerHTML += htmlData;
                
        }
        console.log(data);

});

insertSelector.addEventListener("change", function(){

        

        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => {

        let thisValue = this.value;

       

        let htmlData = `<img src= '${data[thisValue].avatar_url}'/>`

         


         insertData.innerHTML = htmlData;


});

        



});
    
    
    




 