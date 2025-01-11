import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonTableProps {
  title: string;
  data: {
    feature: string;
    next: string;
    vite: string;
  }[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, data }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 dark:text-white text-black">{title}</h2>
      <Table>
        <TableCaption>Comparação entre Next.js e Vite.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Característica</TableHead>
            <TableHead>Next.js</TableHead>
            <TableHead>Vite</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.feature}</TableCell>
              <TableCell>{row.next}</TableCell>
              <TableCell>{row.vite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
