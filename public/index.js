const list = document.getElementById('list')

const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const username = 'coalition';
const password = 'skills-test';
const credentials = btoa(`${username}:${password}`);
const parent = document.getElementById('parent')
axios.get(apiUrl, {
    headers: {
        // Set the Authorization header with the encoded credentials
        Authorization: `Basic ${credentials}`
    }
    
})
.then(async(response) => {
        const data = response.data
        console.log(data);
        var list = document.getElementById('list')
    const htmlElements = data.map(data => `
  <div>
    <div>
      <img src="${data.profile_picture}" />
      <div>
        <p>${data.name}</p>
        <p>${data.age}</p>
      </div>
    </div>
    <div>...</div>
  </div>
`);

// Join the array of HTML elements into a single string
list.innerHtml = htmlElements.join("");

})
.catch(error =>{
    console.log(error);
})

const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
