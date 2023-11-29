import React from 'react'
import { scaleLinear, scaleBand, max } from 'd3'

const BarChart = ({height, width, data}) => {

    const margin = 10
    const lines = [10, 20, 30, 40]
    const xscale = scaleLinear().domain([0, max(data, d=> d.SunShine)]).range([0, width - margin])

    const yscale = scaleBand().domain(data).range([height - 2 * margin, 0])

    const rectangles = data.map(d => 
        <rect 
            key={d.city}
            x={margin} 
            y={yscale(d)} 
            height={yscale.bandwidth()} 
            width={xscale(d.SunShine)}
            fill='darkorange'
            stroke='#fff'
            >
        </rect>)

    const labels = data.map(d => 
        <text
            fill='#fff'
            textAnchor='end'
            key={d.city}
            x={xscale(d.SunShine)}
            y={yscale(d)}
        >
        {d.city}
        </text>)

    const gridLines = lines.map((l, i) => (
        <g key={i}>
            <line 
                y1={0}
                y2={height-margin}
                x1={xscale(l)}
                x2={xscale(l)}
                stroke='#fff'
            >
            </line>
            <text textAnchor='middle' fontSize="12px" x={xscale(l)} y={height-margin}>{l}</text>
        </g>
    ))
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
        {rectangles}
        {gridLines}
        {labels}
    </svg>
  )
}

export default BarChart