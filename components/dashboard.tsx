import {
  Card,
  Title,
  AreaChart,
  DonutChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
} from "@tremor/react"

const tableData = [
  {
    title: "Why is blog marketing important?",
    writer: "Red Jhon",
    created_on: "11 Jan 2023",
    status: "draft",
  },
  {
    title: "How blogs can increase your leads?",
    writer: "Aditya Rai",
    created_on: "8 Jan 2023",
    status: "draft",
  },
  {
    title: "How fastletter can help you build your content faster?",
    writer: "Aditya Rai",
    created_on: "8 Jan 2023",
    status: "active",
  },
  {
    title: "Path to write a succesful article.",
    writer: "Alain Berset",
    created_on: "11 Jan 2023",
    status: "active",
  },
  {
    title: "Why companies use Blog marketing and why should you do the same?",
    writer: "Ignazio Cassis",
    created_on: "11 Jan 2023",
    status: "active",
  },
]

const chartdata = [
  {
    date: "Jan 22",
    "Blogs Posted": 1,
    "Blog Visits": 1309,
    "Links Clicked": 324,
  },
  {
    date: "Jan 23",
    "Blogs Posted": 2,
    "Blog Visits": 3359,
    "Links Clicked": 584,
  },
  {
    date: "Jan 24",
    "Blogs Posted": 5,
    "Blog Visits": 2309,
    "Links Clicked": 624,
  },
  {
    date: "Jan 25",
    "Blogs Posted": 10,
    "Blog Visits": 2000,
    "Links Clicked": 592,
  },
  {
    date: "Jan 26",
    "Blogs Posted": 0,
    "Blog Visits": 2009,
    "Links Clicked": 112,
  },
  {
    date: "Jan 27",
    "Blogs Posted": 3,
    "Blog Visits": 3005,
    "Links Clicked": 824,
  },
]

const donutChartData = [
  {
    name: "Published",
    value: 32,
  },
  {
    name: "Drafts",
    value: 43,
  },
]

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString()
}

export default function Dashboard() {
  return (
    <div className='px-12 py-8 w-full'>
      <h2 className='text-3xl font-black'>Hi, Jhon</h2>

      <div className='flex mt-12 gap-x-8'>
        <div className='w-2/3'>
          <Title>Blog Analytics in past 7 days</Title>
          <AreaChart
            className='h-72 mt-4'
            data={chartdata}
            index='date'
            categories={["Blog Visits", "Links Clicked", "Blogs Posted"]}
            colors={["purple", "blue", "gray"]}
            valueFormatter={dataFormatter}
          />
        </div>
        <div>
          <Title>Drafts vs Published Blogs</Title>
          <DonutChart
            className='mt-10 h-72'
            data={donutChartData}
            index='name'
            colors={["purple", "blue"]}
          />
        </div>
      </div>
      <div className='mt-12'>
        <Card>
          <Title>Recent blogs and drafts</Title>
          <Table className='mt-5'>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Title</TableHeaderCell>
                <TableHeaderCell>Writter</TableHeaderCell>
                <TableHeaderCell>Created On</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((item) => (
                <TableRow key={item.title}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <Text>{item.writer}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.created_on}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge color='emerald'>{item.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
