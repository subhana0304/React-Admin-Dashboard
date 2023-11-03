import React from 'react';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const ChartBox = () => {
    return (
        <div className='chartBox my-4 flex  gap-4 '>
            <div className="boxInfo flex flex-3 flex-col justify-between">
                <div className="title text-xs flex items-center gap-3">
                    <img src="/public/user.svg" alt="" />
                    <span>Total Users</span>
                </div>
                <h1 className='text-2xl font-bold my-5'>11.238</h1>
                <Link to="/">View all</Link>
            </div>
            <div className="chartInfo flex-2 flex flex-col justify-between">
                <div className="chart h-[100%] w-[100%]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts flex flex-col text-right">
                    <span className='percentage font-bold text-[20px]'>45%</span>
                    <span className='duration text-[14px]'>this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;