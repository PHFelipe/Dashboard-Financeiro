import React from 'react';
import { FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, Hint } from 'react-vis';
import 'react-vis/dist/style.css';

const BarChart = () => {
  const data = [
    { x: 'Joao', y: 500 },
    { x: 'Carlos', y: 350 },
    { x: 'David', y: 100 },
    { x: 'Pedro', y: 300 },
    { x: 'Lucas', y: 150 },
    { x: 'Rodrigo', y: 180 },
    { x: 'Gustavo', y: 420 },
    { x: 'Rafael', y: 350 }
  ];

  const [hoveredBar, setHoveredBar] = React.useState(null);

  return (
    <FlexibleXYPlot height={350} xType="ordinal">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis tickFormat={v => (v / 1000).toFixed(1) + 'k'} />
      <VerticalBarSeries
        data={data}
        onValueMouseOver={value => setHoveredBar(value)}
        onValueMouseOut={() => setHoveredBar(null)}
        color = "#3c3c3c"
      />
      {hoveredBar && (
        <Hint value={hoveredBar}>
          <div style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#FFF', padding: '5px 10px', borderRadius: '5px' }}>
            {hoveredBar.y}
          </div>
        </Hint>
      )}
    </FlexibleXYPlot>
  );
};

export default BarChart;
