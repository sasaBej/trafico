// animation left and right
const moves = document.querySelectorAll(".move");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
   const trigger =  (window.innerHeight / 6) * 4;

   moves.forEach(move => {
       const movesTop = move.getBoundingClientRect().top;

       if(movesTop < trigger) {
           move.classList.add('move_animation');
       } 
    //    animation out
       else {
            move.classList.remove('move_animation');
       }
   })
}

// receive data. question and comments
async function getResponse () {
    const res = await fetch("https://lxpi9qne2a.api.quickmocker.com/getReactFAQs");
    let data = await res.json();
    let firstData = data.response.splice(0, 12);
    console.log(firstData);

    
    for (let key in firstData){
        const faqQuestion = document.querySelector(".faq-questions__q");
        
        
        // question.innerHTML = firstData[key].title;

        faqQuestion.innerHTML += `
            <section class="divq">
                <div >${firstData[key].title}
                    <span class="button_plus">
                    </span>
                </div>
                

                <p class="questions_message">${firstData[key].Message}</p>
                
            </section>
        `;
       

        
       
        
    }
    const accordions = document.querySelectorAll(".divq");
            for (let item of accordions){
                item.addEventListener("click", function() {
                    this.classList.toggle("active");
                    
                })
            }

}

getResponse();


// accordions 

// const accordions = document.querySelectorAll(".divq");
// console.log(accordions);
// for (let item of accordions){
//     console.log(item)
//     item.addEventListener("click", function() {
//         console.log(this);
//         this.classList.toggle("active");
//     })
// }



