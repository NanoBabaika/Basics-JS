
const string = 'Hello! How are you?';

const vowels = ["e", "o", "e", "y", "u"];

const getVovels = stringtoFiler => {
    let extractVowels = "";

    for (let i = 0 ; i < stringtoFiler.length; i++){
        const currentLetter = stringtoFiler[i].toLowerCase();

        if(vowels.includes(currentLetter)){
            extractVowels += currentLetter;
        }
    }

    return extractVowels;
}

console.log(getVovels(string));