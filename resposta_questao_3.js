function verificaSequenciaValida (sequencia) {
  const newSequence = [];
  let lastChar = '';

  [...sequencia].forEach(element => {
    lastChar = newSequence[newSequence.length - 1]
    switch (element) {

      case ')':
        if (lastChar === '(') {newSequence.pop()}
        break;

      case '}':
        if (lastChar === '{') {newSequence.pop()}
        break;

      case ']':
        if (lastChar === '[') {newSequence.pop()}
        break;

      default:
        newSequence.push(element);
        break;
    }
  });

  return !(newSequence.length > 0);
}

console.log(verificaSequenciaValida('()()'))