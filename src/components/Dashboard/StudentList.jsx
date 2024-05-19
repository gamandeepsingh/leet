/* eslint-disable no-unused-vars */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const StudentList = () => {
  return (
    <div className="flex flex-col border rounded-lg ">
      <Table>
        <TableHeader>
          <TableRow className="text-xs sm:text-base">
            <TableHead className="text-center">Student Name</TableHead>
            <TableHead className="text-center">Student Username</TableHead>
            <TableHead className="text-center">Problems</TableHead>
            <TableHead className="text-center">Easy</TableHead>
            <TableHead className="text-center">Medium</TableHead>
            <TableHead className="text-center">Hard</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-center text-xs sm:text-base">
            <TableCell>Yashasvi Saxena</TableCell>
            <TableCell>yashasvi1802</TableCell>
            <TableCell>148</TableCell>
            <TableCell>67</TableCell>
            <TableCell>77</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentList;
