let but = document.getElementById("but");
    let but1 = document.getElementById("but1");
    let challenge = document.getElementById("challenge");
    let coursebox = document.getElementById("course-box");
    let coursename = document.getElementById("course-name");
    let coursessection = document.getElementById("courses-section");
    let taphere = document.getElementById("taphere");
    let nameofcr;

    // coursebox.addEventListener("click", function() {
    //     window.open("course_page.html", "_blank");
    // });

    let list_of_courses = [];

    function makeanelement(nameofcourse, taphereline, paddingtop) {
        let courseBoxDiv = document.createElement("div");
        courseBoxDiv.id = "course-box";
        courseBoxDiv.style.marginTop = paddingtop;
        courseBoxDiv.style.marginBottom = "5px";
        let courseName = document.createElement("p");
        courseName.id = "course-name";
        courseName.textContent = nameofcourse;
        let tapHere = document.createElement("p");
        tapHere.id = "tap-here";
        tapHere.textContent = taphereline;

        courseBoxDiv.addEventListener("click", function() {
            nameofcr = nameofcourse;
            if(list_of_courses.indexOf(nameofcr)===-1) {
                list_of_courses.push(nameofcr);
                buttonclick(nameofcr);
            }
            localStorage.setItem('nameofcr', nameofcr);
            window.open("course_page.html", "_blank");
        });

        coursessection.appendChild(courseBoxDiv);
        courseBoxDiv.appendChild(courseName);
        courseBoxDiv.appendChild(tapHere);
    }

    let nameofbtn = localStorage.getItem('nameofbtn');
    if (nameofbtn === "Programming") {
        makeanelement("Want To Learn C Programming?", "Unlock the Secrets of the C Language!", "60px");
        makeanelement("Want To Learn C++ Programming?", "Embark on an Adventure in C++ Wonderland!",  "10px");
        makeanelement("Want To Learn About Data Management?", "Learn the basics of Database management System!", "10px");
        makeanelement("Want To Start With HTML?", "Start your web development journey with HTML!", "10px");
        makeanelement("Want To Style Your Website With CSS?", "CSS Canvas: Painting Designs with Style Sheets!", "10px");
        makeanelement("Want To Learn Java Programming?", "Java Journey: From Novice to Ninja!", "10px");
        makeanelement("Want To Start With Designing?", "Start your design journey with Figma!", "10px");
        makeanelement("Want To Learn Python Programming?", "Take a Trip to the Python Side of Programming!", "10px");
    }

    function buttonclick(CrName) {

        // Creating the title of the challenge

        let chalName = document.createElement("p");
        chalName.id = "name";

        chalName.textContent = CrName;

        challenge.appendChild(chalName);

        // Adding the progress bar.
        
        let maindiv = document.createElement("div");
        maindiv.id = "pro";
        let subdiv = document.createElement("div");
        subdiv.className = "progress-container";
        let subsubdiv = document.createElement("div");
        subsubdiv.className = "progress-bar";
        subsubdiv.id = "myBar";
        let percentage = document.createElement("p");
        percentage.id = "percentage";

        percentage.textContent = "100%";

        challenge.appendChild(maindiv);

        maindiv.appendChild(subdiv);
        subdiv.appendChild(subsubdiv);
        subdiv.appendChild(percentage);
    }

    but.addEventListener("click", buttonclick);

    function button1click() {

            function move() {
                percentage = document.getElementById("percentage");
                percentageText = percentage.textContent;
                var numericPart = parseInt(percentageText, 10);
                console.log(numericPart);
                var elem = document.getElementById("myBar"); 
                var width = numericPart;
                var id = setInterval(frame, 10);
                let i = 0;
                function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else if(i<10){
                        width++;  
                        i++
                        elem.style.width = width + '%'; 
                        percentage.textContent = width+"%";
                    }
                }
            }
            move(); 
    }

    but1.addEventListener("click", button1click);
