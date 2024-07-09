import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export default function ToggleGrouper() {
  return (
    <ToggleGroup size={"sm"} type="multiple">
      <ToggleGroupItem value="AM" className="font-normal">
        AM
      </ToggleGroupItem>
      <ToggleGroupItem value="PM" className="font-normal">
        PM
      </ToggleGroupItem>
      {/* <ToggleGroupItem value="OPEN" className="font-normal">
        OPEN
      </ToggleGroupItem> */}
    </ToggleGroup>
  )
}
