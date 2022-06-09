
let words = [
    `if you're visiting this page, you're likely here because you're searching for a random sentence. sometimes a random word just isn't enough, and that is where the random sentence generator comes into play like heree`,
    `for those writers who have writers' block, this can be an excellent way to take a step to crumbling those walls you might choose to share a random sentence on social media just to see what type of reaction it garne`,
    `it can also be successfully used as a daily exercise to get writers to begin writing. being shown a random sentence and using it to complete a paragraph each day can be an excellent way to begin any writing session`,
    `it can also be a fun way to surprise others. you might choose to share a random sentence on social media just to see what type of reaction it garners from others you're likely here because you're searching for msan`,
    `our goal is to make this tool as useful as possible. for anyone who uses this tool and comes up with a way we can improve it, we'd love to know your thoughts random sentence and using it to complete a paragraph swn`,
    `dddkkkdkdkkkkdddkdkkdddkkkddddkkddddkkdkdkddddddkkkdkdkkkkdddkdkkdddkkkddddkkddddkkdkdkdddkkkdddkdkkdddkkkddddkkddddkkdkdkddddddkkkdkdkkkkdddkdkkdddkkkddddkkddddkkdkdkdddddkkkdddkdkkdddkkkddddkkddddkkdkdkddddddkkkd`
],
   rendomNumber = Math.floor(words.length * Math.random()),
   wordsConatiner = document.querySelector('.words'),
   wpm = document.querySelector('.wpm-num'),
   sentence = words[rendomNumber],
   audio_1 = document.querySelector('.audio_1'),
   audio_2 = document.querySelector('.audio_2'),
   number = 0 ,
   typedEnter = 0 ,
   min = 1;
    
    for (i = 0; i < sentence.length; i++){

        let audio1 = document.createElement('audio'),

            audio2 = document.createElement('audio'),
        
            theSpan = document.createElement('span');

        audio1.src = "../audio/mixkit-hard-single-key-press-in-a-laptop-2542.wav"

        audio2.src = '../audio/mixkit-game-show-buzz-in-3090.wav'

        audio_1.appendChild(audio1)

        audio_2.appendChild(audio2)
        
        theSpan.textContent = sentence[i]
    
        wordsConatiner.appendChild(theSpan)

        setInterval(() => {

            document.querySelector('.bullets-box').style.opacity = 0

            window.onkeyup = function(b){
    
                if (b.key == sentence[number]){
    
                    wordsConatiner.children[number].style.backgroundColor = "rgb(12 1 98 / 47%)"
        
                    wordsConatiner.children[number].style.color = '#fff'
    
                    audio_1.children[number].play()
        
                    typedEnter++
    
                }
                
                else{
    
                    wordsConatiner.children[number].style.backgroundColor = '#fff';
        
                    wordsConatiner.children[number].style.color = 'rgb(12 1 98)'
        
                    wordsConatiner.children[number].style.animation = 'wrong .5s'
    
                    audio_2.children[number].play()
                }
    
                number++
                
                if (number == sentence.length ){ popup() }
    
                speed(typedEnter,min)
    
            }

        }, 5000)
    }

setInterval(() => min++,60000)

window.onclick = (e) => e.target.className === 'popup-button' ? window.location.reload() : false


function speed(typeEnter, min){
    let calc = (typeEnter / 5) / min
    wpm.textContent = calc
    console.log(calc);
 }
 
 function popup(){
     let popupBox = document.createElement('div'),
         popup = document.createElement('div'),
         wpmDiv = document.createElement('div'),
         wpmSpan = document.createElement('span'),
         theButton = document.createElement('button')
     theButton.textContent = 'Try Again';  
     theButton.className = 'popup-button';    
     popupBox.className = 'popup-box'
     popup.className = 'popup'
     wpmDiv.className = 'wpm-div'
     theButton.textContent = 'Try Again';
     wpmSpan.textContent = wpm.textContent;
     wpmDiv.textContent = 'WPM = '
     wpmDiv.appendChild(wpmSpan)
     popup.appendChild(wpmDiv)
     popup.appendChild(theButton)
     popupBox.appendChild(popup)
     document.body.appendChild(popupBox)
 }


