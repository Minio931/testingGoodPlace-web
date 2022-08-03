const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const pill = document.querySelector(".pill");

pill.addEventListener("click", ()=>{
    
    
    if(pill.innerHTML == "Dowiedz się więcej na temat terapii"){
        console.log("Kurwa");
        pill.classList.add("pill-expand");
        pill.innerHTML = `Dla kogo psychoterapia krótkoterminowa? <br>
        Z tej formy pomocy mogą skorzystać osoby z zaburzeniami lękowymi, doświadczające przemocy, <br>
        kryzysu życiowego (rozwód, rozstanie, żałoba, choroba), rodzice dzieci przejawiających zaburzenia zachowania, <br>
        kobiety w ciąży, po poronieniach oraz doświadczające depresji poporodowej. Cykl sesji w psychoterapii <br>
        krótkoterminowej – zakres sesji: 6 – 24 spotkań (ilość spotkań ustalana jest kontraktem <br>
        terapeutycznym). <br>
        <br>
        Dla kogo psychoterapia długoterminowa? <br>
        Z tej formy pomocy mogą skorzystać osoby uzależnione, z zaburzeniami osobowości, z głębokimi <br>
        zaburzeniami nastroju w remisji objawów. Cykl sesji w psychoterapii długoterminowej – zakres sesji: <br>
        kilka lat (ilość spotkań ustalana jest kontraktem terapeutycznym na każdy rok kontaktu <br>
        terapeutycznego) <br>
        <br>
        UWAGA! Sesja indywidualna trwa 50 minut <br>
        UWAGA! Sesja grupowa trwa 90 minut z przerwą: 5 minut <br>`;
    }
    else{
        
        pill.classList.remove("pill-expand");
        pill.innerHTML = "Dowiedz się więcej na temat terapii";
    }
});

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

const dropDowns = document.querySelectorAll('.readMore');

dropDowns.forEach(e => e.addEventListener("click", () =>{
   
    disableOthers(e);
    e.classList.toggle("transform");
    e.previousElementSibling.classList.toggle("opacity");
    e.parentNode.classList.toggle("expand-panel");
    const whichPanel = e.previousElementSibling.previousElementSibling;
    if(e.nextElementSibling != null ) removeTextFromPanel(e);
    else if(e.nextElementSibling == null) addTextToPanel(whichPanel.className, e);
}));
function removeTextFromPanel(item){
  item.nextElementSibling.remove();
}
function addTextToPanel(panelClassName, panel){
    const text = document.createElement('p');
    const panelForText = panel.parentNode;
    text.setAttribute("class", "expandPanelText");
    switch(panelClassName){
        case "icon first-icon":
            text.innerText ="Zakres pomocy obejmuje kontakt diagnostyczny (diagnoza problemu), poradę, interwencję w kryzysie psychicznym, kontakt psychoterapeutyczny indywidualny i grupowy. Specjalistyczny gabinet psychologiczny DOBRE MIEJSCE oferuje kompleksową pomoc psychologiczną dla osób dorosłych, dzieci i młodzieży w ujęciu integracyjnym.";
        break;
        case "icon second-icon":
            text.innerText = `Gabinet „DOBRE MIEJSCE” w diagnozie problemu swoich Pacjentów stosuje wywiad kliniczny,
            obsrewację oraz według potrzeb także metody testowe. DOBRE MIEJSCE wymaga od
            zainteresowanych badaniem psychologicznym, podpisania klauzuli rodo wraz z odpowiednimi
            oświadczeniami. Wyniki badań Gabinet udostępnia wyłącznie osobie badanej na ustalonych
            ustawowo zasadach.`;
        break;
        case "icon third-icon":
            text.innerText = `Specjalistyczny gabinet psychologiczny „DOBRE MIEJSCE” oferuje osobom zainteresowanym
            podjęciem terapii indywidualnej i grupowej pełny cykl sesji terapeutycznych. Dla osób zgłaszających
            się pierwszorazowo – etap podstawowy i pogłębiony terapii z konsultacjami z lekarzem psychiatrą
            oraz wydaniem zaświadczenia o odbytym leczeniu. Dla osób po ukończonym etapie podstawowym
            leczenia (Oddział lub Poradnia) – etap pogłębiony terapii. Dla rodzin osób uzależnionych „DOBRE
            MIEJSCE” oferuje zarówno sesje indywidualne, jak i grupowe, według potrzeb sesje dla par.`;
        break;
        case "icon fourth-icon":
            text.innerText = `Pomoc psychologiczna w „DOBRYM MIEJSCU” dla osób z dysfunkcją słuchu dedykowania jest osobom
            ze znajomością systemu PJM i SJM.`;
        break;
        case "icon fifth-icon":
            text.innerText = `Pacjenci „DOBREGO MIEJSCA” otrzymują bonifikatę na okoliczność podjęcia psychoterapii
            indywidualnej obejmującą w cyklu spotkań, 2 pierwsze sesje terapeutyczne w wysokości 5 % od ceny
            sesji oraz upust w wysokości 5% przy konsultacjach z dietetykiem i fizjoterapeutą, w negocjacji
            pozostają także konsultacje z lekarzem psychiatrą.`;
        break;
        case "icon sixth-icon":
            text.innerText = `Specjalistyczny gabinet psychologiczny „DOBRE MIEJSCE” poza działalnością związaną z pomaganiem
            oferuje działalność edukacyjno-szkoleniową, w ramach której przewidziane jest organizowanie cyklu
            spotkań warsztatowych, wykładowych i szkoleniowych z udziałem znanych osobistości, wykładowców
            akademickich z poszczególnych uczelni wyższych, czy też autorów poczytnych książek z dziedziny
            pomagania.`;
        break;
    }
    panelForText.append(text);
}

function disableOthers(activeItem){
    for(let item of dropDowns){
        if(item === activeItem) continue;

        if(item.nextElementSibling != null) removeTextFromPanel(item);
        
        item.classList.remove("transform");
        item.previousElementSibling.classList.remove("opacity");
        item.parentNode.classList.remove("expand-panel")
    }
}

const formSubmitButton = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");

formSubmitButton.addEventListener("click", (e)=>{
e.preventDefault();
alert("Dziękujemy za kontakt \nTwoja wiadomość została wysłana");
for(let input of inputs){
    input.innerText = "";
}
})