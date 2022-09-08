import classes from './Chart.module.scss'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Charts = ({ aspect, title }) => {
  const data = [
    { name: 'one', total: 1100 },
    { name: 'tow', total: 1200 },
    { name: 'three', total: 1300 },
    { name: 'four', total: 1400 },
    { name: 'five', total: 1500 },
    { name: 'six', total: 1600 },
    { name: 'seven', total: 1700 },
  ]

  return (
    <div className={classes.chart}>
      <div className={classes.title}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={'#36b29c'} stopOpacity={0.8} />
              <stop offset="95%" stopColor={'#36b29c'} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid className={classes.chartGrid} strokeDasharray="3 3" />
          <Tooltip wrapperStyle={{ outline: 'none' }} />
          <Area
            type="monotone"
            dataKey="total"
            stroke={'#01362c'}
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts
