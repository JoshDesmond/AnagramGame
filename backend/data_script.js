import { readFile, writeFile } from 'node:fs/promises';

// Load sorted dictionary
const fileName = '/home/viridian/code/others/sorted_dictionary_lemma.txt';
const text = await readFile(fileName, 'utf-8');
let words = text.trim().split(/\s*[\r\n]+\s*/g);

// Load anagram dictionary
const anagramFileName = '/home/viridian/code/others/anagram_dictionary.txt';
const anagramText = await readFile(anagramFileName, 'utf-8');
const anagrams = anagramText.trim().split(/\s*[\r\n]+\s*/g);

// Filter out anagrams from word list
let filteredWords = words.filter(word => !anagrams.includes(word));

// filter out short words
filteredWords = filteredWords.filter(word => word.length > 5)

// Output statistics
console.log(`words size: ${words.length}`);
console.log(`filtered words size: ${filteredWords.length}`);
console.log(`difference: ${words.length - filteredWords.length}`);

// Write filtered dataset to file
const jsonContent = JSON.stringify(filteredWords);
writeFile("./words.json", jsonContent, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 