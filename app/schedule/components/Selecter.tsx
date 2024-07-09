import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Selecter({ title, list, placeholder, size }) {
  return (
    <Select>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {list.map((item) => 
            <SelectItem value={item}>{item}</SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
