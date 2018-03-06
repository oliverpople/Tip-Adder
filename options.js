function save_options() {
  var percentage = document.getElementById('percentage').value;
  chrome.storage.sync.set({
    tip: percentage,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options sssaved. Refresh page to view changes.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    tip: '5%'
  }, function(items) {
    document.getElementById('percentage').value = items.tip;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',  save_options);
