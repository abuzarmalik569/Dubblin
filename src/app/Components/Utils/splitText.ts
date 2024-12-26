export function splitText(text: string): string {
    return text.split('').map((char, i) => 
      `<span style="display: inline-block;" class="char-${i}">${char}</span>`
    ).join('');
  }