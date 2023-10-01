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

export default function Drafts() {
  return (
    <div className='px-12 py-8 w-full'>
      <h2 className='text-3xl font-black'>Drafts</h2>

      <div className='mt-12'>
        <Table className='mt-5'>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Edit</TableHeaderCell>
              <TableHeaderCell>Publish</TableHeaderCell>
              <TableHeaderCell>Delete</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mostVisitedArticles.map((item) => (
              <TableRow key={item.title}>
                <TableCell>{item.title}</TableCell>

                <TableCell>
                  <Text className='text-sm font-bold text-blue-600 hover:cursor-pointer'>
                    Edit
                  </Text>
                </TableCell>
                <TableCell>
                  <Text className='text-sm font-bold text-secondaryLight hover:cursor-pointer'>
                    Publish
                  </Text>
                </TableCell>
                <TableCell>
                  <Text className='text-sm font-bold text-red-600 hover:cursor-pointer'>
                    Delete
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
