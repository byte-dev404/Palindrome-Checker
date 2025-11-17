const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome(value) {
    const aToZ = /[0-9a-z]/i;

    if (value === '') return alert('Please input a value');
    else {
        const filteredString = value.trim().toLowerCase().split('').filter(char => char.match(aToZ)).join('');
        const reversedString = filteredString.split('').reverse().join("");
        const isPalindrome = filteredString === reversedString ? true : false;
        console.log(reversedString);
        console.log(filteredString);
        result.classList.remove('hidden');
        result.innerHTML = `<p class="user-input"><strong>${value}</strong>${isPalindrome ? ` is a palindrome` : ` is not a palindrome`}</p>`;
    }
};

checkButton.addEventListener('click', () => checkPalindrome(textInput.value));
