import {Component, OnInit, Input} from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';

export interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

@Component({
  selector: 'd3-simple-stacked-bar-chart',
  templateUrl: 'd3-simple-stacked-bar-chart.component.html',
  styleUrls: ['d3-simple-stacked-bar-chart.component.scss']
})
export class D3SimpleStackedBarChartComponent implements OnInit {

    @Input() vehicleColors: any[] = ["#0083E8", "#4AA8F0", "#9CCDF7"];
    @Input() chartData: any[] = [
        {year: 2006, redDelicious: 10, mcintosh: 15, oranges: 9},
        {year: 2007, redDelicious: 12, mcintosh: 18, oranges: 9},
        {year: 2008, redDelicious: 12, mcintosh: 18, oranges: 9},
    ];
    private margin: Margin;
    private width: number;
    private height: number;
    private svg: any;
    private x: any;
    private y: any;
    private z: any;
    private g: any;

    constructor() {
    }

    ngOnInit() {
        this.initMargins();
        this.initSvg();
        if (this.chartData.length > 0) {
            this.drawChart(this.chartData);
        } else {
            this.drawEmptyMessage();
        }
    }

    initMargins(): void {
        this.margin = {top: 5, right: 5, bottom: 5, left: 5};
    }

    initSvg(): void {
        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        this.x = d3Scale.scaleBand()
            .rangeRound([0, this.width])
            .paddingInner(0.35)
            .align(0.1);

        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.z = d3Scale.scaleOrdinal().range(this.vehicleColors);
    }

    drawChart(data: any[]): void {
        let keys = Object.getOwnPropertyNames(data[0]).slice(1);

        data = data.map(v => {
            v.total = keys.map(key => v[key]).reduce((a, b) => a + b, 0);
            return v;
        });

        this.x.domain(data.map((d: any) => d.year));
        this.y.domain([0, d3Array.max(data, (d: any) => d.total)]).nice();
        this.z.domain(keys);

        this.g.append("g")
            .selectAll("g")
            .data(d3Shape.stack().keys(keys)(data))
            .enter().append("g")
            .attr("fill", d => this.z(d.key))
            .selectAll("rect")
            .data(d => d)
            .enter().append("rect")
            .attr("x", d => this.x(d.data.year))
            .attr("y", d => this.y(d[1]))
            .attr("height", d => this.y(d[0]) - this.y(d[1]))
            .attr("width", this.x.bandwidth())
            .on("mouseover", () => tooltip.style("display", null))
            .on("mouseout", () => tooltip.style("display", "none"))
            .on("mousemove", function (d, i) {
                let xPosition = d3.mouse(this)[0] - 5;
                let yPosition = d3.mouse(this)[1] - 5;
                tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
                tooltip.select("text").text(d[1] - d[0]);
            });

        let tooltip = this.svg.append("g")
            .attr("class", "stacked-chart-tooltip")
            .style("display", "none");

        tooltip.append("rect")
            .attr("width", 60)
            .attr("height", 20)
            .attr("fill", "white")
            .style("opacity", 0.8);

        tooltip.append("text")
            .attr("x", 30)
            .attr("dy", "1.2em")
            .style("text-anchor", "middle")
            .attr("font-size", "12px")
            .attr("font-weight", "bold");
    }

    drawEmptyMessage(): void {
        this.svg.append("text")
            .attr("x", "235")
            .attr("y", "155")
            .attr("dy", "-.7em")
            .style("text-anchor", "start")
            .attr("font-size", "20px")
            .attr("font-family", "sans-serif")
            .attr("fill", "black")
            .text("No data to show");
    }
}
