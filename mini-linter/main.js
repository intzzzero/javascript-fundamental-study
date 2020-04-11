let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// 단어별로 나누기
const storyWords = story.split(' ');
// console.log(storyWords);

// 불필요한 단어 제거
const betterWords = storyWords.filter(word => {
  return !(word.includes('extremely') || word.includes('literally') || word.includes('actually'));
});

// console.log(betterWords.length);

// test
// console.log(betterWords.includes('extremely')); // false
// console.log(betterWords.includes('literally')); // false
// console.log(betterWords.includes('actually')); // false


// 중복된 단어 각 중복 횟수
let numOfReally = 0;
let numOfVery = 0;
let numOfBasically = 0;

betterWords.forEach(word => {
  if (word === 'really') {
    numOfReally++;
  } else if (word === 'very') {
    numOfVery++;
  } else if (word === 'basically') {
    numOfBasically++;
  } else {
    0;
  }
});

const overused = `really: ${numOfReally}, very: ${numOfVery}, basically: ${numOfBasically}`;

// 문장 개수
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences++;
  }
});
// console.log(sentences);


// 콘솔로그
const logInfo = (betterWords, sentences, overused) => {
  const wordCount = betterWords.length;
  return console.log(`
    Word count: ${wordCount}
    Sentence count: ${sentences}
    Overused word count: ${overused}
    `);
};

logInfo(betterWords, sentences, overused);


// betterWords 합치기
const joinBetterWords = betterWords.join(' ');
console.log(joinBetterWords);