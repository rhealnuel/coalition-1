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
        var info = document.getElementById('info')
        var icon = document.getElementById('icon')
        data.forEach(item => {
        parent.key=item.id

        var a = document.createElement('img')
        a.setAttribute("src", item.profile_picture)
        a.setAttribute("alt", '')
        a.setAttribute("id", "image")

        var b = document.createElement('p')
        b.innerHTML = item.name

        var c = document.createElement('p')
        c.innerHTML = item.gender + ", " + item.age

        var d = document.createElement('img')
        d.setAttribute("src", "/assets/threedot.png")
        d.setAttribute("alt", "")
        
        
        
        
        
        list.appendChild(a)
        info.appendChild(b)
        info.appendChild(c)
        icon.appendChild(d)
    })
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