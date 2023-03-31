

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
        var know = "Vous ne suivez pas l'actualité.<br>";
    } else {
        var know = "Vous connaissez : " + people+".<br>";
    }

    // Nav
    if (document.principal.user_nav.value!="Aucun de ceux proposés") {
        var nav = "Vous utilisez le navigateur :"+document.principal.user_nav.value+".<br>";
    } else {
        var nav = "Vous possédez un navigateur inhabituel.<br>";       
    }

    // Glace
    if (document.principal.user_glace.value!="") {
        var glace = "Vous préférez le parfum :"+document.principal.user_glace.value+".<br>";       
    } else {
        var glace = "Vous n'aimez aucune glace.<br>";       
    }

    // login
    if (document.principal.usr_login.value!="") {
        var login = "Votre login est :"+document.principal.usr_login.value+".<br>";       
    } else {
        var login = "Vous n'avez pas de mot de passe.<br>";       
    }

    //nickname
    if (document.principal.surname.value != 'N') {
        var nickname = "Votre surnom est : "+document.principal.surname_text.value+".<br>";       
    } else {
        var nickname = "Vous n'avez pas de surnom.<br>";       
    }

    //devise

    var devise = "Votre Devise préférée est :"+document.principal.usr_devise.value+".<br>"; 


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