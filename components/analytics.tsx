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

const mostVisitedArticles = [
  {
    title: "Why is blog marketing important?",
    view_count: 9345,
    link_click: 321,
  },
  {
    title: "How blogs can increase your leads?",
    view_count: 7543,
    link_click: 351,
  },
  {
    title: "How fastletter can help you build your content faster?",
    view_count: 9501,
    link_click: 71,
  },
  {
    title: "Path to write a succesful article.",
    view_count: 7453,
    link_click: 32,
  },
  {
    title: "Why companies use Blog marketing and why should you do the same?",
    view_count: 7340,
    link_click: 79,
  },
]

const blogVisitCountry = [
  {
    title: "United States",
    view_count: 1345,
  },
  {
    title: "India",
    view_count: 1043,
  },
  {
    title: "China",
    view_count: 954,
  },
  {
    title: "Germany",
    view_count: 753,
  },
  {
    title: "United Kingdom",
    view_count: 340,
  },
]

const sourceVisit = [
  {
    title: "Medium.com",
    view_count: 1345,
  },
  {
    title: "Google.com",
    view_count: 1043,
  },
  {
    title: "Reddit",
    view_count: 954,
  },
  {
    title: "Linkedin",
    view_count: 753,
  },
  {
    title: "X (twitter)",
    view_count: 340,
  },
]

const blogVsViewsCount = [
  {
    date: "Jan 22",
    "Published Blogs": 38,
    "Blog Visits": 1309,
    Drafts: 4,
  },
  {
    date: "Jan 23",
    "Published Blogs": 39,
    "Blog Visits": 1709,
    Drafts: 9,
  },
  {
    date: "Jan 24",
    "Published Blogs": 48,
    "Blog Visits": 2309,
    Drafts: 8,
  },
  {
    date: "Jan 25",
    "Published Blogs": 48,
    "Blog Visits": 2000,
    Drafts: 7,
  },
  {
    date: "Jan 26",
    "Published Blogs": 48,
    "Blog Visits": 2009,
    Drafts: 11,
  },
  {
    date: "Jan 27",
    "Published Blogs": 48,
    "Blog Visits": 3005,
    Drafts: 11,
  },
  {
    date: "Jan 28",
    "Published Blogs": 51,
    "Blog Visits": 2900,
    Drafts: 14,
  },
  {
    date: "Jan 29",
    "Published Blogs": 54,
    "Blog Visits": 3809,
    Drafts: 15,
  },
  {
    date: "Jan 30",
    "Published Blogs": 57,
    "Blog Visits": 4005,
    Drafts: 19,
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

export default function Analytics() {
  return (
    <div className='px-12 py-8 w-full'>
      <h2 className='text-3xl font-black'>Blog Analytics</h2>

      <div className='flex mt-12 gap-x-8'>
        <div className='w-1/2'>
          <Title>Total visits on blog</Title>
          <AreaChart
            className='h-72 mt-4'
            data={blogVsViewsCount}
            index='date'
            categories={["Blog Visits"]}
            colors={["purple"]}
            valueFormatter={dataFormatter}
          />
        </div>
        <div className='w-1/2'>
          <Title>Blogs published and created</Title>
          <AreaChart
            className='h-72 mt-4'
            data={blogVsViewsCount}
            index='date'
            categories={["Published Blogs", "Drafts"]}
            colors={["purple", "blue"]}
            valueFormatter={dataFormatter}
          />
        </div>
      </div>
      <div className='mt-12 flex gap-x-8'>
        <div className='w-1/2'>
          <Card>
            <Title>Most reffered from</Title>
            <Table className='mt-5'>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Source</TableHeaderCell>
                  <TableHeaderCell>Views</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sourceVisit.map((item) => (
                  <TableRow key={item.title}>
                    <TableCell className='max-w-xs whitespace-normal'>
                      {item.title}
                    </TableCell>
                    <TableCell>
                      <Text>{item.view_count}</Text>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
        <div className='w-1/2'>
          <Card>
            <Title>Views from countries</Title>
            <Table className='mt-5'>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Country</TableHeaderCell>
                  <TableHeaderCell>Views</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogVisitCountry.map((item) => (
                  <TableRow key={item.title}>
                    <TableCell className='max-w-xs whitespace-normal'>
                      {item.title}
                    </TableCell>
                    <TableCell>
                      <Text>{item.view_count}</Text>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
      <div className='mt-12'>
        <Card>
          <Title>Most visited articles</Title>
          <Table className='mt-5'>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Title</TableHeaderCell>
                <TableHeaderCell>Views</TableHeaderCell>
                <TableHeaderCell>Link Clicks</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mostVisitedArticles.map((item) => (
                <TableRow key={item.title}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <Text>{item.view_count}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.link_click}</Text>
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
