const xhr = new XMLHttpRequest();
const requestUrl = 'https://randomuser.me/api/';
xhr.open('GET',requestUrl);
xhr.onreadystatechange = function(){
  console.log(xhr.readyState);
  if(xhr.readyState===4){
    const data = JSON.parse(this.response);
    console.log(data.results[0])
  }
  
}
//console.log(`ready state ${xhr.readyState}`)
xhr.send();

