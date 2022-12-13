var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

function mDown(obj) {
    obj.style.backgroundColor = "##FFFFFF";
    obj.innerHTML = "Enjoy your Coffeeee";
}

function mUp(obj) {
    obj.style.backgroundColor="##FFFFFF";
    obj.innerHTML="Please visit again Thank you.....";
}




function onHover(x)
{
    if(x.id=="imgg1")
    {
        $(`#${x.id}`).attr('src', 'Darshan2images/blog-1.jpeg');
    }
    if(x.id=="imgg2")
    {
        $(`#${x.id}`).attr('src', 'Darshan2images/blog-2.jpeg');
    }
    if(x.id=="imgg3")
    {
        $(`#${x.id}`).attr('src', 'Darshan2images/blog-3.jpeg');
    }

}

function offHover(x)
{
    if(x.id=="imgg1")
    {
        $(`#${x.id}`).attr('src', 'Darshan2images/coffee1.jpg');
    }
    if(x.id=="imgg2")
    {
        $(`#${x.id}`).attr('src', 'Darshan2images/coffee2.jpg');
    }
    if(x.id=="imgg3")
    {
        $(`#${x.id}`).attr('src', 'Darshan2images/coffee3.jpg');
    }
}