class Alert {
  constructor() {
    setTimeout(this.addDOM, 1000);
  }

  addDOM() {
    let div = document.createElement('div');
    div.style.backgroundClip = 'blue';
    div.style.color = 'yellow';
    div.innerHTML = 'Alert component';
    document.body.appendChild(div);
  }
}

var alert = new Alert();
