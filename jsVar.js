//Var from Wikipedia

let articleTitle = "Alan Turing";
let birthName = "Alan Mathison Turing";
let birthDay = "23 of june in 1912 in Maida Vale, UK";
let deathDay = "7 of june in 1954 in Wimslow, UK";
let causeDeath = "Hydrocyanic intoxication";
let graveLocation = "Working Crematorium";
let nationality = "British";
let religion= "Atheism";
let maternalLang ="English";
let father="Julius Mathison Turing";
let mother="Ethel Sara Stoney";
let basicEducation = "Sherborne School";
let midEduaction = "Kings College";
let highEducation =" Princeton University (1937-1938)";
let doctoSupervisor = "Alonzo Church";
let occupation ="Informático teórico, matemático, profesor universitario, criptógrafo, lógico, estadístico, maratonista e investigador de la inteligencia artificial.";
let areaExpertise = "Criptoanálisis, ciencias de la computación, matemáticas, lógica y criptografía";
let employer ="Cambridge University (1934-1937), GCHQ(1934-1945), National Physical Laboratory (UK) (1945-1947)";
let knownWork ="Computing machinery and intelligence, Stop problem, Turing Machine, Turing Test,Complete Turing, Church-Turing Tesis,  Turing universal Bombe Machine,Turing probabilistic Machine";
let distinctionsMember ="Smith Prize (1936), Officer of the Order of the British Empire (1946),Member of the Royal Society (1951)";


//Variables that might be used on the section of information
//String Template

document.write(`
                <h1> ${articleTitle} </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg">
                <h3>Personal information</h3> 
                <p><span>Birth Name:</span>         ${birthName}</p>
                <p><span>Birthday:</span>           ${birthDay}</P>
                <P><span>Deathday:</span>           ${deathDay}</p>
                <p><span>Death cause:</span>        ${causeDeath}</p>
                <p><span>Grave:</span>              ${graveLocation}</p>
                <p><span>Nationality:</span>        ${nationality}</p>
                <p><span>Religion:</span>           ${religion}</p>
                <p><span>Maternal Language:</span>  ${maternalLang}</p>
                <h3>Family</h3>
                <p><span>Parents:</span>            ${father} </p>
                <p>                                 ${mother} </p>
                <h3>Education</h3>
                <p><span>Educated in:</span>        ${basicEducation} </p>
                <p>                                 ${midEduaction}   </p>
                <p>                                 ${highEducation}  </p>
                <p><span>Doctor Supervisor:</span>  ${doctoSupervisor}</p>
                <h3>Professional Information</h3>
                <p><span>Occupation:</span>         ${occupation}</p>
                <p><span>Area:</span>               ${areaExpertise}</p>
                <p><span>Employer:</span>           ${employer}</p>
                <p><span>Notable work:</span>       ${knownWork}</p>
                <p><span>Distinction Member:</span> ${distinctionsMember}</p>
                 `)
                