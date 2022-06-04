//Fetch Using a Click Event on Button
document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=bbRydg8bDevmSrQ5sIDatAHwASU3qEc04ic90T8A&date=${choice}`

  function mark(ID) { //creates border on IMG
    document.getElementById(ID).style.border = "20px groove rgb:252,61,33";
  }


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('img').src = ''
        document.querySelector('iframe').src=''

        document.querySelector('img').style.border = '0';
        document.querySelector('iframe').style.border = "0";
       

        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl
          document.querySelector('img').style.border = "20px groove red";


        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('iframe').style.border = "20px groove red";
        }
       
        document.querySelector('.explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click',popTitles)

let firstClick = true
function popTitles(){
    
    if(firstClick){
     document.querySelectorAll('.title').forEach(e=>e.classList.toggle('hidden'))
     firstClick=false
    }
    
}
