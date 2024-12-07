import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-page-reports',
  templateUrl: './page-reports.component.html',
  styleUrl: './page-reports.component.css'
})


export class PageReportsComponent implements OnInit{
  private data = [
    {"Source": "Wave - EEZ", "Households": "130"},
    {"Source": "Wave - NMI", "Households": "72"},
    {"Source": "Tidal", "Households": "21"},
    {"Source": "Current", "Households": "4.6"},
    {"Source": "Thermal", "Households": "51"},
    {"Source": "River", "Households": "9.3"},
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2.5);
  private height = 400 - (this.margin * 1.5);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Source))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 150])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.Source))
      .attr("y", (d: any) => y(d.Households))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Households))
      .attr("fill", "#d04a35");
    }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }
}
