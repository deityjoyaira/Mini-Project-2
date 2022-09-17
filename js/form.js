const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");
    

nextBtn.addEventListener("click", (event)=> {
    event.preventDefault();

    const  allInput = document.querySelectorAll(".first div div input");

    let newArr1 = [];

    allInput.forEach(input => {
        newArr1.push(input.value)
    });

    if(newArr1.includes("")){
        form.classList.remove('secActive');
        swal({
            title: "Fields Empty!!!",
            text: "Please input the missing field!",
            icon: "warning",
            button: "Ok",
            });
    }else{
        form.classList.add('secActive');
        
    }
})

backBtn.addEventListener("click", () => {form.classList.remove('secActive')});

//

document.getElementById("submitBtn").addEventListener('click', (e) => {
    e.preventDefault();


    const inputVal = document.querySelectorAll(".input-field input")

    let newArr = [];

    inputVal.forEach(input => {
        newArr.push(input.value)
    });

    if (newArr.includes('')) {
        swal({
            title: "Fields Empty!!!",
            text: "Please input the missing field!",
            icon: "warning",
            button: "Ok",
            });
     }
     else{
        swal({
            title: "Thank You!",
            text: "Your all set!",
            icon: "success",
            buttons: ["Download PDF file", "Done"],
            });
    }
});

//beneficiary part
$(document).ready(function() {
    $(".addBtn").click(function(e) {
        e.preventDefault();
        $("#show-item").prepend(`<div class="row fields">
        <div class="input-field col-3">
            <label>Full Name</label>
            <input type="text" id="fullname" placeholder="" required>
        </div>

        <div class="input-field col-3">
            <label>Relationship</label>
            <input type="text" id="relationship" placeholder="" required>
        </div>

        <div class="input-field col-2">
            <label>Contact</label>
            <input type="number" id="contact" placeholder="+63" required>
        </div>
        <div class="input-field col-3">
            <label>Entitlement%</label>
            <input type="text" id="entitle" placeholder="" required>
        </div>    

        <div class="col-1 mt-3 ">
            <button class="removeBtn"><span class="material-icons">
            person_remove
            </span></button>
        </div>
    </div>`);
    })
    $(document).on('click', '.removeBtn', function(e) {
        e.preventDefault();
        let row_item= $(this).parent().parent();
        $(row_item).remove();
    });
});