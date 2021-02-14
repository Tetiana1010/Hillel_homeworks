

window.addEventListener('load', () => {

  document.body.innerHTML += `someText <hr> <button id="btn">click me</button>`
  document.body.querySelector('#btn').addEventListener('click', event =>{
    console.log(event.target);
  });


  // const someSpan = document.createElement('span');
  // someSpan.innerHTML = 'span here'

  // someSpan.style.color = `red`;

  // someSpan.addEventListener('click', ()=>{
  //   console.log('some span here')
  // });
  // document.body.appendChild(someSpan)

  // console.log(someSpan)

  const userList = [
    'usre 1',
    'user 2',
    'user 3',
  ];
 

  //document.querySelector('.userList').innerHTML = `${userList.map(item => `<li>${item}</li>`).join('')}`
const usersList =  document.querySelector('.userList');

  userList.forEach(usr => {

    const liItem = document.createElement('li');
    liItem.classList.add(activeClassName)
    liItem.innerHTML = usr;
    liItem.addEventListener('click', () => {
      console.log(item)
    })
    userList.appendChild(liItem);
  })
})

