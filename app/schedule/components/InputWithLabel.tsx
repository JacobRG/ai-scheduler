import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputWithLabel({ type, placeholder }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{type}</Label>
      <Input placeholder={placeholder} />
    </div>
  )
}
