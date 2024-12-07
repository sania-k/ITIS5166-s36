import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-page-summary',
  templateUrl: './page-summary.component.html',
  styleUrls: ['./page-summary.component.css']
})

export class PageSummaryComponent implements OnInit {
  private data = [
    {"Energy Source": "Wave (EEZ)", "Power": 1400},
    {"Energy Source": "Wave (to 10 NMI)", "Power": 770},  // Fixed key here
    {"Energy Source": "Tidal", "Power": 220},
    {"Energy Source": "Ocean Current", "Power": 49},
    {"Energy Source": "Ocean Thermal", "Power": 540},
    {"Energy Source": "River", "Power": 99},
  ];
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors = d3.scaleOrdinal();

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Power.toString()))  // Ensure that 'Power' is properly referenced
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782", "#c7d3ec"]);
  }

  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => d.Power);  // Use 'Power' correctly

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => this.colors(i))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(100)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data['Energy Source'])  // Display 'Energy Source' instead of 'Framework'
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }
}
