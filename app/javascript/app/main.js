import App from '../app.svelte'

document.addEventListener('loggedIn', () => {
  const app = new App({
    target: document.getElementById('app')
  });

  window.app = app;
})
//Rails.application.credentials.dig(:usda_key);

//         // var xhr = new XMLHttpRequest();
//         // xhr.open("POST", '/whole_food', true);
//         // xhr.setRequestHeader('Content-Type', 'application/json');
//         // xhr.send(JSON.stringify({
//         //     name: listItem.textContent,
//         //     fdcid: listItem.dataset.fdcid,
//         //     profile_id: profileId,
//         // }));
//         // xhr.onreadystatechange = function() { // Call a function when the state changes.
//         //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         //         location.reload();
//         //     }
//         // }
//     }
//     function deleteFromProfile() {
    
//         var xhr = new XMLHttpRequest();
//         xhr.open("DELETE", '/whole_food', true);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.send(JSON.stringify({
//             name: listItem.textContent,
//             fdcid: listItem.dataset.fdcid,
//             profile_id: profileId,
//         }));
//         xhr.onreadystatechange = function() { // Call a function when the state changes.
//             if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//                 location.reload();
//             }
//         }
//     }
    
//  });