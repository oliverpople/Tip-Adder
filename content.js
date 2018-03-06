function addPercent(string, percent) {
  let mult = 1 + percent * 0.01;
  return string.replace(/[£$€]\d+(\.\d+)?/g, (match) => {
    let amount = parseFloat(match.substr(1));
    let currency = match[0];
    return currency + (amount * mult).toFixed(2);
  });
}

let text = document.querySelectorAll("p,span");

chrome.storage.sync.get({ tip: '20' }, function(items) {
  console.log("Retrieved tip settings from storage");
   var percent = items.tip;
   text.forEach((e) => {
     e.innerHTML = addPercent(e.innerHTML, percent);
  });
});
