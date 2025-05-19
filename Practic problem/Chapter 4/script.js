// Wait for DOM to load

document.addEventListener('DOMContentLoaded', function() {
    // Problem 1: String Length with Escape character 
    document.getElementById('problem1-btn').addEventListener('click', function() {
        const str = 'hafizur';
        const length = str.length;
        const output = `String: "${str}"\n` +
                      `Length: ${length}\n\n` +
                      `Explanation:\n` +
                      `- The backslash escapes the quote\n` +
                      `- So "har\\"" has 4 characters:\n` +
                      `  1. h\n  2. a\n  3. r\n  4. "`;
        document.getElementById('problem1-output').textContent = output;
    });

    // Problem 2: String methods
    document.getElementById('problem2-btn').addEventListener('click', function() {
        const mainStr = document.getElementById('main-string').value;
        const searchStr = document.getElementById('search-string').value;
        
        let output = `Main string: "${mainStr}"\n` +
                     `Search string: "${searchStr}"\n\n` +
                     `Results:\n` +
                     `includes(): ${mainStr.includes(searchStr)}\n` +
                     `startsWith(): ${mainStr.startsWith(searchStr)}\n` +
                     `endsWith(): ${mainStr.endsWith(searchStr)}\n\n` +
                     `Case sensitive examples:\n` +
                     `includes("${searchStr.toLowerCase()}"): ${mainStr.includes(searchStr.toLowerCase())}\n` +
                     `startsWith("${mainStr.charAt(0)}"): ${mainStr.startsWith(mainStr.charAt(0))}\n` +
                     `endsWith("${mainStr.slice(-1)}"): ${mainStr.endsWith(mainStr.slice(-1))}`;
        
        document.getElementById('problem2-output').textContent = output;
    });

    // Problem 3: Convert to lowercase
    document.getElementById('problem3-btn').addEventListener('click', function() {
        const inputStr = document.getElementById('to-lower-input').value;
        const lowerStr = inputStr.toLowerCase();
        
        const output = `Original: ${inputStr}\n` +
                      `Lowercase: ${lowerStr}`;
        
        document.getElementById('problem3-output').textContent = output;
    });

    // Problem 4: Extract amount
    document.getElementById('problem4-btn').addEventListener('click', function() {
        const inputStr = document.getElementById('amount-string').value;
        
        // Method 1: Using regex
        const amountMatch = inputStr.match(/\d+/);
        const amount1 = amountMatch ? amountMatch[0] : 'No amount found';
        
        // Method 2: Using split and find
        const amount2 = inputStr.split(' ').find(item => !isNaN(item)) || 'No amount found';
        
        const output = `Original string: "${inputStr}"\n\n` +
                      `Extracted amount:\n` +
                      `Method 1 (regex): ${amount1}\n` +
                      `Method 2 (split/find): ${amount2}\n\n` +
                      `Note: These methods work when amount is standalone (not part of another word)`;
        
        document.getElementById('problem4-output').textContent = output;
    });

    // Problem 5: Change character
    document.getElementById('problem5-btn').addEventListener('click', function() {
        const originalStr = document.getElementById('original-string').value;
        const position = parseInt(document.getElementById('char-position').value);
        const newChar = document.getElementById('new-char').value;
        
        if (position < 0 || position >= originalStr.length) {
            document.getElementById('problem5-output').textContent = 
                `Error: Position must be between 0 and ${originalStr.length - 1}`;
            return;
        }
        
        // Method 1: Using array conversion
        const strArray = originalStr.split('');
        strArray[position] = newChar;
        const result1 = strArray.join('');
        
        // Method 2: Using string concatenation
        const result2 = originalStr.slice(0, position) + newChar + originalStr.slice(position + 1);
        
        const output = `Original string: "${originalStr}"\n` +
                      `Changing character at position ${position} to "${newChar}"\n\n` +
                      `Result (array method): "${result1}"\n` +
                      `Result (concat method): "${result2}"\n\n` +
                      `Important: Strings are immutable in JavaScript.\n` +
                      `We must create a new string rather than modifying the original.`;
        
        document.getElementById('problem5-output').textContent = output;
    });
});
