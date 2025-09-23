import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Brain, AlertCircle, ChevronUp } from "lucide-react";

const Dashboard = () => {
  // Mock data for portfolio
  const profitability = 79;
  const portfolioValue = 125000;
  const dailyPnL = 5800;
  const dailyPnLPercentage = 4.64;

  // Mock options chain data
  const optionsChain = [
    { strike: 18300, callOI: 45000, putOI: 78000, callLTP: 150.25, putLTP: 45.75, iv: 18.5, delta: 0.65, opportunity: "neutral" },
    { strike: 18400, callOI: 58000, putOI: 92000, callLTP: 125.50, putLTP: 58.25, iv: 19.2, delta: 0.58, opportunity: "neutral" },
    { strike: 18500, callOI: 72000, putOI: 65000, callLTP: 98.75, putLTP: 72.50, iv: 20.1, delta: 0.51, opportunity: "bullish" },
    { strike: 18600, callOI: 85000, putOI: 48000, callLTP: 75.25, putLTP: 88.75, iv: 21.3, delta: 0.43, opportunity: "bullish" },
    { strike: 18700, callOI: 62000, putOI: 35000, callLTP: 52.50, putLTP: 108.25, iv: 22.8, delta: 0.35, opportunity: "neutral" },
    { strike: 18800, callOI: 45000, putOI: 28000, callLTP: 35.75, putLTP: 132.50, iv: 24.2, delta: 0.28, opportunity: "bearish" },
  ];

  // Mock chart data
  const portfolioGrowthData = [
    { day: "1", value: 100000 },
    { day: "5", value: 102500 },
    { day: "10", value: 108000 },
    { day: "15", value: 105500 },
    { day: "20", value: 112000 },
    { day: "25", value: 119000 },
    { day: "30", value: 125000 },
  ];

  const pnlDistribution = [
    { strike: "18300", pnl: -1200 },
    { strike: "18400", pnl: -800 },
    { strike: "18500", pnl: 2400 },
    { strike: "18600", pnl: 3200 },
    { strike: "18700", pnl: 1800 },
    { strike: "18800", pnl: 400 },
  ];

  const aiInsights = [
    {
      type: "bullish",
      title: "Bullish Trend Detected",
      description: "18,500 CE showing strong momentum",
      icon: TrendingUp,
    },
    {
      type: "info",
      title: "Max Pain Analysis",
      description: "Maximum pain point at 18,400",
      icon: AlertCircle,
    },
    {
      type: "strategy",
      title: "Recommended Strategy",
      description: "Bull Call Spread 18500-18700",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">AI Trading – Nifty Options</h1>
        <p className="text-muted-foreground mt-2">Powered by Angel One API & AI Analytics</p>
      </header>

      {/* Portfolio Summary */}
      <Card className="mb-6 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profitability */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Profitability</p>
              <div className="relative mx-auto w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - profitability / 100)}`}
                    className="text-success transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-success">{profitability}%</span>
                </div>
              </div>
            </div>

            {/* Portfolio Value */}
            <div className="flex flex-col justify-center">
              <p className="text-sm text-muted-foreground mb-1">Current Portfolio Value</p>
              <p className="text-3xl font-bold text-foreground">₹{portfolioValue.toLocaleString('en-IN')}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="bg-success-light text-success border-success">
                  <ChevronUp className="w-3 h-3 mr-1" />
                  {dailyPnLPercentage}%
                </Badge>
                <span className="text-sm text-muted-foreground">vs yesterday</span>
              </div>
            </div>

            {/* Daily P&L */}
            <div className="flex flex-col justify-center">
              <p className="text-sm text-muted-foreground mb-1">Today's P&L</p>
              <p className="text-3xl font-bold text-success">+₹{dailyPnL.toLocaleString('en-IN')}</p>
              <Progress value={75} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-1">75% of daily target</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {aiInsights.map((insight, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <insight.icon className={`w-5 h-5 ${
                  insight.type === 'bullish' ? 'text-success' : 
                  insight.type === 'bearish' ? 'text-danger' : 
                  'text-primary'
                }`} />
                {insight.type === 'bullish' && <Badge className="bg-success text-success-foreground">Bullish</Badge>}
                {insight.type === 'strategy' && <Badge>AI Strategy</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-sm mb-1">{insight.title}</h3>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Options Chain Table */}
      <Card className="mb-6 border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Options Chain</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Strike Price</TableHead>
                <TableHead className="text-center">Call OI</TableHead>
                <TableHead className="text-center">Put OI</TableHead>
                <TableHead className="text-center">Call LTP</TableHead>
                <TableHead className="text-center">Put LTP</TableHead>
                <TableHead className="text-center">IV</TableHead>
                <TableHead className="text-center">Delta</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {optionsChain.map((row) => (
                <TableRow 
                  key={row.strike}
                  className={
                    row.opportunity === 'bullish' ? 'bg-success-light/20' : 
                    row.opportunity === 'bearish' ? 'bg-danger-light/20' : ''
                  }
                >
                  <TableCell className="text-center font-medium">{row.strike}</TableCell>
                  <TableCell className="text-center">{row.callOI.toLocaleString()}</TableCell>
                  <TableCell className="text-center">{row.putOI.toLocaleString()}</TableCell>
                  <TableCell className="text-center text-success">₹{row.callLTP}</TableCell>
                  <TableCell className="text-center text-danger">₹{row.putLTP}</TableCell>
                  <TableCell className="text-center">{row.iv}%</TableCell>
                  <TableCell className="text-center">{row.delta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Growth Chart */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Portfolio Growth (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={portfolioGrowthData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                  }}
                  formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--success))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* P&L Distribution Chart */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>P&L Distribution by Strike</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pnlDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="strike" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                  }}
                  formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                />
                <Bar 
                  dataKey="pnl" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;