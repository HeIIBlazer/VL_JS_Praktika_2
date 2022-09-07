function groupCode(){
    var Code = document.GroupCode.GC.value;// аббревиатура группы

    document.getElementById('resultRuhm').innerHTML = ('Ruhm: '+Code);// вывод аббревиатуры группы

    var Oppekoht = Code.substr(0,1);// первый символ аббревиатуры
    var OppeBaas = Code.substr(1,1);// второй символ аббревиатуры
    var OppeKeel = Code.substr(4,1);// пятый символ аббревиатуры
    var OppeYear1 = Code.substr(5,1);// шестой символ аббревиатуры
    var OppeYear2 =  Code.substr(6.1)// седьмой символ аббревиатуры


    //нахождение места обучения
    if (Oppekoht==='J'){
        document.getElementById('resultKoht').innerHTML = ('OppeKoht: Johvi');// если первый символ равен J, то выведет Johvi 

    }else if(Oppekoht==='S'){
        document.getElementById('resultKoht').innerHTML = ('OppeKoht: Sillamae');// если первый символ равен S, то выведет Sillamae 

    }else if(Oppekoht==='N'){
        document.getElementById('resultKoht').innerHTML = ('OppeKoht: Narva');// если первый символ равен N, то выведет Narva 

    }else{
        document.getElementById('resultKoht').innerHTML = ('OppeKoht: Sellist kohta ei ole');// если первый символ равен любому кроме выше перечисленных, то выведет сообщение
    }

    //нахождение учебной базы

    if (OppeBaas==='P'){
        document.getElementById('resultBaas').innerHTML = ('OppeBaas: Pohikool');// если второй символ равен P, то выведет Pohikool 

    }else if(OppeBaas==='K'){
        document.getElementById('resultBaas').innerHTML = ('OppeBaas: Keskkool');// если второй символ равен K, то выведет Keskkool

    }else{
        document.getElementById('resultBaas').innerHTML = ('OppeBaas: sellist koolitusbaasi ei ole');// если второй символ равен любому кроме выше перечисленных, то выведет сообщение
    }

    //нахождение языка обучения

    if (OppeKeel==='R'){
        document.getElementById('resultKeel').innerHTML = ('OppeKeel: Vene');// если пятый символ равен V, то выведет Vene 

    }else if(OppeKeel==='E'){
        document.getElementById('resultKeel').innerHTML = ('OppeKeel: Eesti');// если пятый символ равен R, то выведет Keskkool

    }else{
        document.getElementById('resultKeel').innerHTML = ('OppeKeel: sellist õppekeelt ei ole');// если пятый символ равен любому кроме выше перечисленных, то выведет сообщение
    }

    //нахождение курса

    if (OppeYear2 == 0){
        document.getElementById('resultYear').innerHTML = ('OppeKursus: 3 kurs');// если седьмой символ равен 0, то выведет 3 kurs 

    }else if (OppeYear2 == 1){
        document.getElementById('resultYear').innerHTML = ('OppeKursus: 2 kurs');// если седьмой символ равен 1, то выведет 2 kurs 

    }else if (OppeYear2 == 2){
        document.getElementById('resultYear').innerHTML = ('OppeKursus: 1 kurs');// если седьмой символ равен 2, то выведет 1 kurs

    }else if (OppeYear1 == 1){
        document.getElementById('resultYear').innerHTML = ('OppeKursus: See kursus on juba lõpetanud');//  если шестой символ равен 1, то выведет сообщение

    }else{
        document.getElementById('resultKeel').innerHTML = ('OppeKursus: sellist kursust pole veel alustatud');// если седьмой символ равен любому кроме выше перечисленных, то выведет сообщение

    }


}
