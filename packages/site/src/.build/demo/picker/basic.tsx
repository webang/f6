import { Picker, Toast } from 'f6';

const columns = [
  [
    { label: '广东', value: 'A' },
    { label: '贵州', value: 'B' },
    { label: '浙江', value: 'C' }
  ]
]

export default function App() {
  return (
    <Picker
      cascade={false}
      defaultIndex={[0]}
      columns={columns}
      onChange={(index, value, column, picker) => {
        console.log(picker.getValues())
      }}
    />
  )
}
