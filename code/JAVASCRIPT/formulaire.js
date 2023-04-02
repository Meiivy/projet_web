function printinfo() {
    // Age
    if (document.principal.user_age.value != ""){
        var age = "Vous êtes âgé de " + document.principal.user_age.value + " ans <br>" ;
    } else { var age = "" ;  }

    // SEXE
    if (document.principal.user_sex.value == "F"){
        var sexe = "Vous êtes une femme.<br>" ;
    } else if (document.principal.user_sex.value == "M"){
        var sexe = "Vous êtes un homme.<br>" ;
    } else {
        var sexe = "" ;
    }

    // Famous
    var count = 0;
    var people = "";
    for ( var i = 0; i < 4 ; i++) {
        if (document.principal.user_famous[i].checked) {
            count += 1;
            people += document.principal.user_famous[i].value +", ";
        }
    }

    if (count == 0) {
        var know = "Vous avez dormi à la belle étoile.<br>";
    } else {
        var know = "L'hotel était le : " + people+".<br>";
    }

    // Nav
    if (document.principal.user_nav.value!="Aucun de ceux proposés") {
        var nav = "La note:"+document.principal.user_nav.value+".<br>";
    } else {
        var nav = "Il s'agirait de le noter svp<br>";       
    }

    // Glace
    if (document.principal.user_glace.value!="") {
        var glace = "Votre activité préférée :"+document.principal.user_glace.value+".<br>";       
    } else {
        var glace = "Mais vous n'avez rien fait ??.<br>";       
    }

    // login
    if (document.principal.usr_login.value!="") {
        var login = "Votre nom prénom :"+document.principal.usr_login.value+".<br>";       
    } else {
        var login = "Mais qui êtes vous?<br>";       
    }

    //nickname
    if (document.principal.surname.value != 'N') {
        var nickname = "Les bonbons ? : "+document.principal.surname_text.value+".<br>";       
    } else {
        var nickname = "Vous êtes une bonne personne.<br>";       
    }

    //devise

    var devise = "Merci pour votre avis :"+document.principal.usr_devise.value+".<br>"; 


    // Print
    document.getElementById("Result").innerHTML = age+sexe+know+nav+glace+login+nickname+devise;
    //document.write(age);
    //document.write(sexe);
    //document.write(know);
    //document.write(nav);
    //document.write(glace);
    //document.write(login);
    //document.write(nickname);
    //document.write(devise);

}