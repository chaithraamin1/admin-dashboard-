import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Chart} from 'chart.js'
import { data } from 'jquery';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashbord3',
  templateUrl: './dashbord3.component.html',
  styleUrls: ['./dashbord3.component.scss']
})
export class Dashbord3Component implements OnInit {
  PieChart:any=[];
 
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public barChartData: ChartDataSets[] = [
    { data: [65, 67, 70, 75, 80, 90], label: 'PHP' },
    { data: [50, 48, 47, 49, 44, 40], label: '.Net' },
    { data: [40, 30, 28, 25, 22, 20], label: 'Java' },
  ];
  constructor() { }

  ngOnInit(): void {

    var selector:any = '.nav-links li';
    $(selector).on('click', (e:any)=>{
      debugger
        $(selector).removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e:any)=>{
 let arrowParent:any = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar:any = document.querySelector(".sidebar");
let sidebarBtn:any = document.querySelector(".ham-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("closed");
});

//circle code
let number:any=document.getElementById("number");
let counter=0;
setInterval(()=>{
  if(counter==65){
    clearInterval();
  }
  else{
  counter+=1;
  number.innerHTML=counter;
  }
},20)

this.PieChart=new Chart('pieChart',{
  type:'pie',
  data:{
     labels:["Blue","Green","Pink"],
     datasets:[{
      label:'Vote Now',
      data:[101,102,103],
      backgroundColor:[
        'rgba(40,23,244,0.9)',
        'rgba(192,255,0,0.9)',
        'rgba(239,23,240,0.9)',
      ],
     }]
  },
  options:{
    title:{
      text:"Bar Chart",
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    }
  }
});
window.onclick = function(event:any) {
  if (!event.target.matches('.dropdown-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  }
  dropdownSelectedOption(){
    (document.getElementById("dropdownMenu")as any).classList.toggle("show");
  }

}
