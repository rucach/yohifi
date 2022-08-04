function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eudtcX3ZT/model.json', modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+' %';
        document.getElementById("result_label").style.color = 'rgb(' + random_number_r + ',' + random_number_g + ',' + random_number_b + ')';
        document.getElementById("result_confidence").style.color = 'rgb(' + random_number_r + ',' + random_number_g + ',' + random_number_b + ')';

        x = ' ';

        if(results == 'meowing'){
            x = 2;
        }

        if(results == 'barking'){
            x = 1;
        }else{
            x = 0;
        }
        if(x == 0){
            document.getElementById('gobble').innerHTML = '<img src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif" height="300px" width="300px" style="border-style:double;" id="gobble">';
        }
        if(x == 2){
            document.getElementById('gobble').innerHTML = '<img src="https://shravaripatil.github.io/Sound_controlled_animals/meow.gif" height="300px" width="300px" style="border-style:double;" id="gobble">';
        }
        if(x == 1){
            document.getElementById('gobble').innerHTML = '<img src="https://shravaripatil.github.io/Sound_controlled_animals/bark.gif" height="300px" width="300px" style="border-style:double;" id="gobble">';
        }

    }
}