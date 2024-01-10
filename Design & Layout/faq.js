const accordion = document.getElementsByClassName('answered-qs');

for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
