
function verificaPalindrome(palavra){
    let palindromo = palavra.split('').reverse('').join('');

    if (palindromo === palavra){
        return true;
    } else {
        return false;
    }

}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('pedro'));
console.log(verificaPalindrome('ana'));
console.log(verificaPalindrome('araponga'));
console.log(verificaPalindrome('jararaca'));
console.log(verificaPalindrome('101'));
