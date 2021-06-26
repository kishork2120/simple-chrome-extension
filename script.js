
  document.querySelector('#button').addEventListener('click', ()=>{
    document.querySelector('#imageHolder').setAttribute('src','https://picsum.photos/1280/960?' + new Date().getTime())
  })

  document.querySelector('#closeButton').addEventListener('click', ()=>{
    window.close();
  })