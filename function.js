function groupCode(){
    var Code = document.GroupCode.GC.value;// аббревиатура группы

    document.getElementById('resultRuhm').innerHTML = ('Ruhm: '+Code);// вывод аббревиатуры группы

    var Oppekoht = Code.substr(0,1);// первый символ аббревиатуры
    var OppeBaas = Code.substr(1,1);// второй символ аббревиатуры
    var OppeKeel = Code.substr(4,1);// пятый символ аббревиатуры
    var OppeYear1 =Code.sustr(5,1);//


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

    if


}
