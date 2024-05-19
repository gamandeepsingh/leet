import { useForm } from "react-hook-form";
import * as XLSX from "xlsx"; // For Excel files

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FileSubmit = () => {
  const { register, handleSubmit } = useForm();

  function FileRead(data) {
    const file = data.excelFile[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e.target.result;
      const workbook = XLSX.read(fileData, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      console.log(sheetData);
    };
    reader.readAsBinaryString(file);
  }

  return (
    <form onSubmit={handleSubmit(FileRead)}>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="file">.xlsx/.csv file</Label>
        <Input
          className=""
          type="file"
          {...register("excelFile", {
            required: true,
            validate: {
              excelFormat: (value) =>
                value[0].name.endsWith(".xls") ||
                value[0].name.endsWith(".xlsx") ||
                "Please select a .xlsx/.xls file",
            },
          })}
        />
      <Button type="submit">Upload</Button>
      </div>
    </form>
  );
};

export default FileSubmit;
