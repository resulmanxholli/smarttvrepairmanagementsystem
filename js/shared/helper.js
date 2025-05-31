export function createElement(tagName, classList, innerText, parentElememnt = null) {
    const element = document.createElement(tagName);
    element.classList = classList;
    element.innerText = innerText;
    if (parentElememnt) {
      parentElememnt.append(element);
    }
    return element;
  }


