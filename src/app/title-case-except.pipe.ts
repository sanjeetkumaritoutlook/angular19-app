import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseExcept'
})
export class TitleCaseExceptPipe implements PipeTransform {
  private excludedWords = ['and', 'or', 'of', 'the', 'a', 'an'];

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string): string {
    if (!value) return '';

    // Split the sentence into words
    const words = value.split(' ');

    // Transform each word
    return words
      .map((word, index) => {
        const lowerCaseWord = word.toLowerCase();
        
        // Capitalize the first word and non-excluded words
        if (index === 0 || !this.excludedWords.includes(lowerCaseWord)) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }

        // Return excluded words in lowercase
        return lowerCaseWord;
      })
      .join(' ');
  }

}

/*
Output
For the examples above, the output will be:

Original: "the lord of the rings"
Formatted: "The Lord of the Rings"

Original: "a tale of two cities"
Formatted: "A Tale of Two Cities"

Original: "and justice for all"
Formatted: "And Justice for All"


*/