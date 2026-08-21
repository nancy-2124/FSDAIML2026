let btn=document.getElementById("btn");
btn.addEventListener("click", function(){
    document.getElementById("root").innerHTML=`
    <style>
    .details{
    color:blue;
    font-size:20px;
    }
    </style>
    <h1 class="details">My Resume</h1>
    <p class="details">NANCY PAL</p>
    <h1 class="details">Education:</h1>
    <p>B.Tech (CSE-AIML), ABES ENGINEERING COLLEGE</p>
    <p class="details">Skills: Java, JavaScript, Python</p>
    <p class="details">Certifications: 3Skill Internship in AIML</p>

    `;
    
    

});