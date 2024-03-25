function replaceWords() {
  const elements = document.body.querySelectorAll(
    "p, span, a, i, u, sub, sup, b, h1, h2, h3, h4, h5, h6"
  );

  console.log(elements);

  elements.forEach((element) => {
    var text = element.textContent;
    var words = text.split(" ");

    for (var j = 0; j < words.length; j++) {
      if (/^[a-zA-Z]+$/.test(words[j])) {
        words[j] = i17n(words[j]);
      }
    }

    element.textContent = words.join(" ");
  });
}

/**
 * i7h 来自 https://github.com/RimoChan/i7h
 *
 * @param {string} text
 * @returns {string}
 */
function i17n(text) {
  return text.length <= 2
    ? text
    : `${text[0]}${text.length - 2}${text[text.length - 1]}`;
}

window.onload = function () {
  replaceWords();
};
