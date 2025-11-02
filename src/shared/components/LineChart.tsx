import {
  Line,
  LineChart as RLineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from 'recharts'
import clsx from 'clsx'

type Point = { x: number; y: number }

type Props = {
  data: Point[]
  showYAxis?: boolean
  yAxisWidth?: number
  yDomain?: ['dataMin' | number, 'dataMax' | number]
  className?: string
  compact?: boolean
}

export function LineChart({
  data,
  showYAxis = false,
  yAxisWidth = 56,
  yDomain = ['dataMin', 'dataMax'],
  className,
  compact = false,
}: Props) {
  return (
    <div className={clsx('w-full', className ?? 'h-40')}>
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart
          data={data}
          margin={
            compact
              ? { top: 0, right: 0, left: 0, bottom: 0 }
              : { top: 12, right: 12, left: 8, bottom: 8 }
          }
        >
          <XAxis dataKey="x" hide />
          <YAxis
            hide={compact || !showYAxis}
            domain={yDomain}
            width={showYAxis ? yAxisWidth : undefined}
            padding={{ top: 6, bottom: 6 }}
            tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          {!compact && (
            <Tooltip
              contentStyle={{
                background: 'var(--card)',
                border: `1px solid var(--border)`,
              }}
            />
          )}
          <Line
            type="monotone"
            dataKey="y"
            stroke="#8b5cf6"
            strokeWidth={compact ? 1.5 : 2}
            dot={false}
          />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  )
}
