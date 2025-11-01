import { Line, LineChart as RLineChart, ResponsiveContainer, Tooltip, YAxis, XAxis } from 'recharts'

type Point = { x: number; y: number }

export function LineChart({ data }: { data: Point[] }) {
	return (
		<div className="w-full h-40">
			<ResponsiveContainer width="100%" height="100%">
				<RLineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
					<XAxis dataKey="x" hide />
					<YAxis hide domain={["dataMin", "dataMax"]} />
					<Tooltip contentStyle={{ background: '#1a1b23', border: '1px solid rgba(255,255,255,0.06)' }} />
					<Line type="monotone" dataKey="y" stroke="#8b5cf6" strokeWidth={2} dot={false} />
				</RLineChart>
			</ResponsiveContainer>
		</div>
	)
}


